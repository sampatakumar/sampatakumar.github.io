import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaSearch, FaArrowLeft, FaCode, FaRocket, FaFilter, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'motion/react'
import { fetchProjectsAsync, type Project } from '../lib/projectService'
import ScrollReveal from '../components/ScrollReveal'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchProjectsAsync().then((data) => setProjects(data))

    const handleStorage = () => {
      fetchProjectsAsync().then((data) => setProjects(data))
    }
    window.addEventListener('storage', handleStorage)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProjectModal(null)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Categories derived from projects
  const categories = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => {
      if (p.category) set.add(p.category)
    })
    return ['All', ...Array.from(set)]
  }, [projects])

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
      const q = searchQuery.toLowerCase().trim()
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [projects, selectedCategory, searchQuery])

  return (
    <div className="min-h-screen pb-24 px-4 sm:px-8 max-w-7xl mx-auto text-foreground">
      
      {/* Top Header Navigation */}
      <div className="pt-8 pb-6 flex items-center justify-between">
        <Link
          to="/"
          className="neomorph-btn px-4 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:scale-105 transition-all"
        >
          <FaArrowLeft /> Back to Portfolio Home
        </Link>
        <span className="neomorph-pill text-xs font-mono text-emerald-600 dark:text-emerald-400 px-3.5 py-1.5 rounded-full font-semibold">
          Showing {filteredProjects.length} Projects
        </span>
      </div>

      {/* Hero Banner */}
      <div className="text-center py-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
          <FaRocket /> Software Engineering Portfolio
        </div>
        <ScrollReveal textClassName="text-4xl sm:text-6xl font-extrabold text-gradient-obsidian">
          Full-Stack Projects Gallery
        </ScrollReveal>
        <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
          Explore interactive web applications, AI integrations, REST APIs, and microservices crafted with React, Node.js, and TypeScript.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="obsidian-card rounded-3xl p-6 mb-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />
            <input
              type="text"
              placeholder="Search by project name or tech stack (e.g., React, TypeScript, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="neomorph-inset w-full pl-11 pr-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm text-foreground placeholder:text-muted-foreground font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search input"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap overflow-x-auto w-full md:w-auto">
            <span className="text-xs text-muted-foreground flex items-center gap-1 mr-1 font-mono">
              <FaFilter /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'neomorph-pressed bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                    : 'neomorph-btn text-foreground/80 hover:text-emerald-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="neomorph-card rounded-3xl p-12 text-center space-y-4">
          <FaCode className="text-4xl text-muted-foreground mx-auto" />
          <h3 className="text-xl font-bold text-foreground">No projects found matching your search</h3>
          <p className="text-muted-foreground text-sm">Try clearing your search query or selecting another category.</p>
          <button
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('All')
            }}
            className="neomorph-btn px-6 py-2.5 rounded-xl text-sm font-semibold text-emerald-600 dark:text-emerald-400"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                key={project.id}
                className="obsidian-card obsidian-card-hover rounded-3xl overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Header */}
                  <div className="relative h-56 w-full overflow-hidden border-b border-border/40 bg-background/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent"></div>
                    
                    {project.featured && (
                      <span className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md font-mono">
                        Featured
                      </span>
                    )}

                    {project.category && (
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-semibold font-mono">
                        {project.category}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex gap-1.5 flex-wrap pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-300 text-xs font-medium font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="emerald-glow-btn px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md hover:scale-105 transition-all"
                      >
                        <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neomorph-btn px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 text-foreground/80 hover:text-emerald-500 hover:scale-105 transition-all"
                      >
                        <FaGithub className="text-sm" /> Code
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProjectModal(project)}
                    className="text-xs text-muted-foreground hover:text-emerald-400 font-mono underline font-medium transition-colors"
                  >
                    Details
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Detailed Project Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProjectModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="obsidian-card max-w-2xl w-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative my-auto max-h-[85vh] flex flex-col"
            >
              
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full neomorph-btn text-foreground hover:text-emerald-500 transition-all flex items-center justify-center"
                aria-label="Close project modal"
              >
                <FaTimes />
              </button>

              <div className="h-56 sm:h-64 w-full relative shrink-0">
                <img
                  src={selectedProjectModal.image}
                  alt={selectedProjectModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
              </div>

              <div className="p-6 md:p-8 space-y-4 overflow-y-auto flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold font-mono">
                    {selectedProjectModal.category || 'Project'}
                  </span>
                  {selectedProjectModal.createdAt && (
                    <span className="text-xs text-muted-foreground font-mono">Released: {selectedProjectModal.createdAt}</span>
                  )}
                </div>

                <h2 className="text-3xl font-extrabold text-gradient-obsidian">{selectedProjectModal.title}</h2>

                <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                  {selectedProjectModal.longDescription || selectedProjectModal.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 tracking-wider font-bold">Technologies Used</h4>
                  <div className="flex gap-2 flex-wrap">
                    {selectedProjectModal.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-300 text-xs font-mono font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border/40">
                  {selectedProjectModal.liveDemoUrl && (
                    <a
                      href={selectedProjectModal.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="emerald-glow-btn px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-sm hover:scale-105 transition-all"
                    >
                      <FaExternalLinkAlt /> Launch Live Application
                    </a>
                  )}
                  {selectedProjectModal.githubUrl && (
                    <a
                      href={selectedProjectModal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neomorph-btn px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm text-foreground/85 hover:text-emerald-400 hover:scale-105 transition-all"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
