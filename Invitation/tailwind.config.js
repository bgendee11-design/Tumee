/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // bg-invitation-д зориулсан урилгын зөөлөн цайвар өнгө
        invitation: '#fcf9f5', 
      },
      fontFamily: {
        // font-script-д зориулсан гоёмсог гар бичмэл фонт
        script: ['"Great Vibes"', 'cursive', 'serif'],
      },
    },
  },
  plugins: [],
};
