import React from "react";
import "./Portfolio.css";
import Projects from "./Projects";
import OtherProjects from "./OtherProjects"

const Portfolio = () => {
  return (
    <section className="section_container portfolio" id="portfolio">
      <h1 className="portfolio_title">Portfolio</h1>
      <Projects />
      <OtherProjects />
    </section>
  );
};

export default Portfolio;
