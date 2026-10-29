/**
 * IAM Learning Roadmap — real data extracted from VAULTNOTES
 * (https://github.com/dieg0y/VAULTNOTES, src/vault/data/roadmapData.ts).
 *
 * Source of truth: the roadmap shipped inside VAULTNOTES defines
 * 4 strategy tiers, 34 phases and 373 items. Phase titles below are
 * translated to English for international recruiters; counts are
 * the actual counts from the source data (no invented progress or
 * percentages — completion is tracked privately by the author).
 */

export interface RoadmapPhase {
  number: number;
  title: string;
}

export interface RoadmapTier {
  id: string;
  title: string;
  subtitle: string;
  itemCount: number;
  phases: RoadmapPhase[];
}

export const roadmapTiers: RoadmapTier[] = [
  {
    id: "tier-1",
    title: "Tier 1 — The Non-Negotiable Core",
    subtitle: "Absolute required domain. Where most practical time and effort is invested.",
    itemCount: 153,
    phases: [
      { number: 1, title: "Technical Foundations: Systems, Networks & Formats" },
      { number: 2, title: "IAM Fundamentals & Identity Governance" },
      { number: 3, title: "Active Directory Core & Security Auditing" },
      { number: 4, title: "Directory Services & LDAP" },
      { number: 5, title: "Microsoft Entra ID & Governance" },
      { number: 6, title: "Microsoft Graph API for IAM" },
      { number: 7, title: "SSO, Federation & SCIM" },
      { number: 8, title: "MFA & Modern Authentication" },
      { number: 9, title: "Identity Life-Cycle & Provisioning" },
      { number: 10, title: "IAM Hygiene & Cleanup Campaigns" },
      { number: 11, title: "IAM Automation & PowerShell" },
      { number: 12, title: "IAM Operations Troubleshooting" },
      { number: 13, title: "IAM Metrics, KPIs & Executive Reporting" },
    ],
  },
  {
    id: "tier-2",
    title: "Tier 2 — Enterprise Value",
    subtitle: "Strategic differentiators: concepts that matter for enterprise IAM roles.",
    itemCount: 131,
    phases: [
      { number: 14, title: "Designing an Access Role Model" },
      { number: 15, title: "Role Engineering & Role Mining" },
      { number: 16, title: "Privilege Granting Processes" },
      { number: 17, title: "Revoking & Deprovisioning Processes" },
      { number: 18, title: "Access Reviews & Certifications" },
      { number: 19, title: "Privileged Access Management (PAM)" },
      { number: 20, title: "PAM in Depth: Safeguard, CyberArk & BeyondTrust" },
      { number: 21, title: "Okta Workforce Identity" },
      { number: 22, title: "IGA Architecture (SailPoint / Saviynt)" },
      { number: 23, title: "GRC, Compliance & Audit Evidence" },
      { number: 24, title: "Enterprise IAM Platforms: Ping, ForgeRock, IBM & Oracle" },
      { number: 25, title: "Identity Threat Detection & Response (ITDR)" },
    ],
  },
  {
    id: "tier-3",
    title: "Tier 3 — Complements",
    subtitle: "Bounded knowledge: useful context domains, strictly limited in scope.",
    itemCount: 48,
    phases: [
      { number: 26, title: "AWS Identity & Access Management" },
      { number: 27, title: "Multi-Cloud Identity: Azure, GCP & Kubernetes" },
      { number: 28, title: "Non-Human & Service Identities" },
      { number: 29, title: "Zero Trust & Identity-Centric Architecture" },
      { number: 30, title: "IAM Disaster Recovery, Break-Glass & Resiliency" },
    ],
  },
  {
    id: "tier-final",
    title: "Final Tier — Portfolio, Certification & Employment",
    subtitle: "Turning the roadmap into public evidence, the SC-300 goal, and a remote job strategy.",
    itemCount: 41,
    phases: [
      { number: 31, title: "GitHub Portfolio: The 10 IAM Projects" },
      { number: 32, title: "Enterprise Identity Security Lab (“InnovateCorp”)" },
      { number: 33, title: "Certification & Job Strategy" },
      { number: 34, title: "Job Market & Remote Job Search" },
    ],
  },
];

export const roadmapStats = {
  phases: 34,
  items: 373,
  source: "VAULTNOTES — roadmapData.ts (source of truth for content)",
};

/**
 * The 10 IAM portfolio projects defined by the roadmap (Phase 31).
 * These are portfolio GOALS, not finished products. Status reflects
 * real, verifiable evidence at the time of the last site update:
 * - "planned": designed in the roadmap, repository not started yet.
 * - "in-progress": a real, verifiable base already exists (linked).
 * Nothing here is marked "completed" — no standalone IAM repo exists yet.
 */
