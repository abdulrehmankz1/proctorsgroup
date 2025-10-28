import About from "./components/About";
import HeroSection from "./components/HeroSection";
import HeroVideo from "./components/HeroVideo";
import Navbar from "./components/Navbar";
import OurClients from "./components/OurClients";
import WorkWidthUs from "./components/WorkWidthUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroVideo />
      <OurClients />
      <About />
      <WorkWidthUs />
    </>
  );
}
