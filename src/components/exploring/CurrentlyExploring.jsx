"use client";

import { Sparkles, Brain, Smartphone, Layers, Wrench, Globe, Terminal } from "lucide-react";

export default function CurrentlyExploring() {
  const explorationAreas = [
    {
      code: "01",
      title: "Agentic AI & LLM Systems",
      subtitle: "Autonomous Agent Tooling",
      desc: "Investigating multi-agent coordination, tool-use protocols, structured JSON streaming, and local LLM execution using Ollama and Groq.",
      icon: <Brain size={18} className="text-accent" />,
      tags: ["Groq", "Ollama", "Model Context Protocol", "Local LLMs"],
    },
    {
      code: "02",
      title: "Cross-Platform Mobile (React Native)",
      subtitle: "Expo & Native Modules",
      desc: "Building mobile-first client applications using React Native and Expo with shared state management and SQLite offline caches.",
      icon: <Smartphone size={18} className="text-accent" />,
      tags: ["React Native", "Expo", "SQLite", "Zustand"],
    },
    {
      code: "03",
      title: "Creative Frontend & Kinetic Motion",
      subtitle: "GSAP, WebGL & Canvas",
      desc: "Deepening interactive web capabilities with GSAP ScrollTrigger timelines, kinetic typography, and Web Audio API canvas visualizers.",
      icon: <Sparkles size={18} className="text-accent" />,
      tags: ["GSAP", "Lenis", "HTML5 Canvas", "Web Audio API"],
    },
    {
      code: "04",
      title: "Distributed Software Architecture",
      subtitle: "Microservices & Sandboxing",
      desc: "Experimenting with secure code execution runners, Dockerode container orchestration, and real-time Socket.IO communication loops.",
      icon: <Layers size={18} className="text-accent" />,
      tags: ["Docker Sandboxes", "WebSockets", "Mongoose 8", "System Design"],
    },
    {
      code: "05",
      title: "Modern Infrastructure & DevOps",
      subtitle: "Edge Deployment & CI/CD",
      desc: "Automating zero-downtime deployments using Vercel Edge networks, Render blueprints, and GitHub Actions CI pipelines.",
      icon: <Globe size={18} className="text-accent" />,
      tags: ["Vercel", "GitHub Actions", "Cloudflare Pages", "Security CSP"],
    },
    {
      code: "06",
      title: "Developer Tooling & Extensions",
      subtitle: "Manifest V3 & CLI Utilities",
      desc: "Publishing developer utilities, new-tab productivity extensions for Microsoft Edge/Chrome, and command-line code generators.",
      icon: <Terminal size={18} className="text-accent" />,
      tags: ["Manifest V3", "Edge Add-ons", "CLI Scripts", "Productivity"],
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-borderLine">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-widest uppercase mb-4">
            <span>06</span>
            <span className="text-editorial-muted">/</span>
            <span>CURRENT HORIZONS</span>
          </div>

          <h2 className="text-section-title font-display font-black text-editorial-light uppercase">
            Always learning.<br />Always building.
          </h2>
        </div>

        <p className="font-sans text-editorial-muted text-sm sm:text-base max-w-md leading-relaxed">
          Technology moves fast. Here is what I am actively reading, experimenting with,
          and pushing code to outside my primary project roster.
        </p>
      </div>

      {/* Exploration Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {explorationAreas.map((item) => (
          <div
            key={item.code}
            className="group p-6 rounded-3xl border border-borderLine bg-surface/60 hover:border-accent/40 hover:bg-surface transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-borderLine pb-3">
                <div className="p-2 rounded-xl bg-accent/10 border border-accent/20">
                  {item.icon}
                </div>
                <span className="font-mono text-xs text-editorial-muted font-bold">
                  {item.code}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-editorial-light group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <span className="font-mono text-[11px] text-accent/90">
                  {item.subtitle}
                </span>
              </div>

              <p className="font-sans text-xs text-editorial-muted leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-borderLine/40">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md border border-borderLine/60 bg-void/50 text-editorial-muted text-[10px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

