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
        'lightGray': '#e0e1dd',
        'lightBlue': '#778da9'
      },
      backgroundImage: {
        'calculator': 'url("/src/assets/calc.png")',
        'call': 'url("/src/assets/call.png")',
        'instagram': 'url("/src/assets/instagram.png")',
        'facebook': 'url("/src/assets/facebook.png")',
      },
      screens: {
        'tablet': '920px'
      }
    },
  },
  plugins: [],
}

