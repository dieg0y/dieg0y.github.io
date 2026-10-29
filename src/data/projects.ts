export type ProjectStatus = "completed" | "in-progress";

export type ProjectCategory = "iam" | "identity-security" | "systems" | "networking";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory;
  tags: string[];
  language: string;
  githubUrl: string;
  evidence: string[];
  featured: boolean;
}

/**
 * Real, public repositories owned by Diego Yonoff (@dieg0y).
 * Every evidence bullet is verifiable in the linked repository.
 * No stars/forks/counts are fabricated — status reflects reality.
 */
export const projects: Project[] = [
  {
    id: "VAULTNOTES",
    title: "VAULTNOTES",
    tagline: "Cybersecurity knowledge platform with a full IAM pillar",
    description:
      "Local-first, 100% offline PWA (no server, no account, no cloud) where I study and practice IAM, SOC, Service Desk and SysAdmin operations. The IAM pillar is the core: ticket simulations, runbooks, troubleshooting guides and the 34-phase roadmap that structures my entire IAM learning path.",
    status: "in-progress",
    category: "iam",
    tags: ["IAM", "Runbooks", "JML", "RBAC", "SC-300", "TypeScript", "Next.js", "IndexedDB"],
    language: "TypeScript",
    githubUrl: "https://github.com/dieg0y/VAULTNOTES",
    evidence: [
      "34-phase / 373-item IAM & Identity Security roadmap — the source of truth for my learning plan",
      "50 IAM operational runbooks (Joiner onboarding, Leaver offboarding, Mover transfers, MFA resets, contractor revocation…)",
      "50 IAM ticket simulations + 50 IAM knowledge-base articles + 30 IAM troubleshooting guides",
      "5-day Access Review campaign simulation: role attestation, third parties, SoD, privileged access, closing metrics",
      "Offline IAM tools: JWT inspector, SID/RID converter, LDAP/DN builder, RBAC utilities",
      "Actively maintained — local-first architecture with Dexie (IndexedDB), Zod-validated ZIP backups and DOMPurify sanitization",
    ],
    featured: true,
  },
  {
    id: "plazoleta-usuarios",
    title: "Plazoleta — User Authentication API",
    tagline: "Academic microservice: authentication & role-based access",
    description:
      "Academic user authentication microservice implementing credential validation and role-based endpoint access with Spring Security and JWT.",
    status: "completed",
    category: "iam",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "RBAC"],
    language: "Java",
    githubUrl: "https://github.com/dieg0y/plazoleta-usuarios",
    evidence: [
      "Authentication flow built with Spring Security and signed JWT tokens",
      "Role-based endpoint authorization — the same RBAC concepts I now study for IAM governance",
      "Persists user identities in MySQL with layered service architecture",
    ],
    featured: false,
  },
  {
    id: "plazoleta-restaurante",
    title: "Plazoleta — Restaurant API",
    tagline: "Academic microservice: authenticated operations by role",
    description:
      "Academic restaurant management API with authenticated operations, role-based authorization and service-to-service integration.",
    status: "completed",
    category: "systems",
    tags: ["Java", "Spring Boot", "Security", "RBAC", "REST"],
    language: "Java",
    githubUrl: "https://github.com/dieg0y/plazoleta-restaurante",
    evidence: [
      "Authenticated operations with role-based authorization on business endpoints",
      "Integration with the user authentication microservice (plazoleta-usuarios)",
    ],
    featured: false,
  },
  {
    id: "IPsubnetting",
    title: "IPsubnetting",
    tagline: "Python CLI for IPv4 subnet calculations",
    description:
      "Command-line utility for IPv4 subnet calculations: network and broadcast addresses, host ranges, CIDR information and input validation. A foundational networking tool — complementary to my IAM path, since directory services and federation still run on TCP/IP and DNS.",
    status: "completed",
    category: "networking",
    tags: ["Python", "CLI", "Networking", "TCP/IP"],
    language: "Python",
    githubUrl: "https://github.com/dieg0y/IPsubnetting",
    evidence: [
      "CIDR parsing and validation, host-range and usable-host computation",
      "Usable as a quick reference tool for subnet planning",
    ],
    featured: false,
  },
];
