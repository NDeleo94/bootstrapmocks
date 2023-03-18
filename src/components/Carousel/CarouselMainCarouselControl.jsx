import React from "react";

const CarouselMainCarouselControl = ({ control }) => {
  return (
    <button
      className={`carousel-control-${control ? "next" : "prev"}`}
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide={`${control ? "next" : "prev"}`}
    >
      <span
        className={`carousel-control-${control ? "next" : "prev"}-icon`}
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">{control ? "Next" : "Previous"}</span>
    </button>
  );
};

export default CarouselMainCarouselControl;
