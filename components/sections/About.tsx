"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Camera, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech CSE",
    sub: "Malla Reddy College · CGPA 8.5",
    accent: "#7c6af7",
  },
  {
    icon: Code2,
    label: "Focus",
    value: "Frontend Dev",
    sub: "React · Next.js · TypeScript",
    accent: "#22d3ee",
  },
  {
    icon: Users,
    label: "Leadership",
    value: "AIESEC JM",
    sub: "International Relations",
    accent: "#10b981",
  },
  {
    icon: Camera,
    label: "Creative",
    value: "manuxedits18",
    sub: "Cinematic content creation",
    accent: "#f43f5e",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Who I Am"
        title="About"
        highlight="Me"
        align="left"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-4 text-muted-2 text-base leading-relaxed">
            <p>
              I'm a{" "}
              <span className="text-foreground font-medium">
                Computer Science Engineering student
              </span>{" "}
              at Malla Reddy College, Hyderabad — passionate about crafting
              visually rich frontend experiences and building full-stack products
              that solve real problems.
            </p>
            <p>
              My journey spans from building an{" "}
              <span className="text-accent font-medium">
                IoT women's safety wearable (SHE SHIELD)
              </span>{" "}
              — recognized as Best Project at SOG 2023 — to designing health
              platforms, marketplace apps, and animated portfolio experiences.
            </p>
            <p>
              Beyond code, I lead as a{" "}
              <span className="text-foreground font-medium">
                Junior Manager at AIESEC in Hyderabad
              </span>
              , coordinating international relations across global teams, and
              serve as Class Representative bridging students and faculty.
            </p>
            <p>
              When I'm not pushing commits, I'm creating cinematic video edits
              on{" "}
              <a
                href="https://www.instagram.com/manuxedits18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-2 transition-colors"
              >
                @manuxedits18
              </a>{" "}
              or competing in hackathons chasing the next big idea.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin size={14} className="text-accent" />
            <span className="font-mono">{personalInfo.location}</span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            {[
              { label: "Projects Built", value: "10+" },
              { label: "Hackathons", value: "4" },
              { label: "CGPA", value: "8.5" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                <span className="text-xs text-muted font-mono">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 hover:shadow-glow transition-all duration-300 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30` }}
              >
                <item.icon size={18} style={{ color: item.accent }} />
              </div>
              <div className="text-xs text-muted font-mono mb-1">{item.label}</div>
              <div className="text-sm font-semibold text-foreground-2">{item.value}</div>
              <div className="text-xs text-muted mt-1">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
