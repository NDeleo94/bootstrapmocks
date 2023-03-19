import React from "react";
import SidebarsMainALinksItem from "./SidebarsMainALinksItem";

const SidebarsMainALinks = ({ links }) => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {links.map((link) => (
        <SidebarsMainALinksItem
          key={link.id}
          active={link.active}
          textWhite={link.textWhite}
          ariaCurrent={link.ariaCurrent}
          useSVG={link.useSVG}
          label={link.label}
          link={link.link}
        />
      ))}
    </ul>
  );
};

export default SidebarsMainALinks;
