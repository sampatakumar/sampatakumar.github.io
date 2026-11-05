"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import CollabModal from "./CollabModal";
import {
  Mail,
  Copy,
  Check,
  MessageSquare,
  Phone,
  Linkedin,
  Github,
  ArrowUpRight,
  FileText,
  Briefcase,
  Users,
} from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [collabModalOpen, setCollabModalOpen] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2800);
  };

  return (
    <>
      <section
        id="contact"
        className="relative py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-borderLine overflow-hidden"
      >
        {/* Glow Element */}
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-accent/[0.08] blur-[150px] pointer-events-none -z-10" />

        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-accent tracking-widest uppercase mb-8">
          <span>07</span>
          <span className="text-editorial-muted">/</span>
          <span>GET IN TOUCH</span>
        </div>

        {/* Big Editorial Headline */}
        <div className="space-y-6 max-w-4xl mb-16">
          <h2 className="text-hero font-display font-black text-editorial-light uppercase select-none leading-[0.95]">
            Have an idea?<br />
            <span className="text-accent">Let's build something</span><br />
            meaningful.
          </h2>

          <p className="font-sans text-base sm:text-xl text-editorial-muted max-w-2xl leading-relaxed">
            Whether you are looking for a dedicated full-stack engineer, discussing a student capstone collaboration, or exploring AI systems architecture, my inbox is open.
          </p>
        </div>

        {/* Contact Grid: Actions, Direct Channels & Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Action Hub (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Email Card with 1-Click Copy */}
            <div className="p-6 sm:p-8 rounded-3xl border border-borderLine bg-surface/80 hover:border-borderHover transition-all space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-editorial-muted border-b border-borderLine pb-3">
                <span className="flex items-center gap-2">
                  <Mail size={14} className="text-accent" />
                  <span>DIRECT INBOX</span>
                </span>
                <span className="text-editorial-dark font-mono">PREFERRED</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <a
                  href={profile.contact.emailMailto}
                  className="font-display font-bold text-xl sm:text-2xl text-editorial-light hover:text-accent transition-colors break-all"
                >
                  {profile.contact.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-full border border-borderLine hover:border-accent text-editorial-light hover:text-accent font-mono text-xs uppercase flex items-center justify-center gap-2 transition-all hover:bg-white/[0.04] shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Collaboration & WhatsApp Quick Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* WhatsApp Quick Message */}
              <a
                href={profile.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-3xl border border-borderLine bg-surface/60 hover:border-accent/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <MessageSquare size={18} />
                  </div>
                  <ArrowUpRight size={14} className="text-editorial-muted group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-editorial-light group-hover:text-accent transition-colors">
                    WhatsApp Chat
                  </h4>
                  <p className="font-mono text-xs text-editorial-muted mt-0.5">
                    {profile.contact.whatsappDisplay}
                  </p>
                </div>
              </a>

              {/* Pitch Project Collab Button */}
              <button
                onClick={() => setCollabModalOpen(true)}
                className="group p-6 rounded-3xl border border-borderLine bg-surface/60 hover:border-accent/40 transition-all flex flex-col justify-between space-y-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <Users size={18} />
                  </div>
                  <ArrowUpRight size={14} className="text-editorial-muted group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-editorial-light group-hover:text-accent transition-colors">
                    Student Collaboration
                  </h4>
                  <p className="font-mono text-xs text-editorial-muted mt-0.5">
                    Pitch a capstone / hackathon project
                  </p>
                </div>
              </button>

            </div>

          </div>

          {/* Right Column: Verified Professional Assets & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-3xl border border-borderLine bg-surface/60 space-y-4">
              <span className="font-mono text-xs text-editorial-muted uppercase tracking-wider font-semibold">
                Verified Channels & Profiles
              </span>

              <div className="space-y-2 font-mono text-xs">
                {/* LinkedIn */}
                <a
                  href={profile.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-borderLine/70 bg-void/40 hover:border-editorial-light text-editorial-light transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <Linkedin size={15} className="text-accent" />
                    <span>LinkedIn</span>
                  </span>
                  <span className="text-editorial-muted flex items-center gap-1">
                    <span>{profile.socials.linkedin.username}</span>
                    <ArrowUpRight size={12} />
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={profile.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-borderLine/70 bg-void/40 hover:border-editorial-light text-editorial-light transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <Github size={15} className="text-accent" />
                    <span>GitHub</span>
                  </span>
                  <span className="text-editorial-muted flex items-center gap-1">
                    <span>{profile.socials.github.username}</span>
                    <ArrowUpRight size={12} />
                  </span>
                </a>

                {/* Direct Phone */}
                <a
                  href={profile.contact.phoneTel}
                  className="flex items-center justify-between p-3 rounded-xl border border-borderLine/70 bg-void/40 hover:border-editorial-light text-editorial-light transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <Phone size={15} className="text-accent" />
                    <span>Phone</span>
                  </span>
                  <span className="text-editorial-muted flex items-center gap-1">
                    <span>{profile.contact.phone}</span>
                    <ArrowUpRight size={12} />
                  </span>
                </a>

                {/* Professional Services */}
                <a
                  href={profile.links.services}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-borderLine/70 bg-void/40 hover:border-editorial-light text-editorial-light transition-all"
                >
                  <span className="flex items-center gap-2.5">
                    <Briefcase size={15} className="text-accent" />
                    <span>Services ({profile.links.agencyName})</span>
                  </span>
                  <span className="text-editorial-muted flex items-center gap-1">
                    <span>Full-Stack & SEO</span>
                    <ArrowUpRight size={12} />
                  </span>
                </a>
              </div>
            </div>

            {/* Resume Download CTA */}
            <a
              href={profile.links.resume}
              download
              className="w-full p-4 rounded-2xl border border-accent/40 bg-accent/10 hover:bg-accent text-accent hover:text-canvas font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,101,56,0.2)]"
            >
              <FileText size={15} />
              <span>Download Verified Resume (PDF)</span>
            </a>

          </div>

        </div>
      </section>

      {/* Collaboration Pitch Form Modal */}
      <CollabModal
        isOpen={collabModalOpen}
        onClose={() => setCollabModalOpen(false)}
      />
    </>
  );
}

