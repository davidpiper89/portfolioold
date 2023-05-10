import React from "react";
import "./Nav.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const NavLink = ({ href, children, ...props }) => (
  <a className="nav_link" href={href} {...props}>
    <li>{children}</li>
  </a>
);

const Nav = () => {
  return (
    <>
      <ul className="nav_list">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#other_projects">Other Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>

        <ul className="icons">
          <NavLink
            href="https://www.linkedin.com/in/david-piper-47911225b/"
            target="_blank"
            rel="noreferrer"
            aria-label="link to my LinkedIn"
          >
            <BsLinkedin />
          </NavLink>
          <NavLink
            href="https://github.com/davidpiper89"
            target="_blank"
            rel="noreferrer"
            aria-label="link to my GitHub"
          >
            <BsGithub />
          </NavLink>
        </ul>
      </ul>
    </>
  );
};

export default Nav;
