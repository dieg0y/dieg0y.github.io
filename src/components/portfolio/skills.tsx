"use client";

import { motion } from "framer-motion";
import { Gauge } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { LevelBadge } from "./level-badge";
import { LEVEL_META, skillGroups, type SkillLevel } from "@/data/portfolio";

const LEGEND_ORDER: SkillLevel[] = ["hands-on", "working", "foundational"];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-label" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          id="skills"
          kicker="Skills Matrix"
          icon={Gauge}
          title="Skills — with evidence levels"
          description="IAM-first, honestly classified. Every skill below carries the level I can actually defend in an interview, and one line explaining where that level comes from."
        />

        {/* Evidence legend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 grid gap-3 rounded-2xl border border-ink/10 bg-card p-5 shadow-sm sm:grid-cols-3"
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.article
              key={group.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (gi % 3) * 0.07 }}
              className="flex flex-col rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-colors hover:border-brand/40"
            >
              <h3 className="font-serif text-xl font-bold text-ink">
                {group.title}
              </h3>
              <p className="mt-1 mb-5 text-xs leading-relaxed text-ink-light">
                {group.blurb}
              </p>
              <ul className="max-h-96 space-y-4 overflow-y-auto pr-1 scrollbar-slim">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-dashed border-ink/10 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold leading-snug text-ink">
                        {item.name}
                      </p>
                      <LevelBadge level={item.level} />
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-light/90">
                      {item.evidence}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}

          {/* Closing note card */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="flex flex-col justify-between rounded-2xl border border-brand/25 bg-brand/5 p-6"
          >
            <div>
              <h3 className="font-serif text-xl font-bold text-ink">
                Why the labels?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-light sm:text-sm">
                Because &ldquo;skills sections&rdquo; that list forty tools at
                the same confidence level help no one. If a skill says{" "}
                <strong className="font-semibold text-ink">hands-on</strong>,
                there is shipped code or a completed lab behind it. If it says{" "}
                <strong className="font-semibold text-ink">foundational</strong>
                , I am still building it — and I will say so in the interview
                too.
              </p>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-brand">
              Traceable claims &gt; impressive lists
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
