import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const titleVariant = {
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
    <div className="w-full h-screen">
      <div className="flex w-full justify-center items-center h-full bg-hero-pattern bg-no-repeat bg-cover ">
        <div className="w-11/12 flex justify-end">
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            variants={titleVariant}
            className="font-comfortaa text-4xl text-gris font-bold sm:leading-snug sm:text-end sm:text-6xl sm:w-3/5 "
          >
            ¡Hola! La evolución en tu entorno natural te espera.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
