"use client";

import { Fingerprint, Github, Linkedin, Mail } from "lucide-react";
import { site, profile } from "@/data/portfolio";

export function PortfolioFooter() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <a href="#/" className="group flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper">
                <Fingerprint className="h-4 w-4 text-brand" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-brand">
                Diego Yonoff
              </span>
            </a>
            <p className="font-mono text-xs text-ink-light">{site.identityLine}</p>
            <p className="max-w-sm font-mono text-xs leading-relaxed text-ink-light">
              Evidence-based portfolio — every skill labeled hands-on, working
              knowledge, or foundational, and linked to its repository.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs font-medium"
            aria-label="Footer navigation"
          >
            {site.pages.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-ink-light transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-ink-light">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink/5 p-2.5 transition-all hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink"
              aria-label="GitHub @dieg0y"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink/5 p-2.5 transition-all hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink"
              aria-label="LinkedIn @diegoyonoff"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-ink/5 p-2.5 transition-all hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink"
              aria-label={`Email ${profile.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-center font-mono text-[11px] text-ink-light sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Diego Yonoff. All rights reserved.</p>
          <p>
            dieg0y.github.io ·{" "}
            <a
              href="https://github.com/dieg0y"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-brand/40 underline-offset-2 transition-colors hover:text-brand"
            >
              github.com/dieg0y
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
