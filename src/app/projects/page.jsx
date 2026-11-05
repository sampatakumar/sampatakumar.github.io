"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowLeft, Search, Filter } from "lucide-react";

export default function ProjectsArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "AI & Full-Stack Systems",
    "AI & Career Engineering",
    "Developer Tools & AI",
    "Full-Stack & WebSockets",
    "Web Audio & Creative Frontend",
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <div className="pt-36 sm:pt-44 pb-28 px-6 sm:px-12 max-w-7xl mx-auto w-full space-y-12">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-3 font-mono text-xs text-editorial-muted">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <ArrowLeft size={13} />
            <span>RETURN HOME</span>
          </Link>
          <span>/</span>
          <span className="text-editorial-light uppercase">PROJECT ARCHIVE</span>
        </div>

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-section-title font-display font-black text-editorial-light uppercase">
            Complete Project Archive
          </h1>
          <p className="font-sans text-editorial-muted text-base leading-relaxed">
            Every verified application, research prototype, open-source tool, and
            browser extension engineered by Sampatakumar V.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between border-y border-borderLine py-6">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-editorial-muted"
            />
            <input
              type="text"
              placeholder="Search by name, technology or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-borderLine bg-surface/80 text-editorial-light text-xs font-mono outline-none focus:border-accent"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-accent text-canvas font-bold"
                    : "border border-borderLine text-editorial-muted hover:text-editorial-light hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="font-mono text-xs text-editorial-muted">
          SHOWING {filteredProjects.length} OF {projects.length} VERIFIED REPOSITORIES
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                isTopThree={false}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl border border-borderLine bg-surface/30 space-y-3">
            <p className="font-display font-bold text-xl text-editorial-light">
              No matching repositories found
            </p>
            <p className="font-sans text-xs text-editorial-muted">
              Try adjusting your query or resetting the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-2 px-5 py-2 rounded-full border border-accent text-accent font-mono text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

