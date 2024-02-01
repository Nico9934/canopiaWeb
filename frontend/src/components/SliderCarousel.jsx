import { Carousel } from "@material-tailwind/react";

const SliderCarousel = () => {
  return (
    <Carousel className="rounded-xl sm:hidden">
      <img
        src="https://verdecora.es/blog/wp-content/uploads/2016/01/diseno-de-jardines.jpg.webp"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://blog.aepla.es/wp-content/uploads/2022/08/que-son-jardines-tropicales.jpeg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.homify.com/v1456335871/p/photo/image/1354543/jardines-paisajismo-y-decoraciones-elyflor-753311-MLV20534579928_012016-F.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.ytimg.com/vi/pJ_s4QMQoNE/maxresdefault.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="https://jardinable.es/wp-content/uploads/2020/08/jardinable-dise%C3%B1o-jardines-2.jpg"
        alt="image 5"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default SliderCarousel;
