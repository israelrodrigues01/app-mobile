import colors from './src/styles/colors';
import fontFamily from './src/styles/font-family';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily
    },
  },
  plugins: [],
}

