"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] h-[2px] bg-gradient-to-r from-accent via-purple-400 to-cyan origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}
