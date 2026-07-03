"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Cpu,
  Zap,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { projects } from "@/data";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass rounded-3xl overflow-hidden"
    >
      {/* Header gradient strip */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace("/20", "").replace("/10", "").replace("/5", "")}`}
        style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }}
      />

      <div className="p-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{
                  background: `${project.accent}18`,
                  color: project.accent,
                  border: `1px solid ${project.accent}30`,
                }}
              >
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground-2 tracking-tight">
              {project.title}
            </h3>
            <p className="text-muted font-mono text-sm mt-1">{project.tagline}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-border-2 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass border border-border-2 flex items-center justify-center text-muted hover:text-cyan hover:border-cyan/40 transition-all"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-2 text-base leading-relaxed mb-6">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <Tag key={tech} variant="muted">
              {tech}
            </Tag>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-2 transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp size={16} />
              Collapse Case Study
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              View Full Case Study
            </>
          )}
        </button>

        {/* Case Study Expanded */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 space-y-8 border-t border-border mt-6">
                {/* Problem */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb size={14} className="text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-2 mb-2 font-mono uppercase tracking-wider">
                      The Problem
                    </h4>
                    <p className="text-muted-2 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu size={14} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-2 mb-2 font-mono uppercase tracking-wider">
                      The Solution
                    </h4>
                    <p className="text-muted-2 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-glow border border-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap size={14} className="text-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground-2 mb-3 font-mono uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-2">
                          <CheckCircle2
                            size={14}
                            className="text-cyan flex-shrink-0 mt-0.5"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact */}
                <div className="rounded-2xl p-5 border border-accent/20 bg-accent-glow">
                  <h4 className="text-sm font-semibold text-accent mb-3 font-mono uppercase tracking-wider">
                    Impact & Recognition
                  </h4>
                  <ul className="space-y-1.5">
                    {project.impact.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-2">
                        <span className="text-accent mt-1 flex-shrink-0">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="What I've Built"
        title="Featured"
        highlight="Projects"
        description="Real products solving real problems — from hardware wearables to web platforms."
      />

      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* More projects note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/koonmanoj18"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-border-2 text-muted-2 hover:text-accent hover:border-accent/40 transition-all text-sm font-medium"
        >
          <Github size={16} />
          More on GitHub
        </a>
      </motion.div>
    </section>
  );
}
