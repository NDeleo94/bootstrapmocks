import React from "react";
import AlbumHeaderContactItem from "./AlbumHeaderContactItem";

const AlbumHeaderContact = () => {
  return (
    <div className="col-sm-4 offset-md-1 py-4">
      <h4 className="text-white">Contact</h4>
      <ul className="list-unstyled">
        <AlbumHeaderContactItem text={"Follow on Twitter"} link={"/"} />
        <AlbumHeaderContactItem text={"Like on Facebook"} link={"/"} />
        <AlbumHeaderContactItem text={"Email me"} link={"/"} />
      </ul>
    </div>
  );
};

export default AlbumHeaderContact;
