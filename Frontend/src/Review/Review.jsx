import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

function Review() {
  return (
    <>
      <Navbar />
      <div className=" w-full">
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default Review;