import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Download, Mail, MapPin, ShieldCheck, BookOpen, Github } from "lucide-react";
import { articles } from "../data/articles";

export function Home() {
  const featuredArticle = articles[0];

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      
      <main className="flex-1">
        {/* Main Hero / About Profile Section */}
        <section className="relative overflow-hidden py-12 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Solid Black SOC Professional Card (No Personal Photo) */}
              <div className="w-full md:w-5/12">
                <div className="relative overflow-hidden rounded-2xl bg-black border border-ink/20 p-6 shadow-2xl text-paper font-sans space-y-5">
                  {/* Top Status Badge */}
                  <div className="flex items-center justify-between border-b border-paper/10 pb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="font-mono text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                        SOC Operations &bull; Active
                      </span>
                    </div>
                    <ShieldCheck className="h-4 w-4 text-accent" />
                  </div>

                  {/* Profile Header */}
                  <div className="space-y-1">
                    <h2 className="font-serif text-xl font-bold text-paper tracking-tight">
                      Diego Yonoff Molina
                    </h2>
                    <p className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                      Security Operations Analyst
                    </p>
                  </div>

                  {/* Core Specializations */}
                  <div className="space-y-2 pt-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-paper/50 tracking-widest block">
                      Core Specializations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-paper/10 text-paper/90 font-mono text-[11px] font-medium border border-paper/10">SOC</span>
                      <span className="px-2.5 py-1 rounded-md bg-paper/10 text-paper/90 font-mono text-[11px] font-medium border border-paper/10">Threat Detection &amp; Hunting</span>
                      <span className="px-2.5 py-1 rounded-md bg-paper/10 text-paper/90 font-mono text-[11px] font-medium border border-paper/10">Incident Response</span>
                      <span className="px-2.5 py-1 rounded-md bg-paper/10 text-paper/90 font-mono text-[11px] font-medium border border-paper/10">Malware Analysis</span>
                      <span className="px-2.5 py-1 rounded-md bg-paper/10 text-paper/90 font-mono text-[11px] font-medium border border-paper/10">Networking</span>
                    </div>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-3 border-t border-paper/10 flex items-center justify-between font-mono text-[11px] text-paper/50">
                    <span>BLUE TEAM // SEC_OPS</span>
                    <span>Barranquilla, CO</span>
                  </div>
                </div>
              </div>
              
              {/* Right Details Column */}
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-3">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink/5 border border-ink/10 text-ink">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>Barranquilla, Colombia</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>SOC Analyst</span>
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-ink mb-2 tracking-tight">
                  Diego Yonoff
                </h1>
                <div className="font-mono text-sm font-bold uppercase text-accent tracking-wider mb-6">
                  SOC Analyst
                </div>

                <p className="text-lg font-sans text-ink-light mb-8 leading-relaxed border-l-2 border-accent pl-4 py-1">
                  SOC Analyst with hands-on experience in security monitoring, threat detection, and incident investigation across simulated enterprise environments. Skilled in SIEM analysis, log correlation, and threat intelligence.
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
                  <a 
                    href="/cv-diego-yonoff.pdf" 
                    download="CV_Diego_Yonoff_SOC_Analyst.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper hover:bg-accent transition-colors font-semibold shadow-md"
                  >
                    <Download className="h-4 w-4 text-accent" />
                    <span>Download CV (PDF)</span>
                  </a>
                  <a 
                    href="mailto:diegojose0405@gmail.com" 
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/20 text-ink hover:border-accent hover:text-accent transition-colors font-medium"
                  >
                    <Mail className="h-4 w-4 text-accent" />
                    <span>diegojose0405@gmail.com</span>
                  </a>
                  <a 
                    href="https://github.com/dieg0y" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/20 text-ink hover:border-accent hover:text-accent transition-colors font-medium"
                  >
                    <Github className="h-4 w-4 text-accent" />
                    <span>GitHub @dieg0y</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Featured Blog Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 border-t border-ink/10 pt-12"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent block mb-1 flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Featured Writeup</span>
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-ink">
                    Featured Blog Writeups
                  </h2>
                </div>
                <Link
                  to="/blog"
                  className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline"
                >
                  <span>View All Articles in Blog &rarr;</span>
                </Link>
              </div>

              {featuredArticle && (
                <div className="group rounded-2xl border border-ink/10 bg-paper p-6 sm:p-8 hover:border-accent transition-all shadow-sm">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-ink-light mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-accent text-paper font-semibold">
                      SOC / Blue Team
                    </span>
                    <span>&bull; {featuredArticle.date}</span>
                    <span>&bull; {featuredArticle.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink group-hover:text-accent transition-colors mb-4">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-base text-ink-light leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ink/10">
                    <Link
                      to={`/post/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-paper font-mono text-xs font-bold hover:bg-accent transition-colors"
                    >
                      <span>Read Full Writeup &rarr;</span>
                    </Link>

                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-ink-light hover:text-accent"
                    >
                      <span>View All Articles in Blog &rarr;</span>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
