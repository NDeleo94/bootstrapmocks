import React from "react";

const SidebarsMainDLinksItemsSub = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="link-dark d-inline-flex text-decoration-none rounded"
      >
        {label}
      </a>
    </li>
  );
};

export default SidebarsMainDLinksItemsSub;
