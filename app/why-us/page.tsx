import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import WhyVideo from "./components/WhyVideo";
import WhyUs from "./components/WhyUs";
import WeDo from "./components/WeDo";
import Team from "./components/Team";
import OurValues from "./components/OurValues";
import Testimonials from "./components/Testimonials";
import OurCSR from "./components/OurCSR";

const page = () => {
  return (
    <>
      <HeroSection />
      <About />
      <WhyVideo />
      <WhyUs />
      <WeDo />
      <Team />
      <OurValues />
      <Testimonials />
      <OurCSR />
    </>
  );
};

export default page;
