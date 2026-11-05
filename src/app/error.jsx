"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-surface border border-borderLine text-accent flex items-center justify-center">
        <AlertTriangle size={28} />
      </div>

      <div className="space-y-2 max-w-md">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-editorial-light uppercase">
          Something went wrong
        </h2>
        <p className="font-sans text-xs sm:text-sm text-editorial-muted leading-relaxed">
          An unexpected error occurred while rendering this route.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-canvas font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,101,56,0.3)]"
        >
          <RefreshCw size={13} />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="px-6 py-3 rounded-full border border-borderLine hover:border-editorial-light text-editorial-light font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
        >
          <ArrowLeft size={13} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

