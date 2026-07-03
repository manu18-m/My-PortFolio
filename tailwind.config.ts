import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050508",
        surface: "#0d0d14",
        "surface-2": "#12121e",
        border: "#1e1e30",
        "border-2": "#2a2a42",
        accent: "#7c6af7",
        "accent-2": "#a78bfa",
        "accent-glow": "#7c6af740",
        cyan: "#22d3ee",
        "cyan-glow": "#22d3ee30",
        rose: "#f43f5e",
        muted: "#6b7280",
        "muted-2": "#9ca3af",
        foreground: "#e2e8f0",
        "foreground-2": "#f8fafc",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-cal)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, #7c6af740, transparent)",
        "gradient-card":
          "linear-gradient(135deg, rgba(124,106,247,0.08) 0%, rgba(34,211,238,0.04) 100%)",
        "gradient-border":
          "linear-gradient(135deg, rgba(124,106,247,0.5), rgba(34,211,238,0.3))",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 106, 247, 0.15)",
        "glow-sm": "0 0 20px rgba(124, 106, 247, 0.1)",
        "glow-cyan": "0 0 40px rgba(34, 211, 238, 0.1)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
