import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-beige flex justify-center">
      <div className="w-11/12 flex flex-col sm:flex-row gap-6 py-12 sm:py-16 justify-center">
        {/* Navegacion */}
        <nav className="w-full items-center flex flex-col gap-2 justify-around font-light text-sm font-comfortaa">
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
        {/* IconosRedes */}
        <div className="w-full flex justify-center">
          <svg
            viewBox="0 0 448 512"
            className="w-12 h-12 fill-negro hover:cursor-pointer hover:fill-verdeOscuro transition-all duration-300"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </div>
        {/* Copyrigth y dir */}
        <p className="text-xs font-comfortaa w-full text-center">
          © 2024 Nico Rolon Estudios. Todos los derechos reservados. | Contacto:{" "}
          <a href="tel:+1166809127" className="text-negro">
            116-680-9127
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
