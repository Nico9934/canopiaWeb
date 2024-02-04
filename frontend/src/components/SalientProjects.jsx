import React from "react";

const SalientProjects = () => {
  return (
    <div className="w-full bg-verdeClaro text-gris h-fit font-comfortaa">
      <div className="w-11/12 justify-center m-auto items-center py-12 sm:py-16">
        <h3 className="mb-6 text-2xl sm:text-4xl border-b-8 pb-4 border-violeta w-fit sm:text-end">
          Proyectos destacados
        </h3>

        <div className="w-9/12 flex flex-col justify-around gap-6 m-auto sm:flex-row">
          <div className="w-full sm:w-1/3 min-h-56 relative">
            <img
              className="w-full h-full"
              src="https://jardinable.es/wp-content/uploads/2021/08/paisajismo-jardinable-919x517.png"
              alt="jardineria"
            />
            <span className="absolute sm:bottom-8 w-full h-1 bg-gris">
              <h2 className="mt-2 text-start px-2 text-negro">
                Fincas de San Vicente
              </h2>
            </span>
          </div>
          <div className="w-full sm:w-1/3 min-h-56 relative">
            <img
              className="w-full h-full"
              src="https://jardinable.es/wp-content/uploads/2021/08/paisajismo-jardinable-919x517.png"
              alt="jardineria"
            />
            <span className="absolute sm:bottom-8 w-full h-1 bg-gris">
              <h2 className="mt-2 text-start px-2 text-negro">
                Los arrayanes Barrio
              </h2>
            </span>
          </div>
          <div className="w-full sm:w-1/3 min-h-56 relative">
            <img
              className="w-full h-full"
              src="https://jardinable.es/wp-content/uploads/2021/08/paisajismo-jardinable-919x517.png"
              alt="jardineria"
            />
            <span className="absolute sm:bottom-8 w-full h-1 bg-gris">
              <h2 className="mt-2 text-start px-2 text-negro">San Eliseo</h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalientProjects;
