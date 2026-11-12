import { PortfolioShell } from "@/components/portfolio/router";
import { getArticles } from "@/lib/blog";

/**
 * Page-based portfolio — every section lives on its own screen
 * (hash routes like #/about, #/blog/<slug>), driven by PortfolioShell.
 * Articles are Markdown files dropped into content/blog/.
 */
export default function Page() {
  const articles = getArticles();

  return <PortfolioShell articles={articles} />;
}
