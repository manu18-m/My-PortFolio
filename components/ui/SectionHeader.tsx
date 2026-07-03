"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("flex flex-col gap-3 mb-16", alignClass, className)}
    >
      <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-accent">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-2 leading-tight">
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {description && (
        <p className="text-muted-2 text-base md:text-lg max-w-2xl leading-relaxed mt-2">
          {description}
        </p>
      )}
    </motion.div>
  );
}
