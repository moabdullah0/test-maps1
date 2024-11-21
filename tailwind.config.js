/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'bgServices': "url('/src/img/bgServices.svg')",
      }
    },
  },
  plugins: [],
}

