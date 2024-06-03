/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        primary : "#16a34a",
        secondary : "#4d7c0f",
        abu : "#94a3b8",
        dark : "#0f172a"
      },
      screens : {
        '2xl' : '1320px',
      },
    },
  
  },

  plugins: [],
}
