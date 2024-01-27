import React, { useState } from "react";
import HamburguerIcon from "./HamburguerIcon";
import HamburguerMenu from "./HamburguerMenu";
import { motion, useCycle } from "framer-motion";

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const variants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="bg-gris w-full flex items-center justify-between sm:px-10 sm:py-1">
        <div className="flex p-2 items-center gap-5  text-negro">
          <p className="font-comfortaa text-xl">
            <a href="/">Canopia</a>
          </p>
          <img className="w-6" src="../public/logo.svg" alt="" />
        </div>

        <nav className="w-5/12 sm:flex hidden justify-around font-light text-sm">
          <a
            className="text-negro  pb-1 hover:text-verdeOscuro transition-colors duration-300"
            href="/"
          >
            Inicio
          </a>
          <a
            className="text-negro  pb-1  hover:text-verdeOscuro transition-all"
            href="/about"
          >
            Acerca de
          </a>
          <a
            className="text-negro  pb-1  hover:text-verdeOscuro transition-all"
            href="/services"
          >
            Servicios
          </a>
          <a
            className="text-negro  pb-1  hover:text-verdeOscuro transition-all"
            href="/contact"
          >
            Contacto
          </a>
        </nav>

        <div className="sm:hidden mr-10 absolute -right-4">
          <HamburguerIcon
            menuActive={isOpen}
            setMenuActive={() => toggleOpen()}
          />
        </div>
      </div>

      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="absolute w-full"
      >
        <HamburguerMenu />
      </motion.nav>
    </>
  );
};

export default Header;
