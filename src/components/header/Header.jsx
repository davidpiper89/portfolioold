import React from "react";
import "./Header.css"
import CTA from "./CTA";

const Header = () => {
  return <header>
    <section className="header_container">
        <h2>Hello I'm</h2>
        <h1>David Piper</h1>
        <h2 className="text-light-color text-light-weight text-medium">Software Engineer</h2>
        <CTA />
    </section>
  </header>;
};

export default Header;
