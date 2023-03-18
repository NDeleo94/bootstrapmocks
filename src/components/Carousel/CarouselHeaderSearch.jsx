import React from "react";

const CarouselHeaderSearch = ({ buttonText }) => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default CarouselHeaderSearch;
