"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Gauge } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { LevelBadge } from "./level-badge";
import {
  LEVEL_META,
  projects,
  skillGroups,
  type SkillLevel,
} from "@/data/portfolio";

const LEGEND_ORDER: SkillLevel[] = ["hands-on", "working", "foundational"];

/* Project names → repository URLs, derived from the projects data so the
 * evidence in this section is one click from its proof. */
const EVIDENCE_LINKS: Record<string, string> = Object.fromEntries(
  projects.flatMap((p) => [
    [p.title, p.repo],
    ...(p.extraRepos ?? []).map((r) => [r.label, r.url] as [string, string]),
  ])
);
const EVIDENCE_PATTERN = new RegExp(
  `(${Object.keys(EVIDENCE_LINKS)
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "g"
);

/** Renders an evidence string, turning project names into repo links.
 * The link renders as inline-flex so the name and its external-link icon
 * never break across lines. */
function EvidenceText({ text }: { text: string }) {
  const parts = text.split(EVIDENCE_PATTERN);
  return (
    <>
      {parts.map((part, i) => {
        const href = EVIDENCE_LINKS[part];
        if (href) {
          return (
            <React.Fragment key={i}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline font-semibold text-brand underline decoration-brand/40 underline-offset-2 transition-colors hover:text-ink hover:decoration-brand"
              >
                {part}
                <ExternalLink
                  className="ml-0.5 inline h-3 w-3 shrink-0 self-center text-brand/70"
                  aria-hidden="true"
                />
              </a>{" "}
            </React.Fragment>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}

/** Jump straight to a category — the matrix is organized, so its structure
 * is navigable in one tap. Uses scrollIntoView (no hash changes: the router owns those). */
function jumpTo(groupId: string) {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(groupId)?.scrollIntoView({
    behavior: prefersReduced ? "auto" : "smooth",
    block: "start",
  });
}

export function SkillsView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        kicker="Skills Matrix"
        icon={Gauge}
        title="Skills — organized by domain, labeled by evidence"
        description="Seven domains, each skill tagged hands-on, working knowledge, or foundational — with one line of evidence explaining where that level comes from and the repositories linked."
      />

      {/* Evidence legend — the three tags every skill carries */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-6 grid gap-3 rounded-2xl border border-ink/10 bg-card p-5 shadow-sm sm:grid-cols-3"
      >
        {LEGEND_ORDER.map((level) => (
          <div key={level} className="flex items-start gap-3">
            <LevelBadge level={level} className="mt-px shrink-0" />
            <p className="pt-0.5 text-xs leading-relaxed text-ink-light">
              {LEVEL_META[level].description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Category index — one tap jumps to the domain */}
      <motion.nav
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        aria-label="Skill categories"
        className="mb-8 flex flex-wrap gap-2"
      >
        {skillGroups.map((group) => (
          <button
            key={group.id}
            type="button"
            onClick={() => jumpTo(group.id)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink/15 bg-card px-4 py-2 font-mono text-[11px] font-semibold text-ink-light transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {group.title}
            <span className="text-brand" aria-hidden="true">
              {group.items.length}
            </span>
          </button>
        ))}
      </motion.nav>

      {/* The domains — card grid instead of one endless list, so the
          organization is the first thing you see. */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.section
            key={group.id}
            id={group.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (gi % 2) * 0.06 }}
            aria-labelledby={`${group.id}-label`}
            className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-sm scroll-mt-24"
          >
            <div className="border-b border-ink/10 bg-ink/[0.03] px-5 py-4 dark:bg-ink/[0.06] sm:px-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h2
                  id={`${group.id}-label`}
                  className="font-serif text-lg font-bold text-ink"
                >
                  {group.title}
                </h2>
                <span
                  className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-light"
                  aria-label={`${group.items.length} skills`}
                >
                  {group.items.length} skills
                </span>
              </div>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-light">
                {group.blurb}
              </p>
            </div>

            <ul className="divide-y divide-ink/10">
              {group.items.map((item) => (
                <li key={item.name} className="px-5 py-4 sm:px-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold leading-snug text-ink">
                      {item.name}
                    </p>
                    <LevelBadge level={item.level} className="shrink-0" />
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-light/90">
                    <EvidenceText text={item.evidence} />
                  </p>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>

      {/* Closing note */}
      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:flex-row sm:items-end"
      >
        <p className="max-w-2xl text-xs leading-relaxed text-ink-light sm:text-sm">
          Because &ldquo;skills sections&rdquo; that list forty tools at the
          same confidence level help no one. If a skill says{" "}
          <strong className="font-semibold text-ink">hands-on</strong>, there
          is shipped code or a completed lab behind it — linked where the
          repository is public. If it says{" "}
          <strong className="font-semibold text-ink">foundational</strong>, I
          am still building it — and I will say so in the interview too.
        </p>
        <p className="shrink-0 font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
          Traceable claims &gt; impressive lists
        </p>
      </motion.aside>
    </div>
  );
}
