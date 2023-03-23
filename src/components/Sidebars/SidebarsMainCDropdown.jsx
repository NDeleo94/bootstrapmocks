import React from "react";
import SidebarsMainDropdownItem from "./SidebarsMainDropdownItem";

const SidebarsMainCDropdown = ({ links, image }) => {
  return (
    <div className="dropdown border-top">
      <a
        href="/"
        className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={image}
          alt="mdo"
          width="24"
          height="24"
          className="rounded-circle"
        />
      </a>
      <ul className="dropdown-menu text-small shadow">
        {links.map((link) => (
          <SidebarsMainDropdownItem
            key={link.id}
            divider={link.divider}
            link={link.link}
            label={link.label}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarsMainCDropdown;
