import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains-mono)", "monospace"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
    },
  },
};

export default config;
