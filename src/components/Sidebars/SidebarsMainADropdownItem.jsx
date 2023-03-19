import React from "react";

const SidebarsMainADropdownItem = ({ divider, link, label }) => {
  return divider ? (
    <hr className="dropdown-divider" />
  ) : (
    <li>
      <a className="dropdown-item" href={link}>
        {label}
      </a>
    </li>
  );
};

export default SidebarsMainADropdownItem;
