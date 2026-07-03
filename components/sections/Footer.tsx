"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { personalInfo, navItems } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <span className="font-mono text-sm font-semibold text-foreground-2">
                Manoj Kumar
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed max-w-xs">
              Frontend developer & CS student from Hyderabad. Building digital
              experiences that matter.
            </p>
            <div className="flex gap-3">
              {[
                { href: personalInfo.github, icon: Github },
                { href: personalInfo.linkedin, icon: Linkedin },
                { href: personalInfo.instagram, icon: Instagram },
                { href: `mailto:${personalInfo.email}`, icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg glass border border-border-2 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-muted uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    const id = item.href.replace("#", "");
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-left text-sm text-muted hover:text-accent transition-colors w-fit"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-muted uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-sm text-muted hover:text-accent transition-colors"
              >
                {personalInfo.email}
              </a>
              <p className="text-sm text-muted">{personalInfo.phone}</p>
              <p className="text-sm text-muted">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} Koona Manoj Kumar. Crafted with Next.js & Framer Motion.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors font-mono"
          >
            Back to top
            <ArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
