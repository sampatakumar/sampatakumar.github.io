import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { profile } from "@/data/profile";
import { ArrowLeft, Clock, Calendar, ArrowUpRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Engineering Articles & Technical Writing",
  description:
    "Reflections and engineering breakdowns on React 19, scalable full-stack architecture, micro-interactions, and AI systems by Sampatakumar V.",
};

const articles = [
  {
    slug: "building-scalable-web-apps-react-19",
    title: "Building Scalable Web Applications with React 19 & Modern CSS",
    excerpt:
      "Explore state-of-the-art patterns for building hyper-performant React applications with modern CSS features, server actions, and dynamic asset streaming.",
    date: "July 2026",
    readTime: "6 min read",
    category: "Engineering",
    tags: ["React 19", "TypeScript", "Performance", "CSS Variables"],
    highlights: [
      "Server Actions and native optimistic UI transitions",
      "Direct asset and stylesheet preloading without dynamic header hacks",
      "Leveraging CSS container queries and modern standard color modules",
    ],
  },
  {
    slug: "designing-intuitive-micro-interactions",
    title: "Designing Intuitive Micro-Interactions for Modern Web Interfaces",
    excerpt:
      "How subtle animations, tactile feedback, and glassmorphic visuals transform ordinary user interfaces into captivating digital experiences.",
    date: "July 2026",
    readTime: "4 min read",
    category: "UI/UX Design",
    tags: ["GSAP", "Micro-Interactions", "Framer Motion", "Design Systems"],
    highlights: [
      "Motion with intention: guiding user focus rather than distracting",
      "Synchronizing Lenis momentum scroll with GSAP ScrollTrigger",
      "Respecting accessibility and prefers-reduced-motion preferences",
    ],
  },
];

export default function BlogArchivePage() {
  return (
    <>
      <Navbar />

      <div className="pt-36 sm:pt-44 pb-28 px-6 sm:px-12 max-w-7xl mx-auto w-full space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 font-mono text-xs text-editorial-muted">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <ArrowLeft size={13} />
            <span>RETURN HOME</span>
          </Link>
          <span>/</span>
          <span className="text-editorial-light uppercase">TECHNICAL ARTICLES</span>
        </div>

        {/* Page Header */}
        <div className="space-y-4 max-w-3xl border-b border-borderLine pb-10">
          <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-widest uppercase">
            <BookOpen size={14} />
            <span>THOUGHT LEADERSHIP & WRITING</span>
          </div>
          <h1 className="text-section-title font-display font-black text-editorial-light uppercase">
            Engineering Notes & Articles
          </h1>
          <p className="font-sans text-editorial-muted text-base leading-relaxed">
            Practical reflections on web development, system design patterns, and creative frontend engineering written by {profile.name}.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="p-8 sm:p-12 rounded-3xl border border-borderLine bg-surface/60 hover:border-borderHover transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-editorial-muted">
                  <span className="px-3 py-1 rounded-full border border-borderLine bg-void text-accent font-semibold uppercase">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      <span>{article.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      <span>{article.readTime}</span>
                    </span>
                  </div>
                </div>

                <h2 className="font-display font-black text-2xl sm:text-3xl text-editorial-light hover:text-accent transition-colors">
                  {article.title}
                </h2>

                <p className="font-sans text-sm sm:text-base text-editorial-muted leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Highlights */}
                <div className="pt-2 border-t border-borderLine/50 space-y-2">
                  <span className="font-mono text-[10px] text-editorial-dark uppercase tracking-wider font-bold">
                    CORE TAKEAWAYS:
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-editorial-light">
                    {article.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent font-mono">›</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags and Author */}
              <div className="pt-4 border-t border-borderLine/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md border border-borderLine bg-void text-editorial-muted text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-xs text-editorial-muted">
                  By {profile.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

