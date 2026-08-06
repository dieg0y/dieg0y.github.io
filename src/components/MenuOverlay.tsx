import { motion, AnimatePresence } from "motion/react";
import { X, Github, Mail, Linkedin, BookOpen, Code2, User, ShieldCheck, Award, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-ink/30 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-[100] w-full max-w-sm bg-paper shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center p-6 border-b border-ink/10">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-serif text-lg font-semibold tracking-wide text-ink">Diego Yonoff</span>
                </div>
                <button onClick={onClose} aria-label="Close menu" className="p-2 text-ink-light hover:text-ink transition-colors rounded-md hover:bg-ink/5">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="p-6 flex flex-col gap-3 font-mono text-sm">
                <Link to="/about" onClick={onClose} className="p-3 rounded-lg hover:bg-ink/5 text-ink flex items-center gap-3">
                  <User className="h-4 w-4 text-accent" />
                  <span>About & Profile</span>
                </Link>
                <Link to="/experience" onClick={onClose} className="p-3 rounded-lg hover:bg-ink/5 text-ink flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>Experience</span>
                </Link>
                <Link to="/skills" onClick={onClose} className="p-3 rounded-lg hover:bg-ink/5 text-ink flex items-center gap-3">
                  <Code2 className="h-4 w-4 text-accent" />
                  <span>Skills & Education</span>
                </Link>
                <Link to="/certifications" onClick={onClose} className="p-3 rounded-lg hover:bg-ink/5 text-ink flex items-center gap-3">
                  <Award className="h-4 w-4 text-accent" />
                  <span>Certifications</span>
                </Link>
                <Link to="/projects" onClick={onClose} className="p-3 rounded-lg hover:bg-ink/5 text-ink flex items-center gap-3">
                  <Terminal className="h-4 w-4 text-accent" />
                  <span>Projects</span>
                </Link>
                <Link to="/blog" onClick={onClose} className="p-3 rounded-lg bg-accent/10 text-accent font-semibold flex items-center gap-3 border border-accent/20">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span>Blog / Labs</span>
                </Link>
              </nav>
            </div>

            <div className="p-6 border-t border-ink/10 flex flex-col gap-3">
              <a 
                href="https://github.com/dieg0y" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded-lg bg-ink text-paper hover:bg-accent transition-colors text-xs font-mono font-medium"
              >
                <Github className="h-4 w-4" />
                <span>github.com/dieg0y</span>
              </a>
              <a 
                href="https://linkedin.com/in/diegoyonoff" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded-lg border border-ink/20 text-ink hover:border-accent hover:text-accent transition-colors text-xs font-mono font-medium"
              >
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/diegoyonoff</span>
              </a>
              <a 
                href="mailto:diegojose0405@gmail.com" 
                className="flex items-center gap-2 text-xs font-mono text-ink-light hover:text-accent transition-colors pt-2"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>diegojose0405@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
