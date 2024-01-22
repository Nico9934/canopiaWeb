import React from "react";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();
  const onHandleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="bg-gris w-full absolute z-40 -top-0 h-screen flex flex-col gap-10 justify-center items-center">
      <img src="../public/logo.svg" alt="" className="w-16 h-16" />
      <p className="w-9/12 text-center">
        Gracias por ponerte en contacto con nosotros. En instantes alguien de
        nuestra empresa se comunicará con vos.
      </p>

      <button
        onClick={onHandleSubmit}
        className="bg-verdeOscuro hover:cursor-pointer hover:opacity-90 transition-all text-gris px-4 py-2"
      >
        Continuar
      </button>
    </div>
  );
};

export default Notification;
