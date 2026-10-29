import { NextResponse } from "next/server";

/**
 * Live repository metadata for the portfolio projects.
 *
 * - Public GitHub REST API (no token required, low volume).
 * - In-memory cache with a 1 hour TTL — this is a portfolio, not a crawler.
 * - Falls back to the audited static snapshot if the network is unavailable,
 *   so the UI never breaks.
 */

const REPO_NAMES = [
  "VAULTNOTES",
  "plazoleta-usuarios",
  "plazoleta-restaurante",
  "IPsubnetting",
] as const;

interface RepoStat {
  name: string;
  stars: number | null;
  forks: number | null;
  language: string | null;
  updatedAt: string | null;
}

const FALLBACK: RepoStat[] = [
  {
    name: "VAULTNOTES",
    stars: null,
    forks: null,
    language: "TypeScript",
    updatedAt: "2026-10-29T17:56:52Z",
  },
  {
    name: "plazoleta-usuarios",
    stars: null,
    forks: null,
    language: "Java",
    updatedAt: "2026-10-29T15:29:41Z",
  },
  {
    name: "plazoleta-restaurante",
    stars: null,
    forks: null,
    language: "Java",
    updatedAt: "2026-10-29T15:29:57Z",
  },
  {
    name: "IPsubnetting",
    stars: 5,
    forks: 1,
    language: "Python",
    updatedAt: "2026-10-29T15:29:16Z",
  },
];

const CACHE_TTL_MS = 60 * 60 * 1000;
let cache: { at: number; data: RepoStat[] } | null = null;

export async function GET() {
  if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
    return NextResponse.json({ repos: cache.data, source: "cache" });
  }

  try {
    const repos: RepoStat[] = await Promise.all(
      REPO_NAMES.map(async (name) => {
        const res = await fetch(`https://api.github.com/repos/dieg0y/${name}`, {
          headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "dieg0y-portfolio",
          },
          signal: AbortSignal.timeout(6000),
        });
        if (!res.ok) throw new Error(`GitHub API ${res.status} for ${name}`);
        const json = (await res.json()) as {
          name: string;
          stargazers_count?: number;
          forks_count?: number;
          language?: string | null;
          pushed_at?: string;
        };
        return {
          name: json.name ?? name,
          stars: json.stargazers_count ?? null,
          forks: json.forks_count ?? null,
          language: json.language ?? null,
          updatedAt: json.pushed_at ?? null,
        };
      })
    );

    cache = { at: Date.now(), data: repos };
    return NextResponse.json({ repos, source: "live" });
  } catch {
    return NextResponse.json({ repos: FALLBACK, source: "fallback" });
  }
}
