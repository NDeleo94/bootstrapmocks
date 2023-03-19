import React from "react";

const SidebarsMainDropdownItem = ({ divider, link, label }) => {
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

export default SidebarsMainDropdownItem;
