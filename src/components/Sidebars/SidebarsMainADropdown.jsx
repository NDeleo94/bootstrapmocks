import React from "react";
import SidebarsMainADropdownItem from "./SidebarsMainADropdownItem";

const SidebarsMainADropdown = ({ links, image, text }) => {
  return (
    <div className="dropdown">
      <a
        href="/"
        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={image}
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>{text}</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        {links.map((link) => (
          <SidebarsMainADropdownItem
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

export default SidebarsMainADropdown;
