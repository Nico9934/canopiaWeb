import React, { useState } from "react";
import HamburguerIcon from "./HamburguerIcon";
import HamburguerMenu from "./HamburguerMenu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="fixed bg-gris w-full flex items-center justify-between ">
        <div className="w-11/12 flex items-center justify-between m-auto">
          {/* Logo */}
          <div className="flex py-3 items-center gap-3 sm:gap-5  text-negro">
            <p className="font-comfortaa text-xl">
              <a href="/">Canopia</a>
            </p>
            <img className="w-4 sm:w-6" src="../public/logo.svg" alt="" />
          </div>

          {/* Navegacion desktop */}
          <nav className="w-5/12 sm:flex hidden justify-between font-light text-sm">
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
      </div>
      {menuActive ? (
        <HamburguerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      ) : null}
    </>
  );
};

export default Header;
