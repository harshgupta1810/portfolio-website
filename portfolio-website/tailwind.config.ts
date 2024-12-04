import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D1117', // Background color
        text: '#EAEAEA',      // Text color
        primary: '#00A8E1',   // Primary accent color
        secondary: '#FF1654', // Secondary accent color
        highlight: '#F9ED69', // Data highlight color
      },
      fontFamily: {
        heading: ['Orbitron', 'Roboto Slab', 'sans-serif'], // Heading fonts
        body: ['Inter', 'Open Sans', 'sans-serif'],         // Body fonts
      },
    },
  },
  plugins: [],
} satisfies Config;
