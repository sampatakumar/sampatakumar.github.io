"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

export default function SelectedProjects() {
  // Top 6 prioritized projects
  const featuredList = projects.slice(0, 6);

  return (
    <section
      id="work"
      className="relative py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-borderLine"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-widest uppercase mb-4">
            <span>02</span>
            <span className="text-editorial-muted">/</span>
            <span>SELECTED WORK</span>
          </div>

          <h2 className="text-section-title font-display font-black text-editorial-light uppercase">
            Not just ideas.<br />Things I've built.
          </h2>
        </div>

        <p className="font-sans text-editorial-muted text-sm sm:text-base max-w-md leading-relaxed">
          A curated selection of real-world full-stack architectures, AI systems,
          and developer utilities engineered with production rigor.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {featuredList.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isTopThree={index < 3}
          />
        ))}
      </div>

      {/* Footer Navigation to Archive */}
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl border border-borderLine bg-void/50">
        <div className="flex items-center gap-4 text-left">
          <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
            <FolderGit2 size={24} />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-editorial-light">
              Looking for more repositories?
            </h4>
            <p className="font-sans text-xs text-editorial-muted mt-0.5">
              Explore 10+ additional open-source systems, utilities, and experimental apps.
            </p>
          </div>
        </div>

        <Link
          href="/projects"
          className="px-6 py-3 rounded-full border border-borderLine hover:border-accent text-editorial-light hover:text-accent font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:bg-white/[0.03] whitespace-nowrap"
        >
          <span>View Complete Project Archive</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}

