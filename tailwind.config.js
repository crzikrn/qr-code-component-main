/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
   
    extend: {
      colors: {
        primary: '#1F314F',
        secondary: '#7D889E',
      },
      fontSize:{
        base: '15.5px'
      }
    },
  },
  plugins: [],
}

