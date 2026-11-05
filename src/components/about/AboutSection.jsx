"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { ArrowUpRight, Award, BookOpen, Code2, Cpu, Globe2, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-borderLine"
    >
      {/* Section Label */}
      <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-widest uppercase mb-8">
        <span>01</span>
        <span className="text-editorial-muted">/</span>
        <span>THE PERSON BEHIND THE CODE</span>
      </div>

      {/* Main Grid: Headline & Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Big Editorial Headline (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <h2 className="text-section-title font-display font-black text-editorial-light uppercase leading-[1.05]">
            Curiosity turns ideas into things you can use.
          </h2>

          {/* Published Paper Spotlight Badge */}
          <div className="p-5 rounded-2xl border border-borderLine bg-surface/60 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-mono text-xs text-accent font-semibold tracking-wider uppercase">
                <BookOpen size={14} /> Peer-Reviewed Research
              </span>
              <span className="font-mono text-[10px] text-editorial-muted px-2 py-0.5 rounded-full border border-borderLine">
                ISSN: 2456-8880
              </span>
            </div>
            <p className="font-sans text-xs text-editorial-light leading-relaxed">
              Authored published research in <em>IRE Journals</em> on autonomous skill intelligence, Dockerized code evaluation, and ATS matching algorithms.
            </p>
            <a
              href={profile.links.researchPaper}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
            >
              <span>Read Published Paper</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Quick Metrics & Author Badge */}
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-borderLine bg-surface/70">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-accent/40 shrink-0">
              <Image
                src={profile.assets.profilePhoto}
                alt={profile.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-editorial-light">
                {profile.name}
              </h4>
              <p className="font-mono text-xs text-accent">
                {profile.title}
              </p>
              <p className="font-mono text-[11px] text-editorial-muted">
                {profile.location.display} · Rajiv Gandhi Institute Of Technology
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl border border-borderLine bg-void/50">
              <div className="font-display font-bold text-2xl text-editorial-light">
                20+
              </div>
              <div className="font-mono text-[11px] text-editorial-muted uppercase mt-0.5">
                Public Repositories
              </div>
            </div>

            <div className="p-4 rounded-xl border border-borderLine bg-void/50">
              <div className="font-display font-bold text-2xl text-accent">
                100%
              </div>
              <div className="font-mono text-[11px] text-editorial-muted uppercase mt-0.5">
                Production Tested
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Genuine Biography Narrative & Philosophy (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="space-y-4 font-sans text-base sm:text-lg text-editorial-muted leading-relaxed">
            <p className="text-editorial-light font-medium">
              I am a Computer Science Engineering student at{" "}
              <strong className="text-editorial-light font-semibold">
                Rajiv Gandhi Institute Of Technology (RGIT)
              </strong>{" "}
              in Bengaluru, with a deep interest in full-stack web development,
              software architecture, and practical AI applications.
            </p>
            <p>
              My development philosophy is rooted in concrete execution: I learn
              by architecting full-stack systems from scratch rather than consuming
              isolated tutorials. Whether it's implementing isolated Docker container
              sandboxes for algorithm testing, building low-latency LLM workflows with
              Groq, or crafting buttery 60fps micro-interactions with GSAP and Framer
              Motion, I care deeply about how software feels, performs, and solves
              genuine human problems.
            </p>
            <p>
              When I'm not writing code, I am analyzing developer tooling, studying
              distributed architecture patterns, or collaborating with fellow students
              on capstone platforms and open-source software.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-borderLine">
            <div className="p-4 rounded-xl border border-borderLine/70 bg-void/40 space-y-2">
              <div className="flex items-center gap-2 text-editorial-light font-mono text-xs font-bold uppercase tracking-wider">
                <Code2 size={16} className="text-accent" />
                <span>Frontend Craft</span>
              </div>
              <p className="text-xs text-editorial-muted leading-relaxed font-sans">
                React 19, Next.js App Router, TypeScript, and modern CSS tokens with high accessibility standards.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-borderLine/70 bg-void/40 space-y-2">
              <div className="flex items-center gap-2 text-editorial-light font-mono text-xs font-bold uppercase tracking-wider">
                <Cpu size={16} className="text-accent" />
                <span>Backend & APIs</span>
              </div>
              <p className="text-xs text-editorial-muted leading-relaxed font-sans">
                Modular Express 5 architectures, RESTful conventions, WebSocket streaming, and secure authentication.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-borderLine/70 bg-void/40 space-y-2">
              <div className="flex items-center gap-2 text-editorial-light font-mono text-xs font-bold uppercase tracking-wider">
                <Globe2 size={16} className="text-accent" />
                <span>AI Integrations</span>
              </div>
              <p className="text-xs text-editorial-muted leading-relaxed font-sans">
                Ultra-fast Groq LLM inference, LangChain workflows, and local Ollama experimentation with strict deterministic fallbacks.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-borderLine/70 bg-void/40 space-y-2">
              <div className="flex items-center gap-2 text-editorial-light font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={16} className="text-accent" />
                <span>Docker & DevOps</span>
              </div>
              <p className="text-xs text-editorial-muted leading-relaxed font-sans">
                Resource-isolated container sandboxing, CI/CD with GitHub Actions, and production deployments on Vercel and Render.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

