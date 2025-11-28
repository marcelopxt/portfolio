import React from 'react';
import './App.css';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  // Função de Scroll Suave
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
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