"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  Compass,
  GraduationCap,
  KeyRound,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  ShieldCheck,
  FileText,
  Download,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { PdfViewer } from "./pdf-viewer";
import { education, experience, profile } from "@/data/portfolio";

/* The three chapters of my background, in the order recruiters ask for them. */
const CHAPTERS = [
  {
    icon: GraduationCap,
    title: "Systems engineering background",
    text: "I'm Diego Yonoff — a Systems Engineering student at Universidad Simón Bolívar in Barranquilla, Colombia, currently in my sixth semester. My coursework sits on the layers identity systems actually run on: computer networks, database architecture, operating systems, and algorithm analysis. Since 2024 I also work as an academic tutor for the program, teaching computer logic and programming fundamentals to lower-semester students — my first accountable role for explaining technical material clearly.",
  },
  {
    icon: ShieldCheck,
    title: "Security analyst (SOC) background",
    text: "My path into security started on the defensive side. I trained as a security analyst through Blue Team labs — brute force, privilege escalation, and lateral movement detection with Windows Event Logs, Sysmon, and MITRE ATT&CK mapping, plus alert triage and escalation documentation. I also wrote a public guide on how a SOC is organized (you can read it in my blogs). That's where I learned how identity failures actually get investigated.",
  },
  {
    icon: KeyRound,
    title: "Where I'm focused: IAM",
    text: "Today I'm focused on Identity and Access Management. I study the identity lifecycle end to end — joiner/mover/leaver, RBAC and least privilege, access reviews, and identity governance — alongside the Microsoft identity stack (Active Directory, Entra ID) and the protocols that move identity between systems (OAuth 2.0/OIDC, SAML, SCIM, JWT). I built VaultNotes to study IAM the way the job actually works, and I'm currently studying toward the SC-300 and Security+ certifications.",
  },
];

export function AboutView() {
  const [cvOpen, setCvOpen] = React.useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        kicker="Background & Mission"
        icon={Compass}
        title="About me"
        description="Systems engineering student and SOC-trained security analyst from Barranquilla, focused on Identity and Access Management — and doing it transparently."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {CHAPTERS.map((chapter, i) => (
            <motion.article
              key={chapter.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-colors hover:border-brand/40 sm:p-7"
            >
              <h2 className="mb-2 flex items-center gap-2.5 font-serif text-xl font-bold text-ink">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10">
                  <chapter.icon className="h-4.5 w-4.5 text-brand" aria-hidden="true" />
                </span>
                {chapter.title}
              </h2>
              <p className="text-sm leading-relaxed text-ink-light sm:text-base">
                {chapter.text}
              </p>
            </motion.article>
          ))}

          {/* Formal experience — the tutoring engagement, labeled as exactly what it is */}
          {experience.map((item, i) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-colors hover:border-brand/40 sm:p-7"
            >
              <div className="flex flex-col justify-between gap-3 border-b border-ink/10 pb-5 sm:flex-row sm:items-center">
                <div>
                  <p className="mb-1 flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-brand">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.org} · {item.kind}
                  </p>
                  <h3 className="font-serif text-xl font-bold leading-snug text-ink">
                    {item.role}
                  </h3>
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
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
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
              <li className="flex items-center gap-2.5">
                <BookOpen className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a
                  href="#/blog"
                  className="underline decoration-brand/40 underline-offset-2 transition-colors hover:text-brand"
                >
                  My blogs
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
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCvOpen(true)}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs font-semibold text-paper transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <FileText className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                <span>View CV</span>
              </button>
              <a
                href={profile.cvUrl}
                download="CV_Diego_Yonoff_IAM.pdf"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 font-mono text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Download className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                <span>Download</span>
              </a>
            </div>
          </motion.aside>
        </div>
      </div>

      <PdfViewer
        open={cvOpen}
        src={profile.cvUrl}
        title="CV — Diego Yonoff · Junior IAM Analyst"
        downloadName="CV_Diego_Yonoff_IAM.pdf"
        onClose={() => setCvOpen(false)}
      />
    </div>
  );
}
