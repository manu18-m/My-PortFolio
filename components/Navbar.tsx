"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = ["about", "skills", "experience", "projects", "leadership", "achievements", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "glass-strong shadow-glass" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <span className="font-mono text-sm font-semibold text-foreground-2 group-hover:text-accent transition-colors">
              manoj.dev
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm rounded-lg transition-all duration-200",
                    isActive
                      ? "text-accent"
                      : "text-muted-2 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-accent-glow border border-accent/20"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
            <a
              href="mailto:kooonamanoj18@gmail.com"
              className="ml-4 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-2 transition-colors"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-muted-2 hover:text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 glass-strong border-t border-border p-6 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-3 rounded-xl text-muted-2 hover:text-foreground hover:bg-surface-2 transition-all text-sm"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:kooonamanoj18@gmail.com"
                className="mt-2 px-4 py-3 rounded-xl bg-accent text-white text-sm font-medium text-center"
                onClick={() => setMobileOpen(false)}
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
