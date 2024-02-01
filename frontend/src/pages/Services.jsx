import React from "react";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col font-comfortaa">
        <div className="w-11/12 mx-auto flex flex-col py-12 sm:py-32">
          <h3 className="mb-6 text-2xl sm:text-4xl border-b-8 pb-4 border-violeta w-fit sm:text-end">
            Nuestros servicios
          </h3>

          <div className="w-9/12 flex-wrap h-full flex m-auto justify-between gap-12 mt-6">
            <div className="w-2/5 h-fit flex gap-5 flex-col">
              <h4 className="text-center text-xl sm:text-lg text-negro">
                Mantenimiento de espacios verdes
              </h4>
              <img
                className="w-full h-96 object-cover"
                src="https://unjardinparami.com/wp-content/uploads/2018/04/PATIO-PANORAMA-2.jpg"
                alt=""
              />
            </div>
            <div className="w-2/5 h-fit flex gap-5 flex-col">
              <h4 className="text-center text-xl sm:text-lg text-negro">
                Mantenimiento de espacios verdes
              </h4>
              <img
                className="w-full h-96 object-cover"
                src="https://unjardinparami.com/wp-content/uploads/2018/04/PATIO-PANORAMA-2.jpg"
                alt=""
              />
            </div>
            <div className="w-2/5 h-fit flex gap-5 flex-col">
              <h4 className="text-center text-xl sm:text-lg text-negro">
                Mantenimiento de espacios verdes
              </h4>
              <img
                className="w-full h-96 object-cover"
                src="https://unjardinparami.com/wp-content/uploads/2018/04/PATIO-PANORAMA-2.jpg"
                alt=""
              />
            </div>
            <div className="w-2/5 h-fit flex gap-5 flex-col">
              <h4 className="text-center text-xl sm:text-lg text-negro">
                Mantenimiento de espacios verdes
              </h4>
              <img
                className="w-full h-96 object-cover"
                src="https://unjardinparami.com/wp-content/uploads/2018/04/PATIO-PANORAMA-2.jpg"
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
