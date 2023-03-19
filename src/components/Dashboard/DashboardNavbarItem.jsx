import React, { useEffect } from "react";
import feather from "feather-icons";

const DashboardNavbarItem = ({ active, ariaCurrent, link, icon, label }) => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <li className="nav-item">
      <a
        className={`nav-link ${active ? "active" : ""}`}
        aria-current={ariaCurrent}
        href={link}
      >
        <i data-feather={icon} className="align-text-bottom"></i>
        {label}
      </a>
    </li>
  );
};

export default DashboardNavbarItem;
