import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppBtn from "./components/WhatsAppBtn";

function App() {
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToId={scrollToId} />
      <Hero scrollToId={scrollToId} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
