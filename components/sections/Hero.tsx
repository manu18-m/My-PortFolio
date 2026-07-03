"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram, Download, Sparkles } from "lucide-react";
import { personalInfo } from "@/data";

const roles = [
  "Frontend Developer",
  "CS Engineering Student",
  "IoT Enthusiast",
  "Content Creator",
  "AIESEC Leader",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-glow/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,106,247,0.25),transparent)]" />

      {/* Ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan/10 blur-3xl pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,106,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,106,247,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 text-accent text-sm font-mono"
        >
          <Sparkles size={14} className="animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground-2 tracking-tight leading-none">
            Koona
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text tracking-tight leading-none">
            Manoj Kumar
          </h1>
        </motion.div>

        {/* Animated roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {roles.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="px-3 py-1.5 rounded-full text-sm font-mono glass border border-border-2 text-muted-2"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-muted-2 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          I build{" "}
          <span className="text-foreground font-medium">visually rich web experiences</span> and{" "}
          <span className="text-foreground font-medium">full-stack products</span> that solve real
          problems — from IoT safety wearables to modern health platforms.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-xl bg-accent hover:bg-accent-2 text-white font-medium transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <a
            href="mailto:kooonamanoj18@gmail.com"
            className="px-6 py-3 rounded-xl glass border border-border-2 text-foreground font-medium hover:border-accent/50 hover:text-accent transition-all duration-200"
          >
            Get In Touch
          </a>
          <a
            href="/Manoj_Kumar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-border-2 text-muted-2 hover:text-foreground transition-all duration-200 text-sm"
          >
            <Download size={14} />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-4"
        >
          {[
            { href: personalInfo.github, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: personalInfo.instagram, icon: Instagram, label: "Instagram" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl glass border border-border-2 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={18} />
            </a>
          ))}
          <div className="h-6 w-px bg-border-2" />
          <span className="text-xs font-mono text-muted">
            Hyderabad, India
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors group"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
