"use client";

import { motion } from "framer-motion";
import { Globe, BookOpen, Star, Video } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const leadershipItems = [
  {
    icon: Globe,
    title: "AIESEC Junior Manager",
    org: "AIESEC in Hyderabad",
    period: "Feb 2025 – Jan 2026",
    description:
      "Led International Relations activities within AIESEC — the world's largest youth-run organization present in 126 countries. Coordinated cross-cultural communication, facilitated global exchange programs, and connected students to international professional opportunities.",
    color: "#7c6af7",
    tag: "International Leadership",
  },
  {
    icon: BookOpen,
    title: "Class Representative",
    org: "Malla Reddy College of Engineering",
    period: "2024 – Present",
    description:
      "Elected as the primary liaison between 60+ students and the faculty body. Organized academic events, managed scheduling conflicts, facilitated institutional announcements, and developed conflict-resolution and organizational skills through active class governance.",
    color: "#22d3ee",
    tag: "Student Leadership",
  },
  {
    icon: Star,
    title: "Technical Event Coordinator",
    org: "Visista 2K25 & Visista 2K26",
    period: "2025 – 2026",
    description:
      "Coordinated Paper Presentation and Tech Escape Room events at the college's annual technical festival across two consecutive years. Managed participant logistics, judging panels, and event scheduling while leading a volunteer team for seamless execution.",
    color: "#f59e0b",
    tag: "Event Management",
  },
  {
    icon: Video,
    title: "Content Creator",
    org: "@manuxedits18 — Instagram",
    period: "Ongoing",
    description:
      "Running a cinematic video editing page focused on high-quality visual storytelling. Combines technical editing skills with creative direction to produce engaging short-form content — bridging the gap between design sensibility and technical execution.",
    color: "#f43f5e",
    tag: "Creative Direction",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Beyond Code"
        title="Leadership &"
        highlight="Impact"
        description="Driving change through teamwork, events, and cross-cultural collaboration."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group relative overflow-hidden"
          >
            {/* Subtle background accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ background: item.color }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{
                    background: `${item.color}12`,
                    color: item.color,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <h3 className="font-semibold text-foreground-2 mb-1">{item.title}</h3>
              <p style={{ color: item.color }} className="text-sm font-medium mb-1">
                {item.org}
              </p>
              <p className="text-xs font-mono text-muted mb-4">{item.period}</p>
              <p className="text-sm text-muted-2 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
