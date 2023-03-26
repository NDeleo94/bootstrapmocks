import React from "react";
import SidebarsMainDLinks from "./SidebarsMainDLinks";

const SidebarsMainD = () => {
  const links = [
    {
      id: 1,
      label: "Home",
      items: [
        {
          id: 1,
          link: "/",
          label: "Overview",
        },
        {
          id: 2,
          link: "/",
          label: "Updates",
        },
        {
          id: 3,
          link: "/",
          label: "Reports",
        },
      ],
      target: "home-collapse",
      expanded: true,
      divider: false,
    },
    {
      id: 2,
      label: "Dashboard",
      items: [
        {
          id: 1,
          link: "/",
          label: "Overview",
        },
        {
          id: 2,
          link: "/",
          label: "Weekly",
        },
        {
          id: 3,
          link: "/",
          label: "Monthly",
        },
        {
          id: 4,
          link: "/",
          label: "Annually",
        },
      ],
      target: "dashboard-collapse",
      expanded: false,
      divider: false,
    },
    {
      id: 3,
      label: "Orders",
      items: [
        {
          id: 1,
          link: "/",
          label: "New",
        },
        {
          id: 2,
          link: "/",
          label: "Processed",
        },
        {
          id: 3,
          link: "/",
          label: "Shipped",
        },
        {
          id: 4,
          link: "/",
          label: "Returned",
        },
      ],
      target: "orders-collapse",
      expanded: false,
      divider: false,
    },
    {
      id: 4,
      label: "",
      items: [],
      expanded: false,
      divider: true,
    },
    {
      id: 5,
      label: "Account",
      items: [
        {
          id: 1,
          link: "/",
          label: "New...",
        },
        {
          id: 2,
          link: "/",
          label: "Profile",
        },
        {
          id: 3,
          link: "/",
          label: "Settings",
        },
        {
          id: 4,
          link: "/",
          label: "Sign out",
        },
      ],
      target: "account-collapse",
      expanded: false,
      divider: false,
    },
  ];

  return (
    <div className="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <svg className="bi pe-none me-2" width="30" height="24">
          <use href="#bootstrap" />
        </svg>
        <span className="fs-5 fw-semibold">Collapsible</span>
      </a>
      <SidebarsMainDLinks links={links} />
    </div>
  );
};

export default SidebarsMainD;
