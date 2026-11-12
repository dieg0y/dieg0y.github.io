"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  kicker: string;
  icon?: LucideIcon;
  title: string;
  description?: string;
  id?: string;
}

export function SectionHeading({
  kicker,
  icon: Icon,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10 max-w-3xl"
    >
      <div
        id={id ? `${id}-label` : undefined}
        className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand"
      >
        {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
        <span>{kicker}</span>
      </div>
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-light sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
