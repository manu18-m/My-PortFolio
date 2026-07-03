"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Zap, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { achievements } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Medal,
  Zap,
  GraduationCap,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Recognition"
        title="Achievements"
        description="Milestones earned through building, competing, and leading."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, i) => {
          const Icon = iconMap[achievement.icon] || Trophy;
          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-5 items-start hover:shadow-glow transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${achievement.accent}18`,
                  border: `1px solid ${achievement.accent}30`,
                }}
              >
                <Icon size={22} style={{ color: achievement.accent }} />
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground-2 text-base mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-2 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
