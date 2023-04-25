/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nintendo': ['"Press Start 2P"', 'cursive'],
         'sans': ['Helvetica', 'sans-serif'],
      },
      colors: {
        'accent': '#21FFBC',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}