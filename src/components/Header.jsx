import React from "react";

const Header = () => {
  return (
    <div className="bg-gris w-full flex items-center justify-around px-10">
      <div className="w-28 flex p-2 items-center gap-5 text-verdeOscuro">
        <p className="font-comfortaa text-xl">Canopia</p>
        <img className="w-14 fill-slate-200" src="../public/logo.svg" alt="" />
      </div>

      <h3 className="text-center m-auto w-3/4 font-comfortaa text-5xl my-10">
        Cotizador
      </h3>
    </div>
  );
};

export default Header;
