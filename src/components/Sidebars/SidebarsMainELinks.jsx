import React from "react";

const SidebarsMainELinks = ({
  link,
  active,
  ariaCurrent,
  textHeading,
  day,
  text,
  muted,
}) => {
  return (
    <a
      href={link}
      className={`list-group-item list-group-item-action ${
        active ? "active" : ""
      } py-3 lh-sm`}
      aria-current={ariaCurrent}
    >
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">{textHeading}</strong>
        <small className={`${muted ? "text-muted" : ""}`}>{day}</small>
      </div>
      <div className="col-10 mb-1 small">{text}</div>
    </a>
  );
};

export default SidebarsMainELinks;
