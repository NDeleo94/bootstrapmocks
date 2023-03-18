import React from "react";

const CarouselMainCarouselItem = ({
  active,
  text1,
  text2,
  text3,
  position,
}) => {
  return (
    <div className={`carousel-item ${active ? "active" : ""}`}>
      <svg
        className="bd-placeholder-img"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" fill="#777" />
      </svg>
      <div className="container">
        <div
          className={`carousel-caption ${
            position === 0 ? "text-start" : position === 2 ? "text-end" : ""
          }`}
        >
          <h1>{text1}</h1>
          <p>{text2}</p>
          <p>
            <a className="btn btn-lg btn-primary" href="/">
              {text3}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselMainCarouselItem;
