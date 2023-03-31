import React from "react";

import Header from "../landingPage/Header/Header";
import Hero from "../landingPage/Hero/Hero";
import Hello from "../landingPage/HowItWorks/Hello";
import Accept from "../landingPage/Card/Accept";
import GetStarted from "../landingPage/Header/GetStarted";
import Methods from "../landingPage/Methods/Methods";
import Footer from "../landingPage/Footer/Footer";

const HomeSreeen = () => {
  return (
    <div>
      <Header />
      <Hero />

      <Hello />
      <Accept />

      <GetStarted />
      <Methods />
      <Footer />
    </div>
  );
};

export default HomeSreeen;
