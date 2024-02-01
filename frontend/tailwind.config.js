/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
      comfortaa: "Comfortaa, sans-serif",
    },
    colors: {
      negro: "#222420",
      gris: "#F4F4F4",
      beige: "#E9D1BE",
      violeta: "#BE77DD",
      verdeClaro: "#ADC92E",
      verdeOscuro: "#8AA361",
    },
    backgroundImage: {
      "hero-pattern":
        "url('https://media.adeo.com/media/2388652/media.jpeg?precrop=4838,2722,x0,y0&width=800&quality=75')",
    },
    extend: {},
  },
  plugins: [],
});
