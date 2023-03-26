import React from "react";
import SidebarsMainELinks from "./SidebarsMainELinks";

const SidebarsMainE = () => {
  const links = [
    {
      id: 1,
      active: true,
      ariaCurrent: "true",
      link: "/",
      textHeading: "List group item heading",
      day: "Wed",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: false,
    },
    {
      id: 2,
      active: false,
      ariaCurrent: "",
      link: "/",
      textHeading: "List group item heading",
      day: "Tues",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 3,
      active: false,
      ariaCurrent: "",
      link: "/",
      textHeading: "List group item heading",
      day: "Mon",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 4,
      active: false,
      ariaCurrent: "true",
      link: "/",
      textHeading: "List group item heading",
      day: "Wed",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 5,
      active: false,
      ariaCurrent: "",
      link: "/",
      textHeading: "List group item heading",
      day: "Tues",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 6,
      active: false,
      ariaCurrent: "",
      link: "/",
      textHeading: "List group item heading",
      day: "Mon",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 7,
      active: false,
      ariaCurrent: "true",
      link: "/",
      textHeading: "List group item heading",
      day: "Wed",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 8,
      active: false,
      ariaCurrent: "",
      link: "/",
      textHeading: "List group item heading",
      day: "Tues",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 9,
      active: false,
      ariaCurrent: "",
      link: "/",
      textHeading: "List group item heading",
      day: "Mon",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 10,
      active: false,
      ariaCurrent: "true",
      link: "/",
      textHeading: "List group item heading",
      day: "Wed",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 11,
      active: false,
      ariaCurrent: "",
      link: "/",
      textHeading: "List group item heading",
      day: "Tues",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
    {
      id: 12,
      active: false,
      ariaCurrent: "",
      link: "/",
      textHeading: "List group item heading",
      day: "Mon",
      text: "Some placeholder content in a paragraph below the heading and date.",
      muted: true,
    },
  ];

  return (
    <div
      className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
      style={{ width: "380px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
      >
        <svg className="bi pe-none me-2" width="30" height="24">
          <use href="#bootstrap" />
        </svg>
        <span className="fs-5 fw-semibold">List group</span>
      </a>
      <div className="list-group list-group-flush border-bottom scrollarea">
        {links.map((link) => (
          <SidebarsMainELinks
            key={link.id}
            active={link.active}
            ariaCurrent={link.ariaCurrent}
            day={link.day}
            textHeading={link.textHeading}
            text={link.text}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarsMainE;
