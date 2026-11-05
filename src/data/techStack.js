/**
 * Technical Arsenal Data
 * Categorized verified technologies without fabricated percentages.
 */

export const techStackCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    code: "01",
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "React 19 / 18", highlight: true, note: "Server components, hooks, concurrent features" },
      { name: "Next.js", highlight: true, note: "App Router, SSR, Route Handlers, SEO" },
      { name: "TypeScript", highlight: true, note: "Strict type safety and robust contracts" },
      { name: "JavaScript (ES6+)", highlight: false, note: "Modern asynchronous architecture" },
      { name: "Tailwind CSS", highlight: true, note: "Design token systems & responsive layouts" },
      { name: "Vite", highlight: false, note: "Fast build tooling and developer experience" },
      { name: "HTML5 & Semantic Web", highlight: false, note: "Accessible ARIA patterns" },
      { name: "Modern CSS", highlight: false, note: "Clamp fluid scaling, variables, glassmorphism" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    code: "02",
    description: "Designing modular server applications, REST endpoints, and real-time sockets.",
    skills: [
      { name: "Node.js", highlight: true, note: "Asynchronous runtime & micro-services" },
      { name: "Express 5 / 4", highlight: true, note: "RESTful architecture, custom middlewares" },
      { name: "REST APIs", highlight: true, note: "Standard HTTP methods, status codes, CORS" },
      { name: "Socket.IO", highlight: true, note: "Bidirectional WebSocket communication" },
      { name: "WebSockets", highlight: false, note: "Real-time state synchronization" }
    ]
  },
  {
    id: "databases",
    title: "Cloud & Databases",
    code: "03",
    description: "Data modeling, schema design, and secure cloud persistence.",
    skills: [
      { name: "MongoDB & Mongoose", highlight: true, note: "Document schemas, indexing, aggregation" },
      { name: "Firebase", highlight: true, note: "Authentication, Firestore, Security rules" },
      { name: "Supabase", highlight: false, note: "PostgreSQL storage & Auth mechanisms" },
      { name: "PostgreSQL", highlight: false, note: "Relational query modeling & normalization" }
    ]
  },
  {
    id: "ai",
    title: "AI & Intelligent Systems",
    code: "04",
    description: "Integrating ultra-low latency LLMs and multi-stage evaluation pipelines.",
    skills: [
      { name: "Groq Cloud AI", highlight: true, note: "Sub-200ms LLaMA/GPT-OSS inference" },
      { name: "LangChain", highlight: true, note: "Prompt chaining and output parsing" },
      { name: "Ollama & Local LLMs", highlight: true, note: "Local offline model experimentation" },
      { name: "Prompt Architecture", highlight: false, note: "Structured JSON schema validation" },
      { name: "Multi-Stage Pipelines", highlight: false, note: "Keyword extraction & ATS matching" }
    ]
  },
  {
    id: "tools",
    title: "DevOps & Tooling",
    code: "05",
    description: "Version control, containerization, and modern deployment environments.",
    skills: [
      { name: "Docker & Dockerode", highlight: true, note: "Sandboxed container execution & limits" },
      { name: "Git & GitHub", highlight: true, note: "Branching workflows, version control" },
      { name: "Vercel", highlight: true, note: "Edge deployment, CI/CD, and Serverless" },
      { name: "Render", highlight: false, note: "Full-stack web service & database hosting" },
      { name: "Cloudflare Pages", highlight: false, note: "Static web deployment via API" },
      { name: "Linux / Bash", highlight: false, note: "Environment scripting & terminal navigation" }
    ]
  },
  {
    id: "creative",
    title: "Motion & Creative Dev",
    code: "06",
    description: "Cinematic scroll timelines and tactile user feedback.",
    skills: [
      { name: "GSAP & ScrollTrigger", highlight: true, note: "Pinned sections, parallax, clip reveals" },
      { name: "Framer Motion", highlight: true, note: "Gesture physics, layout transitions, modals" },
      { name: "Lenis", highlight: true, note: "Momentum-based virtual smooth scrolling" },
      { name: "Web Audio API", highlight: false, note: "Real-time FFT audio frequency visualizers" },
      { name: "HTML5 Canvas", highlight: false, note: "High-performance particle & wave rendering" }
    ]
  }
];

export default techStackCategories;

