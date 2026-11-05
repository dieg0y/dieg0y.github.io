/**
 * Portfolio content — Diego Yonoff
 *
 * HONESTY RULES (enforced in this file):
 * - Skill levels are evidence-based: "hands-on" only when there is shipped code
 *   or a completed lab; "working" for structured study + documented practice;
 *   "foundational" for concepts under active study.
 * - Every project is labeled as a personal or academic project. None of this
 *   is professional employment.
 * - Certifications only appear with their real status (verified / in progress /
 *   target). No invented employers, clients, metrics, or results.
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

export interface Profile {
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
  summary: string;
  positioning: string[];
}

export const profile: Profile = {
  name: "Diego Yonoff",
  fullName: "Diego Yonoff Molina",
  role: "Junior IAM Analyst",
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
    "Current status: no professional IAM employment yet — everything here is documented personal study, academic work, and hands-on labs.",
  ],
};

/* ------------------------------------------------------------------ */
/* Skills — evidence-based classification                              */
/* ------------------------------------------------------------------ */

export interface SkillItem {
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
          "Studied across a 34-phase IAM roadmap; practiced joiner/mover/leaver workflows in simulated ticket queues.",
      },
      {
        name: "RBAC & least privilege",
        level: "hands-on",
        evidence:
          "Implemented role-based endpoint authorization in Spring Security (plazoleta-usuarios) and built an RBAC analyzer tool in VaultNotes.",
      },
      {
        name: "Separation of duties (SoD)",
        level: "working",
        evidence:
          "Studied as part of access governance and role-model design phases; applied conceptually in role matrices.",
      },
      {
        name: "Access reviews & campaigns",
        level: "working",
        evidence:
          "Studied certification/recertification workflows and completed an access-review week simulation in VaultNotes.",
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
          "Studied IGA architecture, 9-column role matrices, and role engineering/mining phases of my roadmap.",
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
          "Home lab: AD access-audit project (users, groups, SIDs, stale access). Built AD account tooling and troubleshooting guides in VaultNotes.",
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
          "Detection queries and log correlation practiced in SC-200 / Hack The Box labs; KQL references built into VaultNotes.",
      },
      {
        name: "Alert triage & investigation",
        level: "hands-on",
        evidence:
          "Hack The Box SOC labs: brute force, privilege escalation, lateral movement investigations with escalation notes.",
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
          "Lab exposure via SC-200 studies; documented detection and connector guidance in VaultNotes.",
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
          "Shipped IPsubnetting CLI (layered architecture, input validation); automation scripts for study workflows.",
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
          "Tutoring labs on Linux CLI and system fundamentals; SysAdmin study pillar with systemd, permissions, and firewall references.",
      },
      {
        name: "TCP/IP, DNS & subnetting",
        level: "hands-on",
        evidence: "Built and shipped a subnetting CLI tool; academic networks coursework.",
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
/* Projects — classified by relevance to the IAM positioning           */
/* ------------------------------------------------------------------ */

export type ProjectClass =
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
  tags: string[];
  highlights: string[];
  stats?: { stars?: number; forks?: number; language?: string };
}

