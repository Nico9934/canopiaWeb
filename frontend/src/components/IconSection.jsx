import React from "react";

const IconSection = () => {
  return (
    <div className="w-full h-screen sm:h-auto font-comfortaa bg-verdeOscuro text-gris py-12">
      <h3 className="m-auto text-2xl sm:text-4xl border-b-8 pb-4 border-beige w-fit sm:text-end">
        Servicios
      </h3>
      <div className="w-11/12 h-full sm:h-auto m-auto flex sm:flex-row sm:py-16">
        <div className="flex justify-evenly sm:justify-between w-full flex-col sm:flex-row items-center mx-auto">
          {/* Icon */}
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <svg
              viewBox="0 0 448 512"
              className="w-16 h-fit sm:w-24 sm:h-24 fill-gris hover:cursor-pointer hover:fill-verdeClaro hover:scale-105 transition-all duration-300"
            >
              <path d="M0 32c477.6 0 366.6 317.3 367.1 366.3L448 480h-26l-70.4-71.2c-39 4.2-124.4 34.5-214.4-37C47 300.3 52 214.7 0 32zm79.7 46c-49.7-23.5-5.2 9.2-5.2 9.2 45.2 31.2 66 73.7 90.2 119.9 31.5 60.2 79 139.7 144.2 167.7 65 28 34.2 12.5 6-8.5-28.2-21.2-68.2-87-91-130.2-31.7-60-61-118.6-144.2-158.1z" />
            </svg>
            <p className="text-sm sm:text-lg text-center">
              Creación de paisajes
            </p>
          </div>
          {/* Icon */}
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <svg
              viewBox="0 0 512 512"
              className="w-16 h-fit sm:w-24 sm:h-24 fill-gris hover:cursor-pointer hover:fill-verdeClaro hover:scale-105 transition-all duration-300"
            >
              <path d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z" />
            </svg>
            <p className="text-sm text-center sm:text-lg ">
              Mantenimiento de espacios verdes
            </p>
          </div>
          {/* Icon */}
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <svg
              viewBox="0 0 384 512"
              className="w-16 h-fit sm:w-24 sm:h-24 fill-gris hover:cursor-pointer hover:fill-verdeClaro hover:scale-105 transition-all duration-300"
            >
              <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
            </svg>
            <p className="text-sm text-center sm:text-lg ">Sistemas de riego</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconSection;
