/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blue:{
        950:"#33bfb8",
        200:"#8094ad",
        500:"#19406a",
        700:"#002b5b",
        900:"#00274e"
      },
      green:{
        400:"#3de5dc"
      }
    },
  },
  plugins: [],
}