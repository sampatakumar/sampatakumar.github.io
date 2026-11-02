import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt, FaArrowRight, FaRocket, FaFilter } from 'react-icons/fa'
import { type Project } from '../lib/projectService'

interface ProjectCarouselProps {
  projects: Project[]
}

const CATEGORY_TABS = [
  { id: 'All', label: 'All Projects' },
  { id: 'AI', label: 'AI & Intelligent Apps' },
  { id: 'Full-Stack', label: 'Full-Stack Systems' },
  { id: 'Dev-Tools', label: 'Dev Tools & Audio' },
] as const

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects
    if (selectedCategory === 'AI') {
      return projects.filter(
        (p) =>
          p.category?.toLowerCase().includes('ai') ||
          p.techStack.some((t) => ['groq', 'langchain', 'ollama', 'ai'].some((k) => t.toLowerCase().includes(k)))
      )
    }
    if (selectedCategory === 'Full-Stack') {
      return projects.filter((p) => p.category?.toLowerCase().includes('full-stack'))
    }
    if (selectedCategory === 'Dev-Tools') {
      return projects.filter(
        (p) =>
          p.category?.toLowerCase().includes('dev') ||
          p.category?.toLowerCase().includes('tools') ||
          p.category?.toLowerCase().includes('audio') ||
          p.category?.toLowerCase().includes('productivity') ||
          p.category?.toLowerCase().includes('utilities')
      )
    }
    return projects
  }, [projects, selectedCategory])

  const total = filteredProjects.length

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId)
    setActiveIndex(0)
  }

  const handleNext = useCallback(() => {
    if (total === 0) return
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  const handlePrev = useCallback(() => {
    if (total === 0) return
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (diff > 40) {
      handleNext()
    } else if (diff < -40) {
      handlePrev()
    }
    setTouchStart(null)
  }

  // Auto slide effect
  useEffect(() => {
    if (isPaused || total <= 1) return
    const interval = setInterval(() => {
      handleNext()
    }, 4500)
    return () => clearInterval(interval)
  }, [isPaused, total, handleNext])

  if (projects.length === 0) return null

  return (
    <div
      className="relative w-full max-w-6xl mx-auto py-4 sm:py-8 touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8 z-40 relative px-4">
        <span className="text-xs text-muted-foreground font-mono flex items-center gap-1.5 mr-1 hidden sm:inline-flex">
          <FaFilter className="text-emerald-500 text-[10px]" /> Filter:
        </span>
        {CATEGORY_TABS.map((tab) => {
          const isSelected = selectedCategory === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => handleSelectCategory(tab.id)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold font-mono transition-all duration-300 ${
                isSelected
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.45)] font-bold scale-105'
                  : 'neomorph-btn text-foreground/80 hover:text-emerald-400 hover:border-emerald-500/40'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Main 3D Stage */}
      <div className="relative h-[550px] sm:h-[590px] w-full flex items-center justify-center overflow-hidden sm:overflow-visible">
        {filteredProjects.map((project, idx) => {
          let diff = idx - activeIndex
          if (diff > total / 2) diff -= total
          if (diff < -total / 2) diff += total

          const isCenter = diff === 0
          const isRight = diff === 1
          const isLeft = diff === -1
          const isVisible = Math.abs(diff) <= 1

          const cardStyle: React.CSSProperties = {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: isCenter
              ? 'translate(-50%, -50%) scale(1)'
              : isRight
              ? 'translate(calc(-50% + min(62%, 300px)), -50%) scale(0.88)'
              : isLeft
              ? 'translate(calc(-50% - min(62%, 300px)), -50%) scale(0.88)'
              : 'translate(-50%, -50%) scale(0.7)',
            zIndex: isCenter ? 30 : isVisible ? 20 : 0,
            opacity: isCenter ? 1 : isVisible ? 0.75 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            visibility: isVisible ? 'visible' : 'hidden',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }

          const borderShadowClass = isCenter
            ? 'border-emerald-500/80 shadow-[0_25px_60px_-12px_rgba(16,185,129,0.35)] ring-1 ring-emerald-500/30'
            : 'border-border/60 cursor-pointer hover:opacity-95 hover:border-emerald-500/40'

          return (
            <div
              key={project.id}
              onClick={() => {
                if (isLeft) handlePrev()
                if (isRight) handleNext()
              }}
              style={cardStyle}
              className={`w-[88vw] max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] h-[500px] sm:h-[540px] shrink-0 obsidian-card rounded-3xl overflow-hidden group flex flex-col justify-between ${borderShadowClass}`}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-40 sm:h-48 w-full overflow-hidden border-b border-border/40 bg-card/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent"></div>
                  
                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg font-mono">
                      Featured
                    </span>
                  )}
                  {project.category && (
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-medium font-mono">
                      {project.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Engineering Metrics Badges */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.metrics.slice(0, 3).map((metric) => (
                        <span
                          key={metric}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex gap-1.5 flex-wrap pt-0.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-300 text-[11px] font-medium font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg bg-white/5 text-muted-foreground text-[10px] font-mono">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 flex gap-2.5">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="emerald-glow-btn px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="neomorph-btn px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 text-foreground/85 hover:text-emerald-400 hover:scale-105 transition-all"
                  >
                    <FaGithub className="text-sm" /> Code
                  </a>
                )}
              </div>

            </div>
          )
        })}
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 mt-4 sm:mt-6 z-40 relative">
        
        {/* Navigation Buttons & Pagination Dots */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full neomorph-btn text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-all flex items-center justify-center shadow-lg active:scale-95"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all rounded-full ${
                  idx === activeIndex
                    ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-emerald-500 shadow-[0_0_10px_#10b981]'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full neomorph-btn text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-all flex items-center justify-center shadow-lg active:scale-95"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* View All Projects Button */}
        <Link
          to="/projects"
          className="emerald-glow-btn px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-extrabold inline-flex items-center gap-2.5 shadow-xl hover:scale-105 transition-all"
        >
          <FaRocket /> View All Projects ({projects.length}) <FaArrowRight />
        </Link>

      </div>

    </div>
  )
}
