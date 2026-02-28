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
        brand: {
          navy: "#1a237e",
          blue: "#1e3a8a",
          cyan: "#29abe2",
          gold: "#f5a623",
          green: "#22c55e",
          light: "#e8f4fd",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #1a237e 0%, #29abe2 100%)",
        "gradient-gold": "linear-gradient(135deg, #f5a623 0%, #fbbf24 100%)",
        "gradient-hero": "linear-gradient(135deg, #0f0c29 0%, #1a237e 50%, #29abe2 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "brand": "0 4px 24px rgba(26, 35, 126, 0.15)",
        "gold": "0 4px 24px rgba(245, 166, 35, 0.3)",
        "card": "0 8px 32px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 16px 48px rgba(26, 35, 126, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
