/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        sfpro: ['"SF Pro"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#B3141A', // your main brand color
          light: '#FFE1D9',
          dark: '#B3141A',
        },
        secondary: {
          DEFAULT: '#4D5756',
          light: '#E8E8E8',
          dark: '#333931',
        },
        titleColor:{
            DEFAULT: '#0E2A46',
        },
        transparentGrey:{
          DEFAULT: '#2E2E2E',
        }
      },
    },
  },
  plugins: [],
};
