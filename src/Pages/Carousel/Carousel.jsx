import React from "react";
import CarouselFooter from "../../components/Carousel/CarouselFooter";
import CarouselHeader from "../../components/Carousel/CarouselHeader";
import CarouselMain from "../../components/Carousel/CarouselMain";

import "./carousel.css";

const Carousel = () => {
  return (
    <>
      <CarouselHeader />
      <CarouselMain />
      <CarouselFooter />
    </>
  );
};

export default Carousel;