export type PortfolioProjectStatus = "planned" | "in-progress";

export interface PortfolioProject {
  number: string;
  title: string;
  stack: string;
  description: string;
  status: PortfolioProjectStatus;
  statusNote: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    number: "01",
    title: "IAM Lifecycle Lab — JML Automation",
    stack: "Python / PowerShell · CSV / JSON",
    description:
      "Joiner, Mover and Leaver processing: expected-access calculation, orphaned-account detection and provisioning plans — with simulation mode, repeatable runs and before/after diffing.",
    status: "planned",
    statusNote: "Designed in the roadmap (Phase 31). Repository not started yet.",
  },
  {
    number: "02",
    title: "RBAC & SoD Policy Engine",
    stack: "Python · JSON / YAML · pytest",
    description:
      "Department and role definitions, entitlements, toxic-combination (SoD) conflict rules, effective-permission computation and documented exceptions.",
    status: "planned",
    statusNote: "Designed in the roadmap (Phase 31). Repository not started yet.",
  },
  {
    number: "03",
    title: "Access Review & Certification Simulator",
    stack: "Python · pandas",
    description:
      "Simulated access review with recommended decisions and exceptions — plus a second report that verifies that access flagged for removal was actually removed.",
    status: "in-progress",
    statusNote:
      "A 5-day Access Review campaign simulation (role attestation, third parties, SoD, privileged access, metrics) already ships inside VAULTNOTES. The standalone Python tool is the next step.",
  },
  {
    number: "04",
    title: "Entra ID / Microsoft Graph Audit Toolkit",
    stack: "PowerShell · Microsoft Graph SDK · CSV",
    description:
      "Read-only inventory scripts for users, groups, roles, service principals and expiring credentials — least-privilege permissions and explicit error handling.",
    status: "planned",
    statusNote: "Designed in the roadmap (Phase 31). Repository not started yet.",
  },
  {
    number: "05",
    title: "SSO Lab — OpenID Connect",
    stack: "Keycloak (Docker) · test web app",
    description:
      "Client configuration and redirect URIs, Authorization Code flow with PKCE, claim inspection and allow/deny tests — complemented by a SAML troubleshooting runbook (metadata, ACS URL, certificates).",
    status: "planned",
    statusNote: "Designed in the roadmap (Phase 31). Repository not started yet.",
  },
  {
    number: "06",
    title: "SCIM 2.0 Provisioning API",
    stack: "Python · FastAPI · pytest",
    description:
      "Create, read, update and deactivate users over a standards-coherent SCIM 2.0 endpoint — attribute validation, operation logging and well-formed errors.",
    status: "planned",
    statusNote: "Designed in the roadmap (Phase 31). Repository not started yet.",
  },
  {
    number: "07",
    title: "Identity Threat Detection Pack (ITDR)",
    stack: "KQL · Python · synthetic data",
    description:
      "Commented detection queries with positive/negative test cases: privilege changes, anomalous joins/leaves, expiring credentials — each with an investigation runbook.",
    status: "planned",
    statusNote: "Designed in the roadmap (Phase 31). Repository not started yet.",
  },
  {
    number: "08",
    title: "IAM Operations Runbooks",
    stack: "Markdown",
    description:
      "Procedures for account unlocks, MFA resets, access denied, provisioning errors, guest users, terminations and privilege changes — each with symptom, hypothesis, checks, required permissions, authorized action, validation and escalation criteria.",
    status: "in-progress",
    statusNote:
      "50 IAM runbooks are already published and maintained inside VAULTNOTES (JML onboarding/offboarding, MFA rotation, contractor revocation, and more). The standalone public repository is in progress.",
  },
  {
    number: "09",
    title: "IGA Platform Comparison",
    stack: "Neutral comparison matrix",
    description:
      "SailPoint vs. Saviynt vs. Microsoft Entra ID Governance — identity sources, connectors, access requests, certifications, SoD, workflows, provisioning and reporting.",
    status: "planned",
    statusNote: "Designed in the roadmap (Phase 31). Repository not started yet.",
  },
  {
    number: "10",
    title: "IAM Enterprise Capstone",
    stack: "Integration of previous projects",
    description:
      "The “InnovateCorp” enterprise identity security lab: integrating the strongest pieces of the portfolio into one realistic environment.",
    status: "planned",
    statusNote: "Designed in the roadmap (Phases 31–32). Repository not started yet.",
  },
];
