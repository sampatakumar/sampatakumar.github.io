"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Layers, Terminal } from "lucide-react";

export default function ProjectCard({ project, index, isTopThree = false }) {
  return (
    <article
      className={`group relative rounded-3xl border border-borderLine bg-surface/70 hover:border-borderHover transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        isTopThree ? "lg:col-span-12 p-8 sm:p-12" : "lg:col-span-6 p-6 sm:p-8"
      }`}
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Header: Index, Tagline & Category */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-borderLine pb-4 text-xs font-mono text-editorial-muted">
        <div className="flex items-center gap-3">
          <span className="font-bold text-accent">0{index + 1}</span>
          <span className="text-editorial-dark">/</span>
          <span className="text-editorial-light uppercase tracking-wider font-semibold">
            {project.category}
          </span>
          {project.flagship && (
            <span className="px-2.5 py-0.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-[10px] uppercase tracking-wider">
              FLAGSHIP CAPSTONE
            </span>
          )}
        </div>

        <span className="text-editorial-muted font-mono text-[11px]">
          {project.implementationStatus}
        </span>
      </div>

      {/* Card Content Grid for Top Three vs Regular */}
      <div
        className={`grid gap-8 py-6 items-center ${
          isTopThree ? "grid-cols-1 lg:grid-cols-12" : "grid-cols-1"
        }`}
      >
        {/* Left: Text, Tagline & Metrics */}
        <div className={isTopThree ? "lg:col-span-7 space-y-4" : "space-y-3"}>
          <div className="space-y-1">
            <h3
              className={`font-display font-black text-editorial-light uppercase tracking-tight group-hover:text-accent transition-colors ${
                isTopThree ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-accent/90">
              {project.tagline}
            </p>
          </div>

          <p className="font-sans text-xs sm:text-sm text-editorial-muted leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {project.metrics.slice(0, 3).map((metric, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl border border-borderLine/70 bg-void/50 flex flex-col justify-between"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-editorial-light">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[10px] text-editorial-muted truncate">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, isTopThree ? 7 : 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md border border-borderLine bg-void/60 text-editorial-light text-[11px] font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isTopThree ? 7 : 5) && (
              <span className="px-2 py-1 rounded-md text-editorial-muted text-[11px] font-mono">
                +{project.technologies.length - (isTopThree ? 7 : 5)} more
              </span>
            )}
          </div>
        </div>

        {/* Right: Authentic Cover Preview */}
        <div className={isTopThree ? "lg:col-span-5" : "w-full"}>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-borderLine bg-void group-hover:border-accent/40 transition-colors">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-editorial-muted">
                <Terminal size={32} className="text-accent mb-2" />
                <span className="font-mono text-xs">{project.title}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Card Footer: Action Links */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-borderLine pt-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-accent/15 border border-accent/40 hover:bg-accent text-accent hover:text-canvas font-semibold transition-all flex items-center gap-1.5"
            >
              <span>Live Application</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-borderLine hover:border-editorial-light text-editorial-light transition-all flex items-center gap-1.5"
            >
              <Github size={13} />
              <span>Source Code</span>
            </a>
          )}
        </div>

        {project.caseStudy ? (
          <Link
            href={`/projects/${project.slug}`}
            className="text-editorial-muted hover:text-accent flex items-center gap-1 transition-colors uppercase tracking-wider font-semibold"
          >
            <span>Read Case Study</span>
            <ArrowUpRight size={13} />
          </Link>
        ) : (
          <span className="text-editorial-dark font-mono text-[11px]">
            Archived Project
          </span>
        )}
      </div>
    </article>
  );
}

