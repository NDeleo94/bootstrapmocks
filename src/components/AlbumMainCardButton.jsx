import React from "react";

const AlbumMainCardButton = ({ text }) => {
  return (
    <button type="button" className="btn btn-sm btn-outline-secondary">
      {text}
    </button>
  );
};

export default AlbumMainCardButton;
