import React from "react";
import AlbumMainCardButton from "./AlbumMainCardButton";
import AlbumMainCardSVG from "./AlbumMainCardSVG";

const AlbumMainCard = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <AlbumMainCardSVG />
        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <AlbumMainCardButton text={"View"} />
              <AlbumMainCardButton text={"Edit"} />
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumMainCard;
