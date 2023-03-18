import React from "react";

const CarouselHeaderLinksItem = ({
  active,
  link,
  label,
  disabled,
  ariaCurrent,
}) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${active ? "active" : ""} ${
          disabled ? "disabled" : ""
        }`}
        aria-current={ariaCurrent}
        href={link}
      >
        {label}
      </a>
    </li>
  );
};

export default CarouselHeaderLinksItem;
