import type { Config } from "tailwindcss";

// In Tailwind v4, most tokens are defined in CSS via @theme.
// This file only needs content paths.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
