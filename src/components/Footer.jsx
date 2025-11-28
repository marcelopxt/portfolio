import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import './Footer.css';
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
          <a href="https://github.com/marcelopxt" style={{ color: 'var(--text-dim)' }}><Github /></a>
          <a href="https://linkedin.com/in/marcelopeixotodesouza" style={{ color: 'var(--text-dim)' }}><Linkedin /></a>
        </div>
        <p>&copy; 2025 Marcelo Peixoto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}