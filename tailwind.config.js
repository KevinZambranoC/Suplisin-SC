/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#1b263b',
      },
      backgroundImage: {
        'calculator': 'url("/src/assets/calc.png")'
      },
      screens: {
        'tablet': '920px'
      }
    },
  },
  plugins: [],
}

