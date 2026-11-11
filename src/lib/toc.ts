/**
 * Table-of-contents utilities — extracts h2/h3 headings from article
 * markdown so the reader can render an "On this page" index rail.
 *
 * The same `headingId` function is used by the markdown renderer, so the
 * ids extracted here always match the ids applied to the rendered headings.
 */

export interface TocItem {
  /** DOM id applied to the rendered heading */
  id: string;
  /** Plain display text (inline markdown stripped) */
  text: string;
  /** Heading level: 2 = top-level, 3 = nested */
  level: 2 | 3;
}

/**
 * Strip inline markdown formatting (links, bold, italics, code,
 * strikethrough) from heading text so TOC entries read cleanly.
 */
export function stripInlineMd(text: string): string {
  return text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links -> label
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // bold
    .replace(/(\*|_)(.*?)\1/g, "$2") // italics
    .replace(/`([^`]*)`/g, "$1") // inline code
    .replace(/~~(.*?)~~/g, "$1"); // strikethrough
}

/**
 * Slugify heading text into a stable, URL-safe DOM id.
 * The `h-` prefix guarantees no collision with page section anchors
 * (#about, #writing, ...) since article content renders inside the page.
 */
export function headingId(text: string): string {
  const base = stripInlineMd(text)
    .toLowerCase()
    .trim()
    // keep letters (any script), digits, spaces and dashes; drop emoji/symbols
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `h-${base || "section"}`;
}

/**
 * Extract h2/h3 headings from article markdown, in document order.
 * Headings inside fenced code blocks are ignored.
 */
export function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  let inFence = false;

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trimEnd();

    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!match) continue;

    const text = stripInlineMd(match[2]).trim();
    items.push({
      id: headingId(match[2]),
      text,
      level: match[1].length === 2 ? 2 : 3,
    });
  }

  return items;
}
