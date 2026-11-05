import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 sm:p-14 bg-canvas text-editorial-light selection:bg-accent selection:text-canvas">
      {/* Top Coordinate */}
      <div className="flex items-center justify-between text-xs font-mono text-editorial-muted tracking-widest uppercase border-b border-borderLine pb-6">
        <span>SAMPATAKUMAR V</span>
        <span className="text-accent">ERROR 404</span>
      </div>

      {/* Center 404 Content */}
      <div className="my-auto max-w-xl mx-auto text-center space-y-6 py-12">
        <div className="w-16 h-16 rounded-full bg-surface border border-borderLine text-accent mx-auto flex items-center justify-center">
          <Compass size={32} />
        </div>

        <div className="space-y-2">
          <h1 className="font-display font-black text-6xl sm:text-8xl tracking-tight text-editorial-light">
            404
          </h1>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-accent uppercase tracking-wider">
            Page Not Found
          </h2>
        </div>

        <p className="font-sans text-xs sm:text-sm text-editorial-muted leading-relaxed">
          The requested coordinate or project resource does not exist or may have been moved.
          Return to the home portfolio to explore projects, case studies, and engineering achievements.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-canvas font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,101,56,0.3)]"
          >
            <ArrowLeft size={14} />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            href="/projects"
            className="px-6 py-3 rounded-full border border-borderLine hover:border-editorial-light text-editorial-light font-mono text-xs uppercase tracking-wider transition-all"
          >
            Explore Projects
          </Link>
        </div>
      </div>

      {/* Bottom Footer Coordinate */}
      <div className="flex items-center justify-between text-[11px] font-mono text-editorial-muted border-t border-borderLine pt-6">
        <span>BENGALURU, INDIA</span>
        <span>SAMPATAKUMAR.GITHUB.IO</span>
      </div>
    </div>
  );
}

