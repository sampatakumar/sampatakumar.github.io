"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Github, Star, GitFork, ArrowUpRight, Code, Activity, Terminal } from "lucide-react";

export default function GithubActivity() {
  const [selectedRepo, setSelectedRepo] = useState(null);

  const topRepos = [
    {
      name: "SSH-final-year-project",
      stars: 4,
      forks: 1,
      language: "JavaScript / TS",
      description: "Smart Skill Hub (SSH) — AI-powered developer intelligence, ATS resume engine, and Docker sandbox execution.",
      url: "https://github.com/sampatakumar/SSH-final-year-project",
    },
    {
      name: "ResumeAI",
      stars: 4,
      forks: 1,
      language: "TypeScript",
      description: "AI-driven resume parsing, ATS keyword tailoring, and automated Cloudflare Pages portfolio deployment.",
      url: "https://github.com/sampatakumar/ResumeAI",
    },
    {
      name: "git-reviewer",
      stars: 2,
      forks: 0,
      language: "TypeScript",
      description: "Developer analytics platform with GitHub profile inspection, Recharts graphs, and Groq AI insights.",
      url: "https://github.com/sampatakumar/git-reviewer",
    },
    {
      name: "Full-stack-event (EduConnect)",
      stars: 3,
      forks: 1,
      language: "JavaScript",
      description: "Curated student resource platform with Socket.IO chatrooms, Firebase authentication, and note moderation.",
      url: "https://github.com/sampatakumar/Full-stack-event",
    },
    {
      name: "The-World-Chronicle",
      stars: 2,
      forks: 0,
      language: "TypeScript",
      description: "Autonomous digital broadside newspaper ingesting 150+ RSS publishers via client-side multi-stage AI pipeline.",
      url: "https://github.com/sampatakumar/The-World-Chronicle",
    },
    {
      name: "Noirwave",
      stars: 2,
      forks: 0,
      language: "JavaScript",
      description: "AMOLED web music player with local directory scanning and real-time Web Audio API frequency visualizers.",
      url: "https://github.com/sampatakumar/Noirwave",
    },
  ];

  const languages = [
    { name: "TypeScript", percent: "52%", color: "#3178C6" },
    { name: "JavaScript", percent: "38%", color: "#F7DF1E" },
    { name: "CSS / HTML", percent: "10%", color: "#38BDF8" },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-borderLine">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-widest uppercase mb-4">
            <span>05</span>
            <span className="text-editorial-muted">/</span>
            <span>OPEN SOURCE & TELEMETRY</span>
          </div>

          <h2 className="text-section-title font-display font-black text-editorial-light uppercase">
            GitHub Activity &<br />Code Repositories.
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-editorial-light hover:bg-white text-canvas font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-105"
          >
            <Github size={15} />
            <span>Visit @sampatakumar</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Main Container: Profile HUD & Repository Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Metrics & Languages (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl border border-borderLine bg-surface/60 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-borderLine pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-void border border-borderLine flex items-center justify-center text-accent">
                  <Terminal size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-editorial-light">
                    @sampatakumar
                  </h4>
                  <span className="font-mono text-[11px] text-editorial-muted">
                    Active GitHub Developer
                  </span>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Quick Counters */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border border-borderLine/70 bg-void/50">
                <span className="font-display font-bold text-xl text-editorial-light">
                  20+
                </span>
                <span className="block font-mono text-[10px] text-editorial-muted mt-0.5">
                  Public Repos
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-borderLine/70 bg-void/50">
                <span className="font-display font-bold text-xl text-accent">
                  100%
                </span>
                <span className="block font-mono text-[10px] text-editorial-muted mt-0.5">
                  Open Source
                </span>
              </div>
            </div>

            {/* Language Distribution */}
            <div className="space-y-3 pt-2 border-t border-borderLine/50">
              <span className="font-mono text-xs text-editorial-muted uppercase tracking-wider font-semibold">
                Primary Language Distribution
              </span>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-void overflow-hidden flex">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: lang.percent,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percent}`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="space-y-1.5 pt-1 font-mono text-xs">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-editorial-muted">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span>{lang.name}</span>
                    </span>
                    <span className="text-editorial-light font-bold">
                      {lang.percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Repositories Grid (8 cols) */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-borderLine bg-surface/60 hover:border-accent/40 hover:bg-surface transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-editorial-muted">
                    <span className="text-accent font-semibold">{repo.language}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star size={11} className="text-amber-400" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={11} /> {repo.forks}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-base text-editorial-light group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{repo.name}</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>

                  <p className="font-sans text-xs text-editorial-muted leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-borderLine/40 flex items-center justify-between text-[11px] font-mono text-editorial-muted">
                  <span>github.com/sampatakumar</span>
                  <span className="text-accent group-hover:underline">Inspect Code →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

