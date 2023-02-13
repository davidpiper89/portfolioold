import React from "react";
import CV from "./../../assets/CV.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn_secondary">
        Contact
      </a>
    </div>
  );
};

export default CTA;
