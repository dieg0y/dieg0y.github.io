"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Fingerprint, Github, Linkedin, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site, profile } from "@/data/portfolio";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 text-ink-light transition-colors hover:bg-ink/5 hover:text-ink dark:hover:bg-ink/10 dark:hover:text-ink"
    >
      {mounted && resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

export function PortfolioHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 w-full border-b border-ink/10 bg-paper/90 backdrop-blur-md dark:border-ink/10"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="rounded-md p-2 text-ink-light transition-colors hover:bg-ink/5 hover:text-ink md:hidden dark:hover:bg-ink/10"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-paper p-0">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile navigation">
                <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-brand">
                  Junior IAM Analyst
                </p>
                {site.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 font-mono text-sm text-ink-light transition-colors hover:bg-ink/5 hover:text-ink dark:hover:bg-ink/10"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-6">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="rounded-full bg-ink/5 p-2.5 text-ink-light transition-colors hover:bg-ink hover:text-paper"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="rounded-full bg-ink/5 p-2.5 text-ink-light transition-colors hover:bg-ink hover:text-paper"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <span className="font-mono text-[10px] text-ink-light">
                    {profile.githubHandle}
                  </span>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Back to top — Diego Yonoff, IAM portfolio"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-paper transition-transform group-hover:scale-105">
              <Fingerprint className="h-5 w-5 text-brand" aria-hidden="true" />
            </span>
            <span className="hidden font-serif text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-brand sm:inline">
              Diego Yonoff
            </span>
          </a>
        </div>

        <nav
          className="hidden items-center gap-5 font-mono text-xs font-medium tracking-wide md:flex"
          aria-label="Primary navigation"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink-light transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 font-mono text-xs font-medium text-paper transition-colors hover:bg-brand lg:inline-flex"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{profile.githubHandle}</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
