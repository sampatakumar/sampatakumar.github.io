"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#080808] text-[#F5F3EF] flex flex-col justify-between p-8 sm:p-14 font-sans selection:bg-[#FF6538] selection:text-[#080808]">
        {/* Top Header */}
        <div className="flex items-center justify-between text-xs font-mono text-[#999999] tracking-widest uppercase border-b border-white/10 pb-6">
          <span>SAMPATAKUMAR V</span>
          <span className="text-[#FF6538]">GLOBAL ERROR CATCHER</span>
        </div>

        {/* Center Content */}
        <div className="my-auto max-w-lg mx-auto text-center space-y-6 py-12">
          <div className="w-14 h-14 rounded-full bg-[#171717] border border-white/10 text-[#FF6538] mx-auto flex items-center justify-center font-mono font-bold text-xl">
            !
          </div>

          <div className="space-y-2">
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#F5F3EF] uppercase tracking-tight">
              Application Encountered An Issue
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#999999] leading-relaxed">
              A temporary runtime condition interrupted the interface rendering.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => reset()}
              className="px-6 py-3 rounded-full bg-[#FF6538] hover:bg-[#ff7b54] text-[#080808] font-mono font-bold text-xs uppercase tracking-wider transition-all"
            >
              Reset Interface
            </button>
            <a
              href="/"
              className="px-6 py-3 rounded-full border border-white/15 hover:border-white/40 text-[#F5F3EF] font-mono text-xs uppercase tracking-wider transition-all"
            >
              Reload Home
            </a>
          </div>
        </div>

        {/* Bottom Coordinates */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#666666] border-t border-white/10 pt-6">
          <span>BENGALURU, INDIA</span>
          <span>SAMPATAKUMAR.GITHUB.IO</span>
        </div>
      </body>
    </html>
  );
}

