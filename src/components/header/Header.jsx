import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ThreeCube from "../../ThreeDLogo.js";

const Header = () => {
  const containerStyle = {
    width: "200px",
    height: "200px",
    overflow: "hidden",
  };
  return (
    <header>
      <section className="header_container">
        <div style={containerStyle}>
          <ThreeCube />
        </div>
        <h1 className="title">
          <span className="sub">Hello I'm</span>
          <span>David Piper</span>
          <span className="sub">Software Engineer</span>
        </h1>
        <CTA />
      </section>
    </header>
  );
};

export default Header;
