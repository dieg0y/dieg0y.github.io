"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Clock,
  Info,
  PenLine,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { AI_DISCLAIMER } from "@/data/portfolio";
import type { Article } from "@/lib/blog";
import { extractToc, headingId, type TocItem } from "@/lib/toc";
import { cn } from "@/lib/utils";

/** Recursively flatten React children into plain text (for heading ids). */
function extractText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return extractText(node.props.children);
  }
  return "";
}

/**
 * Markdown render overrides: give h2/h3 a stable DOM id (same slug used by
 * the TOC extractor) plus scroll-margin so anchor jumps clear the sticky bar.
 */
const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 id={headingId(extractText(children))} className="scroll-mt-24">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 id={headingId(extractText(children))} className="scroll-mt-24">
      {children}
    </h3>
  ),
  // External links open in a new tab so the portfolio stays open behind them
  a: ({ href, children }) => {
    const external = typeof href === "string" && /^https?:\/\//.test(href);
    return (
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  },
  // Body images: markdown `![alt](/images/blog/<post>/foto.png)`
  img: ({ src, alt }) => {
    if (!src) return null;
    return (
      <img
        src={src}
        alt={alt ?? ""}
        className="mx-auto my-8 rounded-xl border border-ink/10 shadow-sm"
        loading="lazy"
        decoding="async"
      />
    );
  },
};

