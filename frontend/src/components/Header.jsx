import React, { useState, useEffect } from "react";
import HamburguerIcon from "./HamburguerIcon";
import HamburguerMenu from "./HamburguerMenu";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: scrolling ? 0 : 1,
      y: scrolling ? -100 : 0,
      transition: { duration: 0.8 },
    });
  }, [scrolling, controls]);

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className="fixed bg-gris w-full flex items-center justify-between "
      >
        <div className="w-11/12 flex items-center justify-between m-auto">
          {/* Logo */}
          <div className="flex py-3 items-center gap-3 sm:gap-5  text-negro">
            <p className="font-comfortaa text-xl">
              <a href="/">Canopia</a>
            </p>
            <img className="w-4 sm:w-6" src="../public/logo.svg" alt="" />
          </div>

          {/* Navegacion desktop */}
          <nav className="w-5/12 sm:flex hidden justify-between font-light text-sm font-comfortaa">
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

          {/* Icono menu hamburguesa */}
          <div className="sm:hidden">
            <HamburguerIcon
              menuActive={menuActive}
              setMenuActive={setMenuActive}
            />
          </div>
        </div>
      </motion.div>
      {menuActive ? (
        <HamburguerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      ) : null}
    </>
  );
};

export default Header;
