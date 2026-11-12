/**
 * Portfolio content — Diego Yonoff
 *
 * HONESTY RULES (enforced in this file):
 * - Skill levels are evidence-based: "hands-on" only when there is shipped code
 *   or a completed lab; "working" for structured study + documented practice;
 *   "foundational" for concepts under active study.
 * - Every project is labeled as a personal or academic project. None of this
 *   is professional employment.
 * - Certifications only appear with their real status (verified / in progress).
 *   No invented employers, clients, metrics, or results.
 *
 * SITE STRUCTURE: this is a page-based portfolio (hash routes like #/about),
 * not a single infinite scroll. `site.pages` drives the header, footer and
 * home navigation.
 */

export type SkillLevel = "hands-on" | "working" | "foundational";

export const LEVEL_META: Record<
  SkillLevel,
  { label: string; description: string }
> = {
  "hands-on": {
    label: "Hands-on",
    description:
      "Implemented in my own shipped code, tools, or a completed lab with verifiable output.",
  },
  working: {
    label: "Working knowledge",
    description:
      "Studied in depth and practiced through documented exercises, runbooks, or simulations.",
  },
  foundational: {
    label: "Foundational",
    description:
      "Core concepts understood and under active study — not yet practiced at depth.",
  },
};

interface Profile {
  name: string;
  fullName: string;
  role: string;
  focus: string;
  location: string;
  timezone: string;
  availability: string;
  email: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  linkedinHandle: string;
  cvUrl: string;
  /** Inline-viewable CV (same file — opened in the on-site PDF viewer) */
  summary: string;
  positioning: string[];
}

export const profile: Profile = {
  name: "Diego Yonoff",
  fullName: "Diego Yonoff Molina",
  role: "IAM Analyst",
  focus: "Identity & Access Management · Identity Security",
  location: "Barranquilla, Colombia",
  timezone: "UTC-5 · Flexible overlap",
  availability: "Open to remote roles",
  email: "diegojose0405@gmail.com",
  github: "https://github.com/dieg0y",
  githubHandle: "@dieg0y",
  linkedin: "https://www.linkedin.com/in/diegoyonoff/",
  linkedinHandle: "in/diegoyonoff",
  cvUrl: "/cv-diego-yonoff-iam.pdf",
  summary:
    "Systems Engineering student in Barranquilla, Colombia, building a focused career in Identity and Access Management. I study the identity lifecycle end to end — joiner/mover/leaver, RBAC, access reviews, and identity threats — and I label every skill on this site with its real evidence level: hands-on, working knowledge, or foundational.",
  positioning: [
    "Primary focus: IAM — identity lifecycle (JML), RBAC, access governance, and the Microsoft identity stack.",
    "Complementary angle: SOC / Blue Team fundamentals, kept only where they add value to identity security and ITDR.",
  ],
};

/* ------------------------------------------------------------------ */
/* Skills — evidence-based classification                              */
/* ------------------------------------------------------------------ */

