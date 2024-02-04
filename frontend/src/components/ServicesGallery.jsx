import React from "react";
import SliderCarousel from "./SliderCarousel.jsx";
import { motion } from "framer-motion";

const ServicesGallery = () => {
  const gridVariants = {
    offscreen: {
      x: -150,
      opacity: 0,
    },
    onscreen: {
      x: 0,

      transition: {
        type: "fade",
        bounce: 0.8,
        duration: 1.3,
        // staggerChildren: 0.5,
      },
      opacity: 1,
    },
  };
  const descriptionVariants = {
    offscreen: {
      y: -150,
      opacity: 0,
    },
    onscreen: {
      y: 0,

      transition: {
        type: "fade",
        bounce: 0.8,
        duration: 1.3,
      },
      opacity: 1,
    },
  };

  return (
    <div className="w-full h-screen font-comfortaa">
      <div className="w-11/12 h-full m-auto flex justify-between flex-col-reverse sm:flex-row py-12 sm:py-16 gap-4">
        {/* Grid desktop*/}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
          className="grid w-full max-h-1/2 sm:w-1/2 h-1/2 sm:h-full object-cover grid-cols-7 grid-rows-9 gap-4"
        >
          <div className="col-span-2 row-span-6 bg-cover bg-[url('https://verdecora.es/blog/wp-content/uploads/2016/01/diseno-de-jardines.jpg.webp')]"></div>
          <div className="col-span-5 row-span-4 col-start-3 bg-cover bg-[url('https://blog.aepla.es/wp-content/uploads/2022/08/que-son-jardines-tropicales.jpeg')]"></div>
          <div className="col-span-3 row-span-5 col-start-3 row-start-5 bg-cover bg-[url('https://images.homify.com/v1456335871/p/photo/image/1354543/jardines-paisajismo-y-decoraciones-elyflor-753311-MLV20534579928_012016-F.jpg')]"></div>
          <div className="col-span-2 row-span-5 col-start-6 row-start-5 bg-cover bg-[url('https://i.ytimg.com/vi/pJ_s4QMQoNE/maxresdefault.jpg')] "></div>
          <div className="col-span-2 row-span-3 row-start-7 bg-cover bg-[url('https://jardinable.es/wp-content/uploads/2020/08/jardinable-dise%C3%B1o-jardines-2.jpg')]"></div>
        </motion.div>
        {/* Gallery mobile */}
        {/* <SliderCarousel /> */}
        {/* Description */}

        <motion.div
          className="max-h-1/2 sm:h-full sm:w-1/2 flex flex-col sm:items-end sm:justify-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={descriptionVariants}
        >
          <h3 className="mb-6 text-2xl sm:text-4xl border-b-8 pb-4 border-violeta w-fit sm:text-end">
            ¿Qué ofrecemos?
          </h3>
          <p className="text-sm sm:text-xl sm:text-end leading-8 sm:leading-10">
            Personalizamos a demanda del cliente espacios verdes con diseño
            paisajístico donde se prioriza la salud vegetal y su desarrollo
            sostenible. Ofrecemos soluciones de calidad, que respetan un proceso
            de diagnóstico, puesta en marcha y evaluación final. Realizamos el
            análisis indicadores propios del clima y del suelo respondiendo a
            los factores internos y externos de cada ecosistema.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesGallery;
