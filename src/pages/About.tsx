import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Shield, Terminal, Server, Cpu, MapPin, Mail, Github, Linkedin, CheckCircle2 } from "lucide-react";

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
              <Shield className="h-4 w-4" />
              <span>Background & Mission</span>
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink md:text-6xl">
              About Diego Yonoff
            </h1>
            <p className="mt-4 text-lg text-ink-light leading-relaxed">
              SOC Analyst focused on blue team operations, threat detection, log correlation, and incident investigation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Narrative */}
            <div className="lg:col-span-2 space-y-8 text-ink leading-relaxed">
              <section className="rounded-2xl border border-ink/10 bg-paper p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-accent" />
                  <span>Professional Overview</span>
                </h2>
                <p className="text-ink-light text-base">
                  I am a dedicated Security Operations Center (SOC) Analyst based in Barranquilla, Colombia, specializing in monitoring enterprise environments, triaging security events, and performing structured incident investigations.
                </p>
                <p className="text-ink-light text-base">
                  My background bridges practical lab experience with formal security frameworks. I am passionate about understanding attacker TTPs (Tactics, Techniques, and Procedures) as mapped in the <strong>MITRE ATT&CK</strong> framework and turning those insights into actionable KQL detection rules and defensive playbooks.
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
                    <Mail className="h-4 w-4 text-accent shrink-0" />
                    <a href="mailto:diegojose0405@gmail.com" className="hover:text-accent underline">
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
                  Actively seeking Junior SOC Analyst, L1 Threat Detection, or Blue Team Operations roles. Open to remote opportunities worldwide.
                </p>
                <a
                  href="/cv-diego-yonoff.pdf"
                  target="_blank"
                  rel="noreferrer"
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

