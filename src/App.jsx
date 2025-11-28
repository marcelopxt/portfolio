import React from "react";
import "./App.css";

// Component Imports
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
      // O CSS (scroll-margin-top) já cuida do offset da navbar agora
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Alinha o topo do elemento com o topo da tela (respeitando a margem)
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