interface SkillItem {
  name: string;
  level: SkillLevel;
  evidence: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "iam-core",
    title: "IAM Core & Lifecycle",
    blurb: "The joiner–mover–leaver discipline: provisioning, entitlements, and cleanup.",
    items: [
      {
        name: "Identity lifecycle (JML)",
        level: "working",
        evidence:
          "Studied end to end; practiced joiner/mover/leaver workflows in simulated ticket queues.",
      },
      {
        name: "RBAC & least privilege",
        level: "hands-on",
        evidence:
          "Implemented role-based endpoint authorization in Spring Security (plazoleta) and built an RBAC analyzer tool in VaultNotes.",
      },
      {
        name: "Separation of duties (SoD)",
        level: "working",
        evidence:
          "Studied within access governance and role-model design; applied conceptually in role matrices.",
      },
      {
        name: "Access reviews & campaigns",
        level: "working",
        evidence:
          "Studied certification/recertification workflows and completed an access-review simulation in VaultNotes.",
      },
      {
        name: "Provisioning / deprovisioning",
        level: "working",
        evidence:
          "Documented granting and revoking runbooks, including escalation criteria and deprovisioning checklists.",
      },
      {
        name: "IGA concepts (role models, role mining)",
        level: "working",
        evidence:
          "Studied IGA architecture, role matrices, and role engineering/mining.",
      },
      {
        name: "Identity auditing & hygiene",
        level: "working",
        evidence:
          "Completed an AD access-audit home lab; documented hygiene campaigns (stale accounts, orphaned entitlements).",
      },
    ],
  },
  {
    id: "microsoft-identity",
    title: "Microsoft Identity Stack",
    blurb: "Directory services and the Entra ecosystem, from on-prem AD to cloud identity.",
    items: [
      {
        name: "Active Directory",
        level: "hands-on",
        evidence:
          "Home-lab audit project (users, groups, SIDs, stale access); built AD account tooling and troubleshooting guides in VaultNotes.",
      },
      {
        name: "Microsoft Entra ID",
        level: "working",
        evidence:
          "Structured study: SSO modes, federated→managed migration, app roles, multitenancy, Conditional Access concepts.",
      },
      {
        name: "Microsoft Graph API",
        level: "working",
        evidence:
          "Studied for IAM automation — user lifecycle queries, directory objects, and app-only auth patterns.",
      },
      {
        name: "PowerShell",
        level: "working",
        evidence:
          "IAM automation study track (ForEach, filtering, CSV pipelines) and a PowerShell analysis tool in VaultNotes.",
      },
      {
        name: "MFA & modern authentication",
        level: "working",
        evidence:
          "Deep study including NIST SP 800-63-4 guidance, MFA fatigue, and token theft scenarios.",
      },
      {
        name: "Conditional Access",
        level: "foundational",
        evidence:
          "Policy concepts and templates studied; no tenant administration experience yet.",
      },
    ],
  },
  {
    id: "identity-protocols",
    title: "Identity Protocols & Standards",
    blurb: "How identity actually flows between systems.",
    items: [
      {
        name: "JWT (issue & validate)",
        level: "hands-on",
        evidence:
          "Implemented HS256 token generation and validation with role claims in two Spring Boot microservices; built a JWT decoder tool.",
      },
      {
        name: "OAuth 2.0 & OpenID Connect",
        level: "working",
        evidence:
          "Protocol-level study including flows, ROPC deprecation (RFC 9700), and JWT signature validation.",
      },
      {
        name: "SSO & federation",
        level: "working",
        evidence:
          "Studied Seamless SSO, domain federation, and managed-domain migration paths.",
      },
      {
        name: "SAML",
        level: "foundational",
        evidence: "Assertions, bindings, and IdP/SP trust studied — not implemented yet.",
      },
      {
        name: "SCIM",
        level: "foundational",
        evidence: "Provisioning schema and endpoints studied — not implemented yet.",
      },
    ],
  },
  {
    id: "identity-security",
    title: "Identity Security & ITDR",
    blurb: "The SOC angle I keep — strictly where it strengthens identity defense.",
    items: [
      {
        name: "ITDR concepts",
        level: "working",
        evidence:
          "Studied identity attack paths; documented 102 IAM attack techniques and real incidents (Okta 2022, MGM 2023, Uber 2022).",
      },
      {
        name: "KQL & log analysis",
        level: "hands-on",
        evidence:
          "Detection queries and log correlation practiced in Blue Team labs; KQL references built into VaultNotes.",
      },
      {
        name: "Alert triage & investigation",
        level: "hands-on",
        evidence:
          "SOC labs: brute force, privilege escalation, and lateral movement investigations with escalation notes.",
      },
      {
        name: "MITRE ATT&CK mapping",
        level: "working",
        evidence:
          "Mapped lab adversary behavior to ATT&CK; built an ATT&CK explorer tool in VaultNotes.",
      },
      {
        name: "SIEM concepts (Sentinel, Splunk)",
        level: "working",
        evidence:
          "Lab exposure through security operations study; detection and connector guidance documented in VaultNotes.",
      },
    ],
  },
  {
    id: "cloud-platform",
    title: "Cloud & Enterprise IAM",
    blurb: "Where I'm heading next — studied foundations, honestly labeled.",
    items: [
      {
        name: "AWS IAM",
        level: "foundational",
        evidence:
          "Users, roles, policies, and trust relationships studied — no cloud deployment yet.",
      },
      {
        name: "PAM concepts",
        level: "foundational",
        evidence: "Privileged access patterns, vaulting, and just-in-time elevation studied.",
      },
      {
        name: "Enterprise IGA platforms (Okta, SailPoint)",
        level: "foundational",
        evidence:
          "Workforce identity and IGA platform architecture studied; no administrator experience.",
      },
    ],
  },
  {
    id: "scripting",
    title: "Scripting & Automation",
    blurb: "The engineering base under the identity work.",
    items: [
      {
        name: "Python",
        level: "hands-on",
        evidence:
          "Shipped a layered-architecture CLI tool with strict input validation; automation scripts for study workflows.",
      },
      {
        name: "TypeScript / React",
        level: "hands-on",
        evidence:
          "Built VaultNotes (188-file offline PWA) and this portfolio in Next.js + TypeScript strict mode.",
      },
      {
        name: "Java / Spring Boot",
        level: "hands-on",
        evidence:
          "Two academic microservices with Spring Security, JWT filters, and hexagonal architecture.",
      },
      {
        name: "SQL",
        level: "working",
        evidence: "Academic database coursework; MySQL persistence in microservice projects.",
      },
      {
        name: "Git & GitHub",
        level: "hands-on",
        evidence: "All projects versioned with structured commit history and CI workflows.",
      },
    ],
  },
  {
    id: "systems",
    title: "Systems & Networking",
    blurb: "Foundation layers every identity system runs on.",
    items: [
      {
        name: "Linux & Windows administration",
        level: "working",
        evidence:
          "Tutoring labs on Linux CLI and system fundamentals; SysAdmin study with systemd, permissions, and firewall references.",
      },
      {
        name: "TCP/IP, DNS & subnetting",
        level: "hands-on",
        evidence: "Academic networking coursework; built and shipped a subnetting CLI tool.",
      },
      {
        name: "Directory-adjacent networking (LDAP, DNS for AD)",
        level: "working",
        evidence: "LDAP/DN parsing tool built; directory services study phase completed.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projects — one unified list, collapsible on the page                */
/* ------------------------------------------------------------------ */

type ProjectClass =
  | "iam"
  | "identity-security"
  | "soc-complementary"
  | "systems";

export const PROJECT_CLASS_META: Record<
  ProjectClass,
  { label: string; description: string }
> = {
  iam: {
    label: "IAM",
    description: "Core identity and access management implementation.",
  },
  "identity-security": {
    label: "Identity Security / ITDR",
    description: "Identity threat detection and security knowledge work.",
  },
  "soc-complementary": {
    label: "SOC — complementary",
    description: "Blue Team work kept only where it supports identity defense.",
  },
  systems: {
    label: "Systems & Networks",
    description: "Foundational infrastructure and networking work.",
  },
};

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  classification: ProjectClass;
  type: "personal" | "academic";
  featured?: boolean;
  repo: string;
  /** companion repositories for multi-repo projects (e.g. merged systems) */
  extraRepos?: { label: string; url: string }[];
  tags: string[];
  highlights: string[];
  stats?: { stars?: number; forks?: number; language?: string; updatedAt?: string };
}

export const projects: Project[] = [
  {
    id: "vaultnotes",
    title: "VaultNotes",
    tagline: "Offline-first cybersecurity knowledge platform with a dedicated IAM pillar",
    description:
      "A local-first, 100% offline PWA I built to study IAM the way the job actually works. Its IAM pillar bundles 50 simulated identity tickets, 50 knowledge-base articles, 50 runbooks, and 30 troubleshooting guides — covering JML, Active Directory, Entra ID, Graph automation, SSO & federation, MFA, IGA, PAM, ITDR, cloud IAM, Zero Trust, and GRC.",
    classification: "iam",
    type: "personal",
    featured: true,
    repo: "https://github.com/dieg0y/VAULTNOTES",
    tags: ["TypeScript", "Next.js 16", "React 19", "Dexie / IndexedDB", "PWA", "Zod", "Zustand"],
    highlights: [
      "IAM tools I coded: JWT decoder, SID/RID analyzer, LDAP DN parser, and RBAC analyzer",
      "IAM attack explorer with 102 documented identity attack techniques and a 203-entry vulnerability catalog",
      "Ticket simulations for access reviews, JML cases, and identity troubleshooting with closure notes",
      "Offline ZIP backup system with strict Zod validation, anti zip-bomb checks, and DOMPurify sanitization",
    ],
    stats: { language: "TypeScript", updatedAt: "2026-10-29T17:56:52Z" },
  },
  {
    id: "plazoleta",
    title: "plazoleta",
    tagline: "Authentication & authorization microservices — Spring Security, JWT, RBAC",
    description:
      "An academic microservices system built around identity. A user service issues JWTs (HS256) carrying user id, role, and email claims, hashes passwords with BCrypt, and enforces role-based endpoint authorization across ADMINISTRADOR / PROPIETARIO / CLIENTE roles; a companion service validates those same tokens through a shared signing secret — a small but real exercise in service-to-service trust.",
    classification: "iam",
    type: "academic",
    repo: "https://github.com/dieg0y/plazoleta-usuarios",
    extraRepos: [
      { label: "plazoleta-restaurante", url: "https://github.com/dieg0y/plazoleta-restaurante" },
    ],
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "RBAC", "BCrypt", "MySQL", "Docker"],
    highlights: [
      "Role-gated endpoints: creating employees requires PROPIETARIO, listing users requires ADMINISTRADOR",
      "Stateless session policy with a custom JwtAuthenticationFilter and authentication entry point",
      "Shared signing secret design so the companion service validates tokens without calling back",
      "Owner validation performed through the user service port, not duplicated locally",
    ],
    stats: { language: "Java", updatedAt: "2026-10-29T15:29:57Z" },
  },
];

/* ------------------------------------------------------------------ */
/* Certifications — real statuses only                                 */
/* ------------------------------------------------------------------ */

export interface Certification {
  title: string;
  issuer: string;
  status: "verified" | "in-progress";
  statusLabel: string;
  headline?: string;
  description: string;
  details?: { label: string; value: string }[];
  bullets?: string[];
  link?: string;
  linkLabel?: string;
  showModal?: boolean;
  /** path to the official certificate PDF; shown in the on-site viewer
   * when the file exists, with the detailed report as fallback */
  pdf?: string;
}

export const certifications: Certification[] = [
  {
    title: "Linguaskill General — CEFR B2",
    issuer: "Cambridge Assessment English",
    status: "verified",
    statusLabel: "Verified certificate",
    headline: "Average score 172 (B2) · Listening C1",
    description:
      "Official Cambridge English proficiency certificate. It supports the part of the job I care about most: working in English-speaking remote teams — reading technical documentation, writing access-review and incident notes, and collaborating across time zones.",
    details: [
      { label: "Average score", value: "172 — CEFR B2" },
      { label: "Listening", value: "180+ (C1)" },
      { label: "Reading", value: "177 (B2)" },
      { label: "Writing", value: "169 (B2)" },
      { label: "Speaking", value: "158 (B1)" },
      { label: "Organisation", value: "Open English" },
      { label: "Centre / Ref", value: "UX790" },
    ],
    bullets: [
      "Technical reporting and documentation in English",
      "Remote-team collaboration across global time zones",
    ],
    showModal: true,
    pdf: "/certs/linguaskill-diego-yonoff.pdf",
  },
  {
    title: "Microsoft SC-300 — Identity and Access Administrator",
    issuer: "Microsoft",
    status: "in-progress",
    statusLabel: "In progress",
    headline: "Currently studying",
    description:
      "The exam I am actively studying toward — user lifecycle, Entra ID governance, access reviews, and Conditional Access at administrator depth. It is the spine of my current IAM study path.",
    bullets: [
      "Implement user & group lifecycle in Entra ID",
      "Access reviews, Conditional Access, and identity governance",
      "Identity protection and workload identities",
    ],
    link: "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/",
    linkLabel: "Microsoft SC-300 curriculum",
  },
  {
    title: "CompTIA Security+ (SY0-701)",
    issuer: "CompTIA",
    status: "in-progress",
    statusLabel: "In progress",
    headline: "Currently studying",
    description:
      "Studying the Security+ body of knowledge in parallel: threats, cryptography, architecture, and operations. For my IAM path it anchors the security fundamentals an identity analyst is expected to carry.",
    bullets: [
      "General security concepts and change management",
      "Threats, vulnerabilities, and mitigations",
      "Security architecture and operations",
    ],
    link: "https://www.comptia.org/certifications/security",
    linkLabel: "CompTIA Security+ overview",
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education = {
  degree: "BSc Systems Engineering",
  school: "Universidad Simón Bolívar",
  period: "6th semester",
  location: "Barranquilla, Colombia",
  points: [
    "Coursework: computer networks, database architecture, operating systems, algorithm analysis.",
    "Analytical foundation in Linux/Windows administration and TCP/IP networking.",
  ],
};

/* ------------------------------------------------------------------ */
/* Blog disclaimer — appended to the bottom of every article           */
/* ------------------------------------------------------------------ */

/**
 * The owner of the site asked for it to be always present: AI was used to
 * organize the documents, but all information, research, and investigation
 * is his own. Kept here (pure data, no node:fs) so client components can
 * import it safely.
 */
export const AI_DISCLAIMER = {
  kicker: "A note on how this article was produced",
  text: "AI tools were used to organize and format this document. All the information, research, and investigation behind it was done by Diego Yonoff Molina.",
};

/* ------------------------------------------------------------------ */
/* Site metadata — page-based navigation (hash routes)                 */
/* ------------------------------------------------------------------ */

export const site = {
  /** hash-route pages rendered by the client router in src/components/portfolio/router.tsx */
  pages: [
    { href: "#/about", label: "About" },
    { href: "#/skills", label: "Skills" },
    { href: "#/projects", label: "Projects" },
    { href: "#/certifications", label: "Certifications" },
    { href: "#/blog", label: "Blogs" },
    { href: "#/contact", label: "Contact" },
  ],
  identityLine: "IAM Analyst · Barranquilla, Colombia",
};
