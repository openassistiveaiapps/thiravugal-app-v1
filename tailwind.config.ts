import type { Config } from "tailwindcss";

// Tailwind v4: primary theme (fonts, colors, shadows) lives in globals.css @theme.
// This file only provides the content scan paths.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
};

export default config;
