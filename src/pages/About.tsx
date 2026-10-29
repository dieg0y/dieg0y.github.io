import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Fingerprint,
  GraduationCap,
  MapPin,
  Mail,
  Github,
  Linkedin,
  CheckCircle2,
  Globe,
  Route as RouteIcon,
} from "lucide-react";
import { roadmapStats } from "../data/roadmap";

export function About() {
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
              <Fingerprint className="h-4 w-4" />
              <span>Background &amp; Mission</span>
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink md:text-6xl">
              About Diego Yonoff
            </h1>
            <p className="mt-4 text-lg text-ink-light leading-relaxed">
              Junior IAM Analyst focused on identity lifecycle management, access governance, and identity
              security — with a SOC/Blue Team foundation as a complementary skill base for ITDR.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Narrative */}
            <div className="lg:col-span-2 space-y-8 text-ink leading-relaxed">
              <section className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
                  <Fingerprint className="h-5 w-5 text-accent" />
                  <span>Professional Overview</span>
                </h2>
                <p className="text-ink-light text-base">
                  I am a Systems Engineering student at Universidad Simón Bolívar (Barranquilla, Colombia)
                  building a career in <strong>Identity &amp; Access Management (IAM)</strong>. My focus is the
                  identity lifecycle — Joiner, Mover, Leaver — together with access governance: RBAC,
                  separation of duties, least privilege and access reviews, primarily on the Microsoft
                  identity stack (Active Directory, Microsoft Entra ID, Microsoft Graph).
                </p>
                <p className="text-ink-light text-base">
                  I work with a strict evidence rule: <strong>I only claim what I can demonstrate.</strong>{" "}
                  Everything on this site maps to a public repository, a documented lab, or a verified
                  credential. My learning follows a structured{" "}
                  <strong>{roadmapStats.phases}-phase, {roadmapStats.items}-item IAM roadmap</strong> that I
                  maintain inside <a href="https://github.com/dieg0y/VAULTNOTES" target="_blank" rel="noreferrer" className="underline hover:text-accent">VAULTNOTES</a>,
                  and each of the ten planned portfolio projects will be published as it is completed —
                  never before.
                </p>
              </section>

              <section className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
                  <RouteIcon className="h-5 w-5 text-accent" />
                  <span>How I Build Evidence</span>
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-ink-light text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">A structured roadmap, not random courses.</strong> 34 phases
                      and 373 items covering identity governance, directories, protocols (SAML, OIDC, SCIM),
                      automation, IGA/PAM and ITDR.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-ink-light text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">Public, reproducible artifacts.</strong> 50 IAM operational
                      runbooks, ticket simulations, a 5-day access review campaign, and offline IAM tools —
                      all shipped inside VAULTNOTES.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-ink-light text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">SC-300 as the primary certification goal</strong> — studied
                      against the official curriculum while the roadmap builds the hands-on foundation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-ink-light text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">English at CEFR B2 (Cambridge Linguaskill, listening C1)</strong>{" "}
                      for documentation, reporting and remote team collaboration.
                    </span>
                  </li>
                </ul>
              </section>

              <section className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <span>Education &amp; SOC Background</span>
                </h2>
                <p className="text-ink-light text-base">
                  I am in the 6th semester of a <strong>BSc in Systems Engineering</strong> at Universidad
                  Simón Bolívar, where I also work as an academic tutor. Before focusing on IAM, I built a
                  practical SOC foundation — SIEM monitoring, alert triage, KQL detection queries and
                  incident investigation across Microsoft Sentinel, Defender for Endpoint and Splunk labs.
                </p>
                <p className="text-ink-light text-base">
                  That background is not my main pitch: it is the <strong>complement</strong> that makes me
                  useful to identity security teams — I understand what identity threats look like on the
                  monitoring side (ITDR), which is exactly where access governance and detection meet.
                </p>
              </section>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm space-y-4">
                <h3 className="font-serif text-xl font-bold text-ink">Quick Facts</h3>
                <div className="space-y-3 font-mono text-xs text-ink-light">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-accent shrink-0" />
                    <span>Barranquilla, Colombia (UTC-5)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="h-4 w-4 text-accent shrink-0" />
                    <span>Open to remote roles worldwide</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-accent shrink-0" />
                    <a href="mailto:diegojose0405@gmail.com" className="hover:text-accent underline break-all">
                      diegojose0405@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Github className="h-4 w-4 text-accent shrink-0" />
                    <a href="https://github.com/dieg0y" target="_blank" rel="noreferrer" className="hover:text-accent underline">
                      github.com/dieg0y
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="h-4 w-4 text-accent shrink-0" />
                    <a href="https://linkedin.com/in/diegoyonoff" target="_blank" rel="noreferrer" className="hover:text-accent underline">
                      linkedin.com/in/diegoyonoff
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 shadow-sm space-y-3">
                <h3 className="font-serif text-xl font-bold text-ink">Availability</h3>
                <p className="font-sans text-xs text-ink-light leading-relaxed">
                  Actively seeking <strong>remote Junior IAM Analyst</strong>, IAM Operations or Identity
                  Governance roles. Comfortable with international team collaboration in English (CEFR B2).
                </p>
                <a
                  href="/cv-diego-yonoff.pdf"
                  download="CV-Diego-Yonoff.pdf"
                  className="inline-block mt-2 px-4 py-2 rounded-full bg-ink text-paper font-mono text-xs font-semibold hover:bg-accent transition-colors"
                >
                  Download Curriculum Vitae (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
