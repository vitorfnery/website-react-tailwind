/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night-black': '#000300',
        'caribbean-green': '#00df9a',
      }
    },
  },
  plugins: [],
}

