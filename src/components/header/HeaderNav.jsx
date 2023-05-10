import React, { useState } from "react";
import logo from "../../assets/logo.png";
import close from "../../assets/close.svg";
import "./Header.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactInfo = ({ icon: Icon, link, value, className }) => (
  <li className={className}>
    <Icon className="hide-on-mobile" />
    <a
      className="contact_link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {value}
    </a>
  </li>
);

const HeaderNav = () => {
  const [toggle, setToggle] = useState(false);
  const email = "davidpiper1989@gmail.com";
  const phoneNumber = "07949324851";

  return (
    <>
      <ul className="header_nav_cont">
        <ContactInfo
          icon={MdEmail}
          link={`mailto:${email}`}
          value={email}
          className={`email ${toggle ? "open" : ""}`}
        />
        <ContactInfo
          icon={BsFillTelephoneFill}
          link={`tel:${phoneNumber}`}
          value={phoneNumber}
          className={`phone ${toggle ? "open" : ""}`}
        />

        <img
          src={toggle ? close : logo}
          alt=""
          height="25px"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </ul>
    </>
  );
};

export default HeaderNav;
