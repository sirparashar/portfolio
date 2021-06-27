import React from "react";
import "./Nav.css";
import { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";

function Nav() {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 700) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`navBar ${show && "navBlack"}`}>
      <ul className="listItems">
        <Scrollspy
          className="listItems"
          items={["Home", "About", "Resume", "Works", "Contacts"]}
          currentClassName="isCurrent"
        >
          <li>
            <a href="#Home"> Home</a>
          </li>
          <li>
            <a href="#About"> About</a>
          </li>
          <li>
            <a href="#Resume"> Resume</a>
          </li>
          <li>
            <a href="#Works"> Works</a>
          </li>
          <li>
            <a href="#Contacts"> Contacts</a>
          </li>
        </Scrollspy>
      </ul>
    </div>
  );
}

export default Nav;
