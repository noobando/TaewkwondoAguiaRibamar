import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Classes from "./components/Classes";
import Sobre from "./components/About";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Academia de Taekwondo do Riba";
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Classes />
      <Sobre />
      <Benefits />
      <Testimonials />
      <Schedule />
      <Gallery />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;