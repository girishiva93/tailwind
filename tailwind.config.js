const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'comf':['Comfortaa', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
