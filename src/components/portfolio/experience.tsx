"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
  FlaskConical,
  Info,
  MapPin,
  ScrollText,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { experience, experienceNote, labs } from "@/data/portfolio";

const KIND_STYLES: Record<string, string> = {
  "Study program": "border-brand/30 bg-brand/10 text-brand",
  "Home lab": "border-emerald-600/25 bg-emerald-600/10 text-emerald-700 dark:text-emerald-400",
  "Online lab": "border-ink/15 bg-ink/5 text-ink-light",
  Simulation: "border-ink/15 bg-ink/5 text-ink-light",
};

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-label" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          id="experience"
          kicker="Labs & Experience"
          icon={FlaskConical}
          title="Experience — labeled honestly"
          description="One formal engagement, one ongoing study program, and a set of labs. Labeled so a recruiter never has to guess which is which."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Formal experience */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink-light">
              <Briefcase className="h-4 w-4 text-brand" aria-hidden="true" />
              Formal experience
            </h3>

            {experience.map((item, i) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-ink/10 bg-card p-7 shadow-sm transition-colors hover:border-brand/40"
              >
                <div className="flex flex-col justify-between gap-3 border-b border-ink/10 pb-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-brand">
                      {item.org}
                    </p>
                    <h4 className="font-serif text-xl font-bold leading-snug text-ink">
                      {item.role}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1 font-mono text-[11px] text-ink-light sm:items-end">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-light"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-500"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-3.5 rounded-2xl border border-brand/25 bg-brand/5 p-6"
              role="note"
            >
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-ink-light">{experienceNote}</p>
            </motion.div>
          </div>

          {/* Labs & study */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink-light">
              <ScrollText className="h-4 w-4 text-brand" aria-hidden="true" />
              Personal labs &amp; structured study
            </h3>

            {labs.map((lab, i) => (
              <motion.article
                key={lab.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-colors hover:border-brand/40"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                      KIND_STYLES[lab.kind] ?? KIND_STYLES.Simulation
                    }`}
                  >
                    {lab.kind}
                  </span>
                  <span className="font-mono text-[11px] text-ink-light">{lab.period}</span>
                </div>
                <h4 className="font-serif text-lg font-bold leading-snug text-ink">
                  {lab.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-ink-light sm:text-sm">
                  {lab.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {lab.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[11px] leading-relaxed text-ink-light"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
