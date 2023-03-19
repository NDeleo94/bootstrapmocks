import React from "react";
import DashboardNavbarItem from "./DashboardNavbarItem";

const DashboardNavbarA = ({ links }) => {
  return (
    <ul className="nav flex-column">
      {links.map((link) => (
        <DashboardNavbarItem
          key={link.id}
          active={link.active}
          ariaCurrent={link.ariaCurrent}
          link={link.link}
          label={link.label}
          icon={link.icon}
        />
      ))}
    </ul>
  );
};

export default DashboardNavbarA;
