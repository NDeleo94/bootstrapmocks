import React from "react";

const SidebarsMainCLinksItem = ({
  link,
  active,
  ariaCurrent,
  label,
  useSVG,
}) => {
  return (
    <li className="nav-item">
      <a
        href={link}
        className={`nav-link ${
          active ? "active" : ""
        } py-3 border-bottom rounded-0`}
        aria-current={ariaCurrent}
        title={label}
        data-bs-toggle="tooltip"
        data-bs-placement="right"
      >
        <svg
          className="bi pe-none"
          width="24"
          height="24"
          role="img"
          aria-label={label}
        >
          <use href={useSVG} />
        </svg>
      </a>
    </li>
  );
};

export default SidebarsMainCLinksItem;
