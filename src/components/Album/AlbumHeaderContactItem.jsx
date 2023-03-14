import React from "react";

const AlbumHeaderContactItem = ({ text, link }) => {
  return (
    <li>
      <a href={link} className="text-white">
        {text}
      </a>
    </li>
  );
};

export default AlbumHeaderContactItem;
