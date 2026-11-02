export interface Project {
  id?: string
  _id?: string
  title: string
  description: string
  longDescription?: string
  image: string
  techStack: string[]
  liveDemoUrl?: string
  githubUrl?: string
  category?: string
  featured?: boolean
  createdAt?: string
}

const STORAGE_KEY = 'sampatakumar_portfolio_projects_v2'

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'ssh-hub',
    title: 'Smart Skill Hub (SSH)',
    description: 'AI-driven career acceleration and skill intelligence platform with ATS resume tailoring, GitHub repository analytics, and interactive coding assessments.',
    longDescription: 'Smart Skill Hub (SSH) is an AI-powered career acceleration and skill-intelligence platform. It unifies resume building, ATS job-description tailoring, GitHub repository intelligence, interactive sandboxed coding assessments, EduTube video learning recommendations, dynamic skill taxonomy, and AI-driven mentorship into a single unified platform.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Groq AI'],
    liveDemoUrl: 'https://smartskillhub.vercel.app',
    githubUrl: 'https://github.com/sampatakumar/SSH-final-year-project',
    category: 'AI & Web',
    featured: true,
    createdAt: '2026-08-01'
  },
  {
    id: 'resume-ai',
    title: 'ResumeAI Engine',
    description: 'AI-driven career builder that parses multi-format resumes, tailors them against job descriptions, and publishes personal portfolios to Cloudflare.',
    longDescription: 'ResumeAI is an AI-powered full-stack career platform enabling users to maintain a master profile, parse resumes from PDF/DOCX/TXT/TEX/images, optimize resumes against job descriptions with Groq & LangChain, and instantly export styled PDF resumes or publish custom portfolio sites.',
    image: '/resumeai.png',
    techStack: ['React', 'TypeScript', 'Groq AI', 'LangChain', 'Supabase', 'Tailwind CSS'],
    liveDemoUrl: 'https://resumeaidev.vercel.app',
    githubUrl: 'https://github.com/sampatakumar/ResumeAI',
    category: 'AI & Tools',
    featured: true,
    createdAt: '2026-07-20'
  },
  {
    id: 'git-reviewer',
    title: 'Git Reviewer — Developer Intelligence',
    description: 'Developer analytics platform providing in-depth GitHub profile statistics, language breakdowns, interactive charts, and AI-powered profile insights.',
    longDescription: 'Git Reviewer is a modern full-stack web application providing deep analysis of public GitHub profiles. Designed with an editorial paper-style interface inspired by research documentation, Git Reviewer presents developer statistics, language distributions, commit activity, and Groq AI profile insights & roasts.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'TypeScript', 'Groq AI', 'GitHub API', 'Chart.js', 'Tailwind CSS'],
    liveDemoUrl: 'https://git-reviewer-beta.vercel.app',
    githubUrl: 'https://github.com/sampatakumar/git-reviewer',
    category: 'Dev Tools',
    featured: true,
    createdAt: '2026-07-15'
  },
  {
    id: 'world-chronicle',
    title: 'The World Chronicle',
    description: 'Autonomous digital broadside newspaper powered by a client-side multi-stage AI pipeline ingesting 150+ global publishers in real time.',
    longDescription: 'The World Chronicle is an autonomous, full-screen digital newspaper application designed in the style of classic 20th-century broadsides (The New York Times, The Guardian). Powered by a client-side Multi-Stage AI Pipeline, it ingests real-time RSS feeds from over 150 global publishers and news wire networks.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'TypeScript', 'Multi-Stage AI', 'RSS Feeds', 'Tailwind CSS'],
    liveDemoUrl: 'https://theworldchronicle.vercel.app/',
    githubUrl: 'https://github.com/sampatakumar/The-World-Chronicle',
    category: 'AI & Media',
    featured: true,
    createdAt: '2026-07-05'
  },
  {
    id: 'educonnect',
    title: 'EduConnect — Academic Resource Platform',
    description: 'Full-stack platform for college students to share academic resources, study notes, collaborate in real-time rooms, and manage student profiles.',
    longDescription: 'EduConnect is a modern academic collaboration platform built for college students to share study resources, access curated course notes, collaborate in real-time study chatrooms, and manage student profiles under an Admin moderation workflow with a tactile neomorphic design.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'Socket.IO', 'Firebase', 'Tailwind CSS'],
    liveDemoUrl: 'https://educonnect25.vercel.app/',
    githubUrl: 'https://github.com/sampatakumar/Full-stack-event',
    category: 'Full-Stack',
    featured: true,
    createdAt: '2026-06-25'
  },
  {
    id: 'krishi-kendra',
    title: 'Krishi Kendra — Agriculture Marketplace',
    description: 'Direct e-commerce platform connecting farmers with consumers for fresh produce trading, diagnostics, and transparent logistics.',
    longDescription: 'Krishi Kendra eliminates middlemen in agriculture by providing a direct marketplace. Features real-time price updates, weather forecasts integration, crop diagnostics, and order tracking.',
    image: '/agri.png',
    techStack: ['React', 'Node.js', 'Express', 'Firebase', 'Tailwind CSS'],
    liveDemoUrl: 'https://krishi-kendra1.vercel.app/',
    githubUrl: 'https://github.com/sampatakumar/Krishi-Kendra',
    category: 'Full-Stack',
    featured: true,
    createdAt: '2026-06-15'
  },
  {
    id: 'noirwave',
    title: 'Noirwave — AMOLED Web Audio Player',
    description: 'Private browser-based music player with a pure AMOLED black interface, liquid-glass controls, and real-time Web Audio visualizers.',
    longDescription: 'Noirwave is a private, client-side browser music player with a pure AMOLED black interface, liquid-glass controls, local directory scanning, metadata extraction, nested playlist grouping, and real-time Web Audio visualizers.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'JavaScript', 'Web Audio API', 'Canvas', 'Tailwind CSS'],
    liveDemoUrl: 'https://noirwave1.vercel.app',
    githubUrl: 'https://github.com/sampatakumar/Noirwave',
    category: 'Web Audio',
    featured: false,
    createdAt: '2026-05-30'
  },
  {
    id: 'neo-tab-theme',
    title: 'Neo Theme — Glassmorphism New Tab',
    description: 'Browser Extension (Manifest V3) New Tab replacement with liquid glassmorphism, keeping wallpapers 100% clean with quick-launch tools.',
    longDescription: 'Neo Theme is a modern Manifest V3 browser extension new tab replacement featuring liquid glassmorphic aesthetics, keeping wallpapers unobstructed while offering powerful quick-launch productivity tools and shortcuts.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    techStack: ['JavaScript', 'Manifest V3', 'Glassmorphism UI', 'Browser Extensions'],
    liveDemoUrl: 'https://microsoftedge.microsoft.com/addons/detail/neo-theme/fppllbcpkjjfpjknbnlbaafklmenplbf',
    githubUrl: 'https://github.com/sampatakumar/Neo-Tab-Theme',
    category: 'Extensions',
    featured: false,
    createdAt: '2026-05-18'
  },
  {
    id: 'unfazed-unlox',
    title: 'Unfazed — Mental Wellness Platform',
    description: 'Thoughtful mental health & therapy web platform providing mindful journaling, mood tracking, and accessible wellness resources.',
    longDescription: 'Unfazed is designed to offer accessible mental health care and therapy journaling. Features emotional mood tracking, guided mindfulness prompts, and calming minimalist interfaces.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
    liveDemoUrl: 'https://unfazed-unlox.vercel.app',
    githubUrl: 'https://github.com/sampatakumar/Unfazed-Unlox',
    category: 'Health & Web',
    featured: false,
    createdAt: '2026-05-02'
  },
  {
    id: 'cineplan-ai',
    title: 'CinePlan AI — Movie Discovery',
    description: 'AI-driven cinema curation and watchlist planner providing personalized movie recommendations based on mood and taste.',
    longDescription: 'CinePlan AI intelligently recommends films and curates personalized watchlists based on mood analysis, director styles, and cinematic genres.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'JavaScript', 'AI Integration', 'Tailwind CSS'],
    liveDemoUrl: 'https://cine-plan-ai.vercel.app',
    githubUrl: 'https://github.com/sampatakumar/CinePlan-AI',
    category: 'AI & Media',
    featured: false,
    createdAt: '2026-04-20'
  },
  {
    id: 'mediaflow',
    title: 'MediaFlow — Integrated Downloader',
    description: 'All-in-one media downloader and stream extractor platform supporting high-speed video/audio downloads.',
    longDescription: 'An integrated web platform providing high-speed media processing, video/audio extraction, and clean downloading capabilities with zero advertisements.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS'],
    liveDemoUrl: 'https://media-flow-gamma.vercel.app',
    githubUrl: 'https://github.com/sampatakumar/integrated-downloader-platform',
    category: 'Web Tools',
    featured: false,
    createdAt: '2026-04-10'
  },
  {
    id: 'expo-calculator',
    title: 'Expo Calculator — Mobile-First Utility',
    description: 'Clean, responsive calculator utility built with Expo, React Native Web, and TypeScript.',
    longDescription: 'A modern, responsive calculator application with smooth animations, tactile feedback, and comprehensive math operations built with Expo and TypeScript.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1200&auto=format&fit=crop',
    techStack: ['React Native', 'Expo', 'TypeScript'],
    liveDemoUrl: 'https://expo-calculator-gamma.vercel.app',
    githubUrl: 'https://github.com/sampatakumar/expo-calculator',
    category: 'Mobile & Utilities',
    featured: false,
    createdAt: '2026-03-25'
  }
]

