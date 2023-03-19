import React from "react";
import SidebarsMainDropdownItem from "./SidebarsMainDropdownItem";

const SidebarsMainDropdown = ({ dark, links, image, text }) => {
  return (
    <div className="dropdown">
      <a
        href="/"
        className={`d-flex align-items-center ${
          dark ? "text-white" : "link-dark"
        } text-decoration-none dropdown-toggle`}
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
      <ul
        className={`dropdown-menu ${
          dark ? "dropdown-menu-dark" : ""
        } text-small shadow`}
      >
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

export default SidebarsMainDropdown;
