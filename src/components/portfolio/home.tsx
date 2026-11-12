"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  ChevronRight,
  Compass,
  FolderKanban,
  Gauge,
  MessageSquare,
} from "lucide-react";
import { Hero } from "./hero";
import type { Article } from "@/lib/blog";

const PAGE_CARDS = [
  {
    href: "#/about",
    icon: Compass,
    title: "About",
    text: "My background — systems engineering, SOC security analyst roots, and the IAM focus I'm building on them.",
  },
  {
    href: "#/skills",
    icon: Gauge,
    title: "Skills",
    text: "The evidence-based matrix: every skill tagged hands-on, working knowledge, or foundational.",
  },
  {
    href: "#/projects",
    icon: FolderKanban,
    title: "Projects",
    text: "The repositories behind the claims — expand each one for what it actually does.",
  },
  {
    href: "#/certifications",
    icon: Award,
    title: "Certifications",
    text: "Cambridge B2 verified; SC-300 and Security+ in progress. View certificates right on the page.",
  },
  {
    href: "#/blog",
    icon: BookOpen,
    title: "Blogs",
    text: "My articles and writeups — SOC organization, staying current, and more to come.",
  },
  {
    href: "#/contact",
    icon: MessageSquare,
    title: "Contact",
    text: "Let's talk identity — email, LinkedIn, and availability for remote roles.",
  },
];

/** Typographic cover used when a post has no `cover` image. */
function BlogThumb({ title }: { title: string }) {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center bg-card">
      <div className="flex flex-col items-center gap-2 px-8 text-center">
        <BookOpen className="h-6 w-6 text-brand/70" aria-hidden="true" />
        <span className="line-clamp-2 font-serif text-base italic leading-snug text-ink/75">
          {title}
        </span>
      </div>
    </div>
  );
}

export function HomeView({ articles }: { articles: Article[] }) {
  const [latest, next] = articles.slice(0, 2);

  return (
    <>
      <Hero />

      {/* Page navigation — the portfolio is organized as individual pages */}
      <section aria-label="Site pages" className="border-t border-ink/10 bg-ink/[0.02] dark:bg-ink/[0.04]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="mb-8 flex flex-wrap items-baseline justify-between gap-3"
          >
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Explore the portfolio
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-light">
              {PAGE_CARDS.length} pages · zero guesswork
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PAGE_CARDS.map((card, i) => (
              <motion.a
                key={card.href}
                href={card.href}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative flex min-h-[44px] flex-col rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 transition-colors group-hover:bg-brand/20">
                  <card.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                </span>
                <span className="flex items-center gap-1.5 font-serif text-xl font-bold text-ink transition-colors group-hover:text-brand">
                  {card.title}
                  <ChevronRight
                    className="h-4 w-4 text-ink-light opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-ink-light">
                  {card.text}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest blogs — the newest posts surface on the home page */}
      <section aria-label="Latest blogs" className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="mb-8 flex flex-wrap items-baseline justify-between gap-3"
          >
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              From the blog
            </h2>
            <a
              href="#/blog"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-brand transition-colors hover:text-ink"
            >
              <span>All blogs</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[latest, next].map(
              (article) =>
                article && (
                  <motion.a
                    key={article.slug}
                    href={`#/blog/${article.slug}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-sm transition-colors hover:border-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
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
                      <BlogThumb title={article.title} />
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[11px] text-ink-light">
                        {article.tags[0] ? (
                          <span className="rounded bg-brand/10 px-2 py-0.5 font-semibold text-brand">
                            {article.tags[0]}
                          </span>
                        ) : null}
                        {article.date ? <span>{article.date}</span> : null}
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold leading-snug text-ink transition-colors group-hover:text-brand sm:text-2xl">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-light">
                        {article.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand">
                        <span>Read article</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </motion.a>
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
