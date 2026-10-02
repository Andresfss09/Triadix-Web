import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        surface: "#0a0a0a",
        line: "rgba(255,255,255,0.1)",
        paper: "#ffffff",
        dim: "#888888",
        dev: "#ffffff",
        sec: "#ffffff",
        ai: "#ffffff",
      },
      fontFamily: {
        display: ["'Geist'", "sans-serif"],
        body: ["'Geist'", "sans-serif"],
        mono: ["'Geist Mono'", "monospace"],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.04em',
        widest: '0.1em',
        ferrari: '4px',
      },
      boxShadow: {
        'geist-border': 'rgba(255,255,255,0.15) 0 0 0 1px',
        'geist-card': 'rgba(255,255,255,0.1) 0 0 0 1px, rgba(0,0,0,0.5) 0 2px 4px, rgba(0,0,0,0.5) 0 12px 24px -12px, rgba(255,255,255,0.05) 0 0 0 1px inset',
      }
    },
  },
  plugins: [],
} satisfies Config;
