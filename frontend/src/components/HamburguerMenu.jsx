import React from "react";
import HamburguerIcon from "./HamburguerIcon";

const HamburguerMenu = ({ menuActive, setMenuActive }) => {
  return (
    <div className="w-full h-96 bg-gris top-0">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <a
          className="text-negro p-3 w-full text-center  hover:text-verdeOscuro hover:scale-105 transition-all"
          href="/"
        >
          Inicio
        </a>
        <a
          className="text-negro p-3 w-full text-center  hover:text-verdeOscuro hover:scale-105 transition-all"
          href="/about"
        >
          Acerca de
        </a>
        <a
          className="text-negro p-3 w-full text-center  hover:text-verdeOscuro hover:scale-105 transition-all"
          href="/services"
        >
          Servicios
        </a>
        <a
          className="text-negro p-3 w-full text-center  hover:text-verdeOscuro hover:scale-105 transition-all"
          href="/contact"
        >
          Contacto
        </a>
      </div>
    </div>
  );
};

export default HamburguerMenu;
