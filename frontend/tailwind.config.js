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
      "gallery-1":
        "https://verdecora.es/blog/wp-content/uploads/2016/01/diseno-de-jardines.jpg.webp",
      "gallery-2":
        "https://blog.aepla.es/wp-content/uploads/2022/08/que-son-jardines-tropicales.jpeg",
      "gallery-3":
        "https://images.homify.com/v1456335871/p/photo/image/1354543/jardines-paisajismo-y-decoraciones-elyflor-753311-MLV20534579928_012016-F.jpg",
      "gallery-4": "https://i.ytimg.com/vi/pJ_s4QMQoNE/maxresdefault.jpg",
      "gallery-5":
        "https://jardinable.es/wp-content/uploads/2020/08/jardinable-dise%C3%B1o-jardines-2.jpg",
    },
    extend: {},
  },
  plugins: [],
});
