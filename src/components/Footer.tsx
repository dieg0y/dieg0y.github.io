import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper py-12 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper font-mono text-xs font-bold">
                <ShieldCheck className="h-4 w-4 text-accent" />
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight text-ink">Diego Yonoff</span>
            </Link>
            <p className="text-xs font-mono text-ink-light">
              SOC Analyst &bull; Barranquilla, Colombia
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <nav className="flex flex-wrap gap-4 text-xs font-mono font-medium">
              <Link to="/about" className="text-ink-light hover:text-accent transition-colors">About & Profile</Link>
              <Link to="/experience" className="text-ink-light hover:text-accent transition-colors">Experience</Link>
              <Link to="/skills" className="text-ink-light hover:text-accent transition-colors">Skills & Education</Link>
              <Link to="/certifications" className="text-ink-light hover:text-accent transition-colors">Certifications</Link>
              <Link to="/projects" className="text-ink-light hover:text-accent transition-colors">Projects</Link>
              <Link to="/blog" className="text-ink-light hover:text-accent transition-colors">Blog & Writeups</Link>
            </nav>

            <div className="flex items-center gap-2 text-ink-light">
              <a 
                href="https://github.com/dieg0y" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-ink/5 hover:bg-ink hover:text-paper transition-all"
                title="GitHub @dieg0y"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/in/diegoyonoff" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-ink/5 hover:bg-ink hover:text-paper transition-all"
                title="LinkedIn @diegoyonoff"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="mailto:diegojose0405@gmail.com" 
                className="p-2 rounded-full bg-ink/5 hover:bg-ink hover:text-paper transition-all"
                title="Email Diego"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row text-center sm:text-left">
          <p className="text-xs text-ink-light font-mono">
            &copy; {new Date().getFullYear()} Diego Yonoff. All rights reserved.
          </p>
          <p className="text-xs text-ink-light font-mono">
            dieg0y.github.io &bull; <a href="https://github.com/dieg0y" target="_blank" rel="noreferrer" className="underline hover:text-accent">github.com/dieg0y</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
