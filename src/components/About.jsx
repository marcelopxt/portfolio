import React from 'react';

export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="section-header">
          <h2>Sobre Mim</h2>
          <div style={{ width: '4rem', height: '4px', background: 'var(--accent-primary)', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        <div className="contact-box" style={{ padding: '3rem', textAlign: 'left', background: 'var(--bg-card)' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência sólida tanto no frontend quanto no backend, meu foco é sempre entregar a melhor experiência possível para o usuário final, sem sacrificar a qualidade do código.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
            Atualmente, estou me especializando em arquiteturas escaláveis e microsserviços. Acredito que o aprendizado contínuo é a chave para se manter relevante na área de tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}