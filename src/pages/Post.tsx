import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { initialArticles } from "../data/articles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AuthorInfo } from "../components/AuthorInfo";
import { FadeImage } from "../components/FadeImage";
import { ArrowLeft, Share2, Check, Github, Linkedin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const article = initialArticles.find((a) => a.slug === slug);
  const [copied, setCopied] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Diego Yonoff Blog`;
    } else {
      document.title = `Article Not Found | Diego Yonoff`;
    }
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col bg-paper">
        <Header />
        <main className="flex-1 flex items-center justify-center p-12">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-ink mb-4">Article Not Found</h1>
            <p className="text-sm font-mono text-ink-light mb-6">The writeup you are looking for does not exist or has been moved.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-paper font-mono text-xs font-semibold hover:bg-ink transition-colors">
              &rarr; Return to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      
      <main className="flex-1">
        {/* Back navigation bar */}
        <div className="mx-auto max-w-4xl px-4 pt-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-ink-light hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Blog & Writeups</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="relative h-[48vh] min-h-[380px] w-full overflow-hidden bg-ink mt-6">
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0"
          >
            <FadeImage 
              src={article.coverImage} 
              alt={article.title} 
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover opacity-35"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 md:p-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl"
            >
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-paper/80">
                {article.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded bg-accent text-paper font-semibold">
                    {tag}
                  </span>
                ))}
                <span className="ml-2">{article.date}</span>
                <span className="h-1 w-1 rounded-full bg-paper/40"></span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>
              
              <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-paper sm:text-4xl md:text-5xl">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
        
        {/* Content Body with ReactMarkdown */}
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="prose prose-lg prose-stone max-w-none font-sans"
          >
            <p className="lead text-xl sm:text-2xl font-serif italic text-ink mb-10 border-l-2 border-accent pl-4 py-1">
              {article.excerpt}
            </p>

            <div className="markdown-body space-y-6 text-ink-light leading-relaxed">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="font-serif text-3xl font-bold text-ink mt-10 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="font-serif text-2xl font-bold text-ink mt-8 mb-3 border-b border-ink/10 pb-2">{children}</h2>,
                  h3: ({ children }) => <h3 className="font-mono text-lg font-bold text-accent mt-6 mb-2">{children}</h3>,
                  p: ({ children }) => <p className="text-base text-ink-light leading-relaxed my-4">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 my-4 text-ink-light">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2 my-4 text-ink-light">{children}</ol>,
                  li: ({ children }) => <li className="text-base">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-accent pl-4 my-6 italic text-ink/80 bg-ink/5 p-3 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  img: ({ src, alt }) => (
                    src ? (
                      <img 
                        src={src} 
                        alt={alt || "Article image"} 
                        referrerPolicy="no-referrer"
                        className="my-6 rounded-2xl border border-ink/10 shadow-md max-h-[500px] w-full object-cover" 
                      />
                    ) : null
                  ),
                  code: ({ className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                      <div className="my-6 rounded-xl bg-ink p-4 text-paper font-mono text-xs overflow-x-auto shadow-md border border-ink/20">
                        <code className="block" {...props}>{children}</code>
                      </div>
                    ) : (
                      <code className="bg-ink/10 px-1.5 py-0.5 rounded font-mono text-xs text-accent font-semibold" {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {article.content || article.excerpt}
              </ReactMarkdown>
            </div>

            {/* Share & Social Footer */}
            <div className="mt-12 pt-6 border-t border-ink/10 flex items-center justify-between flex-wrap gap-4">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-ink/20 text-xs font-mono text-ink hover:border-accent hover:text-accent transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
                <span>{copied ? "Link Copied!" : "Share Article"}</span>
              </button>

              <div className="flex items-center gap-3 font-mono text-xs">
                <a
                  href="https://github.com/dieg0y"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-ink-light hover:text-accent transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/diegoyonoff"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-ink-light hover:text-accent transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          <AuthorInfo author={article.author} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
