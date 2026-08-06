import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Award, ArrowUpRight, CheckCircle2, ShieldCheck, ExternalLink, X, FileText } from "lucide-react";

export function Certifications() {
  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 max-w-3xl"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-3">
              <span className="font-bold text-lg">03 /</span>
              <span>Professional Credentials</span>
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink md:text-6xl">
              Certifications & Badges
            </h1>
            <p className="mt-4 text-lg text-ink-light leading-relaxed">
              Official certifications validating SOC operational skills, Microsoft Security stack expertise, and language proficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cert 1: SC-200 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-ink/10 bg-paper p-8 flex flex-col justify-between hover:border-accent transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20">
                    In Progress
                  </span>
                  <span className="font-mono text-xs text-ink-light font-semibold">Microsoft</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-ink mb-3">
                  Microsoft SC-200
                </h2>
                <h3 className="font-mono text-sm text-accent font-semibold mb-4">
                  Security Operations Analyst Associate
                </h3>
                <p className="text-sm text-ink-light leading-relaxed mb-6">
                  Studying detection engineering, threat hunting with KQL, and incident response workflows across the Microsoft Defender for Endpoint and Microsoft Sentinel cloud SIEM ecosystem.
                </p>

                <div className="bg-ink/5 p-4 rounded-xl border border-ink/10 font-mono text-xs text-ink-light space-y-1.5 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Mitigate threats using Microsoft Sentinel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Mitigate threats using Microsoft Defender XDR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Perform KQL log queries & detection tuning</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-ink/10">
                <a 
                  href="https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent hover:underline"
                >
                  <span>Microsoft SC-200 Curriculum & Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Cert 2: Linguaskill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-ink/10 bg-paper p-8 flex flex-col justify-between hover:border-accent transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 border border-emerald-500/20">
                    Verified B2 Certificate
                  </span>
                  <span className="font-mono text-xs text-ink-light font-semibold">Cambridge English</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-ink mb-3">
                  Linguaskill General B2
                </h2>
                <h3 className="font-mono text-sm text-accent font-semibold mb-4">
                  Cambridge Assessment English (Average Score: 172)
                </h3>
                
                {/* Score Breakdown Pills */}
                <div className="grid grid-cols-2 gap-2 font-mono text-xs mb-6">
                  <div className="p-2.5 rounded-lg bg-ink/5 border border-ink/10 flex justify-between items-center">
                    <span className="text-ink-light">Listening:</span>
                    <span className="font-bold text-emerald-700">180+ (C1)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-ink/5 border border-ink/10 flex justify-between items-center">
                    <span className="text-ink-light">Reading:</span>
                    <span className="font-bold text-ink">177 (B2)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-ink/5 border border-ink/10 flex justify-between items-center">
                    <span className="text-ink-light">Writing:</span>
                    <span className="font-bold text-ink">169 (B2)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-ink/5 border border-ink/10 flex justify-between items-center">
                    <span className="text-ink-light">Speaking:</span>
                    <span className="font-bold text-ink">158 (B1)</span>
                  </div>
                </div>

                <p className="text-sm text-ink-light leading-relaxed mb-6">
                  Official Cambridge-certified English proficiency at CEFR B2 level (Listening C1). Validates my capacity to conduct security incident response, write incident triage reports, and communicate seamlessly in international, remote SOC teams.
                </p>

                <div className="bg-ink/5 p-4 rounded-xl border border-ink/10 font-mono text-xs text-ink-light space-y-1.5 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Technical incident reporting & documentation in English</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Fluent verbal and written security communications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Remote-team collaboration across global time zones</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-ink/10">
                <button 
                  onClick={() => setShowReportModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-paper font-mono text-xs font-semibold hover:bg-accent transition-colors shadow-sm"
                >
                  <FileText className="h-3.5 w-3.5 text-accent" />
                  <span>View Official Cambridge Test Report &rarr;</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* CAMBRIDGE LINGUASKILL TEST REPORT MODAL */}
      <AnimatePresence>
        {showReportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReportModal(false)}
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label="Cambridge Linguaskill Test Report"
              className="relative w-full max-w-2xl rounded-2xl bg-paper p-6 sm:p-8 shadow-2xl border border-ink/10 max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-ink/10 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
                    Cambridge Assessment English
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    Linguaskill Test Report
                  </h3>
                </div>
                <button
                  onClick={() => setShowReportModal(false)}
                  aria-label="Close modal"
                  className="p-2 text-ink-light hover:text-ink transition-colors rounded-md hover:bg-ink/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Candidate Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs bg-ink/5 p-4 rounded-xl border border-ink/10 mb-6">
                <div>
                  <span className="text-ink-light text-[10px] block">Candidate Name:</span>
                  <span className="font-bold text-ink">Diego Yonoff</span>
                </div>
                <div>
                  <span className="text-ink-light text-[10px] block">Credential Status:</span>
                  <span className="font-bold text-emerald-700">Official / Verified</span>
                </div>
                <div>
                  <span className="text-ink-light text-[10px] block">Organisation:</span>
                  <span className="font-bold text-ink">Open English</span>
                </div>
                <div>
                  <span className="text-ink-light text-[10px] block">Centre / Ref No:</span>
                  <span className="font-bold text-ink">UX790</span>
                </div>
                <div>
                  <span className="text-ink-light text-[10px] block">Test Exam:</span>
                  <span className="font-bold text-ink">Linguaskill General</span>
                </div>
              </div>

              {/* CEFR Overall Badge */}
              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-between mb-6">
                <div>
                  <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
                    Average Score & CEFR Level
                  </span>
                  <span className="font-serif text-3xl font-bold text-ink">
                    172 <span className="text-lg font-sans font-normal text-accent">(CEFR Level B2)</span>
                  </span>
                </div>
                <span className="px-4 py-2 rounded-full bg-accent text-paper font-mono text-sm font-bold shadow-sm">
                  Verified B2
                </span>
              </div>

              {/* Skill Scores Table */}
              <div className="space-y-4 font-mono text-xs mb-6">
                <h4 className="font-serif text-base font-bold text-ink border-b border-ink/10 pb-2">
                  Skill Breakdown
                </h4>

                {/* Listening */}
                <div className="p-3 rounded-lg border border-ink/10 bg-paper space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-ink">Listening</span>
                    <span className="text-emerald-700 font-bold">Score: 180+ &bull; Level C1 or above</span>
                  </div>
                  <div className="w-full bg-ink/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[95%] rounded-full"></div>
                  </div>
                  <p className="text-[11px] text-ink-light font-sans pt-1">
                    Can understand complex technical discussions, security briefings, and incident telephone calls at natural native speed.
                  </p>
                </div>

                {/* Reading */}
                <div className="p-3 rounded-lg border border-ink/10 bg-paper space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-ink">Reading</span>
                    <span className="text-accent font-bold">Score: 177 &bull; Level B2</span>
                  </div>
                  <div className="w-full bg-ink/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-[82%] rounded-full"></div>
                  </div>
                  <p className="text-[11px] text-ink-light font-sans pt-1">
                    Can read complex technical documentation, threat intel reports, and SIEM logs accurately.
                  </p>
                </div>

                {/* Writing */}
                <div className="p-3 rounded-lg border border-ink/10 bg-paper space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-ink">Writing</span>
                    <span className="text-accent font-bold">Score: 169 &bull; Level B2</span>
                  </div>
                  <div className="w-full bg-ink/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-[75%] rounded-full"></div>
                  </div>
                  <p className="text-[11px] text-ink-light font-sans pt-1">
                    Can write detailed incident triage writeups, ticket notes, and clear email communications.
                  </p>
                </div>

                {/* Speaking */}
                <div className="p-3 rounded-lg border border-ink/10 bg-paper space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-ink">Speaking</span>
                    <span className="text-ink font-bold">Score: 158 &bull; Level B1</span>
                  </div>
                  <div className="w-full bg-ink/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-ink/60 h-full w-[65%] rounded-full"></div>
                  </div>
                  <p className="text-[11px] text-ink-light font-sans pt-1">
                    Can communicate operational status and participate effectively in daily standups and SOC handovers.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-ink/10 flex justify-between items-center">
                <span className="font-mono text-[10px] text-ink-light">
                  Cambridge Assessment English &bull; Linguaskill
                </span>
                <button
                  onClick={() => setShowReportModal(false)}
                  className="px-5 py-2 rounded-full bg-ink text-paper font-mono text-xs font-semibold hover:bg-accent transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
