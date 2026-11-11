"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, BookOpen, CalendarDays, ChevronDown, Clock } from "lucide-react";
import { SectionHeading } from "./section-heading";
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
          Notes &amp; Writeups
        </span>
      </div>
    </div>
  );
}

function ArticleReader({
  article,
  onClose,
}: {
  article: Article;
  onClose: () => void;
}) {
  const readerRef = React.useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [tocOpen, setTocOpen] = React.useState(false);
  const clickedIdRef = React.useRef<string | null>(null);
  const clickedUntilRef = React.useRef(0);

  const toc = React.useMemo(() => extractToc(article.content), [article.content]);

  React.useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    // Move focus into the reader so keyboard users land inside it
    readerRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  // Scrollspy: track which heading is currently passing the reading position.
  React.useEffect(() => {
    const root = readerRef.current;
    if (!root || toc.length === 0) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rootTop = root.getBoundingClientRect().top;
      // Sticky header bar (~60px) + breathing room above the reading line
      const threshold = rootTop + 140;
      const viewBottom = rootTop + root.clientHeight;

      // A clicked item stays active through the smooth-scroll flight so the
      // highlight lands on what the reader asked for — including the final
      // sections, which cannot scroll all the way to the top of the reader
      // (clamped at the bottom). Once the flight is over, the first manual
      // scroll hands control back to the regular spy below.
      const clicked = clickedIdRef.current;
      if (clicked) {
        if (performance.now() < clickedUntilRef.current) {
          setActiveId(clicked);
          return;
        }
        clickedIdRef.current = null;
      }

      // When the reader is scrolled to the very bottom, the last heading
      // still on screen wins (the section the reader is actually in).
      const atBottom = root.scrollTop + root.clientHeight >= root.scrollHeight - 2;

      let current: TocItem | null = null;
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= threshold || (atBottom && top < viewBottom)) current = item;
        else if (!atBottom) break;
      }
      setActiveId(current ? current.id : toc[0].id);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      root.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [toc]);

  /** Smooth-scroll a heading into view inside the reader, below the sticky bar. */
  const goToHeading = (id: string, extraOffset = 0) => {
    const root = readerRef.current;
    const el = document.getElementById(id);
    if (!root || !el) return;
    const top =
      el.getBoundingClientRect().top -
      root.getBoundingClientRect().top +
      root.scrollTop -
      76 -
      extraOffset;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    clickedIdRef.current = id;
    clickedUntilRef.current = performance.now() + 2500;
    root.scrollTo({ top: Math.max(top, 0), behavior: prefersReduced ? "auto" : "smooth" });
    setActiveId(id);
  };

  return (
    <motion.div
      ref={readerRef}
      tabIndex={-1}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 overflow-y-auto bg-paper scrollbar-slim"
      role="dialog"
      aria-modal="true"
      aria-label={`Reading: ${article.title}`}
    >
      <div className="sticky top-0 z-10 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 font-mono text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to portfolio</span>
          </button>
          <span className="hidden font-mono text-[11px] text-ink-light sm:inline">
            Esc to close
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
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
                            // Compensate for the collapsible box height: the
                            // box collapses after the click, shifting content
                            // up, so the scroll target is measured against
                            // the post-collapse layout.
                            const box = document.getElementById("article-toc-mobile");
                            const boxH = box ? box.getBoundingClientRect().height + 8 : 0;
                            goToHeading(id, boxH);
                            setTocOpen(false);
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

            <div className="mt-12 border-t border-ink/10 pt-6 text-center">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold text-paper transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Back to portfolio
              </button>
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
    </motion.div>
  );
}

export function Writing({ articles }: { articles: Article[] }) {
  const [active, setActive] = React.useState<Article | null>(null);

  return (
    <section id="writing" aria-labelledby="writing-label" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          id="writing"
          kicker="Notes & Writeups"
          icon={BookOpen}
          title="Writing"
          description="Published articles, migrated from my previous site. The SOC piece is kept and framed honestly: it's the Blue Team foundation behind my ITDR interest. IAM-focused writeups are next as my roadmap advances."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-sm transition-colors hover:border-brand/40"
            >
              <button
                type="button"
                onClick={() => setActive(article)}
                className="text-left"
                aria-label={`Read article: ${article.title}`}
              >
                {article.coverImage ? (
                  <div className="relative aspect-video w-full overflow-hidden border-b border-ink/10">
                    <Image
                      src={article.coverImage}
                      alt={article.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 576px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      unoptimized
                    />
                  </div>
                ) : (
                  <CoverFallback
                    title={article.title}
                    className="border-b border-ink/10 transition-colors duration-500 group-hover:bg-brand/5"
                  />
                )}
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[11px] text-ink-light">
                    {article.tags[0] ? (
                      <>
                        <span className="rounded bg-brand/10 px-2 py-0.5 font-semibold text-brand">
                          {article.tags[0]}
                        </span>
                        <span aria-hidden="true">·</span>
                      </>
                    ) : null}
                    {article.date ? (
                      <>
                        <span>{article.date}</span>
                        <span aria-hidden="true">·</span>
                      </>
                    ) : null}
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold leading-snug text-ink transition-colors group-hover:text-brand sm:text-2xl">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-light">
                    {article.excerpt}
                  </p>
                </div>
              </button>
              <div className="mt-auto px-6 pb-6">
                <button
                  type="button"
                  onClick={() => setActive(article)}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs font-bold text-paper transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <span>Read article →</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {active ? (
        <ArticleReader article={active} onClose={() => setActive(null)} />
      ) : null}
    </section>
  );
}
