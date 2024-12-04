/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // For files in the `app` directory using App Router
    './src/components/**/*.{js,ts,jsx,tsx}', // For reusable components
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D1117', // Background color
        text: '#EAEAEA',       // Text color
        primary: '#00A8E1',    // Bright cyan for primary accents
        secondary: '#FF1654',  // Vivid pink for secondary highlights
        highlight: '#F9ED69',  // Soft yellow for data highlights
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],  // For futuristic headings
        roboto: ['Roboto Slab', 'serif'],      // Optional for headings or sections
        inter: ['Inter', 'sans-serif'],        // For body text
        openSans: ['Open Sans', 'sans-serif'], // Alternative body font
      },
      screens: {
        xs: '480px', // Custom breakpoint for extra small screens
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite', // Glowing effect for interactive elements
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px 2px #00A8E1' },
          '50%': { boxShadow: '0 0 20px 4px #00A8E1' },
        },
      },
    },
  },
  darkMode: 'class', // Enables class-based dark mode
  plugins: [],
};
