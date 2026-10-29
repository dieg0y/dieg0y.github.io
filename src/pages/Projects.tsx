import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { projects } from "../data/projects";
import { portfolioProjects, roadmapTiers, roadmapStats } from "../data/roadmap";
import {
  Github,
  Fingerprint,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Clock,
  ListChecks,
  Route as RouteIcon,
  Layers,
  ExternalLink,
} from "lucide-react";

const statusStyles = {
  completed: {
    label: "Completed",
    badge: "bg-emerald-500/10 text-emerald-800 border border-emerald-500/20",
    icon: CheckCircle2,
  },
  "in-progress": {
    label: "In Progress",
    badge: "bg-amber-500/10 text-amber-800 border border-amber-500/20",
    icon: CircleDot,
  },
  planned: {
    label: "Planned",
    badge: "bg-ink/5 text-ink-light border border-ink/15",
    icon: Clock,
  },
} as const;

function StatusBadge({ status }: { status: keyof typeof statusStyles }) {
  const meta = statusStyles[status];
  const Icon = meta.icon;
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] font-semibold whitespace-nowrap ${meta.badge}`}>
      <Icon className="h-3 w-3" />
      <span>{meta.label}</span>
    </span>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const repoProjects = projects.filter((p) => !p.featured);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 max-w-3xl"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-3">
              <Fingerprint className="h-4 w-4" />
              <span>Identity &amp; Access Management Evidence</span>
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink md:text-6xl">
              IAM Projects &amp; Roadmap
            </h1>
            <p className="mt-4 text-lg text-ink-light leading-relaxed">
              Real repositories maintained by Diego Yonoff (<a href="https://github.com/dieg0y" target="_blank" rel="noreferrer" className="underline font-mono text-accent">@dieg0y</a>),
              plus the ten-project IAM portfolio plan I am executing. Statuses are honest: nothing is marked
              complete without a verifiable repository behind it.
            </p>
          </motion.div>

          {/* Featured project: VAULTNOTES */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 sm:p-10 transition-all hover:border-accent shadow-sm mb-6"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-accent text-paper font-mono text-xs font-bold">
                {featured.language} &middot; Flagship
              </span>
              <StatusBadge status={featured.status} />
              <span className="font-mono text-xs text-ink-light">actively maintained</span>
            </div>

            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-ink mb-2">
              {featured.title}
            </h2>
            <p className="font-mono text-sm text-accent font-semibold mb-4">{featured.tagline}</p>

            <p className="text-base sm:text-lg text-ink-light leading-relaxed mb-8 max-w-3xl">
              {featured.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-md bg-ink/5 text-ink-light border border-ink/10"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Verifiable evidence */}
            <div className="mb-8">
              <span className="font-mono text-[10px] uppercase font-bold text-ink-light tracking-widest block mb-3">
                Verifiable evidence (in the repository)
              </span>
              <ul className="space-y-2.5">
                {featured.evidence.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-light">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between border-t border-ink/10 pt-6">
              <a
                href={featured.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper text-xs font-mono font-semibold hover:bg-accent transition-colors shadow-md"
              >
                <Github className="h-4 w-4" />
                <span>View on GitHub: dieg0y/VAULTNOTES</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Completed repositories */}
          <div className="mt-14 mb-14">
            <h2 className="font-serif text-3xl font-bold text-ink mb-2 flex items-center gap-3 border-b border-ink/10 pb-4">
              <Github className="h-6 w-6 text-accent" />
              <span>Public Repositories</span>
            </h2>
            <p className="font-mono text-xs text-ink-light mb-8 -mt-2">
              Academic and personal repositories — each link leads to real, inspectable code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repoProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-ink/10 bg-paper p-7 hover:border-accent transition-all shadow-sm flex flex-col"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded bg-ink/5 text-ink-light font-mono text-xs font-bold border border-ink/10">
                      {project.language}
                    </span>
                    <StatusBadge status={project.status} />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-ink mb-1">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-accent font-semibold mb-3">{project.tagline}</p>

                  <p className="text-sm text-ink-light leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-[11px]">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-ink/5 text-ink-light border border-ink/10">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-accent hover:underline"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>dieg0y/{project.id}</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The 10-project IAM portfolio plan */}
          <div id="portfolio-plan" className="mt-6 mb-14">
            <h2 className="font-serif text-3xl font-bold text-ink mb-2 flex items-center gap-3 border-b border-ink/10 pb-4">
              <ListChecks className="h-6 w-6 text-accent" />
              <span>The IAM Portfolio — 10 Projects</span>
            </h2>
            <p className="text-sm text-ink-light leading-relaxed mb-8 -mt-2 max-w-3xl">
              My portfolio strategy, defined by the roadmap (Phase 31). These are <strong>goals, not finished
              products</strong>: each project is published here only as its repository goes live. Two of them
              already have a real, inspectable base inside VAULTNOTES.
            </p>

            <div className="space-y-4">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className={`rounded-2xl border p-6 transition-all ${
                    project.status === "in-progress"
                      ? "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50"
                      : "border-ink/10 bg-paper hover:border-accent"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-2xl font-bold text-accent/60 leading-none pt-1">
                        {project.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-ink leading-snug">
                          {project.title}
                        </h3>
                        <p className="font-mono text-[11px] text-ink-light mt-1">{project.stack}</p>
                      </div>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <p className="text-sm text-ink-light leading-relaxed mb-3 pl-0 sm:pl-10">
                    {project.description}
                  </p>
                  <p className="text-xs text-ink-light/90 leading-relaxed pl-0 sm:pl-10 border-l-2 border-ink/10 pl-4 sm:ml-10 italic">
                    {project.statusNote}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* IAM Learning Roadmap */}
          <div id="roadmap" className="mt-6">
            <h2 className="font-serif text-3xl font-bold text-ink mb-2 flex items-center gap-3 border-b border-ink/10 pb-4">
              <RouteIcon className="h-6 w-6 text-accent" />
              <span>IAM Learning Roadmap</span>
            </h2>
            <p className="text-sm text-ink-light leading-relaxed mb-8 -mt-2 max-w-3xl">
              The actual roadmap I follow — maintained inside{" "}
              <a href="https://github.com/dieg0y/VAULTNOTES" target="_blank" rel="noreferrer" className="underline hover:text-accent">
                VAULTNOTES
              </a>{" "}
              with {roadmapStats.phases} phases and {roadmapStats.items} study items. Phase titles are shown
              as-is; item completion is tracked privately and no progress percentages are claimed.
            </p>

            <div className="space-y-6">
              {roadmapTiers.map((tier, tierIndex) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: tierIndex * 0.08 }}
                  className="rounded-2xl border border-ink/10 bg-paper p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-ink/10 mb-5">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
                        <Layers className="h-4 w-4 text-accent" />
                        {tier.title}
                      </h3>
                      <p className="font-sans text-xs text-ink-light mt-1">{tier.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-ink-light">
                      <span className="px-2.5 py-1 rounded-full bg-ink/5 border border-ink/10">
                        {tier.phases.length} phases
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-ink/5 border border-ink/10">
                        {tier.itemCount} items
                      </span>
                    </div>
                  </div>

                  <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {tier.phases.map((phase) => (
                      <li key={phase.number} className="flex items-start gap-3">
                        <span className="font-mono text-[11px] font-bold text-accent bg-accent/10 rounded px-1.5 py-0.5 mt-0.5 shrink-0">
                          F{phase.number}
                        </span>
                        <span className="font-mono text-xs text-ink-light leading-relaxed">
                          {phase.title}
                        </span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
