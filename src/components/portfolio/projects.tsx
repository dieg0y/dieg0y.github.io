"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  FolderKanban,
  Github,
  GitFork,
  Star,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import {
  PROJECT_CLASS_META,
  projects,
  type Project,
} from "@/data/portfolio";

/* Live repository metadata, fetched directly from the public GitHub REST API
 * (CORS-enabled, no token needed). Works identically in dev and on a static
 * host; on any failure the audited static snapshot embedded in the data file
 * is shown instead, so the UI never breaks. */
const REPO_NAMES = [
  "VAULTNOTES",
  "plazoleta-usuarios",
  "plazoleta-restaurante",
  "IPsubnetting",
] as const;

interface RepoStat {
  name: string;
  stars?: number;
  forks?: number;
  language?: string;
  updatedAt?: string;
}

const TYPE_LABELS: Record<Project["type"], string> = {
  personal: "Personal project",
  academic: "Academic project (university)",
};

function ProjectStats({ project, live }: { project: Project; live?: RepoStat }) {
  const stats = live ?? project.stats;
  const updatedAt = live?.updatedAt ?? project.stats?.updatedAt;
  const updated = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : null;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] text-ink-light">
      {stats?.language ? (
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-brand/70" aria-hidden="true" />
          {stats.language}
        </span>
      ) : null}
      {/* Zero star/fork counts are real but read as "unvisited" — the
          language and last-update signals carry the same weight honestly. */}
      {typeof stats?.stars === "number" && stats.stars > 0 ? (
        <span className="inline-flex items-center gap-1">
          <Star className="h-3 w-3" aria-hidden="true" />
          {stats.stars}
        </span>
      ) : null}
      {typeof stats?.forks === "number" && stats.forks > 0 ? (
        <span className="inline-flex items-center gap-1">
          <GitFork className="h-3 w-3" aria-hidden="true" />
          {stats.forks}
        </span>
      ) : null}
      {updated ? <span>updated {updated}</span> : null}
    </div>
  );
}

function ClassBadge({ classification }: { classification: Project["classification"] }) {
  const meta = PROJECT_CLASS_META[classification];
  const isIam = classification === "iam" || classification === "identity-security";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
        isIam
          ? "border-brand/30 bg-brand/10 text-brand"
          : "border-ink/15 bg-ink/5 text-ink-light"
      }`}
    >
      {meta.label}
    </span>
  );
}

export function Projects() {
  const [liveStats, setLiveStats] = React.useState<Record<string, RepoStat>>({});

  React.useEffect(() => {
    let cancelled = false;
    Promise.all(
      REPO_NAMES.map(async (name) => {
        try {
          const res = await fetch(
            `https://api.github.com/repos/dieg0y/${name}`,
            {
              headers: { Accept: "application/vnd.github+json" },
              signal: AbortSignal.timeout(6000),
            }
          );
          if (!res.ok) return null;
          const json = (await res.json()) as {
            name?: string;
            stargazers_count?: number;
            forks_count?: number;
            language?: string | null;
            pushed_at?: string;
          };
          return {
            name: json.name ?? name,
            stars: json.stargazers_count,
            forks: json.forks_count,
            language: json.language ?? undefined,
            updatedAt: json.pushed_at,
          } satisfies RepoStat;
        } catch {
          return null;
        }
      })
    )
      .then((results) => {
        if (cancelled) return;
        const map: Record<string, RepoStat> = {};
        for (const r of results) {
          if (r) map[r.name.toLowerCase()] = r;
        }
        setLiveStats(map);
      })
      .catch(() => {
        /* fallback: static stats already embedded */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const liveFor = (p: Project) => {
    const name = p.repo.split("/").pop()?.toLowerCase();
    return name ? liveStats[name] : undefined;
  };

  return (
    <section id="projects" aria-labelledby="projects-label" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          id="projects"
          kicker="What I've Built"
          icon={FolderKanban}
          title="Projects"
          description="Repositories I created and maintain, classified by how they serve the IAM positioning. Each one is labeled personal or academic — none of this is client work."
        />

        {featured ? (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 rounded-2xl border border-ink/10 bg-card p-7 shadow-sm transition-colors hover:border-brand/40 sm:p-9"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <ClassBadge classification={featured.classification} />
                <span className="rounded-full border border-emerald-600/25 bg-emerald-600/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Flagship
                </span>
              </div>
              <span className="font-mono text-[11px] text-ink-light">
                {TYPE_LABELS[featured.type]}
              </span>
            </div>

            <h3 className="font-mono text-2xl font-bold text-ink sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-1.5 font-serif text-base italic text-ink-light sm:text-lg">
              {featured.tagline}
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-light sm:text-base">
              {featured.description}
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {featured.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-light">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-500" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2 font-mono text-[11px]">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-ink/15 px-2.5 py-1 text-ink-light"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
              <ProjectStats project={featured} live={liveFor(featured)} />
              <a
                href={featured.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold text-paper shadow-md transition-colors hover:bg-brand"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>View on GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="flex flex-col rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-colors hover:border-brand/40"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <ClassBadge classification={project.classification} />
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-light">
                  {TYPE_LABELS[project.type]}
                </span>
              </div>

              <h3 className="font-mono text-lg font-bold text-ink">
                {project.title}
              </h3>
              <p className="mt-1 font-serif text-sm italic leading-snug text-ink-light">
                {project.tagline}
              </p>

              <p className="mt-4 text-xs leading-relaxed text-ink-light sm:text-sm">
                {project.description}
              </p>

              {project.highlights.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[11px] leading-relaxed text-ink-light">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[10px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-ink/15 px-2 py-0.5 text-ink-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-5 mt-6">
                <ProjectStats project={project} live={liveFor(project)} />
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-4 py-2 font-mono text-[11px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Repo</span>
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="flex flex-col justify-between rounded-2xl border border-dashed border-ink/20 p-6"
          >
            <div>
              <h3 className="font-serif text-lg font-bold text-ink">
                Why IPsubnetting isn&rsquo;t the flagship anymore
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-light sm:text-sm">
                My previous portfolio led with a subnetting calculator — real
                code, but it said nothing about identity. The flagship now is
                the project where I actually live in the IAM problem space
                every day. The networking tool stays listed as the foundation
                layer it is.
              </p>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-brand">
              Positioning &gt; volume
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
