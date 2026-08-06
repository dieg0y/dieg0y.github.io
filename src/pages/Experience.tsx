import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { ShieldCheck, GraduationCap, CheckCircle2, ArrowRight, MapPin, Calendar, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-3">
              <span className="font-bold text-lg">01 /</span>
              <span>Professional Profile</span>
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl mb-4">
              Experience
            </h1>
            <p className="text-lg text-ink-light leading-relaxed max-w-2xl">
              Academic leadership and practical hands-on experience in security operations, threat triage, and defensive security.
            </p>
          </motion.div>

          {/* Timeline Experience Cards */}
          <div className="space-y-8">
            {/* Card 1: Academic Tutor */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm hover:border-accent transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-ink/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider mb-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>Universidad Simón Bolívar</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink">
                    Academic Tutor & Mentorship
                  </h2>
                </div>
                <div className="flex flex-col sm:items-end font-mono text-xs text-ink-light gap-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    <span>2024 &ndash; Present</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>Barranquilla, Colombia</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3 font-sans text-ink-light text-sm leading-relaxed">
                <p className="font-medium text-ink">
                  Selected as Academic Tutor for lower-semester Systems Engineering students in Computer Logic & Programming Fundamentals:
                </p>
                <ul className="space-y-2.5 pt-1">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Mentored students in algorithm design, object-oriented logic, and data structure principles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Guided practical laboratory exercises on Linux CLI, system administration, and network fundamentals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Demonstrated technical communication and structured problem-solving skills in high-accountability academic settings.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Security Operations & Threat Monitoring */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm hover:border-accent transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-ink/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider mb-1">
                    <Briefcase className="h-4 w-4" />
                    <span>Security Operations & Threat Analysis</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink">
                    SOC Security Operations & Defensive Security
                  </h2>
                </div>
                <div className="flex flex-col sm:items-end font-mono text-xs text-ink-light gap-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                    <span>Practical Training</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>Barranquilla, Colombia</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3 font-sans text-ink-light text-sm leading-relaxed">
                <p className="font-medium text-ink">
                  Practical SOC experience in threat monitoring, alert triage, log correlation, and incident response workflows:
                </p>
                <ul className="space-y-2.5 pt-1">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Analyzed security telemetry using <strong>Microsoft Sentinel</strong>, <strong>Microsoft Defender for Endpoint</strong>, and <strong>Splunk</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Wrote custom <strong>KQL</strong> and <strong>SPL</strong> queries to detect brute force attacks, credential access, and malicious process execution.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Investigated indicators of compromise (IoCs) and mapped attacker behavior to the <strong>MITRE ATT&CK</strong> framework.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-ink/10 flex items-center justify-between">
                <span className="font-mono text-xs text-ink-light">
                  Detailed incident writeups and lab reports available in the Blog.
                </span>
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent hover:underline"
                >
                  <span>View Writeups in Blog &rarr;</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
