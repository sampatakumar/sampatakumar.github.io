import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Architectural Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Sampatakumar V`,
      description: project.description,
      images: [project.coverImage || "/profile.png"],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <>
      <Navbar />

      <article className="pt-36 sm:pt-44 pb-28 px-6 sm:px-12 max-w-7xl mx-auto w-full space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 font-mono text-xs text-editorial-muted">
          <Link
            href="/#work"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <ArrowLeft size={13} />
            <span>SELECTED WORK</span>
          </Link>
          <span>/</span>
          <span className="text-editorial-light uppercase truncate">
            {project.title}
          </span>
        </div>

        {/* Case Study Hero */}
        <div className="space-y-6 max-w-4xl border-b border-borderLine pb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold uppercase">
              {project.category}
            </span>
            <span className="text-editorial-muted">·</span>
            <span className="text-editorial-muted">{project.year}</span>
            <span className="text-editorial-muted">·</span>
            <span className="text-emerald-400 font-semibold">
              {project.implementationStatus}
            </span>
          </div>

          <h1 className="text-section-title font-display font-black text-editorial-light uppercase">
            {project.title}
          </h1>

          <p className="font-mono text-sm sm:text-base text-accent">
            {project.tagline}
          </p>

          <p className="font-sans text-base sm:text-xl text-editorial-muted leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-canvas font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,101,56,0.3)] hover:scale-105"
              >
                <span>Launch Live Application</span>
                <ExternalLink size={13} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-borderLine hover:border-editorial-light text-editorial-light font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 hover:bg-white/[0.04]"
              >
                <Github size={14} />
                <span>View GitHub Repository</span>
              </a>
            )}

            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-borderLine hover:border-accent text-editorial-muted hover:text-accent font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <BookOpen size={14} />
                <span>Published Paper (PDF)</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual Cover Asset */}
        {project.coverImage && (
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-borderLine bg-surface">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Key Metrics Strip */}
        {project.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-borderLine bg-surface/70 flex flex-col justify-between"
              >
                <span className="font-display font-black text-2xl sm:text-3xl text-editorial-light">
                  {m.value}
                </span>
                <span className="font-mono text-xs text-editorial-muted mt-1 uppercase">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Problem Statement vs Proposed Solution */}
        {caseStudy && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/[0.02] space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase font-bold tracking-wider">
                <AlertCircle size={16} />
                <span>The Problem Statement</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.02] space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider">
                <CheckCircle2 size={16} />
                <span>The Engineering Solution</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        )}

        {/* System Architecture Breakdown */}
        {caseStudy?.architecture && (
          <div className="p-8 sm:p-12 rounded-3xl border border-borderLine bg-surface/70 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs text-accent uppercase font-bold tracking-wider">
                TECHNICAL ARCHITECTURE
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-editorial-light uppercase">
                Subsystems & Architectural Decisions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(caseStudy.architecture).map(([key, value]) => (
                <div
                  key={key}
                  className="p-5 rounded-2xl border border-borderLine bg-void/50 space-y-2"
                >
                  <span className="font-mono text-xs text-accent uppercase font-semibold">
                    {key.toUpperCase()} LAYER
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-editorial-muted leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Implemented Features */}
        {caseStudy?.features && (
          <div className="space-y-6">
            <h3 className="font-display font-black text-2xl text-editorial-light uppercase">
              Implemented Features & Capabilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-borderLine bg-surface/50 flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-accent font-bold mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-editorial-muted leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engineering Challenges */}
        {caseStudy?.engineeringChallenges && (
          <div className="p-8 sm:p-12 rounded-3xl border border-borderLine bg-surface/50 space-y-6">
            <h3 className="font-display font-black text-2xl text-editorial-light uppercase">
              Key Engineering Challenges Overcome
            </h3>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-editorial-muted leading-relaxed">
              {caseStudy.engineeringChallenges.map((ch, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-borderLine/70 bg-void/40 flex items-start gap-3"
                >
                  <span className="text-accent font-mono font-bold">›</span>
                  <span>{ch}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="space-y-4">
          <h4 className="font-mono text-xs text-editorial-muted uppercase tracking-wider font-semibold">
            Verified Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl border border-borderLine bg-void text-editorial-light font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-12 border-t border-borderLine flex items-center justify-between">
          <Link
            href="/#work"
            className="font-mono text-xs text-editorial-muted hover:text-accent transition-colors flex items-center gap-1.5 uppercase"
          >
            <ArrowLeft size={13} />
            <span>Back to Selected Work</span>
          </Link>

          <Link
            href="/projects"
            className="font-mono text-xs text-accent hover:underline flex items-center gap-1.5 uppercase font-bold"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </article>

      <Footer />
    </>
  );
}

