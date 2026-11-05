"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth counter animation
    let start = 0;
    const duration = 1200; // 1.2s total duration
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= 100) {
        setCount(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 300);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[1000] bg-[#080808] flex flex-col justify-between p-8 sm:p-14 select-none pointer-events-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-editorial-muted tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              {profile.initials} · DEVELOPER
            </span>
            <span>{profile.location.city.toUpperCase()}</span>
          </div>

          {/* Center Wordmark */}
          <div className="flex flex-col items-center justify-center my-auto space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-tighter text-editorial-light uppercase text-center"
            >
              SAMPATAKUMAR
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-mono text-xs sm:text-sm text-editorial-muted tracking-widest uppercase"
            >
              PORTFOLIO EDITION · {new Date().getFullYear()}
            </motion.p>
          </div>

          {/* Bottom Bar: Progress Indicator */}
          <div className="flex items-end justify-between border-t border-white/10 pt-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-editorial-muted uppercase tracking-wider">
                SYSTEM INITIALIZATION
              </span>
              <span className="text-xs font-mono text-editorial-light mt-0.5">
                CREATIVE ARCHITECTURE
              </span>
            </div>

            <div className="flex items-baseline gap-1 font-display font-bold text-4xl sm:text-6xl text-accent">
              <span>{count}</span>
              <span className="text-lg sm:text-2xl text-editorial-muted font-mono">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

