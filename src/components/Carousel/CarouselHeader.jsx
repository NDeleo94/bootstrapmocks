import React from "react";
import CarouselHeaderLinks from "./CarouselHeaderLinks";
import CarouselHeaderSearch from "./CarouselHeaderSearch";

const CarouselHeader = () => {
  const links = [
    {
      id: 1,
      active: true,
      disabled: false,
      label: "Home",
      link: "/",
      ariaCurrent: "page",
    },
    {
      id: 2,
      active: false,
      disabled: false,
      label: "Link",
      link: "/",
      ariaCurrent: "",
    },
    {
      id: 3,
      active: false,
      disabled: true,
      label: "Disabled",
      link: "/",
      ariaCurrent: "",
    },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Carousel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <CarouselHeaderLinks links={links} />
            <CarouselHeaderSearch buttonText={"Search"} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CarouselHeader;
