"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { experiences } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Work & Leadership"
        title="Experience"
        description="Roles that sharpened my technical thinking and leadership instincts."
        align="left"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex gap-6 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-6 w-9 h-9 rounded-full glass border border-accent/30 items-center justify-center flex-shrink-0">
                {exp.type === "work" ? (
                  <Briefcase size={14} className="text-accent" />
                ) : (
                  <Users size={14} className="text-cyan" />
                )}
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 w-full hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground-2 text-base">{exp.role}</h3>
                    <p className="text-accent text-sm font-medium mt-0.5">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted font-mono whitespace-nowrap">
                    <Calendar size={11} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-2">
                      <span className="text-accent mt-1.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <Tag key={skill} variant="accent">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
