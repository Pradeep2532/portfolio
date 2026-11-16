import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "page-bg": "#F8F9FC",
        "card-bg": "#FFFFFF",
        "border-subtle": "#E8EAF0",
        "text-primary": "#202033",
        "text-secondary": "#73738A",
        "accent-purple": "#7C3AED",
        "accent-purple-dark": "#6D28D9",
        "accent-sky": "#38BDF8",
        "accent-sky-dark": "#0284C7",
        "pastel-lavender": "#EDE9FE",
        "pastel-lavender-subtle": "#F5F3FF",
        "pastel-blue": "#E0F2FE",
        "pastel-peach": "#FFE4D6",
        "pastel-mint": "#DCFCE7",
      },
      fontFamily: {
        headline: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        "subtle-card": "0 10px 30px -5px rgba(124, 58, 237, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        "elevated-card": "0 20px 40px -10px rgba(124, 58, 237, 0.08), 0 8px 16px -4px rgba(0, 0, 0, 0.04)",
        "purple-glow": "0 10px 25px -5px rgba(124, 58, 237, 0.35)",
        "glass-float": "0 12px 32px 0 rgba(31, 38, 135, 0.07)",
      },
    },
  },
  plugins: [],
};
export default config;
