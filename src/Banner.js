import React from "react";
import "./Banner.css";
//import background from "./BDYH3660.jpg";
import Effect from "./Effect";
import Typewriter from "typewriter-effect";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

function Banner() {
  return (
    <div
      id="Home"
      className="banner"
      style={{
        backgroundSize: "cover",

        backgroundPosition: "centre centre",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title ">
          <Typewriter
            options={{
              strings: ["I'm Prashant Parashar"],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
          {/* <span className="first"> Prashant </span>
          <span className="second">Parashar</span> */}
        </h1>
        <h2 className="banner_desc">
          {<Effect name="Student" />},
          <span className="devEffect"> Developer</span>,{" "}
          {<Effect name="Investor" />}
        </h2>

        <h2 className="socialMedia">
          <a href="https://www.instagram.com/brainstorm_1999/">
            <FaInstagram style={{ padding: "8px", color: "white" }} />
          </a>
          <a href="https://github.com/sirparashar">
            <FaGithub style={{ padding: "8px", color: "white" }} />
          </a>
          <a href="https://www.linkedin.com/in/sirparashar/">
            <FaLinkedin style={{ padding: "8px", color: "white" }} />
          </a>
          <a href="https://www.facebook.com/sp9691919955/">
            <FaFacebook style={{ padding: "8px", color: "white" }} />
          </a>
        </h2>
      </div>
      <div className="arrowdown">
        <a href="#About">
          <h2>
            <IoIosArrowDropdown
              style={{
                fontSize: "1.5em",
                bottom: "0",

                borderRadius: "50%",
              }}
            />
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Banner;
