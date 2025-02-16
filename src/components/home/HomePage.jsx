import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Steps from "./Steps";
import Footer from "./footer/Footer";
import UpperCarousel from "./UpperCarousel";
import SecondCarousel from "./SecondCarousel";

const HomePage = () => {
  return (
    <div>
      <Navigation></Navigation>
      <UpperCarousel></UpperCarousel>
      <Steps></Steps>
      <SecondCarousel></SecondCarousel>
      <Hero></Hero>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
