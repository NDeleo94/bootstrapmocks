import React from "react";
import DashboardNavbarItem from "./DashboardNavbarItem";

const DashboardNavbarB = ({ links }) => {
  return (
    <>
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
        <span>Saved reports</span>
        <a className="link-secondary" href="/" aria-label="Add a new report">
          <span data-feather="plus-circle" className="align-text-bottom"></span>
        </a>
      </h6>
      <ul className="nav flex-column mb-2">
        {links.map((link) => (
          <DashboardNavbarItem
            key={link.id}
            active={link.active}
            ariaCurrent={link.ariaCurrent}
            link={link.link}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </ul>
    </>
  );
};

export default DashboardNavbarB;
