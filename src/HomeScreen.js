import React from "react";
import Banner from "./Banner";
import About from "./About";
import Resume from "./Resume";
import Nav from "./Nav";
import Works from "./Works";
import Contacts from "./Contacts";
import Footer from "./Footer";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <About />
      <Resume />
      <Works />
      <Contacts />
      <Footer />
    </div>
  );
}

export default HomeScreen;