export const projects: Project[] = [
  {
    id: "vaultnotes",
    title: "VaultNotes",
    tagline: "Offline-first cybersecurity knowledge platform with a dedicated IAM pillar",
    description:
      "A local-first, 100% offline PWA I built to study IAM the way the job actually works. Its IAM pillar bundles 50 simulated identity tickets, 50 knowledge-base articles, 50 runbooks, and 30 troubleshooting guides around a 373-item, 34-phase IAM analyst roadmap — covering JML, Active Directory, Entra ID, Graph automation, SSO & federation, MFA, IGA, PAM, ITDR, cloud IAM, Zero Trust, and GRC.",
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
    id: "plazoleta-usuarios",
    title: "plazoleta-usuarios",
    tagline: "User authentication microservice — Spring Security, JWT, RBAC",
    description:
      "Academic microservice (hexagonal architecture) that issues JWTs (HS256) carrying user id, role, and email claims, validates them on every request through a stateless filter, hashes passwords with BCrypt, and enforces role-based endpoint authorization across ADMINISTRADOR / PROPIETARIO / CLIENTE roles.",
    classification: "iam",
    type: "academic",
    repo: "https://github.com/dieg0y/plazoleta-usuarios",
    tags: ["Java", "Spring Boot", "Spring Security", "JJWT", "BCrypt", "MySQL", "Docker"],
    highlights: [
      "Role-gated endpoints: creating employees requires PROPIETARIO, listing users requires ADMINISTRADOR",
      "Stateless session policy with a custom JwtAuthenticationFilter and authentication entry point",
      "Shared signing secret design so a second service can validate tokens without calling back",
    ],
    stats: { language: "Java", updatedAt: "2026-10-29T15:29:41Z" },
  },
  {
    id: "plazoleta-restaurante",
    title: "plazoleta-restaurante",
    tagline: "Companion API consuming the identity service — cross-service authorization",
    description:
      "Academic companion microservice that validates JWTs issued by plazoleta-usuarios via the shared secret and enforces role-gated business operations — a small but real exercise in service-to-service trust and authorized data access between APIs.",
    classification: "systems",
    type: "academic",
    repo: "https://github.com/dieg0y/plazoleta-restaurante",
    tags: ["Java", "Spring Boot", "JWT validation", "Role checks", "MySQL"],
    highlights: [
      "JWT filter reuse across services with role extraction per request",
      "Owner validation performed through the user service port, not duplicated locally",
    ],
    stats: { language: "Java", updatedAt: "2026-10-29T15:29:57Z" },
  },
  {
    id: "ipsubnetting",
    title: "IPsubnetting",
    tagline: "Python CLI for IPv4 subnet math — networking fundamentals",
    description:
      "A command-line tool for IPv4 subnet calculations (CIDR validation, network/broadcast ranges, usable host counts, binary mask breakdown) with a deliberately layered architecture. I keep it as a supporting project: the networking fundamentals it demonstrates underpin directory services and network identity flows.",
    classification: "systems",
    type: "personal",
    repo: "https://github.com/dieg0y/IPsubnetting",
    tags: ["Python", "CLI", "Networking", "CIDR"],
    highlights: [
      "Clean separation of concerns: calculator logic, immutable results, presentation layer",
      "Windows ANSI terminal support and input validation",
    ],
    stats: { language: "Python", stars: 5, forks: 1, updatedAt: "2026-10-29T15:29:16Z" },
  },
];

/* ------------------------------------------------------------------ */
/* Labs & structured study — explicitly personal, not employment       */
/* ------------------------------------------------------------------ */

export interface LabItem {
  title: string;
  kind: "Study program" | "Home lab" | "Online lab" | "Simulation";
  period: string;
  description: string;
  points: string[];
}

