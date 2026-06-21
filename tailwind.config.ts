import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "e2i-dark": "#13233c",
        "e2i-darker": "#0a1220",
        "e2i-accent": "#00f5d4",
        "e2i-blue": "#3b82f6",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-in-up": "fade-in-up 300ms ease-out forwards",
        "ambient-pulse": "ambient-pulse 12s ease-in-out infinite",
        "ambient-drift": "ambient-drift 20s ease-in-out infinite",
        "ambient-orbit": "ambient-orbit 24s ease-in-out infinite",
        "bg-drift": "bg-drift 30s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ambient-pulse": {
          "0%, 100%": { transform: "scale(1) translate(0, 0)", opacity: "0.75" },
          "50%": { transform: "scale(1.3) translate(40px, -30px)", opacity: "1" },
        },
        "ambient-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(80px, -60px) scale(1.15)" },
          "66%": { transform: "translate(-60px, 50px) scale(1.08)" },
        },
        "ambient-orbit": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.8" },
          "25%": { transform: "translate(120px, -90px) scale(1.2)", opacity: "1" },
          "50%": { transform: "translate(40px, 80px) scale(1.25)", opacity: "0.9" },
          "75%": { transform: "translate(-100px, -40px) scale(1.12)", opacity: "1" },
        },
        "bg-drift": {
          "0%, 100%": { backgroundPosition: "0% 50%, 100% 50%, 50% 100%, 30% 0%" },
          "25%": { backgroundPosition: "100% 0%, 0% 100%, 80% 20%, 70% 80%" },
          "50%": { backgroundPosition: "50% 100%, 50% 0%, 20% 80%, 100% 30%" },
          "75%": { backgroundPosition: "0% 100%, 100% 0%, 60% 40%, 10% 60%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
