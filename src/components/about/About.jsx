import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="section_container about" id="about">
      <h1 className="about_title">About me</h1>
      <div className="about_content">
        <p>
          A full stack web developer having completed The Jump Digital's
          School's Professional Software Engineering Bootcamp. Combined with a
          5+ year history of working within the NHS.
        </p>
        <p>
          See &nbsp;
          <a
            className="link"
            href="https://www.thejump.tech/"
            target="_blank"
            rel="noreferrer"
          >
            The Jump Digital School Website
          </a>
        </p>
        <p>
          I have learned front end skills in HTML5, CSS / SASS, JavaScipt and
          TypeScript. Backend skills include the use Node.js, Express, SQL,
          NoSQL. Along with others. Worked with a team and individually using
          the JavaScript library 'React.js'.
        </p>
        <p>
          I have really enjoyed working on these projects and hope I can work on
          one with you!
        </p>
      </div>
    </section>
  );
};

export default About;
