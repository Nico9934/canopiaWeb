import React from "react";
import SliderCarousel from "./SliderCarousel.jsx";

const ServicesGallery = () => {
  return (
    <div className="w-full h-screen font-comfortaa">
      <div className="w-11/12 h-full m-auto flex flex-col-reverse sm:flex-row py-12 sm:py-16 gap-4">
        {/* Grid desktop*/}
        <div className="grid w-full sm:w-1/2 h-1/2 sm:h-full object-cover grid-cols-7 grid-rows-9 gap-4">
          <div className="col-span-2 row-span-6 bg-cover bg-[url('https://verdecora.es/blog/wp-content/uploads/2016/01/diseno-de-jardines.jpg.webp')]"></div>
          <div className="col-span-5 row-span-4 col-start-3 bg-cover bg-[url('https://blog.aepla.es/wp-content/uploads/2022/08/que-son-jardines-tropicales.jpeg')]"></div>
          <div className="col-span-3 row-span-5 col-start-3 row-start-5 bg-cover bg-[url('https://images.homify.com/v1456335871/p/photo/image/1354543/jardines-paisajismo-y-decoraciones-elyflor-753311-MLV20534579928_012016-F.jpg')]"></div>
          <div className="col-span-2 row-span-5 col-start-6 row-start-5 bg-cover bg-[url('https://i.ytimg.com/vi/pJ_s4QMQoNE/maxresdefault.jpg')] "></div>
          <div className="col-span-2 row-span-3 row-start-7 bg-cover bg-[url('https://jardinable.es/wp-content/uploads/2020/08/jardinable-dise%C3%B1o-jardines-2.jpg')]"></div>
        </div>
        {/* Gallery mobile */}
        {/* <SliderCarousel /> */}
        {/* Description */}
        <div className="max-h-1/2 sm:h-full sm:w-1/2 flex flex-col sm:items-end sm:justify-center">
          <h3 className="mb-6 text-2xl sm:text-4xl border-b-8 pb-4 border-violeta w-fit sm:text-end">
            ¿Qué ofrecemos?
          </h3>
          <p className="text-sm sm:text-xl sm:text-end">
            Personalizamos a demanda del cliente espacios verdes con diseño
            paisajístico donde se prioriza la salud vegetal y su desarrollo
            sostenible. Ofrecemos soluciones de calidad, que respetan un proceso
            de diagnóstico, puesta en marcha y evaluación final. Realizamos el
            análisis indicadores propios del clima y del suelo respondiendo a
            los factores internos y externos de cada ecosistema.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesGallery;

// return (
//   <div className="w-full max-h-screen justify-center flex bg-verdeOscuro py-16">
//     <div className="w-11/12 flex items-center">
//       <div className="h-screen sm:min-h-96 flex flex-col-reverse sm:flex-row justify-around sm:justify-between items-stretch gap-5">
//         {/* Grid images */}
//         <div className="w-full sm:w-1/2 max-h-min bg-verdeClaro ">
//           <div className="grid w-full min-h-full object-cover grid-cols-7 grid-rows-9 gap-4">
//             <div className="col-span-2 row-span-6 bg-cover bg-[url('https://verdecora.es/blog/wp-content/uploads/2016/01/diseno-de-jardines.jpg.webp')]"></div>
//             <div className="col-span-5 row-span-4 col-start-3 bg-cover bg-[url('https://blog.aepla.es/wp-content/uploads/2022/08/que-son-jardines-tropicales.jpeg')]"></div>
//             <div className="col-span-3 row-span-5 col-start-3 row-start-5 bg-cover bg-[url('https://images.homify.com/v1456335871/p/photo/image/1354543/jardines-paisajismo-y-decoraciones-elyflor-753311-MLV20534579928_012016-F.jpg')]"></div>
//             <div className="col-span-2 row-span-5 col-start-6 row-start-5 bg-cover bg-[url('https://i.ytimg.com/vi/pJ_s4QMQoNE/maxresdefault.jpg')] "></div>
//             <div className="col-span-2 row-span-3 row-start-7 bg-cover bg-[url('https://jardinable.es/wp-content/uploads/2020/08/jardinable-dise%C3%B1o-jardines-2.jpg')]"></div>
//           </div>
//         </div>
//         {/* Description */}
//         <div className="w-full h-1/2 sm:h-auto sm:w-2/5 bg-violeta font-comfortaa leading-snug text-sm sm:text-lg text-justify sm:text-end sm:my-auto">
//           <h3 className="font-comfortaa m-auto text-center sm:text-end text-lg sm:text-4xl sm:pt-6 py-6 sm:py-12 relative">
//             ¿Qué ofrecemos?
//             <span className="hidden sm:absolute w-32 sm:w-52 right-0 bottom-0 sm:inline-block h-1 bg-violeta mb-5"></span>
//           </h3>

//           <p>
//             Personalizamos a demanda del cliente espacios verdes con diseño
//             paisajístico donde se prioriza la salud vegetal y su desarrollo
//             sostenible. Ofrecemos soluciones de calidad, que respetan un
//             proceso de diagnóstico, puesta en marcha y evaluación final.
//             Realizamos el análisis indicadores propios del clima y del suelo
//             respondiendo a los factores internos y externos de cada
//             ecosistema.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// );
