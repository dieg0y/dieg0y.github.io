import type { Author } from "../data/articles";
import { Github, Mail, ShieldCheck } from "lucide-react";

interface AuthorInfoProps {
  author: Author;
}

export function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="mt-16 border-t border-ink/10 pt-10">
      <div className="bg-ink/5 p-8 rounded-2xl border border-ink/10">
        <div className="flex flex-col text-left">
          {author.avatar && (
            <img src={author.avatar} alt={author.name} className="h-16 w-16 rounded-full mb-4 object-cover" />
          )}

          <h3 className="font-serif text-2xl font-medium tracking-tight text-ink mb-4">
            Written by {author.name}
          </h3>

          <div className="pt-4 border-t border-ink/10 w-full text-sm text-ink-light leading-relaxed font-sans">
            <h4 className="font-serif text-sm font-bold text-ink uppercase tracking-wider mb-2">
              Disclaimer
            </h4>
            <p className="mb-2 text-sm">
              This article was researched, written, structured, and reviewed by <strong className="text-ink">Diego Yonoff Molina</strong>.
            </p>
            <p className="text-xs text-ink-light leading-relaxed mb-4">
              To enhance clarity, organization, and readability, artificial intelligence assistance was utilized as editorial support. All content was thoroughly reviewed and validated prior to publication.
            </p>
          </div>

          <div className="mt-2 flex flex-wrap gap-3 text-xs font-mono font-medium">
            <a
              href={author.github ?? "https://github.com/dieg0y"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-paper hover:bg-accent transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            {author.email && (
              <a
                href={`mailto:${author.email}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-ink/20 text-ink hover:border-accent hover:text-accent transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-accent" />
                <span>{author.email}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
