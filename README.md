# Diego Yonoff — Junior IAM Analyst Portfolio

Live site: **<https://dieg0y.github.io>**

Portfolio of Diego Yonoff (Barranquilla, Colombia), positioned for a first remote
**Junior IAM Analyst** role — Identity & Access Management, with SOC / Blue Team
fundamentals kept strictly as the complementary ITDR layer.

## Content policy

This site is built on one non-negotiable rule: **no invented evidence.**

- Every skill is labeled with its real level — `hands-on`, `working knowledge`,
  or `foundational` — with one line explaining where that level comes from.
- Every project is labeled `personal` or `academic`; none of it is client work.
- Certifications only appear with their real status: verified, in progress, or
  stated as a target.
- Live repository stats are fetched from the public GitHub REST API at runtime;
  if that fails, an audited static snapshot (Oct 29, 2026) is shown instead.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript** strict mode
- **Tailwind CSS 4** with a custom paper-and-ink editorial design system
- Self-hosted variable fonts (Playfair Display, DM Sans, JetBrains Mono) —
  no runtime or build-time dependency on Google Fonts
- **Framer Motion** for section transitions
- shadcn/ui primitives (Sheet, Toast) on Radix

## Project structure

```
src/
  app/                 # App Router: layout, page, fonts, globals.css
  components/portfolio/  # One component per portfolio section
  components/ui/       # shadcn/ui primitives in use (sheet, toast, toaster)
  data/                # Single source of truth: portfolio.ts, articles.ts
  hooks/               # use-toast
  lib/                 # cn() utility
public/                # CV PDF, images, robots.txt, sitemap.xml
scripts/               # generate_cv.py — regenerates the CV PDF
.github/workflows/     # deploy.yml — builds & publishes to GitHub Pages
```

All content (profile, skills, projects, labs, certifications, articles) lives
in `src/data/` — edit those files to update the site.

## Development

```bash
bun install
bun run dev     # http://localhost:3000
bun run lint    # ESLint
```

## CV

The downloadable CV (`public/cv-diego-yonoff-iam.pdf`) is generated with
ReportLab:

```bash
python3 scripts/generate_cv.py
```

## Deployment (GitHub Pages)

Pushing to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds a fully static export
(`NEXT_OUTPUT=export` → `output: "export"`, unoptimized images) and publishes
it to GitHub Pages. No server, no database — the site is pure static output.

The previous version of this site (pre-IAM repositioning) is preserved on the
`legacy-previous-site` branch.
