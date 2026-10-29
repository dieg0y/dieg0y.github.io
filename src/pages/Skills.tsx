import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GraduationCap, CheckCircle2, ExternalLink } from "lucide-react";
import {
  ArrowRightLeft,
  Scale,
  Database,
  KeyRound,
  Workflow,
  Building2,
  ShieldCheck,
  Server,
  Code2,
  BadgeCheck,
  CircleDot,
  Sprout as FoundationalIcon,
} from "lucide-react";

type SkillLevel = "hands-on" | "working" | "foundational";

interface Skill {
  name: string;
  level: SkillLevel;
  note?: string;
  href?: string;
}

interface SkillDomain {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

const levelMeta: Record<SkillLevel, { label: string; badge: string; icon: React.ComponentType<{ className?: string }> }> = {
  "hands-on": {
    label: "Hands-on",
    badge: "bg-emerald-500/10 text-emerald-800 border border-emerald-500/20",
    icon: BadgeCheck,
  },
  working: {
    label: "Working knowledge",
    badge: "bg-amber-500/10 text-amber-800 border border-amber-500/20",
    icon: CircleDot,
  },
  foundational: {
    label: "Foundational",
    badge: "bg-ink/5 text-ink-light border border-ink/10",
    icon: FoundationalIcon,
  },
};

const domains: SkillDomain[] = [
  {
    id: "lifecycle",
    title: "Identity Lifecycle (JML)",
    subtitle: "Joiner · Mover · Leaver operations",
    icon: ArrowRightLeft,
    skills: [
      { name: "JML workflows (provisioning, transfers, deprovisioning)", level: "foundational", note: "50 operational runbooks shipped in VAULTNOTES" },
      { name: "Orphaned & stale account detection", level: "foundational" },
      { name: "Access requests & temporary access with expiry", level: "foundational" },
      { name: "Guest / third-party identity handling", level: "foundational" },
    ],
  },
  {
    id: "governance",
    title: "Access Governance (IGA)",
    subtitle: "Who has access to what — and why",
    icon: Scale,
    skills: [
      { name: "RBAC — role definitions & entitlements", level: "foundational", note: "role-based authorization practiced in academic APIs" },
      { name: "Separation of Duties (SoD) & toxic combinations", level: "foundational" },
      { name: "Access reviews / certifications", level: "foundational", note: "5-day campaign simulation in VAULTNOTES" },
      { name: "Least privilege & privilege granting/revoking", level: "foundational" },
      { name: "Identity hygiene & cleanup campaigns", level: "foundational" },
    ],
  },
  {
    id: "directories",
    title: "Directories & Identity Platforms",
    subtitle: "Where identities live",
    icon: Database,
    skills: [
      { name: "Active Directory — users, groups, domain controllers", level: "working", note: "DC telemetry & security event analysis in SOC labs" },
      { name: "Windows security auditing (Event IDs 4624, 4720, 4740…)", level: "working" },
      { name: "LDAP / directory services concepts", level: "foundational" },
      { name: "Microsoft Entra ID — users, groups, app registrations", level: "foundational", href: "https://learn.microsoft.com/entra/identity/" },
      { name: "Conditional Access & MFA concepts", level: "foundational" },
    ],
  },
  {
    id: "protocols",
    title: "Identity Protocols & SSO",
    subtitle: "How identities authenticate and federate",
    icon: KeyRound,
    skills: [
      { name: "JWT — signing, validation, claims", level: "hands-on", note: "implemented with Spring Security (plazoleta-usuarios)" },
      { name: "OAuth 2.0 / OpenID Connect (Auth Code + PKCE)", level: "foundational" },
      { name: "SAML — metadata, ACS URL, certificate troubleshooting", level: "foundational" },
      { name: "SCIM 2.0 provisioning model", level: "foundational" },
    ],
  },
  {
    id: "automation",
    title: "Automation & APIs",
    subtitle: "Doing IAM at scale",
    icon: Workflow,
    skills: [
      { name: "Python", level: "hands-on", href: "https://github.com/dieg0y/IPsubnetting", note: "public CLI tool + academic services" },
      { name: "TypeScript / React / Next.js", level: "hands-on", href: "https://github.com/dieg0y/VAULTNOTES", note: "VAULTNOTES PWA" },
      { name: "PowerShell", level: "working", note: "IAM automation focus (roadmap Phase 11)" },
      { name: "Microsoft Graph API", level: "foundational", href: "https://learn.microsoft.com/graph/", note: "read-only audit toolkit planned" },
      { name: "Bash & SQL querying", level: "working" },
    ],
  },
  {
    id: "iga-pam",
    title: "IGA & PAM",
    subtitle: "Enterprise identity tooling",
    icon: Building2,
    skills: [
      { name: "IGA concepts — SailPoint / Saviynt / Entra ID Governance", level: "foundational" },
      { name: "PAM concepts — Safeguard, CyberArk, BeyondTrust, Delinea", level: "foundational" },
      { name: "Okta Workforce Identity", level: "foundational" },
      { name: "GRC, compliance & audit evidence", level: "foundational" },
    ],
  },
  {
    id: "identity-security",
    title: "Identity Security & ITDR",
    subtitle: "Protecting the identity plane",
    icon: ShieldCheck,
    skills: [
      { name: "KQL (Kusto Query Language)", level: "working", href: "https://learn.microsoft.com/kusto/query/" },
      { name: "SIEM — Microsoft Sentinel & Splunk", level: "working" },
      { name: "Identity threat detection (ITDR) concepts", level: "foundational" },
      { name: "Zero Trust & identity-centric architecture", level: "foundational" },
      { name: "Cloud IAM concepts — AWS IAM / Azure roles", level: "foundational" },
    ],
  },
];

const complementary: SkillDomain = {
  id: "complementary",
  title: "Complementary Base",
  subtitle: "SOC / Blue Team & infrastructure",
  icon: Server,
  skills: [
    { name: "Security monitoring & alert triage", level: "working" },
    { name: "Incident investigation & MITRE ATT&CK mapping", level: "working", href: "https://attack.mitre.org/" },
    { name: "Linux & Windows administration", level: "working" },
    { name: "TCP/IP, DNS & subnetting (CIDR)", level: "working" },
    { name: "Network traffic analysis (Wireshark)", level: "working", href: "https://www.wireshark.org/" },
    { name: "Java / Spring Boot", level: "working", note: "academic microservices" },
    { name: "Git & GitHub workflows", level: "hands-on" },
  ],
};

function SkillLevelBadge({ level }: { level: SkillLevel }) {
  const meta = levelMeta[level];
  const Icon = meta.icon;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold whitespace-nowrap ${meta.badge}`}>
      <Icon className="h-3 w-3" />
      <span>{meta.label}</span>
    </span>
  );
}

function DomainCard({ domain, wide }: { domain: SkillDomain; wide?: boolean }) {
  const Icon = domain.icon;
  return (
    <div className={`p-6 rounded-2xl border border-ink/10 bg-paper hover:border-accent transition-all flex flex-col justify-between group ${wide ? "md:col-span-2 lg:col-span-2" : ""}`}>
      <div>
        <div className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider text-accent mb-1">
          <Icon className="h-4 w-4" />
          <span>{domain.title}</span>
        </div>
        <p className="font-mono text-[11px] text-ink-light mb-4">{domain.subtitle}</p>
        <ul className="space-y-2.5">
          {domain.skills.map((skill) => (
            <li key={skill.name} className="flex flex-col gap-1">
              <div className="flex items-start justify-between gap-2">
                <span className="flex items-start gap-2 font-mono text-xs text-ink">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  {skill.href ? (
                    <a
                      href={skill.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent underline underline-offset-2 inline-flex items-center gap-1"
                    >
                      {skill.name}
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </a>
                  ) : (
                    <span>{skill.name}</span>
                  )}
                </span>
                <SkillLevelBadge level={skill.level} />
              </div>
              {skill.note && (
                <span className="pl-6 font-sans text-[11px] text-ink-light">{skill.note}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
            className="mb-10 max-w-4xl"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-3">
              <span className="font-bold text-lg">02 /</span>
              <span>Skills Matrix &amp; Profile</span>
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink md:text-6xl mb-4">
              Skills &amp; Education
            </h1>
            <p className="text-lg text-ink-light leading-relaxed">
              IAM skills organized by the identity domain — with an honest proficiency scale instead of
              arbitrary percentage bars.
            </p>
          </motion.div>

          {/* Proficiency legend */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 rounded-2xl border border-ink/10 bg-ink/5 p-5"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">Proficiency scale:</span>
              <span className="flex items-center gap-2 font-mono text-[11px] text-ink-light">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 border border-emerald-500/20">Hands-on</span>
                demonstrated in public repositories
              </span>
              <span className="flex items-center gap-2 font-mono text-[11px] text-ink-light">
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20">Working</span>
                practiced in documented labs
              </span>
              <span className="flex items-center gap-2 font-mono text-[11px] text-ink-light">
                <span className="px-2 py-0.5 rounded-full bg-ink/5 text-ink-light border border-ink/10">Foundational</span>
                actively studying, concepts solid
              </span>
            </div>
          </motion.div>

          {/* IAM Domains Grid */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-ink mb-8 flex items-center gap-3 border-b border-ink/10 pb-4">
              <Code2 className="h-6 w-6 text-accent" />
              <span>Identity &amp; Access Management Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domains.map((domain) => (
                <DomainCard key={domain.id} domain={domain} />
              ))}
            </div>
          </div>

          {/* Complementary Base */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-ink mb-8 flex items-center gap-3 border-b border-ink/10 pb-4">
              <Server className="h-6 w-6 text-accent" />
              <span>Complementary Competencies</span>
            </h2>
            <p className="font-mono text-xs text-ink-light mb-6 -mt-4">
              Supporting base that serves the IAM mission — not my primary positioning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DomainCard domain={complementary} wide />
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
                    Universidad Sim&oacute;n Bol&iacute;var &bull; 6th Semester
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
