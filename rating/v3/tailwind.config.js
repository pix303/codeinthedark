/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'mono': ['Source Code Pro', ...defaultTheme.fontFamily.mono]
      },
      colors:{
        purple:{
          500: '#9157D3'
        }
      },
      backgroundImage: {
        "content-image":"url('/citd-bg.png')",
      }
    },
  },
  plugins: [],
};