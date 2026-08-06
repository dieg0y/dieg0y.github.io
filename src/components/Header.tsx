import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, Github, Linkedin, ShieldCheck, BookOpen, Code2, User, Award, FolderKanban } from "lucide-react";
import { useState } from "react";
import { MenuOverlay } from "./MenuOverlay";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper/90 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-ink-light hover:text-ink transition-colors rounded-md hover:bg-ink/5 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link 
              to="/" 
              className="flex items-center gap-2.5 group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-paper font-mono text-xs font-bold transition-transform group-hover:scale-105">
                <ShieldCheck className="h-5 w-5 text-accent" />
              </div>
              <span className="font-serif text-lg font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
                DY
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium tracking-wide">
            <Link 
              to="/about" 
              className={`transition-colors flex items-center gap-1.5 ${isActive('/about') ? 'text-accent font-semibold' : 'text-ink-light hover:text-ink'}`}
            >
              <User className="h-3.5 w-3.5" />
              <span>About</span>
            </Link>
            <Link 
              to="/experience" 
              className={`transition-colors flex items-center gap-1.5 ${isActive('/experience') ? 'text-accent font-semibold' : 'text-ink-light hover:text-ink'}`}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Experience</span>
            </Link>
            <Link 
              to="/skills" 
              className={`transition-colors flex items-center gap-1.5 ${isActive('/skills') ? 'text-accent font-semibold' : 'text-ink-light hover:text-ink'}`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>Skills & Education</span>
            </Link>
            <Link 
              to="/certifications" 
              className={`transition-colors flex items-center gap-1.5 ${isActive('/certifications') ? 'text-accent font-semibold' : 'text-ink-light hover:text-ink'}`}
            >
              <Award className="h-3.5 w-3.5" />
              <span>Certifications</span>
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors flex items-center gap-1.5 ${isActive('/projects') ? 'text-accent font-semibold' : 'text-ink-light hover:text-ink'}`}
            >
              <FolderKanban className="h-3.5 w-3.5" />
              <span>Projects</span>
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg border ${isActive('/blog') ? 'bg-accent text-paper font-bold border-accent' : 'border-ink/15 text-ink hover:text-accent hover:border-accent/40 bg-ink/5'}`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Blog / Labs</span>
            </Link>
          </nav>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href="https://linkedin.com/in/diegoyonoff" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex p-2 text-ink-light hover:text-accent transition-colors rounded-md hover:bg-ink/5"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a 
              href="https://github.com/dieg0y" 
              target="_blank" 
              rel="noreferrer"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-ink text-paper hover:bg-accent transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>github.com/dieg0y</span>
            </a>
          </div>
        </div>
      </motion.header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
