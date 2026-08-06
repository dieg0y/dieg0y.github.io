import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { initialArticles, Article } from "../data/articles";
import { FadeImage } from "../components/FadeImage";
import { 
  BookOpen, 
  Search, 
  Tag, 
  Clock, 
  ArrowRight
} from "lucide-react";

export function Blog() {
  const [searchParams] = useSearchParams();
  const articleList: Article[] = initialArticles;
  const initialTag = searchParams.get("tag") || "All";
  const [selectedTag, setSelectedTag] = useState<string>(initialTag);

  useEffect(() => {
    const urlTag = searchParams.get("tag");
    if (urlTag) {
      setSelectedTag(urlTag);
    }
  }, [searchParams]);

  const [showTags, setShowTags] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract all unique tags
  const allTags = ["All", ...Array.from(new Set(articleList.flatMap(a => a.tags)))];

  // Filtered articles
  const filteredArticles = articleList.filter(article => {
    const matchesTag = selectedTag === "All" || article.tags.includes(selectedTag);
    const matchesQuery = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesQuery;
  });

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-ink/10 pb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-3">
                <BookOpen className="h-4 w-4" />
                <span>Hands-On & Lab Notes</span>
              </div>
              <h1 className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
                Blog, Writeups & Labs
              </h1>
              <p className="mt-3 text-lg text-ink-light max-w-2xl">
                Blue Team writeups, malware analysis notes, SOC alert investigations, and lab research by Diego Yonoff.
              </p>
            </div>
          </div>

          {/* Search & Tags Bar */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setShowTags(!showTags)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink/10 bg-paper text-xs font-mono font-medium text-ink hover:border-accent transition-colors"
              >
                <Tag className="h-3.5 w-3.5 text-accent" />
                <span>{showTags ? "Hide Filters (#Tags)" : "Show Filters (#Tags)"}</span>
              </button>

              {/* Search Input */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-ink-light" />
                <input
                  type="text"
                  placeholder="Search by title or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 rounded-full border border-ink/10 bg-paper text-xs font-mono text-ink focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            {/* Tags Pills */}
            <AnimatePresence>
              {showTags && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none font-mono text-xs pt-1"
                >
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                        selectedTag === tag
                          ? "bg-ink text-paper font-bold"
                          : "bg-ink/5 text-ink-light hover:text-ink hover:bg-ink/10"
                      }`}
                    >
                      {tag === "All" ? "All" : `#${tag}`}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((art, index) => (
              <motion.article
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-ink/10 bg-paper overflow-hidden flex flex-col justify-between hover:border-accent hover:shadow-xl transition-all"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-ink/10">
                    <FadeImage
                      src={art.coverImage}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {art.tags.map(t => (
                        <span key={t} className="px-2.5 py-1 rounded bg-paper/90 backdrop-blur-md font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 font-mono text-xs text-ink-light mb-3">
                      <span>{art.date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-ink group-hover:text-accent transition-colors leading-snug mb-3">
                      <Link to={`/post/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-ink-light leading-relaxed line-clamp-3 mb-6">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-ink/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-ink font-semibold">{art.author.name}</span>
                  </div>

                  <Link
                    to={`/post/${art.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent group-hover:underline"
                  >
                    <span>Read Writeup</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 bg-ink/5 rounded-2xl border border-ink/10">
              <p className="font-mono text-sm text-ink-light">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
