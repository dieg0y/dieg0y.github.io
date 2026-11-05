"use client";

import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  Mail,
  MapPin,
  Github,
  Linkedin,
  KeyRound,
  ShieldCheck,
  SearchCheck,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { education, profile } from "@/data/portfolio";

const PILLARS = [
  {
    icon: KeyRound,
    title: "What I'm building toward",
    text: "A junior IAM analyst seat on a remote identity team — lifecycle operations, access reviews, RBAC maintenance, and the daily hygiene that keeps a directory trustworthy.",
  },
  {
    icon: SearchCheck,
    title: "How I work",
    text: "Evidence-first. I authored a 34-phase roadmap with exit criteria per item, and I tag every skill claim I make as hands-on, working knowledge, or foundational — with the reasoning visible on this site.",
  },
  {
    icon: ShieldCheck,
    title: "Where the SOC background fits",
    text: "I keep Blue Team fundamentals deliberately, not as a second identity: they are what make identity work defensible — understanding how stolen credentials, MFA fatigue, and token abuse actually get investigated (ITDR).",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-label" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          id="about"
          kicker="Background & Mission"
          icon={Compass}
          title="About"
          description="A Systems Engineering student repositioning from general security operations into Identity and Access Management — and doing it transparently."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {PILLARS.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-colors hover:border-brand/40 sm:p-7"
              >
                <h3 className="mb-2 flex items-center gap-2.5 font-serif text-xl font-bold text-ink">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10">
                    <pillar.icon className="h-4.5 w-4.5 text-brand" aria-hidden="true" />
                  </span>
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-light sm:text-base">
                  {pillar.text}
                </p>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:p-7"
            >
              <p className="text-sm leading-relaxed text-ink-light sm:text-base">
                <strong className="font-semibold text-ink">
                  An honest status note:
                </strong>{" "}
                I have not held a professional IAM role yet. Everything on this
                site is personal study, academic work, or self-built labs — and
                each of those is labeled as exactly that. I would rather show a
                recruiter verifiable evidence at the right level than an
                inflated title that falls apart in the first technical
                interview.
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 font-serif text-lg font-bold text-ink">
                Quick facts
              </h3>
              <ul className="space-y-3 font-mono text-xs text-ink-light">
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    {profile.location} ({profile.timezone})
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="underline decoration-brand/40 underline-offset-2 transition-colors hover:text-brand"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Github className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-brand/40 underline-offset-2 transition-colors hover:text-brand"
                  >
                    github.com/dieg0y
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Linkedin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-brand/40 underline-offset-2 transition-colors hover:text-brand"
                  >
                    linkedin.com/{profile.linkedinHandle}
                  </a>
                </li>
              </ul>
            </motion.aside>

            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm"
            >
              <h3 className="mb-3 flex items-center gap-2 font-serif text-lg font-bold text-ink">
                <GraduationCap className="h-5 w-5 text-brand" aria-hidden="true" />
                Education
              </h3>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                {education.location}
              </p>
              <p className="font-serif text-lg font-bold text-ink">
                {education.degree}
              </p>
              <p className="mt-0.5 font-mono text-xs text-ink-light">
                {education.school} · {education.period}
              </p>
              <ul className="mt-4 space-y-2 text-xs leading-relaxed text-ink-light">
                {education.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.aside>

            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="rounded-2xl border border-emerald-600/25 bg-emerald-600/5 p-6"
            >
              <h3 className="font-serif text-lg font-bold text-ink">
                Availability
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-light">
                Actively seeking a first{" "}
                <strong className="font-semibold text-ink">
                  remote Junior IAM Analyst
                </strong>{" "}
                role — identity lifecycle operations, access governance support,
                or IAM-adjacent service desk with an identity team. Remote-first,
                with flexible overlap for international time zones.
              </p>
              <a
                href={profile.cvUrl}
                download="CV_Diego_Yonoff_IAM.pdf"
                className="mt-3 inline-block rounded-full bg-ink px-4 py-2 font-mono text-xs font-semibold text-paper transition-colors hover:bg-brand"
              >
                Download CV (PDF)
              </a>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}
