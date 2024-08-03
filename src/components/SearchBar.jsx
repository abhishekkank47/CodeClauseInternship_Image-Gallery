import React from "react";

const SearchBar = () => {
  return (
    <>
      {/* Serach Bar Components*/}
      <center>
        <form className="d-flex w-50 mb-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Image By Categories"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </center>
      {/* Serach Bar Components*/}
    </>
  );
};

export default SearchBar;
