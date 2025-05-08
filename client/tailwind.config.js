/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0092e6',
        },
        secondary: {
          500: '#22262a',
          600: '#16191d',

        }
      },
    },
  },
  plugins: [],
  
}