import React from "react";
import DashboardNavbarA from "./DashboardNavbarA";
import DashboardNavbarB from "./DashboardNavbarB";

const DashboardNavbar = () => {
  const linksA = [
    {
      id: 1,
      active: true,
      ariaCurrent: "page",
      link: "/",
      label: "Dashboard",
      icon: "home",
    },
    {
      id: 2,
      active: false,
      ariaCurrent: "",
      link: "/",
      label: "Orders",
      icon: "file",
    },
    {
      id: 3,
      active: false,
      ariaCurrent: "",
      link: "/",
      label: "Products",
      icon: "shopping-cart",
    },
    {
      id: 4,
      active: false,
      ariaCurrent: "",
      link: "/",
      label: "Customers",
      icon: "users",
    },
    {
      id: 5,
      active: false,
      ariaCurrent: "",
      link: "/",
      label: "Reports",
      icon: "bar-chart-2",
    },
    {
      id: 6,
      active: false,
      ariaCurrent: "",
      link: "/",
      label: "Integrations",
      icon: "layers",
    },
  ];

  const linksB = [
    {
      id: 1,
      active: false,
      ariaCurrent: "",
      link: "/",
      label: "Current month",
      icon: "file-text",
    },
    {
      id: 2,
      active: false,
      ariaCurrent: "",
      link: "/",
      label: "Last quarter",
      icon: "file-text",
    },
    {
      id: 3,
      active: false,
      ariaCurrent: "",
      link: "/",
      label: "Social engagement",
      icon: "file-text",
    },
    {
      id: 4,
      active: false,
      ariaCurrent: "",
      link: "/",
      label: "Year-end sale",
      icon: "file-text",
    },
  ];

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <DashboardNavbarA links={linksA} />
        <DashboardNavbarB links={linksB} />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
