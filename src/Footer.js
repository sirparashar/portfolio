import React from "react";
import "./Footer.css";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <section>
      <div className="footer_container">
        <div className="socialMedia">
          <a href="https://www.instagram.com/brainstorm_1999/">
            <FaInstagram
              size={40}
              style={{ padding: "15px", color: "white" }}
            />
          </a>
          <a href="https://github.com/sirparashar">
            <FaGithub size={40} style={{ padding: "15px", color: "white" }} />
          </a>
          <a href="https://www.linkedin.com/in/prashant-parashar-789b5a1ba/">
            <FaLinkedin size={40} style={{ padding: "15px", color: "white" }} />
          </a>
          <a href="https://www.facebook.com/sp9691919955/">
            <FaFacebook size={40} style={{ padding: "15px", color: "white" }} />
          </a>
        </div>
        <h3>Developed by Prashant Parashar </h3>
      </div>
    </section>
  );
}

export default Footer;
