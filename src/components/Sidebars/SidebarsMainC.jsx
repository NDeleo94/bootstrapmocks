import React from "react";
import SidebarsMainCDropdown from "./SidebarsMainCDropdown";
import SidebarsMainCLinks from "./SidebarsMainCLinks";

const SidebarsMainC = () => {
  const linksA = [
    {
      id: 1,
      active: true,
      ariaCurrent: "page",
      useSVG: "#home",
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      active: false,
      ariaCurrent: "",
      useSVG: "#speedometer2",
      label: "Dashboard",
      link: "/",
    },
    {
      id: 3,
      active: false,
      ariaCurrent: "",
      useSVG: "#table",
      label: "Orders",
      link: "/",
    },
    {
      id: 4,
      active: false,
      ariaCurrent: "",
      useSVG: "#grid",
      label: "Products",
      link: "/",
    },
    {
      id: 5,
      active: false,
      ariaCurrent: "",
      useSVG: "#people-circle",
      label: "Customers",
      link: "/",
    },
  ];

  const linksB = [
    { id: 1, divider: false, label: "New project...", link: "/" },
    { id: 2, divider: false, label: "Settings", link: "/" },
    { id: 3, divider: false, label: "Profile", link: "/" },
    { id: 4, divider: true, label: "", link: "" },
    { id: 5, divider: false, label: "Sign out", link: "/" },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-light"
      style={{ width: "4.5rem" }}
    >
      <a
        href="/"
        className="d-block p-3 link-dark text-decoration-none"
        title="Icon-only"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
      >
        <svg className="bi pe-none" width="40" height="32">
          <use href="#bootstrap" />
        </svg>
        <span className="visually-hidden">Icon-only</span>
      </a>
      <SidebarsMainCLinks links={linksA} />
      <SidebarsMainCDropdown
        links={linksB}
        image={"https://github.com/mdo.png"}
      />
    </div>
  );
};

export default SidebarsMainC;
