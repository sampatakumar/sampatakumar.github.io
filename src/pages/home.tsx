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
  FaCheckCircle
} from "react-icons/fa"
import { motion } from "motion/react"
import { useEffect, useState } from "react";
import BlurText from "../components/BlurText"
import TextType from '../components/TextType.tsx';
import GlitchText from '../components/GlitchText.tsx';
import { fetchProjectsAsync, type Project } from '../lib/projectService.ts'
import '../styles/home.css'

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

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
            {/* Live Availability Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <GlitchText text="Full-Stack Web Developer & Software Engineer" className="text-emerald-600 dark:text-emerald-400" />
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide">
                <BlurText text="Hello, World! I am" />
              </h3>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                <span className="text-gradient-emerald">Sampatakumar V</span>
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

            {/* Live Interactive Terminal Window */}
            <div className="neomorph-inset rounded-2xl p-4 font-mono text-xs text-foreground/90 shadow-inner text-left shrink-0">
              <div className="flex items-center justify-between pb-2.5 border-b border-border/40 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-muted-foreground text-[11px] flex items-center gap-1">
                    <FaTerminal className="text-emerald-500 text-xs" /> developer@sampatakumar:~
                  </span>
                </div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 neomorph-pill px-2 py-0.5 rounded">JS/TS</span>
              </div>
              <div className="space-y-1 leading-relaxed">
                <p><span className="text-emerald-600 dark:text-emerald-400">const</span> <span className="text-teal-600 dark:text-cyan-300">stack</span> = &#123;</p>
                <p className="pl-4"><span className="text-muted-foreground">frontend:</span> [<span className="text-emerald-700 dark:text-emerald-300">'React.js'</span>, <span className="text-emerald-700 dark:text-emerald-300">'TypeScript'</span>, <span className="text-emerald-700 dark:text-emerald-300">'Tailwind CSS'</span>],</p>
                <p className="pl-4"><span className="text-muted-foreground">backend:</span> [<span className="text-teal-700 dark:text-cyan-300">'Node.js'</span>, <span className="text-teal-700 dark:text-cyan-300">'Express.js'</span>, <span className="text-teal-700 dark:text-cyan-300">'REST APIs'</span>],</p>
                <p className="pl-4"><span className="text-muted-foreground">databases:</span> [<span className="text-emerald-700 dark:text-emerald-300">'Firebase'</span>, <span className="text-emerald-700 dark:text-emerald-300">'Supabase'</span>, <span className="text-emerald-700 dark:text-emerald-300">'PostgreSQL'</span>]</p>
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
                { label: 'Core Stack', value: 'React / TS' },
                { label: 'Architecture', value: '100% Static' },
              ].map((stat, i) => (
                <div key={i} className="neomorph-inset p-3 rounded-2xl flex flex-col justify-center">
                  <span className="font-extrabold text-base sm:text-lg text-gradient-emerald">{stat.value}</span>
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
              title="Full-Stack Developer"
              handle="sampatakumar_sv"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/avatar.png"
              iconUrl="/brands/github.svg"
              showUserInfo
              enableTilt
              enableMobileTilt
              behindGlowEnabled
              behindGlowColor="rgba(16, 185, 129, 0.35)"
              innerGradient="linear-gradient(145deg, var(--card) 0%, var(--background) 100%)"
              onContactClick={() =>
                window.location.href = "mailto:sampatakumarsv@gmail.com"
              }
            />
          </div>

        </div>

      </section>

      <hr className="border-border/30 w-[90%] mx-auto" />

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="min-h-screen px-6 lg:px-20 py-24 flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neomorph-pill text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <FaLaptopCode /> Passion · Engineering · Innovation
            </div>
            <ScrollReveal textClassName="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-emerald">
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
              className="lg:col-span-2 neomorph-card neomorph-card-hover p-6 sm:p-10 rounded-3xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
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
              className="neomorph-card neomorph-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6"
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

            {/* Academic & Journey Card (Span 1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="neomorph-card neomorph-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider pb-3 border-b border-border/40">
                  <FaGraduationCap className="text-sm" /> Academic & Foundations
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
              transition={{ duration: 0.4, delay: 0.25 }}
              className="lg:col-span-2 neomorph-card neomorph-card-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-4 font-mono text-xs"
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
                <p className="pl-4"><span className="text-teal-600 dark:text-cyan-300">"focus"</span>: <span className="text-emerald-600 dark:text-emerald-300">"Full-Stack Web Engineering & Intelligent Systems"</span>,</p>
                <p className="pl-4"><span className="text-teal-600 dark:text-cyan-300">"coreStrengths"</span>: [<span className="text-emerald-600 dark:text-emerald-300">"Scalable Architecture"</span>, <span className="text-emerald-600 dark:text-emerald-300">"AI Tooling"</span>, <span className="text-emerald-600 dark:text-emerald-300">"Modern UX"</span>],</p>
                <p className="pl-4"><span className="text-teal-600 dark:text-cyan-300">"philosophy"</span>: <span className="text-amber-600 dark:text-amber-300">"Turning complex engineering challenges into seamless user reality."</span>,</p>
                <p className="pl-4"><span className="text-teal-600 dark:text-cyan-300">"openTo"</span>: <span className="text-emerald-600 dark:text-emerald-300">"Impactful software engineering roles, collaboration & open-source"</span></p>
                <p className="text-foreground/80">&#125;</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-muted-foreground text-[11px]">Ready to build something exceptional together?</span>
                <div className="flex items-center gap-2">
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

      <hr className="border-border/30 w-[90%] mx-auto" />

      {/* ================= THE STACK ================= */}
      <section
        id="skills"
        className="min-h-screen px-6 lg:px-20 py-24 flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-7xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <ScrollReveal textClassName="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground dark:text-slate-100">
              THE STACK
            </ScrollReveal>
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
                className="neomorph-card neomorph-card-hover p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-6 group transition-all duration-300"
              >
                {/* Left: ID + Category */}
                <div className="flex items-center gap-6 sm:gap-10 shrink-0">
                  <span className="font-mono text-xs sm:text-sm text-muted-foreground/70 tracking-wider font-semibold select-none">
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

      <hr className="border-border/30 w-[90%] mx-auto" />

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="px-6 lg:px-20 py-24"
      >

        <ScrollReveal textClassName="text-4xl md:text-5xl font-extrabold text-center text-gradient-emerald mb-16">
          Featured Full-Stack Projects
        </ScrollReveal>

        <ProjectCarousel projects={projects} />
      </section>

      <hr className="border-border/30 w-[90%] mx-auto" />

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
      <footer className="neomorph-card border-t border-border/40 bg-background/90 backdrop-blur-lg py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Sampatakumar V. All rights reserved.<br />
            <span className="text-xs opacity-75">Architected with React, TypeScript & Modern High-Performance UI/UX Design System</span>
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

    </div>
  )
}