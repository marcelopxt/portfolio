import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ scrollToId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    scrollToId(id);
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <div className="container flex justify-between items-center">
        <div className="logo" onClick={() => handleLinkClick('home')}>
          <Code2 color="var(--accent-primary)" style={{ marginRight: '0.5rem' }} />
          <span>Marcelo Peixoto</span>
        </div>

        <div className="nav-links md-flex items-center gap-8">
          <button onClick={() => scrollToId('home')}>Home</button>
          <button onClick={() => scrollToId('sobre')}>Sobre</button>
          <button onClick={() => scrollToId('skills')}>Skills</button>
          <button onClick={() => scrollToId('projetos')}>Projetos</button>
          <button onClick={() => scrollToId('contato')}>Contato</button>
          <a
            href="https://drive.google.com/file/d/16i1kJkiZx1MagGnBYfO8QAh3LlcSiY1w/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
          >
            Resume / CV
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu de navegação"
          aria-labelledby="labeldiv"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => handleLinkClick('home')}>Home</button>
        <button onClick={() => handleLinkClick('sobre')}>Sobre</button>
        <button onClick={() => handleLinkClick('skills')}>Skills</button>
        <button onClick={() => handleLinkClick('projetos')}>Projetos</button>
        <button onClick={() => handleLinkClick('contato')}>Contato</button>
      </div>
    </nav>
  );
}