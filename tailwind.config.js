/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgBackgrund: "#2D3250",
        bgPrimary: "#424769",
        bgSecoundary: "#7077A1",
        highLighted: "#F6B17A",
      },
      fontFamily: {
        Rubik: "Rubik",
      },
    },
  },
  plugins: [],
};
