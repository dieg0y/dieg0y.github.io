import { PortfolioHeader } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Certifications } from "@/components/portfolio/certifications";
import { Writing } from "@/components/portfolio/writing";
import { Contact } from "@/components/portfolio/contact";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { getArticles } from "@/lib/blog";

export default function Page() {
  const articles = getArticles();

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-paper"
      >
        Skip to content
      </a>
      <PortfolioHeader />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Writing articles={articles} />
        <Contact />
      </main>
      <PortfolioFooter />
    </div>
  );
}
