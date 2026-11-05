"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import MobileMenu from "./MobileMenu";
import { Menu, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "STACK", href: "#stack" },
  { name: "JOURNEY", href: "#journey" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle backdrop blur background on scroll
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.href.replace("#", ""))
      ).filter(Boolean);

      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[150] transition-all duration-300 ${
          isScrolled
            ? "bg-canvas/80 backdrop-blur-md border-b border-borderLine py-4"
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Left Brand Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-3 font-display font-extrabold text-lg sm:text-xl tracking-tight text-editorial-light hover:text-accent transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
            <span>{profile.name.toUpperCase()}</span>
          </a>

          {/* Center / Right Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1 p-1 rounded-full border border-borderLine/70 bg-void/60 backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-canvas font-bold bg-editorial-light shadow-[0_0_15px_rgba(245,243,239,0.3)]"
                        : "text-editorial-muted hover:text-editorial-light hover:bg-white/[0.04]"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Availability Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[11px] tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>AVAILABLE</span>
            </div>

            {/* Resume CTA */}
            <a
              href={profile.links.resume}
              download
              className="px-4 py-2 rounded-full border border-accent/40 bg-accent/10 hover:bg-accent text-accent hover:text-canvas text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-1.5"
            >
              <span>RESUME</span>
              <ArrowUpRight size={13} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-full border border-borderLine bg-void/80 text-editorial-light hover:border-accent hover:text-accent transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
}

