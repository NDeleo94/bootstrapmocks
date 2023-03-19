import React from "react";

const SidebarsMainALinksItem = ({
  active,
  textWhite,
  ariaCurrent,
  useSVG,
  label,
  link,
}) => {
  return (
    <li className="nav-item">
      <a
        href={link}
        className={`nav-link ${
          active ? "active" : textWhite ? "text-white" : ""
        }`}
        aria-current={ariaCurrent}
      >
        <svg className="bi pe-none me-2" width="16" height="16">
          <use href={useSVG} />
        </svg>
        {label}
      </a>
    </li>
  );
};

export default SidebarsMainALinksItem;
