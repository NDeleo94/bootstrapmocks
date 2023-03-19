import React from "react";
import SidebarsMainLinksItem from "./SidebarsMainLinksItem";

const SidebarsMainLinks = ({ links }) => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {links.map((link) => (
        <SidebarsMainLinksItem
          key={link.id}
          active={link.active}
          textWhite={link.textWhite}
          dark={link.dark}
          ariaCurrent={link.ariaCurrent}
          useSVG={link.useSVG}
          label={link.label}
          link={link.link}
        />
      ))}
    </ul>
  );
};

export default SidebarsMainLinks;
