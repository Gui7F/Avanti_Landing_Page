 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue_clear : "#005CFF",
      },

      fontFamily:{
        nunito : ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
}
