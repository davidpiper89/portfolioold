import React from "react";
import "./Header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <section className="header_container">
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
