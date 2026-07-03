"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setFormState("error");
      setErrorMsg("Something went wrong. Please email me directly.");
    }
  };

  const socials = [
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: personalInfo.email, color: "#7c6af7" },
    { href: personalInfo.github, icon: Github, label: "GitHub", color: "#e2e8f0" },
    { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", color: "#22d3ee" },
    { href: personalInfo.instagram, icon: Instagram, label: "@manuxedits18", color: "#f43f5e" },
  ];

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Let's Connect"
        title="Get In"
        highlight="Touch"
        description="Open to internships, collaborations, and interesting conversations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground-2 mb-3">
              Ready to build something?
            </h3>
            <p className="text-muted-2 text-sm leading-relaxed">
              Whether you're looking for a frontend intern, a collab partner for
              your next hackathon, or someone to bring your design vision to life
              — I'm in. Drop a message or reach out directly.
            </p>
          </div>

          <div className="space-y-3">
            {socials.map(({ href, icon: Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl glass border border-border hover:border-opacity-60 transition-all group"
                style={{ "--hover-color": color } as React.CSSProperties}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={15} style={{ color }} />
                </div>
                <span className="text-sm text-muted-2 group-hover:text-foreground transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
            <div>
              <label className="block text-xs font-mono text-muted mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about the opportunity or project..."
                className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/60 transition-colors resize-none"
              />
            </div>

            {formState === "success" && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle size={15} />
                Message sent! I'll get back to you soon.
              </div>
            )}
            {formState === "error" && (
              <div className="flex items-center gap-2 text-rose-400 text-sm">
                <AlertCircle size={15} />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={formState === "loading"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent hover:bg-accent-2 text-white font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow"
            >
              {formState === "loading" ? (
                <span className="animate-spin border-2 border-white/30 border-t-white rounded-full w-4 h-4" />
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
