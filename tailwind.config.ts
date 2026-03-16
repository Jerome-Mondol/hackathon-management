import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        ibm: ["var(--font-ibm-plex-mono)", "monospace"],
      },
    },
  },
};

export default config;
