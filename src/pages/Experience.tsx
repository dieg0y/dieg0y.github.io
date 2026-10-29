import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  CheckCircle2,
  MapPin,
  Calendar,
  Route as RouteIcon,
  KeyRound,
  ShieldCheck,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { roadmapStats } from "../data/roadmap";

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
              Academic and hands-on experience in identity &amp; access management, application security, and
              defensive operations — presented exactly as it is: academic tutoring, self-driven IAM projects,
              and complementary SOC training.
            </p>
          </motion.div>

          {/* Timeline Experience Cards */}
          <div className="space-y-8">
            {/* Card 1: IAM & Identity Security learning path */}
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
                    <RouteIcon className="h-4 w-4" />
                    <span>Identity &amp; Access Management — Self-Driven Path</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink">
                    IAM Analyst Training &amp; VAULTNOTES
                  </h2>
                </div>
                <div className="flex flex-col sm:items-end font-mono text-xs text-ink-light gap-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    <span>2026 &ndash; Present</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>Barranquilla, Colombia</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3 font-sans text-ink-light text-sm leading-relaxed">
                <p className="font-medium text-ink">
                  Structured, evidence-first training for Junior IAM Analyst roles — built and maintained as a
                  public product:
                </p>
                <ul className="space-y-2.5 pt-1">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Designed and maintain a <strong>{roadmapStats.phases}-phase, {roadmapStats.items}-item IAM roadmap</strong>{" "}
                      covering identity governance, Active Directory/Entra ID, SSO &amp; federation (SAML, OIDC, SCIM),
                      automation, IGA/PAM and ITDR.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Shipped <strong>VAULTNOTES</strong>, a local-first PWA where the IAM pillar includes 50
                      ticket simulations, 50 knowledge-base articles, <strong>50 operational runbooks</strong>
                      (JML onboarding/offboarding, MFA resets, contractor revocation) and 30 troubleshooting guides.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Built a <strong>5-day Access Review campaign simulation</strong> — role attestation,
                      third-party access, SoD conflicts, privileged access and closing metrics.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Studying the <strong>Microsoft SC-300</strong> curriculum (Identity and Access
                      Administrator) as the primary certification goal.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-ink/10 flex items-center justify-between">
                <span className="font-mono text-xs text-ink-light">
                  All artifacts are public and verifiable.
                </span>
                <a
                  href="https://github.com/dieg0y/VAULTNOTES"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent hover:underline"
                >
                  <span>Open VAULTNOTES on GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>

            {/* Card 2: Academic Tutor */}
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
                    <GraduationCap className="h-4 w-4" />
                    <span>Universidad Sim&oacute;n Bol&iacute;var</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink">
                    Academic Tutor &amp; Mentorship
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
                  Selected as Academic Tutor for lower-semester Systems Engineering students in Computer Logic &amp; Programming Fundamentals:
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

            {/* Card 3: Application Security — Plazoleta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm hover:border-accent transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-ink/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider mb-1">
                    <KeyRound className="h-4 w-4" />
                    <span>Application Security &mdash; Academic Project</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink">
                    Authentication &amp; Role-Based Access (Plazoleta)
                  </h2>
                </div>
                <div className="flex flex-col sm:items-end font-mono text-xs text-ink-light gap-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    <span>Academic &bull; Completed</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>Universidad Sim&oacute;n Bol&iacute;var</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3 font-sans text-ink-light text-sm leading-relaxed">
                <p className="font-medium text-ink">
                  Academic microservices implementing real authentication and authorization patterns:
                </p>
                <ul className="space-y-2.5 pt-1">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Built a <strong>user authentication microservice</strong> with Spring Security and signed{" "}
                      <strong>JWT</strong> tokens (<a href="https://github.com/dieg0y/plazoleta-usuarios" target="_blank" rel="noreferrer" className="underline hover:text-accent">plazoleta-usuarios</a>).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Implemented <strong>role-based endpoint authorization</strong> on business operations and
                      service-to-service integration (<a href="https://github.com/dieg0y/plazoleta-restaurante" target="_blank" rel="noreferrer" className="underline hover:text-accent">plazoleta-restaurante</a>).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Practiced the same concepts I now study formally for IAM governance: least-privilege
                      endpoint access and role definitions.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 4: SOC — complementary */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm hover:border-accent transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-ink/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-light uppercase tracking-wider mb-1">
                    <Briefcase className="h-4 w-4" />
                    <span>Complementary Competency &mdash; SOC / Defensive Security</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-ink">
                    Security Operations &amp; Threat Monitoring (Lab Practice)
                  </h2>
                </div>
                <div className="flex flex-col sm:items-end font-mono text-xs text-ink-light gap-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                    <span>Practical Training</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>Home lab &bull; HTB / SC-200 labs</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3 font-sans text-ink-light text-sm leading-relaxed">
                <p className="font-medium text-ink">
                  Hands-on SOC practice — the monitoring-side foundation that complements my IAM focus for
                  identity threat detection (ITDR):
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
                    <span>Investigated indicators of compromise (IoCs) and mapped attacker behavior to the <strong>MITRE ATT&amp;CK</strong> framework — including identity-centric techniques like credential dumping and lateral movement.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-ink/10 flex items-center justify-between">
                <span className="font-mono text-xs text-ink-light">
                  Detailed lab writeups available in the Blog.
                </span>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent hover:underline"
                >
                  <span>View writeups in Blog &rarr;</span>
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
