import React from "react";
import { TfiGallery } from "react-icons/tfi";

const Header = () => {
  return (
    <>
      <div className="bg-black header" style={{minHeight:'10vh'}}>
        <h1><TfiGallery /> Image Gallery</h1>
      </div>
    </>
  );
};

export default Header;
