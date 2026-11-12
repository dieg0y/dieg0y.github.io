"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Gauge } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { LevelBadge } from "./level-badge";
import {
  LEVEL_META,
  projects,
  skillGroups,
  type SkillLevel,
  type SkillGroup,
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

/** One skill domain in the collapsible list: the header row stays compact
 * (title, count, blurb); the skills expand on demand. */
function CollapsibleSkillGroup({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);
  const panelId = `${group.id}-panel`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.05 }}
      aria-labelledby={`${group.id}-label`}
      className="overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-sm transition-colors hover:border-brand/40"
    >
      {/* Header row — tapping it expands the domain's skills */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex min-h-[44px] w-full items-center gap-3 bg-ink/[0.03] px-5 py-4 text-left transition-colors hover:bg-brand/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand dark:bg-ink/[0.06] sm:px-6"
      >
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink-light transition-transform duration-300 group-hover:text-brand ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <span
              id={`${group.id}-label`}
              className="font-serif text-lg font-bold text-ink transition-colors group-hover:text-brand"
            >
              {group.title}
            </span>
            <span
              className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-light"
              aria-label={`${group.items.length} skills`}
            >
              {group.items.length} skills
            </span>
          </span>
          <span className="mt-0.5 block text-xs leading-relaxed text-ink-light">
            {group.blurb}
          </span>
        </span>
      </button>

      {/* Expanding panel — the skills with their evidence */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="panel"
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
}

export function SkillsView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        kicker="Skills Matrix"
        icon={Gauge}
        title="Skills — organized by domain, labeled by evidence"
        description="Seven domains, each skill tagged hands-on, working knowledge, or foundational, with one line of evidence explaining where that level comes from. Tap a domain to expand its skills."
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

      {/* The domains — a compact, collapsible list: titles first,
          skills on demand. */}
      <div className="space-y-4">
        {skillGroups.map((group, gi) => (
          <CollapsibleSkillGroup key={group.id} group={group} index={gi} />
        ))}
      </div>
    </div>
  );
}
