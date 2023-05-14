/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{jsx,tsx}',
    './node_modules/@ev3/components/**/*.{jsx,tsx}',
    '../node_modules/@ev3/components/**/*.{jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        awesome: ['"Font Awesome 6 Free"']
      }
    },
  },
  plugins: []
}