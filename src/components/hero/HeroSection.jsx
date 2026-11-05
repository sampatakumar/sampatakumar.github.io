"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MessageSquare } from "lucide-react";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal headline lines with smooth stagger & clip
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-label",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
      )
        .fromTo(
          ".hero-line",
          { yPercent: 110, rotateZ: 2 },
          { yPercent: 0, rotateZ: 0, duration: 1.1, stagger: 0.12 },
          "-=0.5"
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.92, filter: "grayscale(100%)" },
          {
            opacity: 1,
            scale: 1,
            filter: "grayscale(20%)",
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.8"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-40 pb-12 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-accent/10 blur-[130px] pointer-events-none -z-10" />

      {/* Top Meta Line: Location & Availability */}
      <div className="hero-label flex flex-wrap items-center justify-between gap-4 border-b border-borderLine pb-4 text-xs font-mono text-editorial-muted uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>BASED IN {profile.location.display.toUpperCase()}</span>
          <span className="hidden sm:inline text-editorial-dark">·</span>
          <span className="hidden sm:inline text-editorial-dark font-mono">
            {profile.location.coordinates}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-editorial-light">{profile.headline}</span>
        </div>
      </div>

      {/* Main Hero Split: Expressive Oversized Typography & Authentic Portrait */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-10">
        
        {/* Left Column: Asymmetrical Display Typography (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold">
              I'm {profile.name}
            </span>

            <div ref={headlineRef} className="space-y-1 overflow-hidden">
              <div className="overflow-hidden">
                <h1 className="hero-line text-hero font-display font-black text-editorial-light uppercase select-none">
                  BUILDING
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-line text-hero font-display font-black text-editorial-light uppercase select-none flex items-center gap-4">
                  <span>DIGITAL</span>
                  <span className="hidden md:inline-block h-[2px] flex-1 bg-borderLine max-w-[140px]" />
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-line text-hero font-display font-black text-accent uppercase select-none">
                  EXPERIENCES.
                </h1>
              </div>
            </div>
          </div>

          {/* Intro Description */}
          <p
            ref={subtextRef}
            className="text-base sm:text-xl text-editorial-muted max-w-2xl font-sans leading-relaxed pt-2"
          >
            Full-Stack Developer exploring the intersection of creative frontend
            engineering, intelligent applications, and meaningful software.
          </p>

          {/* Action CTAs & Socials */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#work"
              className="px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-canvas font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-[0_0_30px_rgba(255,101,56,0.3)] hover:scale-105"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown size={14} />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-borderLine hover:border-accent text-editorial-light hover:text-accent font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 hover:bg-white/[0.03]"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight size={14} />
            </a>

            <div className="flex items-center gap-2 pl-2 border-l border-borderLine">
              <a
                href={profile.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-borderLine text-editorial-muted hover:text-editorial-light hover:border-accent transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-borderLine text-editorial-muted hover:text-editorial-light hover:border-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-borderLine text-editorial-muted hover:text-editorial-light hover:border-accent transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Profile Portrait & Verified HUD (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
          <div
            ref={imageRef}
            className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden border border-borderLine/80 bg-surface group"
          >
            {/* Fine Hairline Inner Border */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />

            <Image
              src={profile.assets.profilePhoto}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 280px, 320px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent z-10 opacity-70" />

            {/* Bottom HUD Overlay */}
            <div className="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-xl bg-canvas/80 backdrop-blur-md border border-borderLine">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-editorial-light font-bold">
                  {profile.name}
                </span>
                <span className="text-accent">CSE '26</span>
              </div>
              <p className="text-[10px] font-mono text-editorial-muted mt-0.5 truncate">
                {profile.education.institution}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Cue */}
      <div className="flex items-center justify-between border-t border-borderLine pt-6 text-xs font-mono text-editorial-muted uppercase tracking-wider">
        <span className="flex items-center gap-2">
          <span>01</span>
          <span className="text-editorial-dark">/</span>
          <span>12</span>
          <span className="ml-2 text-editorial-light">DISCOVER PORTFOLIO</span>
        </span>

        <a
          href="#about"
          className="flex items-center gap-2 text-editorial-muted hover:text-accent transition-colors"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown size={13} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

