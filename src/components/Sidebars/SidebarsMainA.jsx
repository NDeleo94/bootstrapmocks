import React from "react";
import SidebarsMainDropdown from "./SidebarsMainDropdown";
import SidebarsMainLinks from "./SidebarsMainLinks";

const SidebarsMainA = () => {
  const linksA = [
    {
      id: 1,
      active: true,
      textWhite: false,
      dark: false,
      ariaCurrent: "page",
      useSVG: "#home",
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      active: false,
      textWhite: true,
      dark: false,
      ariaCurrent: "",
      useSVG: "#speedometer2",
      label: "Dashboard",
      link: "/",
    },
    {
      id: 3,
      active: false,
      textWhite: true,
      dark: false,
      ariaCurrent: "",
      useSVG: "#table",
      label: "Orders",
      link: "/",
    },
    {
      id: 4,
      active: false,
      textWhite: true,
      dark: false,
      ariaCurrent: "",
      useSVG: "#grid",
      label: "Products",
      link: "/",
    },
    {
      id: 5,
      active: false,
      textWhite: true,
      dark: false,
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
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use href="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <SidebarsMainLinks links={linksA} />
      <hr />
      <SidebarsMainDropdown
        dark={true}
        links={linksB}
        image={"https://github.com/mdo.png"}
        text={"mdo"}
      />
    </div>
  );
};

export default SidebarsMainA;
