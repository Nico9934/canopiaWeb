import React from "react";
import { motion } from "framer-motion";
import IconSection from "../components/IconSection";
import Footer from "../components/Footer";

const About = () => {
  const descriptionVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,

      transition: {
        type: "fade",
        bounce: 0.1,
        duration: 1.3,
      },
      opacity: 1,
    },
  };
  return (
    <>
      <div className="w-full min-h-screen font-comfortaa">
        <div className="w-11/12  flex h-full m-auto flex-col py-32 items-center">
          <h3 className="mb-6 text-2xl sm:text-4xl border-b-8 pb-4 border-violeta w-fit sm:text-end">
            Sobre nosotros...
          </h3>
          <div className="flex justify-between w-full flex-col-reverse sm:flex-row m-auto gap-16 sm:items-center">
            <img
              className="w-full"
              src="https://cdn.palbincdn.com/users/46563/upload/images/jardinero-cuidando-jardin-domicilio.jpg"
              alt=""
            />

            <motion.div
              className="w-full sm:w-full sm:text-end text-justify"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={descriptionVariants}
            >
              <p className="w-full sm:w-full sm:text-end text-justify">
                Desde el 2016 somos una empresa que crea y mantiene paisajes.
                Nuestro equipo está formado por profesionales del diseño de
                espacios verdes. Formamos una comunidad sostenida por
                compromiso, pasión e innovación por lo que hacemos. En cada
                proyecto, brindamos soluciones integrando el uso racional de
                recursos para cada especie y espacio vegetal. Creemos en la
                reeducación ambiental y la proponemos como parte de cada
                proyecto para garantizar su evolución natural.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <IconSection />
      <Footer />
    </>
  );
};

export default About;
