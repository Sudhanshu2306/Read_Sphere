import React from "react";
import Navbar from "../src/components/Navbar";
import About from "../src/components/About";
import Footer from "../src/components/Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="display flex w-full h-screen items-center">
        <About />
      </div>
      <Footer className='' />
    </>
  );
}

export default AboutUs;