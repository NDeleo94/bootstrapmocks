import React from "react";
import CarouselHeaderLinksItem from "./CarouselHeaderLinksItem";

const CarouselHeaderLinks = ({ links }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {links.map((link) => (
        <CarouselHeaderLinksItem
          key={link.id}
          link={link.link}
          label={link.label}
          active={link.active}
          disabled={link.disabled}
          ariaCurrent={link.ariaCurrent}
        />
      ))}
    </ul>
  );
};

export default CarouselHeaderLinks;
