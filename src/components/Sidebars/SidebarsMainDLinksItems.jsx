import React from "react";
import SidebarsMainDLinksItemsSub from "./SidebarsMainDLinksItemsSub";

const SidebarsMainDLinksItems = ({
  items,
  label,
  target,
  expanded,
  divider,
}) => {
  return divider ? (
    <li className="border-top my-3"></li>
  ) : (
    <li className="mb-1">
      <button
        className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
        data-bs-toggle="collapse"
        data-bs-target={`#${target}`}
        aria-expanded={expanded ? "true" : "false"}
      >
        {label}
      </button>
      <div
        className={`${expanded ? "collapse show" : "collapse"}`}
        id={`${target}`}
      >
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {items.map((item) => (
            <SidebarsMainDLinksItemsSub
              key={item.id}
              label={item.label}
              link={item.link}
            />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default SidebarsMainDLinksItems;
