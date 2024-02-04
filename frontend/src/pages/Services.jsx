import React from "react";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col font-comfortaa">
        <div className="w-11/12 mx-auto flex flex-col py-24 sm:py-32">
          <h3 className="mb-6 text-2xl sm:text-4xl border-b-8 pb-4 border-violeta w-fit sm:text-end">
            Nuestros servicios
          </h3>

          <div className="w-11/12 flex-wrap h-full flex m-auto justify-center gap-12 mt-6">
            <div className="w-full sm:w-4/12 h-fit flex gap-5 flex-col">
              <h4 className="text-center text-sm sm:text-lg text-negro">
                Poda
              </h4>
              <img
                className="w-full h-96 object-cover"
                src="https://unjardinparami.com/wp-content/uploads/2018/04/PATIO-PANORAMA-2.jpg"
                alt=""
              />
            </div>
            <div className="w-full sm:w-4/12 h-fit flex gap-5 flex-col">
              <h4 className="text-center text-sm sm:text-lg text-negro">
                Mantenimiento de espacios verdes
              </h4>
              <img
                className="w-full h-96 object-cover"
                src="https://media.istockphoto.com/id/1347784849/es/foto/vista-panor%C3%A1mica-de-un-hermoso-jard%C3%ADn-paisaj%C3%ADstico-con-un-c%C3%A9sped-verde-cortado.jpg?s=612x612&w=0&k=20&c=O7Q76_arRcMcCMVwjx01uU7RKMqoBZ8VKfTRSzQ1UJk="
                alt=""
              />
            </div>
            <div className="w-full sm:w-4/12 h-fit flex gap-5 flex-col">
              <h4 className="text-center text-sm sm:text-lg text-negro">
                Fumigacion
              </h4>
              <img
                className="w-full h-96 object-cover"
                src="https://media.istockphoto.com/id/1308087213/es/foto/patio-trasero-ingl%C3%A9s-jard%C3%ADn-de-caba%C3%B1as-colorida-planta-de-floraci%C3%B3n-y-c%C3%A9sped-de-hierba-verde.jpg?s=612x612&w=0&k=20&c=GcakAIQnKgSroTpho_h14wax6UH675to1yonXvM05iE="
                alt=""
              />
            </div>
            <div className="w-full sm:w-4/12 h-fit flex gap-5 flex-col">
              <h4 className="text-center text-sm sm:text-lg text-negro">
                Diseño y paisajismo
              </h4>
              <img
                className="w-full h-96 object-cover"
                src="https://media.istockphoto.com/id/1312760160/es/foto/big-garden-grass-field-mowing-por-el-jardinero-cauc%C3%A1sico.jpg?s=612x612&w=0&k=20&c=_NQxIL3JOb3lelkbw5RsSIm3AhqiJBmVFff1OXYqiHc="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
