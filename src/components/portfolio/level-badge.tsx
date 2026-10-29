"use client";

import { cn } from "@/lib/utils";
import { LEVEL_META, type SkillLevel } from "@/data/portfolio";

const LEVEL_STYLES: Record<SkillLevel, string> = {
  "hands-on": "bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border-emerald-600/25",
  working: "bg-brand/10 text-brand border-brand/30",
  foundational:
    "bg-ink/5 text-ink-light border-ink/15 dark:bg-ink/10 dark:text-ink-light",
};

const LEVEL_DOTS: Record<SkillLevel, string> = {
  "hands-on": "bg-emerald-500",
  working: "bg-brand",
  foundational: "bg-ink-light/60",
};

export function LevelBadge({
  level,
  className,
}: {
  level: SkillLevel;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider",
        LEVEL_STYLES[level],
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", LEVEL_DOTS[level])} aria-hidden="true" />
      {LEVEL_META[level].label}
    </span>
  );
}
