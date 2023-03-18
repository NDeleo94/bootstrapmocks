import React from "react";
import CarouselMainCarouselButton from "./CarouselMainCarouselButton";
import CarouselMainCarouselControl from "./CarouselMainCarouselControl";
import CarouselMainCarouselItem from "./CarouselMainCarouselItem";

const CarouselMainCarousel = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <CarouselMainCarouselButton slide={0} active={true} />
        <CarouselMainCarouselButton slide={1} active={false} />
        <CarouselMainCarouselButton slide={2} active={false} />
      </div>
      <div className="carousel-inner">
        <CarouselMainCarouselItem
          active={true}
          text1={"Example headline."}
          text2={
            "Some representative placeholder content for the first slide of the carousel."
          }
          text3={"Sign up today"}
          position={0}
        />
        <CarouselMainCarouselItem
          active={false}
          text1={"Another example headline."}
          text2={
            "Some representative placeholder content for the second slide of the carousel."
          }
          text3={"Learn more"}
          position={1}
        />
        <CarouselMainCarouselItem
          active={false}
          text1={"One more for good measure."}
          text2={
            "Some representative placeholder content for the third slide of this carousel."
          }
          text3={"Browse gallery"}
          position={2}
        />
      </div>
      <CarouselMainCarouselControl control={0} />
      <CarouselMainCarouselControl control={1} />
    </div>
  );
};

export default CarouselMainCarousel;
