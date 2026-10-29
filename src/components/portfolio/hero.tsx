"use client";

import { motion } from "framer-motion";
import {
  Download,
  Fingerprint,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";
import { profile } from "@/data/portfolio";

const SPEC_ROWS: { label: string; value: string }[] = [
  { label: "Focus", value: "Identity & Access Management" },
  { label: "Directory", value: "Active Directory · Microsoft Entra ID" },
  { label: "Governance", value: "JML · RBAC · Access Reviews · SoD" },
  { label: "Protocols", value: "OAuth 2.0 / OIDC · SAML · SCIM · JWT" },
  { label: "Complementary", value: "Identity Security / ITDR (SOC base)" },
];

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 70% 10%, color-mix(in oklab, var(--brand) 12%, transparent), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-10 md:flex-row md:items-stretch lg:gap-14"
        >
          {/* Identity card */}
          <div className="w-full md:w-5/12">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/15 bg-[#16130e] p-6 text-[#f2eee6] shadow-2xl">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #f2eee6 1px, transparent 1px), linear-gradient(to bottom, #f2eee6 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between border-b border-[#f2eee6]/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                    Identity &amp; Access · Active
                  </span>
                </div>
                <Fingerprint className="h-4 w-4 text-[#e0855f]" aria-hidden="true" />
              </div>

              <div className="relative space-y-1 pt-4">
                <h2 className="font-serif text-xl font-bold tracking-tight">
                  {profile.fullName}
                </h2>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e0855f]">
                  {profile.role}
                </p>
              </div>

              <dl className="relative space-y-2.5 pt-4">
                {SPEC_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#f2eee6]/10 pb-2"
                  >
                    <dt className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#f2eee6]/60">
                      {row.label}
                    </dt>
                    <dd className="text-right font-mono text-[11px] font-medium text-[#f2eee6]/90">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="relative mt-auto flex items-center justify-between pt-4 font-mono text-[11px] text-[#f2eee6]/65">
                <span>IAM_OPS // IDENTITY_SECURITY</span>
                <span>Barranquilla, CO</span>
              </div>
            </div>
          </div>

          {/* Intro column */}
          <div className="flex w-full flex-col justify-center md:w-7/12">
            <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-ink-light">
                <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                <span>Barranquilla, Colombia</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/25 bg-emerald-600/10 px-3 py-1 text-emerald-700 dark:text-emerald-400">
                <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Open to remote · UTC-5</span>
              </span>
            </div>

            <h1 className="mb-2 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <div className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-brand">
              {profile.role} — {profile.focus}
            </div>

            <p className="mb-6 border-l-2 border-brand py-1 pl-4 text-base leading-relaxed text-ink-light sm:text-lg">
              {profile.summary}
            </p>

            <div className="mb-8 flex flex-wrap items-start gap-2.5">
              {profile.positioning.map((line) => (
                <p
                  key={line}
                  className="flex items-start gap-2 font-mono text-[11px] leading-relaxed text-ink-light/90"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  {line}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href={profile.cvUrl}
                download="CV_Diego_Yonoff_IAM.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-paper shadow-md transition-colors hover:bg-brand"
              >
                <Download className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>Email me</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <Github className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 font-medium text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <Linkedin className="h-4 w-4 text-brand" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
