import React,{useState} from "react";
import SearchBar from "./SearchBar";
import ImageCards from "./ImageCards";

const Gallery = () => {
  const [query, setQuery] = useState("nature");
  return (
    <>
      <div className="gallery" style={{ minHeight: "75vh" }}>
        <SearchBar setQuery={setQuery} />
        <ImageCards query={query} />
      </div>
    </>
  );
};

export default Gallery;
