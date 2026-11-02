import ProfileCard from '../components/ProfileCard.tsx'
import ScrollReveal from '../components/ScrollReveal.tsx'
import ProjectCarousel from '../components/ProjectCarousel.tsx'
import {
  FaGithub,
  FaLinkedin,
  FaTerminal,
  FaFileDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaWhatsapp,
  FaLaptopCode,
  FaRocket,
  FaBrain,
  FaBolt,
  FaLayerGroup,
  FaShieldAlt,
  FaGraduationCap,
  FaCheckCircle,
  FaCopy,
  FaBookOpen,
  FaCode,
  FaCheck,
  FaChartLine
} from "react-icons/fa"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react";
import BlurText from "../components/BlurText"
import TextType from '../components/TextType.tsx';
import GlitchText from '../components/GlitchText.tsx';
import { fetchProjectsAsync, type Project } from '../lib/projectService.ts'
import '../styles/home.css'

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])
  const [copiedToast, setCopiedToast] = useState<string | null>(null)

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    navigator.clipboard.writeText('sampatakumarsv@gmail.com')
    setCopiedToast('Copied sampatakumarsv@gmail.com to clipboard!')
    setTimeout(() => {
      setCopiedToast(null)
    }, 3200)
  }

  useEffect(() => {
    document.title = "Sampatakumar V | Full-Stack Web Developer & Software Engineer"
    fetchProjectsAsync().then((data) => setProjects(data))

    const handleStorage = () => {
      fetchProjectsAsync().then((data) => setProjects(data))
    }
    window.addEventListener('storage', handleStorage)

    // Load LinkedIn script once
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('storage', handleStorage)
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden text-foreground">

      {/* ================= HOME / HERO ================= */}

      <section
        id="home"
        className="
        min-h-screen
        flex
        items-center
        px-6
        lg:px-20
        py-20
        "
      >

        <div
          className="
          w-full
          max-w-7xl
          mx-auto
          flex
          flex-col-reverse
          lg:flex-row
          items-center
          justify-between
          gap-12
          lg:gap-16
          "
        >

          {/* LEFT CONTENT */}

          <div
            className="
            flex
            flex-col
            max-w-2xl
            gap-6
            text-center
            lg:text-left
            "
          >
            {/* Live Career & Availability HUD */}
            <div className="flex flex-wrap items-center gap-2.5 justify-center lg:justify-start">
              {/* Availability Status */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.18)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Full-Time Engineering Roles</span>
              </div>

              {/* Location Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 dark:bg-white/[0.04] border border-border/60 text-muted-foreground text-xs font-medium backdrop-blur-xl">
                <span className="text-emerald-500">📍</span> Bengaluru, IN
              </div>

              {/* Focus Pill */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 dark:bg-white/[0.04] border border-border/60 text-muted-foreground text-xs font-mono backdrop-blur-xl">
                <span className="text-cyan-400">⚡</span> React 19 · TypeScript · AI Systems
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm sm:text-base font-mono font-medium tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                <BlurText text="Software Engineer & Full-Stack Architect" />
              </h3>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
                <span className="text-gradient-obsidian">Sampatakumar V</span>
              </h1>
            </div>

            <div className="text-foreground/80 font-medium text-base sm:text-lg leading-snug h-[64px] min-h-[64px] max-h-[64px] shrink-0 overflow-hidden select-none">
              <TextType
                typingSpeed={65}
                pauseDuration={1800}
                showCursor
                cursorCharacter="▋"
                text={[
                  "Computer Science Engineer passionate about Full-Stack Web Development & System Architecture.",
                  "Building high-performance web apps using React, Node.js, TypeScript, and modern cloud databases.",
                  "Architecting clean REST APIs, microservices, and AI-powered web solutions.",
                  "Transforming complex requirements into seamless, user-centric web applications.",
                  "Always exploring cutting-edge web frameworks, cloud technology, and AI integrations."
                ]}
                cursorBlinkDuration={0.6}
              />
            </div>

            {/* Elite Obsidian Terminal Window */}
            <div className="obsidian-card p-4 font-mono text-xs text-foreground/90 shadow-inner text-left shrink-0">
              <div className="flex items-center justify-between pb-2.5 border-b border-border/40 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-muted-foreground text-[11px] flex items-center gap-1 font-mono">
                    <FaTerminal className="text-emerald-500 text-xs" /> developer@sampatakumar:~
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 font-semibold font-mono">TS / React 19</span>
                  <span className="text-[10px] text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/25 font-semibold font-mono">Node.js</span>
                </div>
              </div>
              <div className="space-y-1 leading-relaxed text-[12px]">
                <p><span className="text-emerald-600 dark:text-emerald-400 font-semibold">const</span> <span className="text-teal-600 dark:text-cyan-300">engineer</span> = &#123;</p>
                <p className="pl-4"><span className="text-muted-foreground">name:</span> <span className="text-emerald-700 dark:text-emerald-300">'Sampatakumar V'</span>,</p>
                <p className="pl-4"><span className="text-muted-foreground">role:</span> <span className="text-emerald-700 dark:text-emerald-300">'Full-Stack Software Engineer'</span>,</p>
                <p className="pl-4"><span className="text-muted-foreground">frontend:</span> [<span className="text-emerald-700 dark:text-emerald-300">'React 19'</span>, <span className="text-emerald-700 dark:text-emerald-300">'Next.js'</span>, <span className="text-emerald-700 dark:text-emerald-300">'TypeScript'</span>, <span className="text-emerald-700 dark:text-emerald-300">'Tailwind CSS'</span>],</p>
                <p className="pl-4"><span className="text-muted-foreground">backend:</span> [<span className="text-teal-700 dark:text-cyan-300">'Node.js'</span>, <span className="text-teal-700 dark:text-cyan-300">'Express'</span>, <span className="text-teal-700 dark:text-cyan-300">'REST APIs'</span>, <span className="text-teal-700 dark:text-cyan-300">'PostgreSQL'</span>],</p>
                <p className="pl-4"><span className="text-muted-foreground">cloudAI:</span> [<span className="text-emerald-700 dark:text-emerald-300">'Groq / LangChain'</span>, <span className="text-emerald-700 dark:text-emerald-300">'Firebase'</span>, <span className="text-emerald-700 dark:text-emerald-300">'Supabase'</span>]</p>
                <p>&#125;;</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-2 shrink-0">
              <a
                href="#projects"
                className="emerald-glow-btn px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-sm shadow-lg hover:scale-105 transition-all"
              >
                Explore Projects
              </a>

              <button
                onClick={handleCopyEmail}
                className="neomorph-btn px-5 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:scale-105 transition-all"
                title="Copy email to clipboard"
              >
                <FaCopy size={15} />
                Copy Email
              </button>

              <button
                onClick={() =>
                  window.open("https://linkedin.com/in/sampatakumar-sv", "_blank")
                }
                className="neomorph-btn px-5 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:scale-105 transition-all"
              >
                <FaLinkedin size={17} />
                LinkedIn
              </button>

              <button
                onClick={() =>
                  window.open("https://github.com/sampatakumar", "_blank")
                }
                className="neomorph-btn px-5 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:scale-105 transition-all"
              >
                <FaGithub size={17} />
                GitHub
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
              {[
                { label: 'Featured Apps', value: `${projects.length || 12}+` },
                { label: 'Public Repos', value: '20+' },
                { label: 'Research Paper', value: '1 Published' },
                { label: 'Architecture', value: '100% Static' },
              ].map((stat, i) => (
                <div key={i} className="obsidian-card p-3.5 flex flex-col justify-center">
                  <span className="font-extrabold text-base sm:text-lg text-gradient-obsidian">{stat.value}</span>
                  <span className="text-[11px] text-muted-foreground font-mono">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PROFILE CARD */}
          <div className="scale-95 lg:scale-100 relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-xl opacity-60 pointer-events-none"></div>
            <ProfileCard
              name="Sampatakumar V"
              title="Full-Stack Software Engineer"
              handle="sampatakumar_sv"
              status="Available for Roles"
              contactText="Get in Touch"
              avatarUrl="/avatar.png"
              iconUrl="/brands/github.svg"
              showUserInfo
              enableTilt
              enableMobileTilt
              behindGlowEnabled
              behindGlowColor="rgba(16, 185, 129, 0.4)"
              innerGradient="linear-gradient(145deg, var(--card) 0%, var(--background) 100%)"
              onContactClick={() =>
                window.location.href = "mailto:sampatakumarsv@gmail.com"
              }
            />
          </div>

        </div>

      </section>

      <div className="w-[90%] max-w-7xl mx-auto my-6">
        <div className="obsidian-divider w-full" />
      </div>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="min-h-screen px-6 lg:px-20 py-24 flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase font-mono">
              <FaLaptopCode /> Engineering Mindset & Architecture
            </div>
            <ScrollReveal textClassName="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-obsidian">
              About Me & Engineering Vision
            </ScrollReveal>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Transforming complex technical ideas into resilient, production-ready applications with modern web and AI frameworks.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Main Narrative Bento Card (Span 2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2 obsidian-card obsidian-card-hover p-6 sm:p-10 rounded-3xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-border/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide uppercase">
                      Developer Bio & Philosophy
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">bio.ts</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug">
                  Building High-Impact Web Applications & AI-Driven Software
                </h3>

                <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
                  I am <strong className="text-emerald-600 dark:text-emerald-400">Sampatakumar V</strong>, a Computer Science Engineering student passionate about software engineering, full-stack architecture, and machine intelligence. I specialize in turning ambitious project concepts into polished, responsive, and resilient digital solutions.
                </p>

                <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
                  My experience ranges from building autonomous AI-curated newspapers and AI-assisted ATS resume platforms to real-time academic collaboration networks and direct agriculture marketplaces. I take pride in clean code, type safety, modular design systems, and delightful tactile user interfaces.
                </p>

                {/* Key Highlights Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  <div className="neomorph-inset p-3.5 rounded-2xl flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                      <FaBolt /> Rapid Prototyping
                    </div>
                    <span className="text-xs text-muted-foreground">From specification to deployed production apps with React & TypeScript.</span>
                  </div>
                  <div className="neomorph-inset p-3.5 rounded-2xl flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs">
                      <FaBrain /> AI-Native Workflows
                    </div>
                    <span className="text-xs text-muted-foreground">Deep integration of Groq, LangChain, local LLMs, and prompt pipelines.</span>
                  </div>
                  <div className="neomorph-inset p-3.5 rounded-2xl flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-bold text-xs">
                      <FaShieldAlt /> Resilient Architectures
                    </div>
                    <span className="text-xs text-muted-foreground">Scalable REST APIs, cloud databases, client-side state, and 100% uptime.</span>
                  </div>
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                {[
                  "React 19 & Next.js",
                  "TypeScript",
                  "Node.js & Express",
                  "AI & LLM Integration",
                  "Tailwind CSS",
                  "Firebase & Supabase",
                  "GitHub Actions CI/CD"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="neomorph-pill text-xs font-mono px-3 py-1 rounded-lg text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Core Pillars Bento Card (Span 1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="obsidian-card obsidian-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border/40 mb-4">
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <FaLayerGroup /> Engineering DNA
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">04 Pillars</span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Clean Code & Modularity",
                      desc: "Strict TypeScript types, predictable state flow, and component-driven reuse.",
                      icon: <FaCheckCircle className="text-emerald-500 shrink-0 mt-0.5" />
                    },
                    {
                      title: "Sub-Second UX Performance",
                      desc: "Hardware-accelerated animations, zero bundle waste, and fluid 60fps micro-interactions.",
                      icon: <FaBolt className="text-amber-500 shrink-0 mt-0.5" />
                    },
                    {
                      title: "Real-World Problem Solving",
                      desc: "Designing tools that empower students, farmers, and developers in their daily workflows.",
                      icon: <FaRocket className="text-cyan-500 shrink-0 mt-0.5" />
                    },
                    {
                      title: "Continuous Exploration",
                      desc: "Always experimenting with cutting-edge web specs, mobile apps with Expo, and agentic AI.",
                      icon: <FaBrain className="text-violet-500 shrink-0 mt-0.5" />
                    }
                  ].map((pillar, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl neomorph-inset">
                      {pillar.icon}
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{pillar.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status pill */}
              <div className="pt-2">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-medium">Currently building & exploring next-gen web technology</span>
                </div>
              </div>
            </motion.div>

            {/* Published Research Paper Bento Card (Span 2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="lg:col-span-2 obsidian-card obsidian-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide uppercase flex items-center gap-1.5">
                      <FaBookOpen /> Published Research Paper
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold">
                    ISSN: 2456-8880
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Peer-Reviewed Publication · IRE Journals</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1 leading-snug">
                    Smart Skill Hub: Autonomous Skill Intelligence, Career Acceleration &amp; Adaptive Learning Systems
                  </h3>
                </div>

                <p className="text-foreground/85 text-xs sm:text-sm leading-relaxed">
                  Authored and published research detailing the architectural design of autonomous skill gap analysis, adaptive curriculum roadmaps, automated sandboxed code execution, and AI-driven ATS resume optimization.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  <div className="p-2.5 rounded-xl neomorph-inset text-center">
                    <span className="block text-emerald-600 dark:text-emerald-400 font-bold font-mono text-sm">NLP / Groq</span>
                    <span className="text-[10px] text-muted-foreground font-mono">Skill Extraction</span>
                  </div>
                  <div className="p-2.5 rounded-xl neomorph-inset text-center">
                    <span className="block text-cyan-600 dark:text-cyan-400 font-bold font-mono text-sm">&gt;94%</span>
                    <span className="text-[10px] text-muted-foreground font-mono">ATS Correlation</span>
                  </div>
                  <div className="p-2.5 rounded-xl neomorph-inset text-center">
                    <span className="block text-violet-600 dark:text-violet-400 font-bold font-mono text-sm">Sandbox</span>
                    <span className="text-[10px] text-muted-foreground font-mono">Code Evaluator</span>
                  </div>
                  <div className="p-2.5 rounded-xl neomorph-inset text-center">
                    <span className="block text-amber-600 dark:text-amber-400 font-bold font-mono text-sm">Peer-Reviewed</span>
                    <span className="text-[10px] text-muted-foreground font-mono">Indexed Paper</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/40">
                <span className="text-muted-foreground text-xs font-mono">Principal Author: Sampatakumar V</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://smartskillhub.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="emerald-glow-btn px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live App
                  </a>
                  <a
                    href="https://github.com/sampatakumar/SSH-final-year-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neomorph-btn px-4 py-2 rounded-xl text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:scale-105 transition-all flex items-center gap-1.5"
                  >
                    <FaGithub className="text-xs" /> Repo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* GitHub Live Activity Card (Span 1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="obsidian-card obsidian-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border/40">
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <FaGithub /> GitHub Activity
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-foreground">@sampatakumar</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Actively building and maintaining 20+ open-source repositories across AI tooling, full-stack applications, and developer utilities.
                  </p>
                </div>

                <div className="space-y-2 pt-1 font-mono text-xs">
                  <div className="flex justify-between p-2 rounded-xl neomorph-inset">
                    <span className="text-muted-foreground">Public Repos:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">20+ Repositories</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-xl neomorph-inset">
                    <span className="text-muted-foreground">Top Languages:</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">TypeScript · React · Node</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-xl neomorph-inset">
                    <span className="text-muted-foreground">Architecture:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Zero-Server Static</span>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/sampatakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="neomorph-btn w-full py-2.5 rounded-xl text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                <FaGithub /> Visit GitHub Profile
              </a>
            </motion.div>

            {/* Academic & Journey Card (Span 1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="obsidian-card obsidian-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider pb-3 border-b border-border/40">
                  <FaGraduationCap className="text-sm" /> Academic &amp; Foundations
                </div>

                <h4 className="text-xl font-bold text-foreground">Computer Science Engineering</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Strong theoretical foundation in Data Structures, Object-Oriented System Design, Operating Systems, Computer Networks, and Modern Software Engineering methodologies.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Production Code Repos:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">20+</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Full-Stack Live Apps:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">12+</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Development Mindset:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Continuous Learner</span>
                  </div>
                </div>
              </div>

              <a
                href="/Sampatakumar.pdf"
                download
                className="neomorph-btn w-full py-2.5 rounded-xl text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                <FaFileDownload /> Download Verified Resume
              </a>
            </motion.div>

            {/* Interactive Terminal / Code Sandbox Card (Span 2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="lg:col-span-2 obsidian-card obsidian-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-4 font-mono text-xs"
            >
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-muted-foreground text-[11px] flex items-center gap-1">
                    <FaTerminal className="text-emerald-500" /> profile@sampatakumar: ~/manifesto.json
                  </span>
                </div>
                <span className="neomorph-pill text-[10px] text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">JSON</span>
              </div>

              <div className="neomorph-inset p-4 rounded-2xl overflow-x-auto text-left leading-relaxed text-[12px]">
                <p className="text-foreground/80">&#123;</p>
                <p className="pl-4"><span className="text-teal-600 dark:text-cyan-300">"developer"</span>: <span className="text-emerald-600 dark:text-emerald-300">"Sampatakumar V"</span>,</p>
                <p className="pl-4"><span className="text-teal-600 dark:text-cyan-300">"focus"</span>: <span className="text-emerald-600 dark:text-emerald-300">"Full-Stack Web Engineering &amp; Intelligent Systems"</span>,</p>
                <p className="pl-4"><span className="text-teal-600 dark:text-cyan-300">"coreStrengths"</span>: [<span className="text-emerald-600 dark:text-emerald-300">"Scalable Architecture"</span>, <span className="text-emerald-600 dark:text-emerald-300">"AI Tooling"</span>, <span className="text-emerald-600 dark:text-emerald-300">"Modern UX"</span>],</p>
                <p className="pl-4"><span className="text-teal-600 dark:text-cyan-300">"philosophy"</span>: <span className="text-amber-600 dark:text-amber-300">"Turning complex engineering challenges into seamless user reality."</span>,</p>
                <p className="pl-4"><span className="text-teal-600 dark:text-cyan-300">"openTo"</span>: <span className="text-emerald-600 dark:text-emerald-300">"Impactful software engineering roles, collaboration &amp; open-source"</span></p>
                <p className="text-foreground/80">&#125;</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-muted-foreground text-[11px]">Ready to build something exceptional together?</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="neomorph-btn px-4 py-2 rounded-xl text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:scale-105 transition-all flex items-center gap-1.5"
                    title="Copy email to clipboard"
                  >
                    <FaCopy /> Copy Email
                  </button>
                  <a
                    href="mailto:sampatakumarsv@gmail.com"
                    className="neomorph-btn px-4 py-2 rounded-xl text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:scale-105 transition-all flex items-center gap-1.5"
                  >
                    <FaEnvelope /> Email Me
                  </a>
                  <a
                    href="https://wa.me/919380395607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neomorph-btn px-4 py-2 rounded-xl text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:scale-105 transition-all flex items-center gap-1.5"
                  >
                    <FaWhatsapp /> Quick Chat
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      <div className="w-[90%] max-w-7xl mx-auto my-6">
        <div className="obsidian-divider w-full" />
      </div>

      {/* ================= THE STACK ================= */}
      <section
        id="skills"
        className="min-h-screen px-6 lg:px-20 py-24 flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-7xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono mb-3">
                <FaBolt /> Production Technologies
              </div>
              <ScrollReveal textClassName="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient-obsidian">
                THE STACK
              </ScrollReveal>
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-xs leading-relaxed text-left sm:text-right">
              Technologies I use to build scalable, maintainable, and production-ready applications.
            </p>
          </div>

          {/* Stack Cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                id: "L01",
                category: "Frontend Architecture",
                skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
              },
              {
                id: "L02",
                category: "Backend & Systems",
                skills: ["Node.js", "Express.js", "WebSockets", "REST APIs", "Python"],
              },
              {
                id: "L03",
                category: "AI & Intelligence",
                skills: ["Groq AI", "LangChain", "Ollama", "Multi-Stage Pipelines", "Prompt Engineering"],
              },
              {
                id: "L04",
                category: "Cloud & Databases",
                skills: ["Firebase", "Supabase", "PostgreSQL", "Cloudflare Pages", "LocalStorage"],
              },
              {
                id: "L05",
                category: "Practices & DevOps",
                skills: ["GitHub Actions", "CI/CD", "SPA Deployment", "Agile", "System Design"],
              },
            ].map((stack) => (
              <div
                key={stack.id}
                className="obsidian-card obsidian-card-hover p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 group transition-all duration-300"
              >
                {/* Left: ID + Category */}
                <div className="flex items-center gap-6 sm:gap-10 shrink-0">
                  <span className="font-mono text-xs sm:text-sm text-emerald-500/80 tracking-wider font-semibold select-none">
                    {stack.id}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {stack.category}
                  </h3>
                </div>

                {/* Right: Skill Pills */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 justify-start md:justify-end">
                  {stack.skills.map((skill) => (
                    <span
                      key={skill}
                      className="neomorph-pill font-mono text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2 rounded-full text-foreground/90 dark:text-slate-200 border border-border/50 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-[90%] max-w-7xl mx-auto my-6">
        <div className="obsidian-divider w-full" />
      </div>

      {/* ================= FLAGSHIP CASE STUDY: SMART SKILL HUB ================= */}
      <section id="flagship" className="px-6 lg:px-20 py-24 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
              Flagship Architectural Case Study
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-center text-gradient-obsidian tracking-tight">
              Smart Skill Hub (SSH)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl text-center leading-relaxed">
              Autonomous Skill Intelligence, Career Acceleration &amp; Adaptive Learning Architecture — Built with React 19, TypeScript, Groq LLMs, and Sandboxed Code Execution.
            </p>
          </div>

          {/* Spotlight Showcase Container */}
          <div className="obsidian-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-emerald-500/40 shadow-[0_25px_60px_-15px_rgba(16,185,129,0.25)] relative overflow-hidden space-y-10">
            
            {/* Top Banner Row */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-border/40">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider font-mono">
                    Final Year Capstone
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                    Published in IRE Journals (ISSN: 2456-8880)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
                    React 19 · TypeScript · Groq AI
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  Bridging the Academic-Industry Gap with Autonomous Intelligence
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <a
                  href="https://smartskillhub.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="emerald-glow-btn px-6 py-3 rounded-xl text-sm font-extrabold flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
                >
                  <FaExternalLinkAlt /> Launch Live App
                </a>
                <a
                  href="https://github.com/sampatakumar/SSH-final-year-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neomorph-btn px-5 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 text-foreground/85 hover:text-emerald-400 hover:scale-105 transition-all"
                >
                  <FaGithub size={17} /> Source Code
                </a>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'ATS Match Accuracy', value: '>94%', desc: 'Semantic keyword correlation' },
                { label: 'Integrated Modules', value: '6 Suites', desc: 'All-in-one skill ecosystem' },
                { label: 'AI Inference Time', value: '<200ms', desc: 'Ultra-low latency Groq pipeline' },
                { label: 'Architecture Model', value: '100% Client', desc: 'Zero server cost & static deploy' },
              ].map((m, idx) => (
                <div key={idx} className="neomorph-inset p-4 sm:p-5 rounded-2xl flex flex-col justify-between">
                  <span className="text-2xl sm:text-3xl font-black text-gradient-obsidian">{m.value}</span>
                  <span className="text-xs font-bold text-foreground mt-1">{m.label}</span>
                  <span className="text-[11px] text-muted-foreground font-mono">{m.desc}</span>
                </div>
              ))}
            </div>

            {/* 6 Key Modules Grid */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 tracking-wider font-bold">
                Integrated Core Modules &amp; Subsystems
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Multi-Stage Skill-Gap Analyzer',
                    desc: 'Parses job descriptions and learner profiles using NLP to pinpoint specific syllabus deficits and skill deficiencies.',
                    icon: <FaChartLine className="text-emerald-500 dark:text-emerald-400" />
                  },
                  {
                    title: 'Interactive Adaptive Roadmaps',
                    desc: 'Dynamic graph-based learning milestones that automatically re-order and adapt to the student’s mastery velocity.',
                    icon: <FaLayerGroup className="text-cyan-500 dark:text-cyan-400" />
                  },
                  {
                    title: 'EduTube Distraction-Free Engine',
                    desc: 'Curated educational video streaming pipeline that removes algorithmic rabbit holes and clickbait recommendations.',
                    icon: <FaBookOpen className="text-violet-500 dark:text-violet-400" />
                  },
                  {
                    title: 'Cloud Sandboxed Code Runner',
                    desc: 'In-browser compilation and execution environment supporting multiple languages with instant test case feedback.',
                    icon: <FaCode className="text-amber-500 dark:text-amber-400" />
                  },
                  {
                    title: 'ATS Intelligent Resume Builder',
                    desc: 'Generates industry-aligned resumes with quantified achievements and instant single-click export to PDF format.',
                    icon: <FaRocket className="text-emerald-500 dark:text-emerald-400" />
                  },
                  {
                    title: 'GitHub Intelligence Engine',
                    desc: 'Inspects public repositories, commit patterns, and code contributions to authenticate developer skills with Octokit.',
                    icon: <FaGithub className="text-teal-500 dark:text-teal-400" />
                  },
                ].map((mod, i) => (
                  <div key={i} className="neomorph-card p-5 rounded-2xl space-y-2 border border-border/40 hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-foreground">
                      <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                        {mod.icon}
                      </div>
                      <span>{mod.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-1">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      <div className="w-[90%] max-w-7xl mx-auto my-6">
        <div className="obsidian-divider w-full" />
      </div>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="px-6 lg:px-20 py-24"
      >
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase font-mono">
            <FaRocket /> Live Applications & Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-gradient-obsidian tracking-tight">
            Featured Full-Stack Projects
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl text-center leading-relaxed">
            Explore 12 interactive applications engineered with modern web frameworks, AI agent pipelines, and resilient cloud services.
          </p>
        </div>

        <ProjectCarousel projects={projects} />
      </section>

      <div className="w-[90%] max-w-7xl mx-auto my-6">
        <div className="obsidian-divider w-full" />
      </div>

      {/* ================= CONTACT / CTA ================= */}
      <section
        id="contact"
        className="px-6 lg:px-20 py-24 pb-36 min-h-[70vh] flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground dark:text-slate-100 leading-[1.15] sm:leading-[1.1] max-w-6xl">
            LOOKING FOR A <GlitchText text="FULL STACK DEVELOPER" className="text-amber-500 dark:text-amber-400" /> WHO ENJOYS SOLVING CHALLENGING PROBLEMS?<span className="inline-block w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_12px_#f59e0b] ml-3 align-middle"></span>
            <br className="hidden sm:inline" />
            {" "}LET’S BUILD SOMETHING GREAT TOGETHER.
          </h2>

          <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 pt-4">
            {/* WhatsApp Inquiry Pill */}
            <a
              href="https://wa.me/919380395607"
              target="_blank"
              rel="noopener noreferrer"
              className="neomorph-pill font-mono text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/40 hover:border-emerald-500 hover:text-emerald-500 bg-emerald-500/10 flex items-center gap-3 transition-all duration-200"
            >
              <FaWhatsapp className="text-emerald-500 text-base animate-pulse" />
              <span>WhatsApp: +91 9380395607</span>
            </a>

            {/* Email Pill */}
            <a
              href="mailto:sampatakumarsv@gmail.com"
              className="neomorph-pill font-mono text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-foreground/90 dark:text-slate-200 border border-border/50 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-3 transition-all duration-200"
            >
              <FaEnvelope className="text-emerald-500 text-sm" />
              <span>sampatakumarsv@gmail.com</span>
            </a>

            {/* Copy Email Pill */}
            <button
              onClick={handleCopyEmail}
              className="neomorph-pill font-mono text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-foreground/90 dark:text-slate-200 border border-border/50 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-3 transition-all duration-200 cursor-pointer"
              title="Copy email to clipboard"
            >
              <FaCopy className="text-emerald-500 text-xs" />
              <span>Copy Email</span>
            </button>

            {/* GitHub Pill */}
            <a
              href="https://github.com/sampatakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="neomorph-pill font-mono text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-foreground/90 dark:text-slate-200 border border-border/50 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-3 transition-all duration-200"
            >
              <FaExternalLinkAlt className="text-emerald-500 text-xs" />
              <span>github.com/sampatakumar</span>
            </a>

            {/* LinkedIn Pill */}
            <a
              href="https://www.linkedin.com/in/sampatakumar-sv"
              target="_blank"
              rel="noopener noreferrer"
              className="neomorph-pill font-mono text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-foreground/90 dark:text-slate-200 border border-border/50 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-3 transition-all duration-200"
            >
              <FaExternalLinkAlt className="text-emerald-500 text-xs" />
              <span>LinkedIn</span>
            </a>

            {/* Resume Pill */}
            <a
              href="/Sampatakumar.pdf"
              download
              className="neomorph-pill font-mono text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-foreground/90 dark:text-slate-200 border border-border/50 hover:border-emerald-500/50 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-3 transition-all duration-200"
            >
              <FaFileDownload className="text-emerald-500 text-xs" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <div className="obsidian-divider w-full" />
      <footer className="obsidian-card border-t border-border/40 bg-background/90 backdrop-blur-xl py-10 px-6 rounded-none border-x-0 border-b-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Sampatakumar V. All rights reserved.<br />
            <span className="text-xs opacity-75">Architected with React, TypeScript &amp; Modern High-Performance UI/UX Design System</span>
          </div>

          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <a href="https://github.com/sampatakumar" aria-label="Sampatakumar’s GitHub Profile" className="hover:text-emerald-500 hover:scale-110 transition-all text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sampatakumar-sv" aria-label="Sampatakumar’s LinkedIn Profile" className="hover:text-emerald-500 hover:scale-110 transition-all text-2xl">
              <FaLinkedin />
            </a>
          </div>

        </div>
      </footer>

      {/* Fixed Obsidian Floating Toast Notification */}
      <AnimatePresence>
        {copiedToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] px-5 py-3.5 rounded-2xl obsidian-card border border-emerald-500/50 shadow-[0_20px_50px_rgba(16,185,129,0.35)] flex items-center gap-3 text-sm font-medium backdrop-blur-2xl"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <FaCheck size={12} />
            </div>
            <span className="text-foreground font-mono text-xs sm:text-sm">{copiedToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}