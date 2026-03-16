// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // The strings here MUST match the variable names in layout.tsx
        display: ["var(--font-display)", "sans-serif"],
        bebas: ["var(--font-bebas)", "cursive"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      // ... your other config (colors, etc)
    },
  },
  plugins: [],
};
export default config;