function mapProject(p: any): Project {
  return {
    ...p,
    id: p.id || p._id || 'proj_' + Math.random().toString(36).substr(2, 9)
  }
}

export function getStoredProjects(): Project[] {
  if (typeof window === 'undefined') return INITIAL_PROJECTS

  try {
    // Clear obsolete legacy storage keys
    if (localStorage.getItem('sampatakumar_portfolio_projects')) {
      localStorage.removeItem('sampatakumar_portfolio_projects')
    }

    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS))
      return INITIAL_PROJECTS
    }
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.map(mapProject)
    }
  } catch (err) {
    console.warn('Failed to read projects from localStorage:', err)
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS))
  return INITIAL_PROJECTS
}

export async function fetchProjectsAsync(): Promise<Project[]> {
  return Promise.resolve(getStoredProjects())
}

export async function saveProjectAsync(project: Omit<Project, 'id'> & { id?: string; _id?: string }): Promise<Project> {
  const current = getStoredProjects()
  const targetId = project.id || project._id

  let updatedProject: Project
  let nextList: Project[]

  if (targetId) {
    const existing = current.find((p) => p.id === targetId || p._id === targetId)
    updatedProject = {
      ...(existing || {}),
      ...project,
      id: targetId
    }
    nextList = current.map((p) => (p.id === targetId || p._id === targetId ? updatedProject : p))
  } else {
    updatedProject = {
      ...project,
      id: 'proj_' + Date.now(),
      createdAt: new Date().toISOString().split('T')[0]
    }
    nextList = [updatedProject, ...current]
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextList))
    window.dispatchEvent(new Event('storage'))
  } catch (e) {
    console.error('Failed to save project to localStorage:', e)
  }

  return Promise.resolve(updatedProject)
}

export async function deleteProjectAsync(id: string): Promise<boolean> {
  const current = getStoredProjects()
  const nextList = current.filter((p) => p.id !== id && p._id !== id)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextList))
    window.dispatchEvent(new Event('storage'))
  } catch (e) {
    console.error('Failed to delete project from localStorage:', e)
  }
  return Promise.resolve(true)
}

export async function resetProjectsToDefaultsAsync(): Promise<Project[]> {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS))
    window.dispatchEvent(new Event('storage'))
  } catch (e) {
    console.error('Failed to reset projects in localStorage:', e)
  }
  return Promise.resolve(INITIAL_PROJECTS)
}
