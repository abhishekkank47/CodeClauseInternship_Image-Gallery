import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "../Gallery";

const Layout = ({ childern }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "75vh" }}>
        <Gallery />
        {childern}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
