"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioHeader } from "./header";
import { PortfolioFooter } from "./footer";
import { HomeView } from "./home";
import { AboutView } from "./about";
import { SkillsView } from "./skills";
import { ProjectsView } from "./projects";
import { CertificationsView } from "./certifications";
import { BlogIndexView, BlogArticleView } from "./blog";
import { ContactView } from "./contact";
import type { Article } from "@/lib/blog";

/**
 * Page-based portfolio shell.
 *
 * The site is a set of individual pages (About, Skills, Projects, …) instead
 * of one infinite scroll — implemented as hash routes (`#/about`,
 * `#/blog/<slug>`) so everything stays on the single deployed route while
 * each section gets its own screen, its own URL, and instant navigation.
 *
 * Unrecognized hashes (legacy anchors, in-page heading ids) are ignored so
 * deep links keep working without disturbing the current page.
 */

export type PageKey =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "certifications"
  | "blog"
  | "contact";

export interface Route {
  page: PageKey;
  slug?: string;
}

const PAGE_KEYS: Record<string, PageKey> = {
  home: "home",
  about: "about",
  skills: "skills",
  projects: "projects",
  certifications: "certifications",
  blog: "blog",
  contact: "contact",
};

const PAGE_TITLES: Record<PageKey, string> = {
  home: "Diego Yonoff | IAM Analyst — Identity & Access Management",
  about: "About — Diego Yonoff | IAM Analyst",
  skills: "Skills — Diego Yonoff | IAM Analyst",
  projects: "Projects — Diego Yonoff | IAM Analyst",
  certifications: "Certifications — Diego Yonoff | IAM Analyst",
  blog: "Blogs — Diego Yonoff | IAM Analyst",
  contact: "Contact — Diego Yonoff | IAM Analyst",
};

/** `#/blog/mi-post`, `#blog` (legacy anchor), `#/` and `` all resolve. */
export function parseHash(hash: string): Route | null {
  const clean = hash.replace(/^#\/?/, "").trim();
  if (clean.length === 0 || clean === "/") return { page: "home" };
  const parts = clean.split("/").map((s) => s.trim()).filter(Boolean);
  const page = PAGE_KEYS[(parts[0] ?? "").toLowerCase()];
  if (!page) return null; // not one of our pages → leave the route alone
  if (page === "blog" && parts.length > 1) return { page: "blog", slug: parts.slice(1).join("/") };
  return { page };
}

export function PortfolioShell({ articles }: { articles: Article[] }) {
  const [route, setRoute] = React.useState<Route>({ page: "home" });

  React.useEffect(() => {
    // Pick up a deep link (#/blog/…) present on first load.
    const initial = parseHash(window.location.hash);
    if (initial) setRoute(initial);

    const onHash = () => {
      const next = parseHash(window.location.hash);
      if (!next) return;
      setRoute(next);
      // Each page starts at its own top — a new screen, not a scroll jump.
      window.scrollTo({ top: 0, behavior: "auto" });
      // Move keyboard focus to the new page content.
      window.setTimeout(() => {
        document.getElementById("main")?.focus?.();
      }, 40);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const article =
    route.page === "blog" && route.slug
      ? articles.find((a) => a.slug === route.slug) ?? null
      : null;

  const routeKey =
    route.page === "blog"
      ? article
        ? `blog/${article.slug}`
        : "blog"
      : route.page;

  // Reflect the current page in the tab title.
  React.useEffect(() => {
    document.title = article
      ? `${article.title} — Diego Yonoff`
      : PAGE_TITLES[route.page];
  }, [route, article]);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-paper"
      >
        Skip to content
      </a>
      <PortfolioHeader current={route.page} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={routeKey}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {route.page === "home" ? (
              <HomeView articles={articles} />
            ) : route.page === "about" ? (
              <AboutView />
            ) : route.page === "skills" ? (
              <SkillsView />
            ) : route.page === "projects" ? (
              <ProjectsView />
            ) : route.page === "certifications" ? (
              <CertificationsView />
            ) : route.page === "blog" ? (
              article ? (
                <BlogArticleView article={article} />
              ) : (
                <BlogIndexView articles={articles} />
              )
            ) : (
              <ContactView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      <PortfolioFooter />
    </div>
  );
}
