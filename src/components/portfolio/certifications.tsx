"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  FileText,
  X,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { certifications, type Certification } from "@/data/portfolio";

const STATUS_STYLES: Record<Certification["status"], string> = {
  verified:
    "border-emerald-600/25 bg-emerald-600/10 text-emerald-700 dark:text-emerald-400",
  "in-progress": "border-amber-600/30 bg-amber-600/10 text-amber-700 dark:text-amber-400",
  target: "border-ink/15 bg-ink/5 text-ink-light",
};

function ScoreBar({
  label,
  score,
  level,
  percent,
  note,
  strong,
}: {
  label: string;
  score: string;
  level: string;
  percent: number;
  note: string;
  strong?: boolean;
}) {
  return (
    <div className="space-y-1 rounded-lg border border-ink/10 bg-card p-3">
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="font-bold text-ink">{label}</span>
        <span className={strong ? "font-bold text-emerald-700 dark:text-emerald-400" : "font-bold text-brand"}>
          {score} · {level}
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-ink/10"
        role="img"
        aria-label={`${label}: ${score}, level ${level}`}
      >
        <div
          className={`h-full rounded-full ${strong ? "bg-emerald-600 dark:bg-emerald-500" : "bg-brand"}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="pt-1 font-sans text-[11px] leading-relaxed text-ink-light">{note}</p>
    </div>
  );
}

function LinguaskillReport({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close test report"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/40 backdrop-blur-sm"
      />
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label="Cambridge Linguaskill Test Report"
        className="scrollbar-slim relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-ink/10 bg-paper p-6 shadow-2xl sm:p-8"
      >
        <div className="mb-6 flex items-center justify-between border-b border-ink/10 pb-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
              Cambridge Assessment English
            </p>
            <h3 className="font-serif text-2xl font-bold text-ink">
              Linguaskill Test Report
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-md p-2 text-ink-light transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3 rounded-xl border border-ink/10 bg-ink/5 p-4 font-mono text-xs sm:grid-cols-3">
          <div>
            <span className="block text-[10px] text-ink-light">Candidate name:</span>
            <span className="font-bold text-ink">Diego Yonoff</span>
          </div>
          <div>
            <span className="block text-[10px] text-ink-light">Credential status:</span>
            <span className="font-bold text-emerald-700 dark:text-emerald-400">
              Official / Verified
            </span>
          </div>
          <div>
            <span className="block text-[10px] text-ink-light">Organisation:</span>
            <span className="font-bold text-ink">Open English</span>
          </div>
          <div>
            <span className="block text-[10px] text-ink-light">Centre / Ref no:</span>
            <span className="font-bold text-ink">UX790</span>
          </div>
          <div>
            <span className="block text-[10px] text-ink-light">Test exam:</span>
            <span className="font-bold text-ink">Linguaskill General</span>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between rounded-xl border border-brand/20 bg-brand/10 p-4">
          <div>
            <span className="block font-mono text-xs font-bold uppercase tracking-wider text-brand">
              Average score &amp; CEFR level
            </span>
            <span className="font-serif text-3xl font-bold text-ink">
              172{" "}
              <span className="font-sans text-lg font-normal text-brand">
                (CEFR Level B2)
              </span>
            </span>
          </div>
          <span className="rounded-full bg-brand px-4 py-2 font-mono text-sm font-bold text-brand-foreground shadow-sm">
            Verified B2
          </span>
        </div>

        <div className="mb-6 space-y-4">
          <h4 className="border-b border-ink/10 pb-2 font-serif text-base font-bold text-ink">
            Skill breakdown
          </h4>
          <ScoreBar
            label="Listening"
            score="180+"
            level="C1 or above"
            percent={95}
            note="Can follow complex technical discussions, security briefings, and incident calls at natural native speed."
            strong
          />
          <ScoreBar
            label="Reading"
            score="177"
            level="B2"
            percent={82}
            note="Can read complex technical documentation, IAM vendor guides, and audit reports accurately."
          />
          <ScoreBar
            label="Writing"
            score="169"
            level="B2"
            percent={75}
            note="Can write detailed access-review notes, ticket updates, and clear email communications."
          />
          <ScoreBar
            label="Speaking"
            score="158"
            level="B1"
            percent={65}
            note="Can communicate operational status and participate effectively in daily standups and handovers."
          />
        </div>

        <div className="flex items-center justify-between border-t border-ink/10 pt-4">
          <span className="font-mono text-[10px] text-ink-light">
            Cambridge Assessment English · Linguaskill
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-ink px-5 py-2 font-mono text-xs font-semibold text-paper transition-colors hover:bg-brand"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function Certifications() {
  const [reportOpen, setReportOpen] = React.useState(false);

  return (
    <section id="certifications" aria-labelledby="certifications-label" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          id="certifications"
          kicker="Professional Credentials"
          icon={Award}
          title="Certifications"
          description="Only real statuses appear here: one verified certificate, one exam actively in progress, and one stated as a target — because listing goals as credentials helps nobody."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="flex flex-col rounded-2xl border border-ink/10 bg-card p-7 shadow-sm transition-colors hover:border-brand/40"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                    STATUS_STYLES[cert.status]
                  }`}
                >
                  {cert.statusLabel}
                </span>
                <span className="font-mono text-[11px] font-semibold text-ink-light">
                  {cert.issuer}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold leading-tight text-ink">
                {cert.title}
              </h3>
              {cert.headline ? (
                <p className="mt-1 font-mono text-xs font-semibold text-brand">
                  {cert.headline}
                </p>
              ) : null}

              <p className="mt-4 text-sm leading-relaxed text-ink-light">
                {cert.description}
              </p>

              {cert.details ? (
                <div className="mt-5 grid grid-cols-2 gap-2 font-mono text-xs">
                  {cert.details.slice(0, 4).map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between rounded-lg border border-ink/10 bg-ink/5 px-2.5 py-2"
                    >
                      <span className="text-ink-light">{d.label}:</span>
                      <span className="font-bold text-ink">{d.value}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              {cert.bullets ? (
                <ul className="mt-5 space-y-2 rounded-xl border border-ink/10 bg-ink/5 p-4">
                  {cert.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 font-mono text-[11px] leading-relaxed text-ink-light"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-auto pt-6">
                {cert.showModal ? (
                  <button
                    type="button"
                    onClick={() => setReportOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-xs font-semibold text-paper shadow-sm transition-colors hover:bg-brand"
                  >
                    <FileText className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    <span>View official test report →</span>
                  </button>
                ) : cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand transition-colors hover:underline"
                  >
                    <span>{cert.linkLabel}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <LinguaskillReport open={reportOpen} onClose={() => setReportOpen(false)} />
    </section>
  );
}
