/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image' : "url('/public/images/home/desktop/image-hero.jpg')",
        'pattern-circles' : "url('/public/images/home/desktop/pattern-circles.svg')"
      }
    },
  },
  plugins: [],
}

