"use client";

import { timelineItems } from "@/data/timeline";
import { GraduationCap, BookOpen, Rocket, Code2, Award, Calendar } from "lucide-react";

export default function ExperienceTimeline() {
  const getIcon = (category) => {
    switch (category) {
      case "Education":
        return <GraduationCap size={16} />;
      case "Publication":
        return <BookOpen size={16} />;
      case "Milestone":
        return <Rocket size={16} />;
      case "Product Release":
        return <Award size={16} />;
      default:
        return <Code2 size={16} />;
    }
  };

  return (
    <section
      id="journey"
      className="relative py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-borderLine"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-widest uppercase mb-4">
            <span>04</span>
            <span className="text-editorial-muted">/</span>
            <span>THE JOURNEY</span>
          </div>

          <h2 className="text-section-title font-display font-black text-editorial-light uppercase">
            Education, Milestones<br />& Publications.
          </h2>
        </div>

        <p className="font-sans text-editorial-muted text-sm sm:text-base max-w-md leading-relaxed">
          Chronological timeline of academic foundations, published research,
          and production system milestones. Grounded in authentic records.
        </p>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative border-l border-borderLine ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-void border-2 border-accent flex items-center justify-center group-hover:scale-125 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>

            {/* Timeline Content Card */}
            <div className="p-6 sm:p-8 rounded-3xl border border-borderLine bg-surface/60 hover:border-borderHover transition-all space-y-4">
              
              {/* Meta Row: Period & Category Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="flex items-center gap-2 text-accent font-bold">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </span>

                <span className="px-3 py-1 rounded-full border border-borderLine bg-void text-editorial-muted font-semibold uppercase text-[10px]">
                  {item.tag}
                </span>
              </div>

              {/* Title & Organization */}
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-editorial-light">
                  {item.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-editorial-muted mt-1 flex items-center gap-2">
                  <span className="text-editorial-light font-semibold">
                    {item.organization}
                  </span>
                  <span>·</span>
                  <span>{item.location}</span>
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-editorial-muted leading-relaxed">
                {item.description}
              </p>

              {/* Highlights List */}
              {item.highlights && (
                <div className="pt-2 border-t border-borderLine/50 space-y-2">
                  <span className="font-mono text-[10px] text-editorial-dark uppercase tracking-wider font-bold">
                    KEY HIGHLIGHTS:
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-editorial-light">
                    {item.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent font-mono">›</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