/** Shared "On this page" list — vertical rail, indentation encodes hierarchy. */
function TocList({
  items,
  activeId,
  onNavigate,
}: {
  items: TocItem[];
  activeId: string | null;
  onNavigate: (id: string) => void;
}) {
  return (
    <ul className="space-y-0.5 border-l border-ink/15">
      {items.map((item) => {
        const active = activeId === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              aria-current={active ? "true" : undefined}
              className={cn(
                "-ml-px block border-l-2 py-1.5 pr-2 text-[13px] leading-snug transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                item.level === 3 ? "pl-8" : "pl-4",
                active
                  ? "border-brand font-medium text-ink"
                  : "border-transparent text-ink-light hover:border-ink/40 hover:text-ink"
              )}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Typographic cover used when a post has no `cover` image. */
function CoverFallback({ title, className }: { title: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center bg-card",
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 px-8 text-center">
        <BookOpen className="h-7 w-7 text-brand/70" aria-hidden="true" />
        <span className="line-clamp-3 font-serif text-lg italic leading-snug text-ink/75 sm:text-xl">
          {title}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-light">
          Blogs
        </span>
      </div>
    </div>
  );
}

/** Small typographic thumbnail used in the compact index list when a post
 * has no cover image. */
function ThumbFallback({ title }: { title: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[3/2] w-24 shrink-0 items-center justify-center rounded-xl border border-ink/10 bg-card sm:w-44"
    >
      <span className="line-clamp-3 px-2 text-center font-serif text-[10px] italic leading-snug text-ink/70 sm:text-xs">
        {title}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Blog index page — compact vertical list, newest first                */
/* ------------------------------------------------------------------ */

export function BlogIndexView({ articles }: { articles: Article[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        kicker="Blogs"
        icon={PenLine}
        title="Blogs"
        description="My articles and writeups, newest first — Blue Team guides now, IAM-focused pieces as my study path advances. Each one opens with its own index ('On this page') so you can jump straight to a section."
      />

      <div className="space-y-4">
        {articles.map((article, i) => (
          <motion.a
            key={article.slug}
            href={`#/blog/${article.slug}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: Math.min(i, 2) * 0.07 }}
            className="group flex min-h-[44px] gap-4 rounded-2xl border border-ink/10 bg-card p-4 shadow-sm transition-colors hover:border-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:gap-5 sm:p-5"
          >
            {article.coverImage ? (
              <span className="relative hidden aspect-[3/2] w-24 shrink-0 overflow-hidden rounded-xl border border-ink/10 sm:block sm:w-44">
                <Image
                  src={article.coverImage}
                  alt={article.coverAlt}
                  fill
                  sizes="176px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  unoptimized
                />
              </span>
            ) : (
              <ThumbFallback title={article.title} />
            )}

            <span className="min-w-0 flex-1">
              <span className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-ink-light">
                {article.tags[0] ? (
                  <span className="rounded bg-brand/10 px-2 py-0.5 font-semibold text-brand">
                    {article.tags[0]}
                  </span>
                ) : null}
                {article.date ? (
                  <>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                  </>
                ) : null}
                <span>{article.readTime}</span>
              </span>
              <span className="block font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand sm:text-xl">
                {article.title}
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-ink-light line-clamp-2">
                {article.excerpt}
              </span>
              <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand">
                <span>Read blog</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Blog article page — its own screen with "On this page" + disclaimer */
/* ------------------------------------------------------------------ */

export function BlogArticleView({ article }: { article: Article }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [tocOpen, setTocOpen] = React.useState(false);
  const clickedIdRef = React.useRef<string | null>(null);
  const clickedUntilRef = React.useRef(0);

  const toc = React.useMemo(() => extractToc(article.content), [article.content]);

  // Scrollspy: track which heading is passing the reading line (window scroll).
  React.useEffect(() => {
    if (toc.length === 0) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      // Sticky header bar (~64px) + breathing room above the reading line
      const threshold = 140;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      // A clicked item stays active through the smooth-scroll flight so the
      // highlight lands on what the reader asked for — including the final
      // sections, which cannot scroll all the way to the top. Once the flight
      // is over, the first manual scroll hands control back to the spy.
      const clicked = clickedIdRef.current;
      if (clicked) {
        if (performance.now() < clickedUntilRef.current) {
          setActiveId(clicked);
          return;
        }
        clickedIdRef.current = null;
      }

      let current: TocItem | null = null;
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold || (atBottom && top < window.innerHeight)) current = item;
        else if (!atBottom) break;
      }
      setActiveId(current ? current.id : toc[0].id);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [toc]);

  /** Smooth-scroll a heading into view, below the sticky bar. */
  const goToHeading = (id: string, extraOffset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    clickedIdRef.current = id;
    clickedUntilRef.current = performance.now() + 2500;
    setActiveId(id);
    const top = el.getBoundingClientRect().top + window.scrollY - 84 - extraOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 pb-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <a
          href="#/blog"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink/20 px-4 py-2 font-mono text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Back to blogs</span>
        </a>
      </div>

      <div className="lg:flex lg:items-start lg:gap-10 xl:gap-16">
        <article className="min-w-0 max-w-3xl flex-1">
          {article.tags.length > 0 ? (
            <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-xs text-ink-light">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-brand/10 px-2.5 py-0.5 font-semibold text-brand"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <h1 className="mb-4 font-serif text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            {article.title}
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-ink/10 pb-6 font-mono text-xs text-ink-light">
            {article.date ? (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                {article.date}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {article.readTime}
            </span>
            <span>Diego Yonoff</span>
          </div>

          {article.coverImage ? (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-ink/10">
              <Image
                src={article.coverImage}
                alt={article.coverAlt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                unoptimized
              />
            </div>
          ) : (
            <CoverFallback
              title={article.title}
              className="mb-8 rounded-2xl border border-ink/10"
            />
          )}

          {article.frameNote ? (
            <p className="mb-8 rounded-xl border border-brand/25 bg-brand/5 p-4 text-xs leading-relaxed text-ink-light sm:text-sm">
              <strong className="font-semibold text-ink">Why this is here:</strong>{" "}
              {article.frameNote}
            </p>
          ) : null}

          {/* Mobile: collapsible "On this page" index */}
          {toc.length > 0 ? (
            <div className="mb-8 lg:hidden">
              <button
                type="button"
                onClick={() => setTocOpen((open) => !open)}
                aria-expanded={tocOpen}
                aria-controls="article-toc-mobile"
                className="flex w-full items-center justify-between gap-3 rounded-xl border border-ink/10 bg-card px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-light transition-colors hover:border-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span>On this page</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-ink-light transition-transform duration-300",
                    tocOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {tocOpen ? (
                  <motion.div
                    id="article-toc-mobile"
                    key="toc-list"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 max-h-72 overflow-y-auto rounded-xl border border-ink/10 bg-card px-4 py-3 scrollbar-slim">
                      <TocList
                        items={toc}
                        activeId={activeId}
                        onNavigate={(id) => {
                          // The collapsing box animates height on exit, and
                          // framer-motion's keyframe measurement issues its
                          // own window.scrollTo mid-flight, which cancels a
                          // smooth scroll started now. So: collapse first,
                          // then jump once the layout has settled (~340 ms)
                          // and positions are measured post-collapse —
                          // no box-height compensation needed.
                          setTocOpen(false);
                          window.setTimeout(() => goToHeading(id), 340);
                        }}
                      />
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ) : null}

          <div className="prose prose-neutral dark:prose-invert max-w-none sm:prose-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {article.content}
            </ReactMarkdown>
          </div>

          {/* The AI disclaimer — present at the very bottom of every blog */}
          <aside
            role="note"
            aria-label="A note on how this article was produced"
            className="mt-12 rounded-2xl border border-ink/10 bg-card p-5 shadow-sm sm:p-6"
          >
            <p className="mb-2 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
              <Info className="h-3.5 w-3.5" aria-hidden="true" />
              {AI_DISCLAIMER.kicker}
            </p>
            <p className="text-xs leading-relaxed text-ink-light sm:text-sm">
              {AI_DISCLAIMER.text}
            </p>
          </aside>

          <div className="mt-10 border-t border-ink/10 pt-6 text-center">
            <a
              href="#/blog"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold text-paper transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Back to blogs
            </a>
          </div>
        </article>

        {/* Desktop: sticky "On this page" rail with scrollspy.
            self-stretch makes the nav span the full row height so the
            inner sticky box can stick for the whole article length. */}
        {toc.length > 0 ? (
          <nav
            aria-label="On this page"
            className="hidden shrink-0 lg:block lg:w-56 lg:self-stretch xl:w-60"
          >
            <div className="sticky top-20 max-h-[calc(100vh-7rem)] overflow-y-auto pb-8 scrollbar-slim">
              <p className="mb-3 pr-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-light">
                On this page
              </p>
              <TocList items={toc} activeId={activeId} onNavigate={goToHeading} />
            </div>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
