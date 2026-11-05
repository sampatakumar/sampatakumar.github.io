"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import {
  ExternalLink,
  Github,
  BookOpen,
  Cpu,
  Layers,
  Shield,
  Box,
  Terminal,
  Database,
  Cloud,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function FlagshipSSH() {
  const [activeTab, setActiveTab] = useState("architecture");

  const architectureTiers = [
    {
      title: "Client Tier",
      tech: "React 18 · TypeScript · Vite · Monaco Editor",
      icon: <Terminal className="text-accent" size={18} />,
      desc: "Responsive SPA with Monaco code editor, dynamic A4 resume canvas, and TanStack React Query 5-minute stale-time caching.",
    },
    {
      title: "Gateway & Security",
      tech: "Helmet CSP · CORS · Rate Limiting",
      icon: <Shield className="text-accent" size={18} />,
      desc: "Strict Content Security Policies, frame-ancestor control, and 500 req / 15-min IP-throttling.",
    },
    {
      title: "Identity & Verification",
      tech: "Google JWKS · RS256 JWT · Firebase",
      icon: <CheckCircle2 className="text-accent" size={18} />,
      desc: "Verifies incoming RS256 JWT bearer tokens directly against Google's public JWKS endpoints with zero network roundtrip.",
    },
    {
      title: "Modular Application Engine",
      tech: "Express 5 · Node.js · Socket.IO",
      icon: <Cpu className="text-accent" size={18} />,
      desc: "Decoupled into 15 domain modules; unifies REST API endpoints with bidirectional WebSocket communication.",
    },
    {
      title: "Sandboxed Code Execution",
      tech: "Dockerode · Isolated Container",
      icon: <Box className="text-accent" size={18} />,
      desc: "Runs student code inside dedicated ssh-javascript-sandbox containers with 128MB RAM, 0.5 CPU cap, non-root UID, and 5s timeout.",
    },
    {
      title: "Persistence & Storage",
      tech: "MongoDB Atlas · Mongoose 8 · Supabase",
      icon: <Database className="text-accent" size={18} />,
      desc: "Strict user document ownership schemas in MongoDB, indexed query lookups, and Supabase resume document storage.",
    },
    {
      title: "External AI & Cloud Integrations",
      tech: "Groq Cloud LLM · YouTube API · Cloudflare",
      icon: <Cloud className="text-accent" size={18} />,
      desc: "Sub-200ms Groq LLM inference with local NLP fallback, YouTube Data API v3 for EduTube, and Cloudflare Pages direct uploads.",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-borderLine">
      {/* Blueprint Header */}
      <div className="flex flex-col space-y-4 mb-14">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold">
            FLAGSHIP ARCHITECTURAL CASE STUDY
          </span>
          <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-mono text-[11px] font-bold">
            IRE JOURNALS (ISSN: 2456-8880)
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-section-title font-display font-black text-editorial-light uppercase">
              Smart Skill Hub (SSH)
            </h2>
            <p className="font-mono text-xs sm:text-sm text-editorial-muted mt-2">
              Autonomous Skill Intelligence, Career Acceleration & Adaptive Learning Architecture
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://smartskillhub.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-canvas font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(255,101,56,0.25)] hover:scale-105"
            >
              <span>Launch Live App</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="https://github.com/sampatakumar/SSH-final-year-project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full border border-borderLine hover:border-editorial-light text-editorial-light font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 hover:bg-white/[0.04]"
            >
              <Github size={14} />
              <span>GitHub Repo</span>
            </a>

            <a
              href={profile.links.researchPaper}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full border border-borderLine hover:border-accent text-editorial-muted hover:text-accent font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <BookOpen size={14} />
              <span>View Paper PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Showcase Container */}
      <div className="rounded-3xl border border-borderLine bg-surface/80 p-6 sm:p-12 space-y-12 backdrop-blur-xl">
        
        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 border-b border-borderLine pb-4 text-xs font-mono">
          {[
            { id: "architecture", label: "01. SYSTEM ARCHITECTURE BLUEPRINT" },
            { id: "problem-solution", label: "02. PROBLEM VS PROPOSED SOLUTION" },
            { id: "challenges", label: "03. ENGINEERING CHALLENGES & RESILIENCE" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-accent text-canvas font-bold shadow-[0_0_15px_rgba(255,101,56,0.3)]"
                  : "text-editorial-muted hover:text-editorial-light hover:bg-white/[0.04]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Architecture Blueprint Diagram */}
        {activeTab === "architecture" && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="font-display font-black text-2xl text-editorial-light uppercase">
                Multi-Tier Decoupled Cloud Architecture
              </h3>
              <p className="font-sans text-xs sm:text-sm text-editorial-muted max-w-3xl leading-relaxed">
                Smart Skill Hub decouples the client SPA from an Express 5 application engine,
                an isolated Docker container sandbox, and cloud persistence layers to ensure high security
                and deterministic reliability.
              </p>
            </div>

            {/* Architecture Stack Layers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {architectureTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-borderLine bg-void/60 hover:border-borderHover transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-accent/10 border border-accent/20">
                        {tier.icon}
                      </div>
                      <span className="font-mono text-[10px] text-editorial-dark font-bold">
                        TIER 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base text-editorial-light">
                      {tier.title}
                    </h4>

                    <div className="font-mono text-[11px] text-accent/90">
                      {tier.tech}
                    </div>
                  </div>

                  <p className="font-sans text-xs text-editorial-muted leading-relaxed border-t border-borderLine/50 pt-3">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Sandboxed Execution Safeguard Note */}
            <div className="p-4 rounded-2xl border border-borderLine bg-void/90 flex items-start gap-3 text-xs font-mono text-editorial-muted">
              <Box className="text-accent shrink-0 mt-0.5" size={16} />
              <div>
                <span className="text-editorial-light font-bold">
                  DOCKER CONTAINER ISOLATION GUARANTEE:
                </span>{" "}
                Student submissions are executed inside non-root containers with disabled networking,
                128MB RAM caps, 0.5 CPU throttle, and 5-second wall-clock timeouts via `p-limit` concurrency pools.
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Problem vs Solution */}
        {activeTab === "problem-solution" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.02] space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase font-bold tracking-wider">
                <AlertCircle size={16} />
                <span>The Engineering Problem</span>
              </div>
              <h4 className="font-display font-bold text-xl text-editorial-light">
                Fragmented Learning & Unverified Competency Claims
              </h4>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-editorial-muted leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Students practice algorithms on isolated portals disconnected from real career taxonomies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Static resumes claim unverified keywords without proof from version control or evaluated execution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Educational tutorials are watched on ad-filled feeds full of clickbait distractions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Generic AI chat assistants lack personal context regarding candidate code depth and skill gaps.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider">
                <CheckCircle2 size={16} />
                <span>The SSH Solution</span>
              </div>
              <h4 className="font-display font-bold text-xl text-editorial-light">
                Continuous Developer Intelligence & Verification Loop
              </h4>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-editorial-muted leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>GitHub Code Mining:</strong> Automatically inspects public repos for genuine framework and middleware usage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>Docker Sandbox:</strong> Safely evaluates JavaScript code submissions against test cases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>EduTube Engine:</strong> Curates distraction-free educational videos with interactive quiz checkpoints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>Context-Aware Smart Mentor:</strong> AI coaching grounded in user skills, gaps, code activity, and target benchmarks.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Challenges & Resilience */}
        {activeTab === "challenges" && (
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl text-editorial-light uppercase">
              Key Engineering Decisions & Architectural Safeguards
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl border border-borderLine bg-void/50 space-y-3">
                <span className="font-mono text-xs text-accent font-bold">01 / ARBITRARY CODE EXECUTION</span>
                <h5 className="font-display font-bold text-base text-editorial-light">Container Sandboxing</h5>
                <p className="font-sans text-xs text-editorial-muted leading-relaxed">
                  Safely isolated user code submissions in non-root Docker containers with strict cgroup constraints (128MB RAM, 0.5 CPU) and disabled networking to eliminate security attack surfaces.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-borderLine bg-void/50 space-y-3">
                <span className="font-mono text-xs text-accent font-bold">02 / ZERO AI OUTAGES</span>
                <h5 className="font-display font-bold text-base text-editorial-light">3-Tier Fallback Pipeline</h5>
                <p className="font-sans text-xs text-editorial-muted leading-relaxed">
                  Engineered a multi-stage fallback: primary Groq GPT-OSS-120B model &rarr; secondary lightweight model &rarr; local deterministic rule/NLP regex engine if external APIs fail.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-borderLine bg-void/50 space-y-3">
                <span className="font-mono text-xs text-accent font-bold">03 / REAL-TIME COLLABORATION</span>
                <h5 className="font-display font-bold text-base text-editorial-light">Cryptographic scrypt Rooms</h5>
                <p className="font-sans text-xs text-editorial-muted leading-relaxed">
                  Protected private student study circles using cryptographic `scrypt` hashing, constant-time `timingSafeEqual` comparison, and automatic 5-attempt brute-force lockouts.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Link to Dedicated Case Study Page */}
        <div className="border-t border-borderLine pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-editorial-muted">
            Interested in the full implementation breakdown and schemas?
          </span>

          <Link
            href="/projects/ssh-hub"
            className="text-xs font-mono text-accent hover:underline flex items-center gap-1.5 uppercase tracking-wider font-bold"
          >
            <span>Read Complete SSH Engineering Case Study</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
