import React from "react";
import "./Nav.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <ul className="nav_list">
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#portfolio">
          <li>Portfolio</li>
        </a>
        <a href="#other_projects">
          <li>Other Projects</li>
        </a>
        <a href="contact">
          <li>Contact </li>
        </a>
      </ul>
      <ul className="icons">
        <a href="https://www.linkedin.com/in/david-piper-47911225b/" target="_blank">
          <li>
            <BsLinkedin />
          </li>
        </a>
        <a href="https://github.com/davidpiper89" target="_blank">
          <li>
            <BsGithub />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/david-piper-47911225b/" target="_blank">
          <li>
            <AiOutlineMail />
          </li>
        </a>
      </ul>
    </>
  );
};

export default Nav;
