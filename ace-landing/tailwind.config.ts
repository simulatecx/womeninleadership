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
        navy: "#0A1A2F",
        teal: "#00A6A6",
        amber: "#FFB84D",
        slate: "#4A5A6A",
        sand: "#F5F7FA",
        mid: "#E4EAF0",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease both",
        "fadeUp-1": "fadeUp 0.7s ease 0.1s both",
        "fadeUp-2": "fadeUp 0.7s ease 0.2s both",
        "fadeUp-3": "fadeUp 0.7s ease 0.35s both",
        "fadeUp-4": "fadeUp 0.7s ease 0.5s both",
        "fadeUp-5": "fadeUp 0.7s ease 0.65s both",
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
