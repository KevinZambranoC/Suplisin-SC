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
        'logo': 'url("/src/assets/logo.png")'
      }
    },
  },
  plugins: [],
}

