"use client";

import { motion } from "framer-motion";
import { Code2, Monitor, Server, Cpu, Wrench } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Monitor,
  Server,
  Cpu,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Capabilities"
        title="Technical"
        highlight="Skills"
        description="A full-stack developer toolbox — from system design to pixel-perfect UI."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skills.map((skillGroup, groupIndex) => {
          const Icon = iconMap[skillGroup.icon] || Code2;
          return (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-accent-glow border border-accent/20 flex items-center justify-center">
                  <Icon size={16} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground font-mono">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-muted-2">{skill.name}</span>
                      <span className="text-xs font-mono text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: groupIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-cyan"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tech tags cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 flex flex-wrap gap-2 justify-center"
      >
        {[
          "React", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion",
          "Node.js", "Firebase", "Git", "Python", "MySQL", "REST APIs",
          "IoT", "Embedded Systems", "Postman", "Vercel", "Netlify",
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 rounded-full text-xs font-mono glass border border-border-2 text-muted-2 hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
