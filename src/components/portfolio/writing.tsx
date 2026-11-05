"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, BookOpen, CalendarDays, Clock } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { articles, type Article } from "@/data/articles";

function ArticleReader({
  article,
  onClose,
}: {
  article: Article;
  onClose: () => void;
}) {
  const readerRef = React.useRef<HTMLDivElement>(null);

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
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 font-mono text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to portfolio</span>
          </button>
          <span className="hidden font-mono text-[11px] text-ink-light sm:inline">
            Esc to close
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
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
        <h1 className="mb-4 font-serif text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          {article.title}
        </h1>
        <div className="mb-8 flex items-center gap-4 border-b border-ink/10 pb-6 font-mono text-xs text-ink-light">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readTime}
          </span>
          <span>Diego Yonoff</span>
        </div>

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

        {article.frameNote ? (
          <p className="mb-8 rounded-xl border border-brand/25 bg-brand/5 p-4 text-xs leading-relaxed text-ink-light sm:text-sm">
            <strong className="font-semibold text-ink">Why this is here:</strong>{" "}
            {article.frameNote}
          </p>
        ) : null}

        <div className="prose prose-neutral dark:prose-invert max-w-none sm:prose-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 border-t border-ink/10 pt-6 text-center">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold text-paper transition-colors hover:bg-brand"
          >
            Back to portfolio
          </button>
        </div>
      </article>
    </motion.div>
  );
}

export function Writing() {
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
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[11px] text-ink-light">
                    <span className="rounded bg-brand/10 px-2 py-0.5 font-semibold text-brand">
                      {article.tags[0]}
                    </span>
                    <span>·</span>
                    <span>{article.date}</span>
                    <span>·</span>
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
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs font-bold text-paper transition-colors hover:bg-brand"
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
