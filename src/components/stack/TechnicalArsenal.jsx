"use client";

import { useState } from "react";
import { techStackCategories } from "@/data/techStack";
import { Code2, Server, Database, Bot, Wrench, Sparkles, Check } from "lucide-react";

export default function TechnicalArsenal() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const icons = {
    frontend: <Code2 size={16} />,
    backend: <Server size={16} />,
    databases: <Database size={16} />,
    ai: <Bot size={16} />,
    tools: <Wrench size={16} />,
    creative: <Sparkles size={16} />,
  };

  const displayedCategories =
    selectedCategory === "all"
      ? techStackCategories
      : techStackCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="stack"
      className="relative py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-borderLine"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-widest uppercase mb-4">
            <span>03</span>
            <span className="text-editorial-muted">/</span>
            <span>THE TECHNOLOGY</span>
          </div>

          <h2 className="text-section-title font-display font-black text-editorial-light uppercase">
            Tools I use to turn<br />ideas into reality.
          </h2>
        </div>

        <p className="font-sans text-editorial-muted text-sm sm:text-base max-w-md leading-relaxed">
          Grounded in production applications and verified capstone architectures.
          No arbitrary skill percentages—only tools tested in real code.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-borderLine">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
            selectedCategory === "all"
              ? "bg-editorial-light text-canvas font-bold"
              : "text-editorial-muted hover:text-editorial-light hover:bg-white/[0.04] border border-borderLine"
          }`}
        >
          ALL DISCIPLINES (06)
        </button>

        {techStackCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2 ${
              selectedCategory === cat.id
                ? "bg-accent text-canvas font-bold shadow-[0_0_15px_rgba(255,101,56,0.25)]"
                : "text-editorial-muted hover:text-editorial-light hover:bg-white/[0.04] border border-borderLine"
            }`}
          >
            {icons[cat.id]}
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {displayedCategories.map((category) => (
          <div
            key={category.id}
            className="p-6 sm:p-8 rounded-3xl border border-borderLine bg-surface/60 hover:border-borderHover transition-all space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-borderLine pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    {icons[category.id]}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-editorial-light">
                      {category.title}
                    </h3>
                    <p className="font-sans text-xs text-editorial-muted mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-xs text-accent font-bold">
                  {category.code}
                </span>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-all ${
                      skill.highlight
                        ? "border-accent/40 bg-accent/[0.03]"
                        : "border-borderLine/70 bg-void/40"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-editorial-light">
                      <span>{skill.name}</span>
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <p className="font-sans text-[11px] text-editorial-muted leading-relaxed mt-1">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-editorial-dark border-t border-borderLine/40 flex items-center justify-between">
              <span>{category.skills.length} VERIFIED CAPABILITIES</span>
              <span className="text-accent flex items-center gap-1">
                <Check size={12} /> EXPERIENCED IN CODE
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

