/**
 * Blog loader — the whole publishing system in one place.
 *
 * Publishing a post = dropping a Markdown file into `content/blog/`.
 * No code changes, no registration: every `.md` file in that folder
 * becomes an article on the site.
 *
 *  - Frontmatter (the `---` block at the top of the file) carries the
 *    metadata: title, excerpt, date, tags, cover…
 *  - Files starting with `_` are ignored (templates, notes, drafts).
 *  - `draft: true` hides a post without deleting it.
 *  - The slug comes from the filename (`mi-post.md` → `mi-post`).
 *  - Images live in `public/images/blog/<post>/` and are referenced with
 *    absolute paths like `/images/blog/<post>/foto.png`.
 *
 * See GUIA-BLOGS.md (repo root) for the user-facing guide in Spanish.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface Article {
  /** stable id (same as slug) */
  id: string;
  /** kebab-case identity, derived from the filename unless overridden */
  slug: string;
  title: string;
  /** card summary; auto-derived from the first paragraph when missing */
  excerpt: string;
  /** absolute path (/images/blog/…) or remote URL; null = typographic cover */
  coverImage: string | null;
  /** alt text for the cover; defaults to the title */
  coverAlt: string;
  /** display string, e.g. "August 2026" */
  date: string;
  /** e.g. "8 min read"; auto-computed from the word count when missing */
  readTime: string;
  tags: string[];
  /** optional "Why this is here" framing note shown above the article */
  frameNote?: string;
  /** markdown body (frontmatter already stripped) */
  content: string;
}

interface ParsedPost {
  article: Article;
  /** numeric date used for newest-first ordering */
  sortKey: number;
  /** explicit tie-breaker when several posts share the same date */
  order: number;
  /** source filename, used as the final stable tie-breaker */
  file: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

/** Locale-independent "August 2026" style month-year formatting. */
const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : undefined;
}

function asStringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter(
      (item): item is string => typeof item === "string" && item.trim().length > 0
    );
  }
  const single = asString(value);
  return single ? [single] : [];
}

function slugifyFilename(filename: string): string {
  return filename
    .replace(/\.md$/i, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function titleFromFilename(filename: string): string {
  const words = slugifyFilename(filename).split("-").filter(Boolean);
  if (words.length === 0) return "Untitled post";
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

function computeReadTime(content: string): string {
  const words = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`~[\]()!-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}

/** Fallback excerpt: first non-heading paragraph, inline markdown stripped. */
function excerptFromContent(content: string): string {
  const firstParagraph = content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .find(
      (paragraph) =>
        paragraph.length > 0 &&
        !paragraph.startsWith("#") &&
        !paragraph.startsWith("![") &&
        !paragraph.startsWith("<!--")
    );

  if (!firstParagraph) return "";

  const text = firstParagraph
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

  return text.length > 180 ? `${text.slice(0, 177).trimEnd()}…` : text;
}

function resolveDate(value: unknown): { display: string; sortKey: number } {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return { display: monthYear.format(value), sortKey: value.getTime() };
  }

  const raw = asString(value);
  if (!raw) return { display: "", sortKey: 0 };

  // ISO-like dates (2026-08-15 or 2026-08) → formatted month-year + real sort key
  const iso = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(raw);
  if (iso) {
    const date = new Date(
      Date.UTC(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3] ?? 1))
    );
    return { display: monthYear.format(date), sortKey: date.getTime() };
  }

  // Free-form display strings ("August 2026") are kept as-is
  return { display: raw, sortKey: Date.parse(raw) || 0 };
}

export function getArticles(): Article[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(CONTENT_DIR);
  } catch {
    // content/blog doesn't exist yet → the Writing section renders empty
    return [];
  }

  const posts: ParsedPost[] = [];

  for (const file of files) {
    // `_`-prefixed files are templates/notes and never publish
    if (!file.endsWith(".md") || file.startsWith("_")) continue;

    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data: fm, content } = matter(raw.replace(/^\uFEFF/, ""));

    if (fm.draft === true) continue; // work-in-progress post, hidden

    const slug = asString(fm.slug) ?? slugifyFilename(file);
    if (slug.length === 0) {
      throw new Error(
        `content/blog/${file}: no se pudo derivar el slug — usa un nombre de archivo tipo mi-post.md`
      );
    }

    const title = asString(fm.title) ?? titleFromFilename(file);
    const excerpt =
      asString(fm.excerpt) ?? asString(fm.description) ?? excerptFromContent(content);
    const readTime = asString(fm.readTime) ?? computeReadTime(content);
    const cover = asString(fm.cover) ?? asString(fm.coverImage) ?? null;
    const coverAlt = asString(fm.coverAlt) ?? title;
    const tags = asStringList(fm.tags);
    const frameNote = asString(fm.frameNote);
    const order =
      typeof fm.order === "number" && Number.isFinite(fm.order) ? fm.order : 0;
    const { display: date, sortKey } = resolveDate(fm.date);

    if (cover && !/^(https?:\/\/|\/)/.test(cover)) {
      console.warn(
        `[blog] content/blog/${file}: "cover" debería empezar con "/" (ej. /images/blog/${slug}/portada.png) o con "https://"`
      );
    }

    posts.push({
      file,
      order,
      sortKey,
      article: {
        id: slug,
        slug,
        title,
        excerpt,
        coverImage: cover,
        coverAlt,
        date,
        readTime,
        tags,
        ...(frameNote ? { frameNote } : {}),
        content: `${content.trim()}\n`,
      },
    });
  }

  // Newest first; explicit `order` (asc) and then filename break ties stably.
  return posts
    .sort(
      (a, b) =>
        b.sortKey - a.sortKey || a.order - b.order || a.file.localeCompare(b.file)
    )
    .map((post) => post.article);
}
