/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#21FFBC',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}