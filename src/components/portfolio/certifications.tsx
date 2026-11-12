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
import { PdfViewer, pdfExists } from "./pdf-viewer";
import { certifications, type Certification } from "@/data/portfolio";

const STATUS_STYLES: Record<Certification["status"], string> = {
  verified:
    "border-emerald-600/25 bg-emerald-600/10 text-emerald-700 dark:text-emerald-400",
  "in-progress": "border-amber-600/30 bg-amber-600/10 text-amber-700 dark:text-amber-400",
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
    <div className="space-y-1.5 py-3.5 first:pt-1 last:pb-0">
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
      <p className="pt-0.5 font-sans text-[11px] leading-relaxed text-ink-light">{note}</p>
    </div>
  );
}

/** Fallback report shown when the certificate PDF hasn't been uploaded yet. */
function LinguaskillReport({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const node = dialogRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    node?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        node?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])"
        ) ?? []
      ).filter((el) => el.offsetParent !== null);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
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
        ref={dialogRef}
        tabIndex={-1}
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label="Cambridge Linguaskill Test Report"
        aria-describedby="linguaskill-report-desc"
        className="scrollbar-slim relative max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-ink/10 bg-paper shadow-2xl"
      >
        <p id="linguaskill-report-desc" className="sr-only">
          Official Linguaskill General test report: overall CEFR level and the
          four skill-area scores with notes. Scroll to read the full
          breakdown.
        </p>
        {/* Sticky header — the close control stays reachable while scrolling */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-ink/10 bg-paper/95 px-6 py-4 backdrop-blur-sm sm:px-8">
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
            className="rounded-md p-2 text-ink-light transition-colors hover:bg-ink/5 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-5 px-6 py-5 sm:px-8 sm:py-6">
          <div className="grid grid-cols-2 gap-3 rounded-xl border border-ink/10 bg-ink/5 p-4 font-mono text-xs sm:grid-cols-3">
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

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-brand/20 bg-brand/10 p-4">
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

          <div>
            <h4 className="border-b border-ink/10 pb-2 font-serif text-base font-bold text-ink">
              Skill breakdown — all four areas
            </h4>
            <div className="divide-y divide-ink/10">
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
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-ink/10 pt-4">
            <span className="font-mono text-[10px] text-ink-light">
              Cambridge Assessment English · Linguaskill
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-ink px-5 py-2 font-mono text-xs font-semibold text-paper transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function CertificationsView() {
  const [reportOpen, setReportOpen] = React.useState(false);
  const [pdfOpen, setPdfOpen] = React.useState(false);
  const linguaskill = certifications.find((c) => c.showModal);

  /** View certificate: inline PDF when uploaded, detailed report otherwise. */
  const openCertificate = async (cert: Certification) => {
    if (cert.pdf && (await pdfExists(cert.pdf))) {
      setPdfOpen(true);
    } else if (cert.showModal) {
      setReportOpen(true);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        kicker="Professional Credentials"
        icon={Award}
        title="Certifications"
        description="Only real statuses appear here: one Cambridge certificate verified, and two exams actively in progress — because listing goals as credentials helps nobody."
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
              <dl className="mt-5 space-y-2 border-t border-ink/10 pt-4 font-mono text-xs">
                {cert.details.slice(0, 4).map((d) => (
                  <div
                    key={d.label}
                    className="flex items-baseline justify-between gap-3"
                  >
                    <dt className="text-ink-light">{d.label}:</dt>
                    <dd className="text-right font-bold text-ink">{d.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {cert.bullets ? (
              <ul className="mt-5 space-y-2 border-t border-dashed border-ink/10 pt-4">
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
                  onClick={() => openCertificate(cert)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-xs font-semibold text-paper shadow-sm transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <FileText className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  <span>View certificate →</span>
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

      <motion.aside
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-card p-6 shadow-sm"
        role="note"
      >
        <p className="max-w-2xl text-xs leading-relaxed text-ink-light sm:text-sm">
          Certificates open right here on the page — no download needed. The
          same inline viewer is available for the CV from the header and the{" "}
          <a href="#/about" className="font-semibold text-brand underline decoration-brand/40 underline-offset-2 hover:text-ink">
            About
          </a>{" "}
          page.
        </p>
      </motion.aside>

      {linguaskill ? (
        <>
          <LinguaskillReport open={reportOpen} onClose={() => setReportOpen(false)} />
          <PdfViewer
            open={pdfOpen}
            src={linguaskill.pdf ?? ""}
            title={`${linguaskill.title} — certificate`}
            downloadName="Linguaskill_Diego_Yonoff_Certificate.pdf"
            onClose={() => setPdfOpen(false)}
          />
        </>
      ) : null}
    </div>
  );
}
