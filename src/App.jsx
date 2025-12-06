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
      {/* A Navbar fica fora do main pois é navegação global */}
      <Navbar scrollToId={scrollToId} />

      {/* Tag main envolve todo o conteúdo único da página */}
      <main>
        <Hero scrollToId={scrollToId} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* O Footer fica fora do main */}
      <Footer />

      {/* Botões flutuantes ficam fora do fluxo principal */}
      <WhatsAppBtn />
    </div>
  );
}

export default App;
