import React from "react";
import NavbarComponent from "./NavbarComponent";
import Hero from "./Hero";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <NavbarComponent name="Sign In" />
      <Hero />
      <Footer />
    </>
  );
}

export default Home;
