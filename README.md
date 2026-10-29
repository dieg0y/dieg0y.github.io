# Diego Yonoff — IAM & Identity Security Portfolio

**Junior IAM Analyst | Identity & Access Management | Identity Security**

Source code of my personal portfolio site: **https://dieg0y.github.io/** — built for international recruiters and IAM hiring managers, presenting my identity-focused profile with public, verifiable evidence.

## Positioning

- **Main focus:** Identity & Access Management — identity lifecycle (Joiner–Mover–Leaver), access governance (RBAC, SoD, access reviews, least privilege), Microsoft Entra ID / Active Directory, identity protocols (SAML, OIDC, OAuth 2.0, SCIM), and identity security (ITDR).
- **Complementary base:** SOC / Blue Team training (SIEM, KQL, incident investigation) — presented strictly as a complement that supports identity threat detection, never as the primary specialty.
- **Location / availability:** Barranquilla, Colombia — open to **remote** Junior IAM Analyst roles worldwide.

## Site structure (React + Vite + TypeScript + Tailwind)

```
src/pages/         Home · About · Experience · Skills · Certifications · Projects · Blog · Post
src/data/          projects.ts (real repositories & honest statuses)
                   roadmap.ts  (34-phase IAM roadmap & 10-project portfolio plan — real data
                                extracted from VAULTNOTES' roadmapData.ts)
src/components/    Header · Footer · MenuOverlay · ArticleCard · FadeImage · AuthorInfo …
public/            cv-diego-yonoff.pdf · robots.txt · sitemap.xml
```

The site uses `HashRouter`, so all routes resolve under `https://dieg0y.github.io/#/…` and are listed in `public/sitemap.xml`.

## Evidence model (important)

This portfolio follows a strict honesty rule:

- **Project statuses are real:** `Completed` only with an existing public repository; `In Progress` only when there is a verifiable base (e.g., 50 IAM runbooks shipped inside [VAULTNOTES](https://github.com/dieg0y/VAULTNOTES)); `Planned` for roadmap goals not yet started.
- **Certifications are labeled honestly:** SC-300 (primary IAM goal — in preparation), SC-200 (complementary — in progress), Cambridge Linguaskill B2 (verified, report included in the site).
- **No fabricated metrics:** no invented stars, percentages, or progress bars.

## Featured repositories

- [VAULTNOTES](https://github.com/dieg0y/VAULTNOTES) — local-first cybersecurity knowledge PWA; its IAM pillar contains the 34-phase/373-item IAM roadmap, 50 operational runbooks, 50 ticket simulations, and a 5-day access review campaign.
- [plazoleta-usuarios](https://github.com/dieg0y/plazoleta-usuarios) — academic authentication microservice (Spring Security + JWT).
- [plazoleta-restaurante](https://github.com/dieg0y/plazoleta-restaurante) — academic API with role-based authorization.
- [IPsubnetting](https://github.com/dieg0y/IPsubnetting) — Python CLI for IPv4 subnet calculations (complementary networking tool).

## Development

```bash
npm install     # or bun install
npm run dev     # local dev server
npm run build   # production build (dist/)
npm run lint    # TypeScript check (tsc --noEmit)
```

Deployment is automatic: pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/main.yml`) which builds the site and publishes it to GitHub Pages.

## Contact

- Portfolio: https://dieg0y.github.io/
- GitHub: https://github.com/dieg0y
- LinkedIn: https://www.linkedin.com/in/diegoyonoff/
- Email: diegojose0405@gmail.com

---

This portfolio is a work in progress as I build and document practical IAM and identity security projects.
