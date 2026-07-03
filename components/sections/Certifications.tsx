"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { certifications } from "@/data";

const issuerColors: Record<string, string> = {
  "IBM SkillsBuild": "#7c6af7",
  "Cisco Networking Academy": "#22d3ee",
  "Infosys Springboard": "#10b981",
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Credentials"
        title="Certifications"
        description="Validated knowledge across AI, cloud, cybersecurity, and web development."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => {
          const color = issuerColors[cert.issuer] || "#7c6af7";
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:shadow-glow-sm transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <BadgeCheck size={16} style={{ color }} />
                </div>
                <div>
                  <p
                    className="text-xs font-mono font-semibold"
                    style={{ color }}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-foreground-2 mb-3 leading-snug">
                {cert.title}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {cert.topics.map((topic) => (
                  <Tag key={topic} variant="muted">
                    {topic}
                  </Tag>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
