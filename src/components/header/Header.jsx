import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ThreeCube from "../../ThreeDLogo.js";

const Header = () => {
  const containerStyle = {
    width: "300px",
    height: "300px",
    overflow: "hidden",
  };
  return (
    <header>
      <section className="header_container">
        <div style={containerStyle}>
          <ThreeCube />
        </div>
        <div className="header">
          <h1 className="title">
            <span className="sub">Hello I'm</span>
            David Piper
            <span className="sub">Software Engineer</span>
          </h1>
          <CTA />
        </div>
      </section>
    </header>
  );
};

export default Header;
