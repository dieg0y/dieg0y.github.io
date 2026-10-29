"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Copy, Globe, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { profile } from "@/data/portfolio";

export function Contact() {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast({
        title: "Email copied to clipboard",
        description: profile.email,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Could not copy",
        description: `Email: ${profile.email}`,
      });
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-label" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-ink/10 bg-[#16130e] p-8 text-[#f2eee6] shadow-2xl sm:p-12"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f2eee6 1px, transparent 1px), linear-gradient(to bottom, #f2eee6 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <p className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#e0855f]">
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Contact
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let&rsquo;s talk identity.
            </h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#f2eee6]/75 sm:text-base">
              If your team needs a junior IAM analyst who documents everything,
              questions his own skill levels, and is already deep in the
              lifecycle-and-governance problem space — my inbox is open. I
              respond in English or Spanish, usually within a day.
            </p>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#f2eee6] px-6 py-3 font-semibold text-[#16130e] transition-colors hover:bg-[#e0855f] hover:text-[#16130e]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{profile.email}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-[#f2eee6]/25 px-5 py-3 font-medium text-[#f2eee6]/90 transition-colors hover:border-[#e0855f] hover:text-[#e0855f]"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
                <span>{copied ? "Copied" : "Copy email"}</span>
              </button>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#f2eee6]/25 px-5 py-3 font-medium text-[#f2eee6]/90 transition-colors hover:border-[#e0855f] hover:text-[#e0855f]"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-wider text-[#f2eee6]/50">
              {profile.availability} · {profile.location} · {profile.timezone}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
