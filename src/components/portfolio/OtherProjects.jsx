import React from "react";
import "./Portfolio.css";

const OtherProjects = () => {
  return (
    <>
      <h2 className="other_projects_title">Other Projects</h2>
      <ul className="other_projects" id="other_projects">
        <li>
          <a className="link_other">Simpsons Class Based React.js (github)</a>
        </li>
        <li>
          <a className="link_other">Nowness site re-creation (github)</a>
          <p>*SASS, Flexbox, mixins</p>
        </li>
        <li>
          <a className="link"></a>
        </li>
      </ul>
    </>
  );
};

export default OtherProjects;
