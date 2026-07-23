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
        cream: "#FCFAFF",
        plum: {
          DEFAULT: "#3B1F55",
          soft: "#5B3B7A",
        },
        lavender: {
          DEFAULT: "#A78BFA",
          light: "#C4B5FD",
        },
        rose: {
          DEFAULT: "#EC4899",
          light: "#F9A8D4",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C170",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(91, 59, 122, 0.25)",
        glow: "0 0 40px -5px rgba(167, 139, 250, 0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
