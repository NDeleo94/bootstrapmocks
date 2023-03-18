import React from "react";

const DashboardNavbarItem = ({ active, ariaCurrent, link, icon, label }) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${active ? "active" : ""}`}
        aria-current={ariaCurrent}
        href={link}
      >
        <span data-feather={icon} className="align-text-bottom"></span>
        {label}
      </a>
    </li>
  );
};

export default DashboardNavbarItem;
