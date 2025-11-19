import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import WhyVideo from "./components/WhyVideo";
import WhyUs from "./components/WhyUs";
import WeDo from "./components/WeDo";
import Team from "./components/Team";

const page = () => {
  return (
    <>
      <HeroSection />
      <About />
      <WhyVideo />
      <WhyUs />
      <WeDo />
      <Team />
    </>
  );
};

export default page;
