/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-bottom': 'inset 0px -50px 50px -25px rgba(0, 0, 0, 0.3)',
      },
      fontFamily:{
        roboto:['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}