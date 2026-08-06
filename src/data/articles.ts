export interface Author {
  name: string;
  avatar: string;
  bio: string;
  github?: string;
  linkedin?: string;
  email?: string;
  location?: string;
  role?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: Author;
  tags: string[];
  content: string;
}

export const defaultAuthor: Author = {
  name: "Diego Yonoff",
  avatar: "",
  bio: "SOC Analyst with hands-on experience in security monitoring, threat detection, and incident investigation across simulated enterprise environments. Skilled in SIEM analysis, log correlation, and threat intelligence.",
  github: "https://github.com/dieg0y",
  linkedin: "https://linkedin.com/in/diegoyonoff",
  email: "diegojose0405@gmail.com",
  location: "Barranquilla, Colombia",
  role: "SOC Analyst"
};

export const initialArticles: Article[] = [
  {
    id: "1",
    slug: "what-is-a-soc-and-how-is-it-organized-blue-team-guide",
    title: "What is a SOC and How is it Organized? A Guide for Blue Team Beginners",
    excerpt: "An essential introduction to Security Operations Centers (SOC), analyst tiers (Tier 1, Tier 2, Tier 3), alert triage workflows, key security tools, and defensive methodologies like MITRE ATT&CK.",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    date: "August 2026",
    readTime: "8 min read",
    author: defaultAuthor,
    tags: ["SOC", "Blue Team", "Cybersecurity", "SIEM", "Security Operations", "Investigation & Analysis"],
    content: `If you are starting out in cybersecurity, you have likely heard terms such as **SOC**, **SIEM**, **EDR**, or **SOC Analyst**, but you might not yet be fully clear on how everything fits together within a security team.

In this article, I want to share a straightforward introduction based on my learning and research into how a **Security Operations Center (SOC)** functions. The goal is not to cover every technical detail, but to provide a clear overview that helps explain how a SOC is organized, what its main roles are, and what a basic analyst workflow looks like.

## What is a SOC?

Microsoft defines a Security Operations Center (SOC) as:

> "A security operations center (SOC) provides the dedicated team, processes, and technology required to defend against today's increasingly complex and persistent cyberattacks."

In simple terms, a SOC is the team responsible for **monitoring, detecting, investigating, and responding** to potential security threats affecting an organization's infrastructure. Depending on the company, it may also collaborate in prevention activities and continuous security improvements.

## How is a SOC Typically Organized?

Although every organization may have a different structure, a common hierarchy looks like this:

### Business Leadership
* **CEO / CFO / Company Owner** — Set strategic business goals and make top-level decisions.

### Security Leadership
* **CISO / CIO / CTO** — Responsible for defining the overall technology and security strategy.

### Security Management
* **SOC Manager / Red Team Lead / Blue Team Lead** — Coordinate teams, processes, and security operations.

### Technical Team
* **SOC Analyst / SOC Engineer / Penetration Tester / GRC Specialist / Threat Hunter / Digital Forensics Analyst** — Perform day-to-day technical operations based on their specialty.

## Internal Structure of a SOC

Focusing specifically on the Blue Team, a standard operational layout includes:

### SOC Manager
Coordinates SOC operations, manages team schedules and resources, and ensures processes run effectively.

### SOC Analyst (Tier 1 / L1)
Serves as the first line of defense. Key responsibilities include:
* Monitoring incoming security alerts.
* Categorizing and classifying events.
* Performing initial triage.
* Investigating basic security events.
* Escalating complex cases when necessary.

### SOC Analyst (Tier 2 / L2)
Handles deeper investigations and analyzes incidents that require higher technical expertise. Typically focuses on:
* Malware analysis.
* Event correlation across multiple log sources.
* Advanced incident investigation.
* Incident containment strategies.

### SOC Analyst (Tier 3 / L3)
Specialists with extensive technical experience who assist with critical investigations, refine detection rules, and lead Threat Hunting or Incident Response efforts.

### SOC Engineer
Designs, deploys, and maintains the technical tooling used by the SOC. Responsibilities include:
* SIEM configuration and maintenance.
* EDR management and agent deployment.
* Automation through SOAR playbooks.
* Onboarding new log sources.
* Optimizing detection rules.

## What Happens During a Critical Incident?

When an incident exceeds standard operational capacity, a specialized Incident Response team intervenes—often known as a **CSIRT** (Computer Security Incident Response Team) or **CERT**.

This team includes specialists such as:
* Incident Response Manager
* Digital Forensics Analyst
* Malware Analyst
* Threat Intelligence Analyst
* Threat Hunter

Their primary objective is to contain, eradicate, and recover affected systems while minimizing business impact.

## From Event to Alert

Before an alert is triggered, an event occurs.

For example:
* A user logs in.
* A process is executed.
* A file is downloaded.
* A new account is created.
* A system service is modified.

Each event generates a **log**, which is sent to tools like a SIEM or EDR.

However, **not all events generate an alert**. An alert appears only when a detection rule identifies behavior that is suspicious, anomalous, or potentially malicious.

In simple terms, the workflow is:

**Event → Log → SIEM/EDR → Detection Rule → Alert → Investigation**

## What Information Does an Alert Contain?

Depending on the platform, an alert usually includes:
* Timestamp (Date & Time).
* Detection Name.
* Severity Level.
* Alert Status.
* Affected User / Account.
* Host / Endpoint Name.
* IP Address.
* Description & Evidence.
* Recommended Remediation Steps.

## How Does a SOC Analyst (Tier 1) Work?

When an analyst receives an alert, they typically follow this process:
1. Verify the alert is not already being investigated by another team member.
2. Update the ticket status to "In Progress" or equivalent.
3. Review the alert name and technical description carefully.
4. Analyze available telemetry (User, Host, IP, Process Tree, Files).
5. Consult internal playbooks, runbooks, or procedures.
6. Gather evidence to determine whether the activity is legitimate or malicious (True Positive vs. False Positive).
7. Escalate to Tier 2 if the incident requires elevated containment or deeper investigation.
8. Document detailed findings and close the ticket if resolved to maintain complete incident traceability.

Clear documentation is just as important as the investigation itself, as future analysts may need to review case history.

## Conclusion

Understanding how a SOC is organized is a vital first step for anyone aspiring to build a career in the Blue Team.

While this guide simplifies many concepts, it provides a clear picture of how different roles interact and how an alert flows from raw event to final resolution.

I continue learning every day. This article is part of my documentation journey, and I hope it serves as a helpful starting point for others entering the cybersecurity field.

---

## References

Microsoft. *What is a Security Operations Center (SOC)?* https://www.microsoft.com/en-us/security/business/security-101/what-is-a-security-operations-center-soc`
  }
];

export const articles: Article[] = initialArticles;

