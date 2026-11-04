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
  projects.map((p) => [p.title, p.repo])
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

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-label" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          id="skills"
          kicker="Skills Matrix"
          icon={Gauge}
          title="Skills — with evidence levels"
          description="IAM-first, honestly classified. Every skill below carries the level I can actually defend in an interview, and one line explaining where that level comes from — with the repositories linked."
        />

        {/* Evidence legend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 grid gap-3 rounded-2xl border border-ink/10 bg-card p-5 shadow-sm sm:grid-cols-3"
        >
          {LEGEND_ORDER.map((level) => (
            <div key={level} className="flex items-start gap-3">
              <LevelBadge level={level} className="mt-0.5" />
              <p className="text-xs leading-relaxed text-ink-light">
                {LEVEL_META[level].description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* The evidence ledger — an access-review worksheet, not a card grid.
            All 34 skills are fully visible: nothing is hidden behind an
            in-card scroll, because the evidence is the product. */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-sm"
        >
          {skillGroups.map((group, gi) => (
            <div
              key={group.id}
              className={gi > 0 ? "border-t-2 border-ink/10" : ""}
            >
              {/* Group header */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-ink/10 bg-ink/[0.03] px-5 py-4 dark:bg-ink/[0.06] sm:px-7">
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-light">
                    {group.blurb}
                  </p>
                </div>
                <span
                  className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-light"
                  aria-label={`${group.items.length} skills`}
                >
                  {group.items.length} skills
                </span>
              </div>

              {/* Skill rows */}
              <ul className="divide-y divide-ink/10">
                {group.items.map((item) => (
                  <li key={item.name} className="px-5 py-4 sm:px-7 sm:py-4.5">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-semibold leading-snug text-ink">
                        {item.name}
                      </p>
                      <LevelBadge level={item.level} className="shrink-0" />
                    </div>
                    <p className="mt-1.5 max-w-3xl text-xs leading-relaxed text-ink-light/90">
                      <EvidenceText text={item.evidence} />
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

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
    </section>
  );
}
