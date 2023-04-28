import React, { useState } from "react";
import logo from "../../assets/logo.png";
import close from "../../assets/close.svg";
import "./Header.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const HeaderNav = () => {
  const [toggle, setToggle] = useState(false);
  const email = "davidpiper1989@gmail.com";
  const phoneNumber = "07949324851";

  return (
    <>
      <ul className="header_nav_cont">
        <li className={`email ${toggle ? "open" : ""}`}>
          <MdEmail />
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            {email}
          </a>
        </li>
        <li className={`phone ${toggle ? "open" : ""}`}>
        <BsFillTelephoneFill />
          <a
            href={`tel:${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {phoneNumber}
          </a>
        </li>

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
