/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        concrete: '#C5BAAA',
        craft: '#806E61',
        bright: '#EE7828', // bright brick
        graphite: '#2C2C2C',
        'slate-dark': '#0C0C0E',
        'surface-dark': '#1A1A1D',
        'theme-olive': '#3D4333',
        'theme-orange': '#E2873E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        slab: ['"Zilla Slab"', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'brick': '0 0 20px rgba(238, 120, 40, 0.3)',
      }
    },
  },
  plugins: [],
}
