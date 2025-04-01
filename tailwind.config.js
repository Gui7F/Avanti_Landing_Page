 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue_clear : "#005CFF",
        blue_clear_hover : "#004ECC",
        discount_color: "#5EC0BE",
        newproduct_color_tag: "#00264E",
        gray_clear: "#DEDEDE",
      },

      fontFamily:{
        nunito : ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
}
