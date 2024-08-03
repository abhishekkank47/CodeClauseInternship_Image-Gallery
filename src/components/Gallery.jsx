import React from "react";
import SearchBar from "./SearchBar";
import ImageCards from "./ImageCards";

const Gallery = () => {
  return (
    <>
      <div className="gallery" style={{ minHeight: "75vh" }}>
        <SearchBar />
        <div className="d-flex flex-wrap cardsBlock">
          <ImageCards />
          <ImageCards />
          <ImageCards />
          <ImageCards />
          <ImageCards />
          <ImageCards />
          <ImageCards />
          <ImageCards />
          <ImageCards />
        </div>
      </div>
    </>
  );
};

export default Gallery;
