import React from "react";
import useLenis from "./hooks/useLenis";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // Initialize Lenis for smooth scrolling
  useLenis();

  return (
    <div className="bg-gradient-to-b from-gray-950 to-black text-white font-inter">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
