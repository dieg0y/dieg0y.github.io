"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
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

interface RepoStat {
  name: string;
  stars?: number;
  forks?: number;
  language?: string;
  updatedAt?: string;
}

/* Live repository metadata, fetched directly from the public GitHub REST API
 * (CORS-enabled, no token needed). Works identically in dev and on a static
 * host (GitHub Pages); on any failure the audited static snapshot embedded
 * in the data file is shown instead, so the UI never breaks. */
const REPO_NAMES = [
  "VAULTNOTES",
  "plazoleta-usuarios",
  "plazoleta-restaurante",
] as const;

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

/** One project in the collapsible list: the title row stays compact and
 * always shows the GitHub link; the details expand on demand. */
function CollapsibleProject({
  project,
  live,
}: {
  project: Project;
  live?: RepoStat;
}) {
  const [open, setOpen] = React.useState(false);
  const panelId = `${project.id}-panel`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-sm transition-colors hover:border-brand/40"
    >
      {/* Header row — title toggles the panel; GitHub stays reachable always */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3 px-5 py-5 sm:px-7">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex min-h-[44px] min-w-0 flex-1 items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-ink-light transition-transform duration-300 group-hover:text-brand ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
          <span className="min-w-0">
            <span className="mb-1 flex flex-wrap items-center gap-2">
              <ClassBadge classification={project.classification} />
              {project.featured ? (
                <span className="rounded-full border border-emerald-600/25 bg-emerald-600/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Flagship
                </span>
              ) : null}
            </span>
            <span className="block font-mono text-xl font-bold leading-tight text-ink transition-colors group-hover:text-brand sm:text-2xl">
              {project.title}
            </span>
            <span className="mt-0.5 block truncate font-serif text-sm italic text-ink-light sm:text-base">
              {project.tagline}
            </span>
          </span>
        </button>

        {/* Always-visible repo link — the proof is one click away, collapsed or not */}
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs font-semibold text-paper shadow-md transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          <span>View on GitHub</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      {/* Expanding panel */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="panel"
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-ink/10 px-5 pb-7 pt-6 sm:px-7">
              <p className="max-w-3xl text-sm leading-relaxed text-ink-light sm:text-base">
                {project.description}
              </p>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-light"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-500"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-ink/10 bg-ink/5 px-2.5 py-1 text-ink-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-5">
                <ProjectStats project={project} live={live} />
                {project.extraRepos && project.extraRepos.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {project.extraRepos.map((r) => (
                      <a
                        key={r.url}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${r.label} on GitHub`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-4 py-2 font-mono text-[11px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      >
                        <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{r.label}</span>
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

export function ProjectsView() {
  const [liveStats, setLiveStats] = React.useState<Record<string, RepoStat>>({});

  React.useEffect(() => {
    let cancelled = false;
    Promise.all(
      REPO_NAMES.map(async (name) => {
        try {
          const res = await fetch(`https://api.github.com/repos/dieg0y/${name}`, {
            headers: { Accept: "application/vnd.github+json" },
            signal: AbortSignal.timeout(6000),
          });
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

  const liveFor = (p: Project) => {
    const name = p.repo.split("/").pop()?.toLowerCase();
    return name ? liveStats[name] : undefined;
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeading
        kicker="What I've Built"
        icon={FolderKanban}
        title="Projects"
        description="The repositories I created and maintain. Tap a project to expand what it actually does — the GitHub link stays visible either way. Each one is labeled personal or academic: none of this is client work."
      />

      <div className="space-y-6">
        {projects.map((project) => (
          <CollapsibleProject
            key={project.id}
            project={project}
            live={liveFor(project)}
          />
        ))}
      </div>
    </div>
  );
}
