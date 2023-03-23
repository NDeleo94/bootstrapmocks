import React from "react";
import SidebarsMainCLinksItem from "./SidebarsMainCLinksItem";

const SidebarsMainCLinks = ({ links }) => {
  return (
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      {links.map((link) => (
        <SidebarsMainCLinksItem
          key={link.id}
          active={link.active}
          ariaCurrent={link.ariaCurrent}
          useSVG={link.useSVG}
          label={link.label}
          link={link.link}
        />
      ))}
    </ul>
  );
};

export default SidebarsMainCLinks;
