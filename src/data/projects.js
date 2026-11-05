/**
 * Projects Data Architecture
 * Comprehensive, verified repository records for Sampatakumar V
 */

export const projects = [
  {
    id: "smart-skill-hub",
    slug: "ssh-hub",
    title: "Smart Skill Hub (SSH)",
    tagline: "Autonomous Developer Intelligence & Adaptive Career Platform",
    category: "AI & Full-Stack Systems",
    featured: true,
    flagship: true,
    year: "2026",
    implementationStatus: "Production Ready & Published",
    coverImage: "/profile.png", // will be styled with editorial overlay
    bannerImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sampatakumar/SSH-final-year-project",
    liveUrl: "https://smartskillhub.vercel.app",
    paperUrl: "/SSH_IRE_Journals.pdf",
    technologies: [
      "React 18",
      "TypeScript",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Groq AI",
      "Dockerode",
      "Socket.IO",
      "Monaco Editor",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "ATS Match Accuracy", value: ">94%" },
      { label: "AI Inference Latency", value: "<200ms" },
      { label: "Container Sandbox RAM", value: "128MB" },
      { label: "Peer-Reviewed", value: "IRE Journals" }
    ],
    description: "An AI-powered developer intelligence and career acceleration platform featuring sandboxed Docker code execution, ATS resume tailoring, GitHub repository intelligence, and adaptive learning roadmaps.",
    longDescription: "Smart Skill Hub (SSH) is an end-to-end developer intelligence and technical career acceleration platform engineered as a final-year engineering capstone project and published in IRE Journals (ISSN: 2456-8880). It unifies isolated coding assessment, automated ATS resume optimization, GitHub repository code mining, and interactive video curriculum into a closed-loop adaptive learning system.",
    caseStudy: {
      problem: "Aspiring software engineers experience a fragmented learning journey: practice algorithms in isolated silos, claim unverified skills on static resumes, watch distracting video tutorials, and leave authentic GitHub commits unanalyzed by recruiters.",
      solution: "Smart Skill Hub establishes a continuous verification loop: mining live GitHub repos for architectural patterns, running coding assessments in isolated Docker containers, benchmarking user skills against real industry role taxonomies, and generating quantifiable ATS-tailored resumes.",
      architecture: {
        frontend: "React 18 SPA built with Vite, TypeScript, Tailwind CSS, Monaco Code Editor, and TanStack React Query for aggressive client-side caching.",
        backend: "Express 5 REST API modularized across 15 domain modules, powered by Node.js, Helmet security policies, and rate-limiting.",
        database: "MongoDB Atlas managed via Mongoose 8 with strict user document ownership isolation and indexed schema lookups.",
        sandboxing: "Dockerode daemon orchestration running a dedicated `ssh-javascript-sandbox` container with 128MB RAM, 0.5 CPU cap, non-root UID execution, and 5-second wall-clock timeouts.",
        aiEngine: "Groq Cloud ultra-fast inference running `openai/gpt-oss-120b` and `openai/gpt-oss-20b` with automatic failover to a deterministic local rule/NLP engine."
      },
      features: [
        "Smart Mentor: Context-aware AI coaching streaming personalized advice based on candidate skill gaps and GitHub activity.",
        "Developer Intelligence & GitHub Mining: Mines public GitHub commits and repository dependencies to authenticate real development depth.",
        "Canonical Skill Profile & Cryptographic Badges: Normalizes competencies and issues verifiable credentials with unique public UUIDs.",
        "Dockerized Sandboxed Code Runner: Executes JavaScript/TypeScript algorithms safely against hidden and visible test cases.",
        "EduTube Curated Learning System: Distraction-free educational video player with interactive quiz checkpoints embedded at video timestamps.",
        "Interactive A4 Resume Studio: Real-time editable A4 canvas with automated ATS keyword tailoring and client-side vector PDF generation.",
        "Student Study Circles: Socket.IO real-time channels secured with `scrypt` password hashing and constant-time token comparison."
      ],
      engineeringChallenges: [
        "Preventing Arbitrary Code Execution: Addressed by isolating submissions in non-root Docker containers with strict cgroup memory and CPU limits and disabled networking.",
        "Zero Downtime on AI Outages: Engineered a 3-tier fallback architecture: primary Groq model -> secondary lightweight model -> deterministic local NLP regex engine.",
        "ATS Parsing Accuracy: Integrated multi-format OCR and text extraction supporting PDF, DOCX, and raw text with high keyword precision."
      ]
    }
  },
  {
    id: "resume-ai",
    slug: "resume-ai",
    title: "ResumeAI Engine",
    tagline: "AI-Powered Resume Optimization & Cloudflare Portfolio Publisher",
    category: "AI & Career Engineering",
    featured: true,
    flagship: false,
    year: "2026",
    implementationStatus: "Production Ready",
    coverImage: "/resumeai.png",
    bannerImage: "/resumeai.png",
    screenshots: ["/resumeai.png"],
    githubUrl: "https://github.com/sampatakumar/ResumeAI",
    liveUrl: "https://resumeaidev.vercel.app/",
    technologies: [
      "React 18",
      "TypeScript",
      "Groq AI",
      "LangChain",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Firebase Auth",
      "Cloudflare Pages API"
    ],
    metrics: [
      { label: "Resume Parsing", value: "5+ Formats" },
      { label: "Groq Inference", value: "<250ms" },
      { label: "Deployment", value: "Cloudflare" },
      { label: "UI System", value: "Neomorphic" }
    ],
    description: "An AI-powered career platform that parses multi-format resumes, tailors them against job descriptions using Groq and LangChain, and deploys personal developer portfolios directly to Cloudflare Pages.",
    longDescription: "ResumeAI solves the friction of manual resume customization. It provides a master profile management system, ingests resumes across PDF/DOCX/TXT/TEX and image formats via OCR, analyzes job postings to extract target ATS keywords, rewrites bullet points using quantifiable metrics, and publishes web portfolios to Cloudflare Pages with a single click.",
    caseStudy: {
      problem: "Software job applicants spend dozens of hours rewriting resumes for different ATS engines, frequently getting rejected due to missing keywords, weak formatting, or lack of hosted web portfolios.",
      solution: "A centralized platform where users maintain one master career profile, upload existing resumes in any format, run instant AI keyword tailoring against any job posting, and deploy custom web portfolios directly to Cloudflare Pages.",
      architecture: {
        frontend: "React 18, Vite, TypeScript, Framer Motion, and custom Neomorphic dual-shadow tokens.",
        backend: "Node.js with Express 5 REST API handling parsing workers, AI prompting, and Cloudflare Pages API integrations.",
        database: "MongoDB for master career profiles, work histories, and project records.",
        aiEngine: "Groq LLaMA models orchestrated via LangChain for ATS keyword correlation and action-verb enhancement."
      },
      features: [
        "Multi-Format Document Ingestion (PDF, DOCX, TXT, TEX, and image OCR via Tesseract.js).",
        "Job Description Tailoring: Instant keyword gap scoring and AI bullet refinement.",
        "One-Click Cloudflare Pages Deployment: Automatically creates build artifacts and deploys live web portfolios.",
        "GitHub Source Export: Pushes generated portfolio code directly to the user's GitHub repository.",
        "Interactive Neomorphic Design System with responsive light and dark mode toggles."
      ],
      engineeringChallenges: [
        "Complex Document Parsing: Handled varied document structures by implementing multi-pass extractors with fallback regex parsing.",
        "Automated Cloudflare Deployments: Built a server-side packaging pipeline using JSZip and direct API upload streams."
      ]
    }
  },
  {
    id: "git-reviewer",
    slug: "git-reviewer",
    title: "Git Reviewer — Developer Intelligence",
    tagline: "GitHub Profile Analyzer, Visual Analytics & AI Roaster",
    category: "Developer Tools & AI",
    featured: true,
    flagship: false,
    year: "2026",
    implementationStatus: "Production Ready",
    coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sampatakumar/git-reviewer",
    liveUrl: "https://git-reviewer-beta.vercel.app",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express",
      "Groq AI",
      "GitHub REST API"
    ],
    metrics: [
      { label: "Profile Score", value: "100-Pt Index" },
      { label: "Data Source", value: "Octokit API" },
      { label: "Design Theme", value: "Research Paper" },
      { label: "Roast Levels", value: "3 Modes" }
    ],
    description: "A developer analytics platform delivering in-depth GitHub profile statistics, interactive language distributions, commit timeline logs, and Groq AI developer insights & playful profile roasts.",
    longDescription: "Git Reviewer provides deep inspection of any public GitHub profile. Built with a warm, minimalist research paper aesthetic with JetBrains Mono accents, Git Reviewer presents language distribution donuts, repository growth timelines, star breakdowns, and actionable AI developer insights.",
    caseStudy: {
      problem: "Public GitHub profiles contain rich engineering data that is hard to assess quickly through GitHub's standard interface.",
      solution: "An analytical dashboard that queries GitHub's REST API, aggregates repository metadata into interactive Recharts visualizations, and provides AI-driven advice for README optimization and repository structure.",
      architecture: {
        frontend: "React, Vite, TypeScript, Tailwind CSS, Recharts, Lucide Icons, and Canvas Confetti.",
        backend: "Node.js, Express, Axios, NodeCache for GitHub API rate-limit resilience, and Groq SDK.",
        aiEngine: "Groq Cloud for instant profile review and roast generation across 3 intensity levels."
      },
      features: [
        "GitHub Profile Inspector: Comprehensive follower, repository, and star metrics.",
        "Interactive Language Breakdown: Recharts donut visualization with repository counts.",
        "Timeline Analytics: Annual repository creation trajectory and commit frequencies.",
        "Filterable Repository Directory: Multi-attribute sorting by stars, forks, size, and language.",
        "Groq AI Optimization Score: 100-point developer evaluation with actionable README tips.",
        "Opt-in Profile Roast Mode: Playful developer humor with recovery tips and confetti."
      ],
      engineeringChallenges: [
        "GitHub API Rate Limiting: Mitigated by implementing server-side in-memory caching with NodeCache.",
        "Chart Rendering Precision: Customized Recharts components for responsive touch and mobile viewports."
      ]
    }
  },
  {
    id: "educonnect",
    slug: "educonnect",
    title: "EduConnect — Academic Resource Platform",
    tagline: "Collaborative Study Hub, Real-Time Rooms & Moderated Notes",
    category: "Full-Stack & WebSockets",
    featured: true,
    flagship: false,
    year: "2026",
    implementationStatus: "Production Ready",
    coverImage: "/educonnect.png",
    bannerImage: "/educonnect.png",
    screenshots: ["/educonnect.png"],
    githubUrl: "https://github.com/sampatakumar/Full-stack-event",
    liveUrl: "https://educonnect25.vercel.app/",
    technologies: [
      "React 18",
      "Vite",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
      "Firebase Auth",
      "Neomorphic CSS"
    ],
    metrics: [
      { label: "Real-Time Engine", value: "Socket.IO" },
      { label: "Auth Model", value: "Firebase + Mongo" },
      { label: "Moderation", value: "Admin Queue" },
      { label: "Resource Types", value: "PDF & Notes" }
    ],
    description: "A full-stack collaborative platform for college students to share academic notes, join real-time study chatrooms, and access branch-specific question papers under an admin moderation workflow.",
    longDescription: "EduConnect was engineered to solve academic material scattering across college campuses. It combines Firebase authentication with MongoDB student records, providing a filtered resource hub for notes and question papers, an admin approval queue, and WebSocket-powered instant study rooms.",
    caseStudy: {
      problem: "University course materials and study notes are scattered across private WhatsApp groups and unorganized drives, leaving students without centralized access to verified exam notes.",
      solution: "A curated neomorphic academic hub where students upload notes, view verified PDFs, and collaborate in real-time study rooms filtered by engineering branch and semester.",
      architecture: {
        frontend: "React 18 with Vite, React Router DOM v7, Socket.IO Client, and custom neomorphic CSS tokens.",
        backend: "Node.js, Express, MongoDB with Mongoose ORM, and Socket.IO Server on a shared HTTP instance.",
        security: "Role-based authorization distinguishing regular student contributors from administrators."
      },
      features: [
        "Curated Resource Hub: Multi-tag filtering by branch, scheme, subject code, and semester.",
        "Admin Moderation Workflow: Submissions queue in a pending status until verified by campus admins.",
        "Real-Time Study Chatrooms: Multi-room Socket.IO channels with participant presence.",
        "Inspiration Engine: Integrated database of 60+ curated educational motivational quotes."
      ],
      engineeringChallenges: [
        "WebSocket Connection Stability: Configured automatic reconnect handlers and optimistic message state updates.",
        "Secure File Handling: Implemented file type validation and static document delivery."
      ]
    }
  },
  {
    id: "task-management",
    slug: "task-management",
    title: "Task Management Application (TMA)",
    tagline: "Collaborative Kanban Board & Real-Time WebSocket Synchronization",
    category: "Full-Stack & Systems",
    featured: true,
    flagship: false,
    year: "2026",
    implementationStatus: "Fully Implemented",
    coverImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80"
    ],
    githubUrl: "https://github.com/sampatakumar/Task-Management-Application",
    liveUrl: "",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "WebSockets",
      "JWT Auth",
      "Modern CSS"
    ],
    metrics: [
      { label: "Sync Engine", value: "Native WebSockets" },
      { label: "Views", value: "Kanban & Table" },
      { label: "Auth", value: "JWT + Demo Login" },
      { label: "Productivity", value: "Live Analytics" }
    ],
    description: "A full-stack task management platform featuring interactive drag-and-drop Kanban columns, subtasks checklists, productivity analytics, and instant multi-tab WebSocket synchronization.",
    longDescription: "Task Management Application provides an organized task orchestration workspace. Users can authenticate with JWT or test immediately with 1-click Demo Accounts. The system features a drag-and-drop Kanban board, priority badges, customizable subtasks, and real-time WebSocket state broadcasts across browser instances.",
    caseStudy: {
      problem: "Standard todo applications lack real-time synchronization across browser tabs and lack project-level analytics on task completion velocities.",
      solution: "A responsive full-stack platform combining Kanban workflows, detailed subtask checklists, and WebSocket broadcasts for concurrent updates.",
      architecture: {
        frontend: "React SPA with modern CSS variables, glassmorphic styling, and dark/light modes.",
        backend: "Node.js and Express REST API integrated with native WebSocket server (`ws://`)."
      },
      features: [
        "Interactive Kanban Board with status transitions (To Do, In Progress, In Review, Done).",
        "Subtasks Checklist with dynamic completion progress bars.",
        "Real-Time WebSocket Synchronization across open browser windows.",
        "Analytics Dashboard tracking completion rates, status breakdown, and overdue alerts."
      ],
      engineeringChallenges: [
        "Concurrent Task State Synchronization: Built a lightweight JSON WebSocket broadcast protocol to reflect mutations without race conditions."
      ]
    }
  },
  {
    id: "noirwave",
    slug: "noirwave",
    title: "Noirwave — AMOLED Web Audio Player",
    tagline: "Private Local Music Player & Real-Time Audio Visualizer",
    category: "Web Audio & Creative Frontend",
    featured: true,
    flagship: false,
    year: "2026",
    implementationStatus: "Production Ready",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sampatakumar/Noirwave",
    liveUrl: "https://noirwave1.vercel.app",
    technologies: [
      "React",
      "JavaScript",
      "Web Audio API",
      "HTML5 Canvas",
      "File System Access API",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Interface", value: "AMOLED Black" },
      { label: "Visualizers", value: "3 Modes" },
      { label: "Privacy", value: "100% Client-Side" },
      { label: "Metadata", value: "ID3 Extraction" }
    ],
    description: "A private browser music player with a pure AMOLED black interface, liquid-glass controls, recursive local folder scanning, metadata extraction, and real-time Web Audio visualizers.",
    longDescription: "Noirwave runs entirely client-side with zero audio file uploading. Using the modern File System Access API (`showDirectoryPicker`), it recursively scans local music directories, categorizes audio by language/folder, parses ID3 metadata, and renders high-frame-rate canvas audio visualizers.",
    caseStudy: {
      problem: "Streaming music platforms harvest user listening analytics and modern web players rarely offer hardware-accelerated audio visualization.",
      solution: "A local-first, zero-telemetry music visualizer operating on AMOLED contrast with Spectrum Bars, Liquid Wave, and Pulse Orbit visualizers.",
      architecture: {
        frontend: "React, Vite, HTML5 Canvas 2D rendering pipeline, and Web Audio API `AnalyserNode`."
      },
      features: [
        "Local Music Directory Scanning with folder-level categorization (e.g. Kannada, Hindi, English).",
        "Real-Time Visualizers: Spectrum Bars, Liquid Wave, and Pulse Orbit.",
        "Interactive Audio Parameter Controls (Sensitivity, Smoothing, Mirror, Glow).",
        "Embedded Cover Art and ID3 Tag Extraction."
      ],
      engineeringChallenges: [
        "Audio Frequency Extraction & 60fps Canvas Rendering: Balanced FFT size and canvas clearing routines to eliminate visual stutters."
      ]
    }
  },
  {
    id: "world-chronicle",
    slug: "world-chronicle",
    title: "The World Chronicle",
    tagline: "Autonomous Digital Broadside with Multi-Stage AI Pipeline",
    category: "AI & Media",
    featured: false,
    flagship: false,
    year: "2026",
    implementationStatus: "Production Ready",
    coverImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sampatakumar/The-World-Chronicle",
    liveUrl: "https://theworldchronicle.vercel.app/",
    technologies: ["React", "TypeScript", "Multi-Stage AI", "RSS Feeds", "Tailwind CSS"],
    metrics: [
      { label: "Publishers Ingested", value: "150+ RSS Feeds" },
      { label: "Pipeline", value: "Client-Side AI" },
      { label: "Typography", value: "Broadside Editorial" }
    ],
    description: "An autonomous digital broadside newspaper application styled after classic 20th-century print broadsides, powered by a multi-stage AI pipeline ingesting 150+ global RSS news feeds in real time.",
    longDescription: "The World Chronicle reimagines digital journalism with editorial typography and classical broadside layout aesthetics. A multi-stage AI pipeline parses and categorizes live RSS news from world publishers with zero server latency.",
    caseStudy: null
  },
  {
    id: "krishi-kendra",
    slug: "krishi-kendra",
    title: "Krishi Kendra — Agriculture Marketplace",
    tagline: "Direct Farmer-to-Consumer Agricultural Trade & Diagnostics",
    category: "Full-Stack E-Commerce",
    featured: false,
    flagship: false,
    year: "2026",
    implementationStatus: "Production Ready",
    coverImage: "/agri.png",
    bannerImage: "/agri.png",
    screenshots: ["/agri.png"],
    githubUrl: "https://github.com/sampatakumar/Krishi-Kendra",
    liveUrl: "https://krishi-kendra1.vercel.app/",
    technologies: ["React", "Node.js", "Express", "Firebase", "Tailwind CSS"],
    metrics: [
      { label: "Trade Model", value: "Direct Farmer" },
      { label: "Middlemen", value: "0%" }
    ],
    description: "A direct agricultural marketplace connecting regional farmers with consumers, featuring fair pricing, produce diagnostics, and transparent logistics.",
    longDescription: "Krishi Kendra eliminates middlemen fees by establishing direct farmer-to-consumer commerce with real-time produce listings and agricultural advice.",
    caseStudy: null
  },
  {
    id: "cineplan-ai",
    slug: "cineplan-ai",
    title: "CinePlan AI — Cinema Discovery",
    tagline: "Mood-Based Movie Watchlist Curator & Recommendation Engine",
    category: "AI & Media",
    featured: false,
    flagship: false,
    year: "2026",
    implementationStatus: "Production Ready",
    coverImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sampatakumar/CinePlan-AI",
    liveUrl: "https://cine-plan-ai.vercel.app",
    technologies: ["React", "JavaScript", "AI Integration", "Tailwind CSS"],
    metrics: [{ label: "Recommendation", value: "Mood-Driven" }],
    description: "An AI-driven cinema recommendation and watchlist planner that suggests films based on nuanced emotional moods, director aesthetics, and narrative genres.",
    longDescription: "CinePlan AI analyzes user mood inputs to generate personalized film selections and streamable watchlists.",
    caseStudy: null
  },
  {
    id: "neo-tab-theme",
    slug: "neo-tab-theme",
    title: "Neo Theme — Glassmorphism New Tab",
    tagline: "Liquid Glass Browser Extension for Microsoft Edge & Chrome",
    category: "Browser Extensions & UI",
    featured: false,
    flagship: false,
    year: "2026",
    implementationStatus: "Published on Edge Store",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sampatakumar/Neo-Tab-Theme",
    liveUrl: "https://microsoftedge.microsoft.com/addons/detail/neo-theme/fppllbcpkjjfpjknbnlbaafklmenplbf",
    technologies: ["JavaScript", "Manifest V3", "Liquid Glassmorphism", "Browser Extensions"],
    metrics: [{ label: "Distribution", value: "Edge Add-ons Store" }],
    description: "A Manifest V3 browser extension new tab replacement with liquid glassmorphic controls designed to keep wallpapers clean while offering instant productivity shortcuts.",
    longDescription: "Published officially on the Microsoft Edge Add-ons store, Neo Theme delivers minimalist desktop aesthetics and quick-launch utilities.",
    caseStudy: null
  }
];

export default projects;

