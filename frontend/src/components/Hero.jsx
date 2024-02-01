import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex w-full justify-center items-center h-full bg-hero-pattern bg-no-repeat bg-cover ">
        <div className="w-11/12 flex justify-end">
          <p className="font-comfortaa text-4xl text-gris font-bold sm:leading-snug sm:text-end sm:text-6xl sm:w-3/5 ">
            ¡Hola! La evolución en tu entorno natural te espera.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
