/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blue:{
        800:"#18395f",
        900:"#00274e"
      },
      green:{
        500:"#3cdbc7"
      }
    },
  },
  plugins: [],
}