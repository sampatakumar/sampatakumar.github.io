"use client";

import { profile } from "@/data/profile";
import { ArrowUp, Github, Linkedin, MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-borderLine bg-void/90 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Row: Wordmark, Nav & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-borderLine/50">
          
          {/* Personal Wordmark */}
          <div className="space-y-1">
            <a
              href="#hero"
              className="font-display font-black text-2xl tracking-tight text-editorial-light hover:text-accent transition-colors uppercase"
            >
              {profile.name}
            </a>
            <p className="font-mono text-xs text-editorial-muted">
              {profile.title} · {profile.location.display}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono text-editorial-muted">
            <a href="#about" className="hover:text-editorial-light transition-colors">
              ABOUT
            </a>
            <a href="#work" className="hover:text-editorial-light transition-colors">
              WORK
            </a>
            <a href="#stack" className="hover:text-editorial-light transition-colors">
              STACK
            </a>
            <a href="#journey" className="hover:text-editorial-light transition-colors">
              JOURNEY
            </a>
            <a href="#contact" className="hover:text-editorial-light transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-editorial-muted hover:text-accent transition-colors self-start md:self-auto group"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <div className="p-2 rounded-full border border-borderLine group-hover:border-accent transition-colors">
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

        </div>

        {/* Bottom Row: Socials & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs font-mono text-editorial-muted">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.<br />
            <span className="text-[11px] text-editorial-dark">
              Engineered with Next.js App Router, GSAP ScrollTrigger & Lenis.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-borderLine/70 hover:border-accent text-editorial-muted hover:text-accent transition-all"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={profile.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-borderLine/70 hover:border-accent text-editorial-muted hover:text-accent transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-borderLine/70 hover:border-accent text-editorial-muted hover:text-accent transition-all"
              aria-label="WhatsApp"
            >
              <MessageSquare size={15} />
            </a>
            <a
              href={profile.contact.emailMailto}
              className="p-2 rounded-full border border-borderLine/70 hover:border-accent text-editorial-muted hover:text-accent transition-all"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

