import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        base: "#0A0A0A",
        surface: "#141414",
        // Text
        heading: "#F5F5F5",
        muted: "#A1A1A1",
        // Accent — swap this one token to retheme the whole site
        accent: "var(--accent)",
        // Borders
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-clash)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      lineHeight: {
        display: "0.95",
      },
    },
  },
  plugins: [],
};
export default config;
