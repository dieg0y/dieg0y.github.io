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
  },
  {
    id: "2",
    slug: "how-and-why-is-important-to-be-updated-in-cybersecurity",
    title: "How and Why is Important to Be Updated in the Field of Cybersecurity",
    excerpt: "Staying current isn't optional in this field. Here are the sources I actually use to keep up with new vulnerabilities, threats, and patches — and how I build a routine around them.",
    coverImage: "/img/Blog2.png",
    date: "August 2026",
    readTime: "6 min read",
    author: defaultAuthor,
    tags: ["Cybersecurity", "Threat Intelligence", "Resources", "Career Advice"],
    content: `An important part of the whole cybersecurity topic is how to stay updated, and at some point you have to ask yourself that question as a beginner. While we all know cybersecurity is not a field that has an end — quite the opposite, new vulnerabilities, news, and patches are being found all the time — a lot of people don't know how to stay updated. So I want to share the sources I use that have helped me a lot.

## Why Staying Updated Isn't Optional

Attackers often won't wait until you're ready or fully informed. New vulnerabilities come out every day. Exploits for critical CVEs can show up just hours after a patch is released — and sometimes even before it's officially released. If you're only relying on the knowledge you already have from your experience or certifications, it's like you're still using a typewriter or carrier pigeons while everyone else already has the new stuff.

Staying updated does three things for you as an analyst:

- **It turns you into an early-warning system.** You spot a new campaign, a zero-day, or an actively exploited CVE before it becomes "the thing everyone's scrambling to patch."
- **It teaches you how attackers actually think.** Reading real incident writeups and TTP breakdowns builds pattern recognition that no course alone can give you — the kind of instinct you need when you're staring at a queue of alerts trying to figure out which one is real.
- **It keeps your decisions grounded in reality, not assumption.** Threat intel isn't trivia — it's context. It's the difference between flagging *something looks off* and knowing *this matches a known technique from a group that's been active this month.*

This is also, honestly, part of why I enjoy this field. It rewards curiosity. There's always something new to learn, and that never really stops being interesting.

## My Go-To Sources

I didn't want to throw a wall of 40 links at you that nobody actually reads. These are the sources I keep coming back to — the ones that consistently earn their place in my routine.

### 🏛️ Official & Authoritative

**[CISA](https://www.cisa.gov/)** — The U.S. Cybersecurity and Infrastructure Security Agency. This is ground zero for actionable advisories, and their **Known Exploited Vulnerabilities (KEV) catalog** is one of the most useful lists in the industry — it tells you exactly which vulnerabilities are being exploited *right now*, not just which ones theoretically could be.

**[CVE / NVD](https://nvd.nist.gov/)** — The official vulnerability database. If CISA tells you what's urgent, CVE/NVD gives you the technical detail behind it — CVSS scores, affected systems, references. It's basically the vocabulary of the whole field.

**[OSV.dev](https://osv.dev/)** — This one's more of a personal favorite. It's fully open source and pulls vulnerability advisories from 20+ ecosystems (npm, PyPI, Go, crates.io, and more) into one place. I like checking it because a huge chunk of the tools I use day to day are open source, and OSV just does a genuinely good job covering that side of things — solid info, no noise.

### 📰 News I Actually Read Daily

**[BleepingComputer](https://www.bleepingcomputer.com/)** — Fast, technical, no fluff. When a new ransomware campaign or breach hits, this is usually where I get the real technical breakdown, not just the headline.

**[The Hacker News](https://thehackernews.com/)** — My daily scroll. Good for staying on top of new exploits, critical CVEs, and emerging techniques without needing to hunt across ten different sites.

**[Krebs on Security](https://krebsonsecurity.com/)** — Brian Krebs does investigative journalism, not just news reporting. His breach investigations go deep — the kind of reporting that shows you *how* an attack actually unfolded, not just that it happened.

### 🔬 Vendor & Research Labs

**[Cisco Talos](https://blog.talosintelligence.com/)** — One of the most respected threat intelligence teams in the industry. Their research is technical and detailed — great for understanding actual malware behavior and campaign infrastructure, not just headlines.

**[Microsoft Security Response Center (MSRC)](https://msrc.microsoft.com/)** — Given how much of the enterprise world runs on Microsoft, their advisories and patch analysis are essential reading, especially for understanding vulnerabilities in Windows, Azure, and M365 environments.

## Honorable Mentions

A few more that don't make my daily rotation but are genuinely worth knowing about:

- **[SANS Internet Storm Center](https://isc.sans.edu/)** — Daily threat diaries from one of the most respected training organizations in security. Real analytical depth in a short daily read.
- **[The DFIR Report](https://thedfirreport.com/)** — Detailed, real-world intrusion case studies. If you want to see exactly how an attack chain actually plays out step by step, this is one of the best resources out there.
- **[AlienVault OTX (Open Threat Exchange)](https://otx.alienvault.com/)** — A free, community-driven threat intelligence platform where you can pull real IOCs and pulses. Great if you want hands-on practice, not just reading.
- **[r/netsec](https://www.reddit.com/r/netsec/)** — A solid pulse-check on what the technical security community is actually discussing day to day.
- **TLDR Sec Newsletter** — If you'd rather have your updates delivered instead of hunted for, this is a clean daily digest across infosec and tech.

## How I Actually Keep Up With All This

Honestly, and speaking from my own experience, it's not about reading everything, all the time. Just having some kind of routine — daily, every 3 days, or even weekly — can help a lot more than doing nothing at all. For example:

1. **Skim through all of them first, then pick 3-4.** Go over your sources, keep the ones you actually like or feel comfortable with, and focus on those.
2. **Prioritize what's truly worth your time.** Things like IOCs, attack vectors, or — most importantly — remediation guidance. Not just headlines.
3. **Spread the information out.** Official alerts (CISA) usually tell you what's urgent. News sites tell you what's currently happening — the groups and attacks that aren't necessarily urgent but are still worth checking out. And vendor research digs a bit deeper into everything in general, giving you the extra context.

## The End

Cybersecurity moves faster than a lot of people think, and it's not really something you can put off for later — not if you actually care about it. Remember that what matters isn't reading everything, but choosing wisely what you read. You could even turn it into a habit. Hopefully this helps someone out there with whatever they need, and if you have any suggestions, let me know.`
  }
];

export const articles: Article[] = initialArticles;
