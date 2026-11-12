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
- Certifications only appear with their real status: verified or in progress.
- Live repository stats are fetched from the public GitHub REST API at runtime;
  if that fails, an audited static snapshot (Oct 29, 2026) is shown instead.

## Site architecture

**Page-based, not infinite scroll.** Each section is its own screen behind a
hash route (`#/about`, `#/skills`, `#/projects`, `#/certifications`, `#/blog`,
`#/blog/<slug>`, `#/contact`) driven by the client-side router in
`src/components/portfolio/router.tsx`. The home page (`#/`) shows the hero,
page navigation cards, and the latest blogs.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript** strict mode
- **Tailwind CSS 4** with a custom paper-and-ink editorial design system
- Self-hosted variable fonts (Playfair Display, DM Sans, JetBrains Mono) —
  no runtime or build-time dependency on Google Fonts
- **Framer Motion** for page transitions and collapsible sections
- shadcn/ui primitives (Sheet, Toast) on Radix
- **Inline PDF viewer** (`src/components/portfolio/pdf-viewer.tsx`) — the CV
  and certificates open on the page instead of forcing a download; drop the
  Cambridge certificate at `public/certs/linguaskill-diego-yonoff.pdf` and the
  "View certificate" button picks it up automatically
- Article reader with a sticky "On this page" scroll-spy index — desktop rail
  plus collapsible mobile drawer (`src/lib/toc.ts` extracts h2/h3 headings);
  an AI-usage disclaimer is appended automatically to the bottom of every post
- Blog posts are plain Markdown files in `content/blog/` — drop a `.md` in and
  it's published (frontmatter parsed with gray-matter by `src/lib/blog.ts`);
  see **GUIA-BLOGS.md** for the publishing guide in Spanish

## Project structure

```
src/
  app/                 # App Router: layout, page, fonts, globals.css
  components/portfolio/  # router.tsx (hash pages) + one view per page:
                       #   home, about, skills, projects, certifications,
                       #   blog (index + article), contact, header, footer,
                       #   pdf-viewer (inline CV/certificate viewer)
  components/ui/       # shadcn/ui primitives in use (sheet, toast, toaster)
  data/                # portfolio.ts — profile, skills, projects, certifications
  hooks/               # use-toast
  lib/                 # cn(), TOC heading extraction, blog loader (blog.ts)
content/blog/          # Blog posts — one Markdown file per post
                       # (drop a .md here and it's published; see GUIA-BLOGS.md)
public/                # CV PDF, robots.txt, sitemap.xml, images
  images/blog/<post>/  #   images belonging to each blog post
  certs/               #   certificate PDFs for the inline viewer
scripts/               # generate_cv.py — regenerates the CV PDF
.github/workflows/     # deploy.yml — builds & publishes to GitHub Pages
```

Portfolio content (profile, skills, projects, certifications) lives in
`src/data/portfolio.ts` — edit that file to update the site. Blog posts live in
`content/blog/*.md`: drop a Markdown file in and it's published automatically
(images go in `public/images/blog/<post>/`; certificate PDFs in
`public/certs/`). GUIA-BLOGS.md walks through the whole workflow in Spanish.

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
