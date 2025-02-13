import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#efefe8',
        foreground: '#2d2c2f',
      },
      fontFamily: {
        header: ['Trade Winds', 'sans-serif'], // Add Trade Winds for header title
        body: ['Tillana', 'serif'], // Add Tillana for general text
      },
    },
  },
  plugins: [],
} satisfies Config;
