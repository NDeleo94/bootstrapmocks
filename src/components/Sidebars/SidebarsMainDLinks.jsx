import React from "react";
import SidebarsMainDLinksItems from "./SidebarsMainDLinksItems";

const SidebarsMainDLinks = ({ links }) => {
  return (
    <ul className="list-unstyled ps-0">
      {links.map((link) => (
        <SidebarsMainDLinksItems
          key={link.id}
          items={link.items}
          target={link.target}
          label={link.label}
          expanded={link.expanded}
          divider={link.divider}
        />
      ))}
    </ul>
  );
};

export default SidebarsMainDLinks;
