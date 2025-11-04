import About from "./components/About";
import ClientsTestimonials from "./components/ClientsTestimonials";
import HeroSection from "./components/HeroSection";
import HeroVideo from "./components/HeroVideo";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import OurClients from "./components/OurClients";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
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
      <Services />
      <ClientsTestimonials />
      <Testimonials />
      <Latest />
      <HeroVideo />
    </>
  );
}