export const labs: LabItem[] = [
  {
    title: "IAM Analyst Roadmap — structured self-study program",
    kind: "Study program",
    period: "Ongoing",
    description:
      "A 34-phase, 373-item curriculum I authored and track inside VaultNotes, with explicit exit criteria per item and a honesty rule distinguishing simulated, implemented, and designed work.",
    points: [
      "Covers JML, AD, Entra ID, Graph automation, SSO/federation, MFA, IGA, PAM, ITDR, AWS IAM, Zero Trust, GRC",
      "Includes interview-prep answers, KPI literacy, and portfolio-project definitions",
      "Progress and evidence tracked per item, not just 'watched a video'",
    ],
  },
  {
    title: "AD Access Audit Lab",
    kind: "Home lab",
    period: "Completed",
    description:
      "Home-lab project from the Active Directory phase of my roadmap: auditing access in AD, hunting stale accounts and excessive entitlements, and writing up findings.",
    points: [
      "Users, groups, SIDs, and effective access reviewed against least privilege",
      "Findings and remediation documented as roadmap evidence",
    ],
  },
  {
    title: "Hack The Box — SOC labs",
    kind: "Online lab",
    period: "Completed modules",
    description:
      "Blue Team lab work I keep deliberately as the complementary side of my profile — it grounds my ITDR interest in real investigation practice.",
    points: [
      "Brute force, privilege escalation, and lateral movement detection with log correlation",
      "Windows Event Logs and Sysmon telemetry analysis; MITRE ATT&CK mapping",
      "Alert triage, escalation, and incident documentation practice",
    ],
  },
  {
    title: "Access Review Week — ticket simulation",
    kind: "Simulation",
    period: "Completed",
    description:
      "Final project of the VaultNotes IAM pillar: a simulated week of access-review tickets with study mode, state flow, and closure notes.",
    points: [
      "Reviewer-style decisions on entitlements with justification notes",
      "Closure documentation mimicking real campaign workflows",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience — only real, verifiable engagements                      */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location: string;
  kind: "Academic role" | "Personal";
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Academic Tutor — Computer Logic & Programming Fundamentals",
    org: "Universidad Simón Bolívar",
    period: "2024 — Present",
    location: "Barranquilla, Colombia",
    kind: "Academic role",
    points: [
      "Tutor lower-semester Systems Engineering students in algorithm design, object-oriented logic, and data structure principles.",
      "Guide practical laboratory exercises on Linux CLI, system administration, and network fundamentals.",
      "Practice technical communication and structured problem-solving in accountable academic settings.",
    ],
  },
];

export const experienceNote =
  "That tutoring engagement is my only formal role so far. I have no professional IAM employment yet — the identity work on this site is personal study, academic projects, and labs, presented as exactly that. What I can offer a hiring team today is the discipline behind the evidence: every claim here traces back to a repository, a lab, or a documented roadmap item.";

/* ------------------------------------------------------------------ */
/* Certifications — real statuses only                                 */
/* ------------------------------------------------------------------ */

export interface Certification {
  title: string;
  issuer: string;
  status: "verified" | "in-progress" | "target";
  statusLabel: string;
  headline?: string;
  description: string;
  details?: { label: string; value: string }[];
  bullets?: string[];
  link?: string;
  linkLabel?: string;
  showModal?: boolean;
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
  },
  {
    title: "Microsoft SC-200 — Security Operations Analyst",
    issuer: "Microsoft",
    status: "in-progress",
    statusLabel: "In progress",
    headline: "Currently studying",
    description:
      "Studying detection engineering, threat hunting with KQL, and incident response across Microsoft Defender XDR and Sentinel. For my IAM path this is the complementary ITDR layer: identity-relevant detection and investigation.",
    bullets: [
      "Mitigate threats using Microsoft Sentinel",
      "Mitigate threats using Microsoft Defender XDR",
      "KQL log queries and detection tuning",
    ],
    link: "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/",
    linkLabel: "Microsoft SC-200 curriculum",
  },
  {
    title: "Microsoft SC-300 — Identity and Access Administrator",
    issuer: "Microsoft",
    status: "target",
    statusLabel: "Next target",
    headline: "Aligned with my active study roadmap",
    description:
      "The certification my current roadmap is building toward — user lifecycle, Entra ID governance, access reviews, and Conditional Access at administrator depth. Listed here as a goal, not a credential: I am not enrolled in the exam yet.",
    link: "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/",
    linkLabel: "Microsoft SC-300 overview",
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
    "Academic tutor for the Systems Engineering program (2024 — present).",
    "Analytical foundation in Linux/Windows administration and TCP/IP networking.",
  ],
};

/* ------------------------------------------------------------------ */
/* Site metadata                                                       */
/* ------------------------------------------------------------------ */

export const site = {
  nav: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#writing", label: "Writing" },
    { href: "#contact", label: "Contact" },
  ],
  identityLine: "Junior IAM Analyst · Barranquilla, Colombia",
};
