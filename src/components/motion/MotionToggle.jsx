"use client";

import { useEffect, useState } from "react";
import { Sparkles, EyeOff } from "lucide-react";

export default function MotionToggle() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sampatakumar_motion_preference");
    if (saved !== null) {
      const isReduced = saved === "reduced";
      setReducedMotion(isReduced);
      document.documentElement.classList.toggle("reduced-motion", isReduced);
    } else {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      setReducedMotion(prefersReduced);
    }
  }, []);

  const toggleMotion = () => {
    const nextState = !reducedMotion;
    setReducedMotion(nextState);
    localStorage.setItem(
      "sampatakumar_motion_preference",
      nextState ? "reduced" : "full"
    );
    document.documentElement.classList.toggle("reduced-motion", nextState);
  };

  return (
    <button
      onClick={toggleMotion}
      title={reducedMotion ? "Enable full cinematic animations" : "Reduce motion for comfort"}
      className="fixed bottom-6 right-6 z-[140] p-3 rounded-full border border-borderLine bg-surface/80 backdrop-blur-md text-editorial-muted hover:text-accent hover:border-accent transition-all shadow-lg"
      aria-label="Toggle motion preference"
    >
      {reducedMotion ? <EyeOff size={15} /> : <Sparkles size={15} />}
    </button>
  );
}

