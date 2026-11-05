"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { profile } from "@/data/profile";

export default function CollabModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    college: "",
    projectTitle: "",
    category: "Final Year Capstone",
    techStack: "",
    timeline: "This Semester",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.projectTitle.trim() || !form.description.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/collab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.error || "Submission could not be completed. Please reach out via WhatsApp directly.");
      }
    } catch (err) {
      // Graceful client fallback: save to localStorage
      try {
        const key = "sampatakumar_collab_offline";
        const prev = JSON.parse(localStorage.getItem(key) || "[]");
        localStorage.setItem(key, JSON.stringify([{ ...form, date: new Date().toISOString() }, ...prev]));
        setIsSuccess(true);
      } catch {
        setErrorMessage("Network issue. Please ping directly via WhatsApp!");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-canvas/80 backdrop-blur-xl -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-2xl rounded-3xl border border-borderLine bg-surface p-6 sm:p-10 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-borderLine pb-4">
              <div>
                <span className="font-mono text-xs text-accent uppercase font-bold">
                  PROJECT COLLABORATION
                </span>
                <h3 className="font-display font-black text-2xl text-editorial-light uppercase mt-1">
                  Pitch Your Project Idea
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full border border-borderLine hover:border-accent text-editorial-muted hover:text-editorial-light transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-display font-bold text-2xl text-editorial-light">
                  Proposal Received!
                </h4>
                <p className="font-sans text-xs sm:text-sm text-editorial-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-editorial-light">{form.name}</strong>! Your collaboration inquiry for <strong className="text-accent">{form.projectTitle}</strong> has been logged. I will review the architecture and reply within 24 hours.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/919380395607?text=${encodeURIComponent(
                      `Hi Sampatakumar, I just submitted a collab inquiry for "${form.projectTitle}". Let's connect!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-canvas font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
                  >
                    <MessageSquare size={14} />
                    <span>Ping on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setForm({
                        name: "",
                        contact: "",
                        college: "",
                        projectTitle: "",
                        category: "Final Year Capstone",
                        techStack: "",
                        timeline: "This Semester",
                        description: "",
                      });
                    }}
                    className="px-5 py-3 rounded-full border border-borderLine text-editorial-muted hover:text-editorial-light font-mono text-xs uppercase"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-xl border border-red-500/40 bg-red-500/10 text-red-400 font-mono text-xs flex items-center gap-2">
                    <AlertCircle size={15} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-editorial-light">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarthak or Rahul"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLine bg-void text-editorial-light text-xs font-sans outline-none focus:border-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-editorial-light">
                      Email or WhatsApp <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. rahul@gmail.com or +91..."
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLine bg-void text-editorial-light text-xs font-sans outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-editorial-light">
                      Institution / College
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 4th Year CSE"
                      value={form.college}
                      onChange={(e) => setForm({ ...form, college: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLine bg-void text-editorial-light text-xs font-sans outline-none focus:border-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-editorial-light">
                      Project Timeline
                    </label>
                    <select
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLine bg-void text-editorial-light text-xs font-sans outline-none focus:border-accent"
                    >
                      <option value="This Semester">This Semester</option>
                      <option value="Immediate / Hackathon">Immediate / Hackathon</option>
                      <option value="Next 2-3 Months">Next 2-3 Months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-editorial-light">
                    Project Title / Concept <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI-Powered Medical Diagnostic Dashboard"
                    value={form.projectTitle}
                    onChange={(e) => setForm({ ...form, projectTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-borderLine bg-void text-editorial-light text-xs font-sans outline-none focus:border-accent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-editorial-light">
                    Project Description & Expected Teammate Role <span className="text-accent">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe what you're building, what technical components are completed, and where you'd like full-stack or AI architecture assistance..."
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-borderLine bg-void text-editorial-light text-xs font-sans outline-none focus:border-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-canvas font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,101,56,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Proposal...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Submit Collaboration Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

