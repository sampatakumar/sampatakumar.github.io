/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "#080808",
        void: "#111111",
        surface: "#171717",
        surfaceHover: "#1f1f1f",
        editorial: {
          light: "#F5F3EF",
          muted: "#999999",
          dark: "#666666",
        },
        accent: {
          DEFAULT: "#FF6538",
          hover: "#ff7b54",
          glow: "rgba(255, 101, 56, 0.25)",
        },
        borderLine: "rgba(255, 255, 255, 0.12)",
        borderHover: "rgba(255, 255, 255, 0.28)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};

