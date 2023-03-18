import React from "react";

const CarouselMainCarouselButton = ({ slide, active }) => {
  return (
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to={`${slide}`}
      className={active ? "active" : ""}
      aria-current="true"
      aria-label={`Slide ${slide + 1}`}
    ></button>
  );
};

export default CarouselMainCarouselButton;
