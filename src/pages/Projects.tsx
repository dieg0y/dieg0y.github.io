import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { projects } from "../data/projects";
import { Github, Star, GitFork, Terminal, ArrowUpRight } from "lucide-react";

export function Projects() {
  const subnetProject = projects[0];

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 max-w-3xl"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-3">
              <Terminal className="h-4 w-4" />
              <span>Networking & Security Tools</span>
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-tight text-ink md:text-6xl">
              Open-Source Projects
            </h1>
            <p className="mt-4 text-lg text-ink-light leading-relaxed">
              Software repositories created and maintained by Diego Yonoff (<a href="https://github.com/dieg0y" target="_blank" rel="noreferrer" className="underline font-mono text-accent">@dieg0y</a>).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-ink/10 bg-paper p-8 sm:p-10 transition-all hover:border-accent shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded bg-accent/10 text-accent font-mono text-xs font-bold">
                {subnetProject.language} CLI Tool
              </span>
              <div className="flex items-center gap-4 text-xs font-mono text-ink-light">
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500/20" />
                  {subnetProject.stars} stars
                </span>
                <span className="flex items-center gap-1.5">
                  <GitFork className="h-4 w-4" />
                  {subnetProject.forks} forks
                </span>
              </div>
            </div>

            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-ink mb-4">
              {subnetProject.title}
            </h2>

            <p className="text-base sm:text-lg text-ink-light leading-relaxed mb-8 max-w-3xl">
              {subnetProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
              {subnetProject.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 rounded-md bg-ink/5 text-ink-light border border-ink/10"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CLI Usage Snippet */}
            <div className="mb-8 rounded-xl bg-ink p-5 text-paper font-mono text-xs sm:text-sm space-y-2">
              <div className="text-paper/50"># Clone & Run IPSubnetting CLI</div>
              <div className="text-emerald-400">$ git clone https://github.com/dieg0y/IPsubnetting.git</div>
              <div className="text-emerald-400">$ cd IPsubnetting</div>
              <div className="text-emerald-400">$ python subnet.py --ip 192.168.1.0/24</div>
            </div>

            <div className="flex items-center justify-between border-t border-ink/10 pt-6">
              <a
                href={subnetProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper text-xs font-mono font-semibold hover:bg-accent transition-colors shadow-md"
              >
                <Github className="h-4 w-4" />
                <span>View on GitHub: dieg0y/IPsubnetting</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

