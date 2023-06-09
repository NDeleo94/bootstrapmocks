import React from "react";

const CarouselMainFeaturette = ({ texta, textb, textc, reverse = false }) => {
  return (
    <>
      <div className="row featurette">
        <div className={reverse ? "col-md-7 order-md-2" : "col-md-7"}>
          <h2 className="featurette-heading fw-normal lh-1">
            {texta}
            <span className="text-muted">{textb}</span>
          </h2>
          <p className="lead">{textc}</p>
        </div>
        <div className={reverse ? "col-md-5 order-md-1" : "col-md-5 "}>
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>

      <hr className="featurette-divider" />
    </>
  );
};

export default CarouselMainFeaturette;
