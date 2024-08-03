import React from "react";
import SearchBar from "./SearchBar";
import ImageCards from "./ImageCards";

const Gallery = () => {
  return (
    <>
      <div className="gallery" style={{ minHeight: "75vh" }}>
        <SearchBar />
        <ImageCards />
      </div>
    </>
  );
};

export default Gallery;
