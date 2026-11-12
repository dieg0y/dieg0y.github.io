"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, X } from "lucide-react";

/**
 * Inline PDF viewer — opens a document on the page instead of forcing a
 * download. Works for the CV and for uploaded certificates
 * (see public/certs/README.txt).
 *
 * Desktop browsers render PDFs natively inside the iframe; on mobile the
 * toolbar always offers "Open in a new tab", which hands off to the
 * device's native viewer.
 */
export function PdfViewer({
  open,
  src,
  title,
  downloadName,
  onClose,
}: {
  open: boolean;
  src: string;
  title: string;
  downloadName?: string;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      <button
        type="button"
        aria-label="Close document viewer"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/50 backdrop-blur-sm"
      />
      <motion.div
        ref={dialogRef}
        tabIndex={-1}
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={`Viewing ${title}`}
        className="scrollbar-slim relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-2xl"
      >
        {/* Toolbar — stays reachable, carries the title + fallback actions */}
        <div className="flex items-center justify-between gap-3 border-b border-ink/10 bg-paper px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10">
              <FileText className="h-4 w-4 text-brand" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-serif text-sm font-bold text-ink sm:text-base">
                {title}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-ink-light">
                PDF · opens here, no download needed
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ink/20 px-3 font-mono text-[11px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">New tab</span>
            </a>
            <a
              href={src}
              download={downloadName}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ink/20 px-3 font-mono text-[11px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close PDF viewer"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-light transition-colors hover:bg-ink/5 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* The document itself — browsers render PDFs inline here */}
        <iframe
          src={`${src}#view=FitH`}
          title={title}
          className="h-[75dvh] w-full bg-card sm:h-[78dvh]"
        />
      </motion.div>
    </div>
  );
}

/** Checks whether a static PDF exists before offering the inline viewer. */
export async function pdfExists(src: string): Promise<boolean> {
  try {
    const res = await fetch(src, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}
