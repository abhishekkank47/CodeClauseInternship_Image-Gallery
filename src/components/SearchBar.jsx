import React, { useState } from "react";

const SearchBar = ({setQuery}) => {
  const [text,setText]= useState('')
  //handle serach category

  const handleSearch = (e)=>{
    setText(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setQuery(text)
  }
  return (
    <>
      {/* Serach Bar Components*/}
      <center>
        <form className="d-flex w-50 mb-3" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            onChange={handleSearch}
            value={text}
            type="search"
            placeholder="Search Image By Categories"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </center>
      {/* Serach Bar Components*/}
    </>
  );
};

export default SearchBar;
