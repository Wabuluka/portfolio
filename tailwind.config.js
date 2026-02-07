/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 211, 238, 0.15)",
        "glow-sm": "0 0 10px rgba(34, 211, 238, 0.1)",
        "glow-accent": "0 0 20px rgba(52, 211, 153, 0.15)",
        "glow-secondary": "0 0 20px rgba(167, 139, 250, 0.15)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
        blink: "blink 1s step-end infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0891b2",
          "primary-content": "#ffffff",
          "secondary": "#7c3aed",
          "secondary-content": "#ffffff",
          "accent": "#059669",
          "accent-content": "#ffffff",
          "neutral": "#1e293b",
          "neutral-content": "#f1f5f9",
          "base-100": "#f8fafc",
          "base-200": "#f1f5f9",
          "base-300": "#e2e8f0",
          "base-content": "#0f172a",
          "info": "#0ea5e9",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      {
        dark: {
          "primary": "#22d3ee",
          "primary-content": "#021a1e",
          "secondary": "#a78bfa",
          "secondary-content": "#0f0720",
          "accent": "#34d399",
          "accent-content": "#021a10",
          "neutral": "#334155",
          "neutral-content": "#e2e8f0",
          "base-100": "#020617",
          "base-200": "#0f172a",
          "base-300": "#1e293b",
          "base-content": "#e2e8f0",
          "info": "#38bdf8",
          "success": "#4ade80",
          "warning": "#fbbf24",
          "error": "#f87171",
        },
      },
    ],
  },
};
