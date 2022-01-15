module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "tablet":"751px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
