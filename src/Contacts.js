import React from "react";
import "./Contacts.css";
import image from "./images/contact.jpg";
import { useState } from "react";

function Contacts() {
  const contactEmail = "pprashant311999@gmail.com";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section id="Contacts">
      <div className="form_container">
        <div className="formcontent_left">
          <div className="form_img_gradient">
            <img src={image} alt="code" />
          </div>
        </div>
        <div className="formcontent_right">
          <form onSubmit={submitForm} className="form">
            <h1>Contact </h1>
            <div className="form_inputs">
              <label htmlFor="username" className="form_label">
                Name
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className="form_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form_inputs">
              <label htmlFor="email" className="form_label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_inputs">
              <label htmlFor="subject" className="form_label">
                Subject
              </label>
              <input
                id="subject"
                type="subject"
                name="subject"
                className="form_input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form_inputs">
              <label htmlFor="message" className="form_label">
                Message
              </label>
              <textarea
                id="message"
                type="message"
                name="message"
                className="form_input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="submit" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
