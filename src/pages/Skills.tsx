import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { GraduationCap, ShieldCheck, CheckCircle2, Code2, Server, Activity, ArrowUpRight, ExternalLink } from "lucide-react";

export function Skills() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 max-w-4xl"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-3">
              <span className="font-bold text-lg">02 /</span>
              <span>Skills Matrix & Profile</span>
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink md:text-6xl mb-4">
              Skills & Education
            </h1>
          </motion.div>

          {/* Core Competencies Grid */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-ink mb-8 flex items-center gap-3 border-b border-ink/10 pb-4">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <span>Technical Skills & Core Competencies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Security Operations */}
              <div className="p-6 rounded-2xl border border-ink/10 bg-paper hover:border-accent transition-all flex flex-col justify-between group">
                <div>
                  <Link 
                    to="/blog?tag=Security Operations" 
                    className="inline-flex items-center justify-between w-full font-mono text-sm font-bold uppercase tracking-wider text-accent mb-4 group-hover:underline"
                    title="Filter blog by Security Operations"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Security Operations</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <ul className="space-y-2.5 font-mono text-xs text-ink-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Security Monitoring &amp; Triage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Incident Response (IR) Workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Threat Hunting &amp; IoC Analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <a 
                        href="https://attack.mitre.org/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-ink hover:text-accent font-semibold underline underline-offset-2 flex items-center gap-1"
                        title="Visit MITRE ATT&CK Framework"
                      >
                        <span>MITRE ATT&amp;CK Framework Mapping</span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2. SIEM & Detection */}
              <div className="p-6 rounded-2xl border border-ink/10 bg-paper hover:border-accent transition-all flex flex-col justify-between group">
                <div>
                  <Link 
                    to="/blog?tag=SIEM %26 Detection" 
                    className="inline-flex items-center justify-between w-full font-mono text-sm font-bold uppercase tracking-wider text-accent mb-4 group-hover:underline"
                    title="Filter blog by SIEM & Detection"
                  >
                    <span className="flex items-center gap-2">
                      <Server className="h-4 w-4" />
                      <span>SIEM &amp; Detection</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <ul className="space-y-2.5 font-mono text-xs text-ink-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <a 
                        href="https://learn.microsoft.com/en-us/azure/sentinel/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-ink hover:text-accent font-semibold underline underline-offset-2 flex items-center gap-1"
                      >
                        <span>Microsoft Sentinel</span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Microsoft Defender for Endpoint</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="flex items-center gap-1 flex-wrap">
                        <a href="https://www.splunk.com/" target="_blank" rel="noreferrer" className="text-ink hover:text-accent font-semibold underline underline-offset-2 inline-flex items-center gap-0.5">
                          Splunk <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                        </a>
                        <span>&amp;</span>
                        <a href="https://www.elastic.co/" target="_blank" rel="noreferrer" className="text-ink hover:text-accent font-semibold underline underline-offset-2 inline-flex items-center gap-0.5">
                          Elastic Stack <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                        </a>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Sysmon Event Instrumentation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Investigation & Analysis */}
              <div className="p-6 rounded-2xl border border-ink/10 bg-paper hover:border-accent transition-all flex flex-col justify-between group">
                <div>
                  <Link 
                    to="/blog?tag=Investigation %26 Analysis" 
                    className="inline-flex items-center justify-between w-full font-mono text-sm font-bold uppercase tracking-wider text-accent mb-4 group-hover:underline"
                    title="Filter blog by Investigation & Analysis"
                  >
                    <span className="flex items-center gap-2">
                      <Activity className="h-4 w-4" />
                      <span>Investigation &amp; Analysis</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <ul className="space-y-2.5 font-mono text-xs text-ink-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Log Correlation &amp; Event Analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Windows Event Logs &amp; Telemetry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <a 
                        href="https://www.wireshark.org/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-ink hover:text-accent font-semibold underline underline-offset-2 flex items-center gap-1"
                      >
                        <span>Network Traffic Analysis (Wireshark)</span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="flex items-center gap-1 flex-wrap">
                        <span>Threat Intel (</span>
                        <a href="https://www.virustotal.com/" target="_blank" rel="noreferrer" className="text-ink hover:text-accent font-semibold underline underline-offset-2 inline-flex items-center gap-0.5">
                          VirusTotal <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                        </a>
                        <span>,</span>
                        <a href="https://www.abuseipdb.com/" target="_blank" rel="noreferrer" className="text-ink hover:text-accent font-semibold underline underline-offset-2 inline-flex items-center gap-0.5">
                          AbuseIPDB <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                        </a>
                        <span>)</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 4. Scripting & Query Languages */}
              <div className="p-6 rounded-2xl border border-ink/10 bg-paper hover:border-accent transition-all flex flex-col justify-between group">
                <div>
                  <Link 
                    to="/blog?tag=Scripting %26 Query Languages" 
                    className="inline-flex items-center justify-between w-full font-mono text-sm font-bold uppercase tracking-wider text-accent mb-4 group-hover:underline"
                    title="Filter blog by Scripting & Query Languages"
                  >
                    <span className="flex items-center gap-2">
                      <Code2 className="h-4 w-4" />
                      <span>Scripting &amp; Query Languages</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <ul className="space-y-2.5 font-mono text-xs text-ink-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <a 
                        href="https://learn.microsoft.com/en-us/kusto/query/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-ink hover:text-accent font-semibold underline underline-offset-2 flex items-center gap-1"
                      >
                        <span>KQL (Kusto Query Language)</span>
                        <ExternalLink className="h-3 w-3 opacity-60" />
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>SPL (Splunk Processing Language)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>Python, Bash &amp; PowerShell</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>SQL Querying</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 5. Networking & Operating Systems */}
              <div className="p-6 rounded-2xl border border-ink/10 bg-paper hover:border-accent transition-all md:col-span-2 lg:col-span-2 flex flex-col justify-between group">
                <div>
                  <Link 
                    to="/blog?tag=Networking %26 Operating Systems" 
                    className="inline-flex items-center justify-between w-full font-mono text-sm font-bold uppercase tracking-wider text-accent mb-4 group-hover:underline"
                    title="Filter blog by Networking & Operating Systems"
                  >
                    <span className="flex items-center gap-2">
                      <Server className="h-4 w-4" />
                      <span>Networking & Operating Systems</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-ink-light">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>Linux & Windows Administration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>TCP/IP, UDP, DNS Protocol Suite</span>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>Subnetting (CIDR) & Routing Principles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>Active Directory Telemetry & Domain Controllers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Header Card */}
          <div className="rounded-2xl border border-ink/10 bg-ink/5 p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-ink/10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-ink text-paper">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
                    Barranquilla, Colombia
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-ink">
                    BSc Systems Engineering
                  </h2>
                  <p className="font-mono text-sm text-ink-light mt-0.5">
                    Universidad Simón Bolívar &bull; 6th Semester
                  </p>
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 font-mono text-xs font-semibold border border-emerald-500/20">
                Academic Tutor &bull; Active Student
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm text-ink-light">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Academic tutor supporting lower-semester students in computer logic and programming fundamentals.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Coursework: Computer Networks, Database Architecture, Operating Systems, Algorithm Analysis.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Strong analytical foundation in Linux/Windows system administration and TCP/IP protocol suites.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
