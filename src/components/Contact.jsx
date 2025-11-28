import React from 'react';
import { Mail } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contato" className="container">
      <div className="contact-box">
        <div className="contact-glow" style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', transform: 'translate(30%, -30%)', pointerEvents: 'none' }}></div>

        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
          Vamos criar algo incrível?
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          Estou disponível para freelance e novas oportunidades. Se você tem um projeto em mente, entre em contato!
        </p>

        <a href="mailto:marcelopeixoto314@gmail.com" className="contact-btn" style={{ position: 'relative', zIndex: 10, display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.5rem', background: 'var(--accent-dark)', color: 'white', fontWeight: 700, borderRadius: '0.5rem', marginTop: '2.5rem', boxShadow: '0 10px 20px -5px rgba(6, 182, 212, 0.4)', transition: 'transform 0.2s' }}>
          <Mail />
          Mandar Email
        </a>
      </div>
    </section>
  );
}