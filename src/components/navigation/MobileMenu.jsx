"use client";

import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { X, ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export default function MobileMenu({ isOpen, onClose, navItems, activeSection }) {
  const containerVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[200] bg-canvas/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-borderLine pb-6">
            <span className="font-display font-black text-xl tracking-tighter text-editorial-light">
              {profile.name.toUpperCase()}
            </span>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full border border-borderLine hover:border-accent text-editorial-muted hover:text-editorial-light transition-colors"
              aria-label="Close Navigation Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col space-y-4 my-auto py-8">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.div key={item.name} variants={itemVariants}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between py-2 text-editorial-light hover:text-accent transition-colors"
                  >
                    <span className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-editorial-muted group-hover:text-accent flex items-center gap-2">
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      )}
                      0{idx + 1}
                    </span>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Coordinates & Direct Links */}
          <div className="border-t border-borderLine pt-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-editorial-muted">
                <span>{profile.location.display}</span> ·{" "}
                <span className="text-emerald-400">Available for Roles</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={profile.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-borderLine text-editorial-muted hover:text-accent hover:border-accent transition-all"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={profile.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-borderLine text-editorial-muted hover:text-accent hover:border-accent transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={profile.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-borderLine text-editorial-muted hover:text-accent hover:border-accent transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageSquare size={16} />
                </a>
                <a
                  href={profile.contact.emailMailto}
                  className="p-2 rounded-full border border-borderLine text-editorial-muted hover:text-accent hover:border-accent transition-all"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            <a
              href={profile.links.resume}
              download
              className="w-full py-3 rounded-full bg-surface border border-borderLine hover:border-accent text-xs font-mono text-editorial-light hover:text-accent flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
            >
              Download Verified Resume <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

