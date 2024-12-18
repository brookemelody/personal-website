import type { Config } from "tailwindcss";

// export default {
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        loadContent: {
            '0%': { 
              opacity: '0',
              transform: 'translate(0, 60)', /* Load in from bottom (negative y axis) */
            },
            '100%': { 
              opacity: '1',
              transform: 'translate(0, 0)',
            },
        },
        loadFromLeft: {
            '0%': {
              opacity: '0',
              transform: 'translate(-90, 0)',              
            },
            '100%': {
              opacity: '1',
              transform: 'translate(0, 0)',
            }
        }
      },
      animation: {
        "loadContent": "loadContent 1s ease-in-out",
        "loadFromLeft": "loadFromLeft 1s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
