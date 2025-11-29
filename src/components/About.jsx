import React from "react";
import "./About.css";
import avatarImage from "../assets/marcelo-pixel.png";

export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="section-header">
          <h2>Sobre Mim</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          {/* Lado Esquerdo: Personagem Pixel Art (Agora vem primeiro) */}
          <div className="about-visual">
            <div className="pixel-art-wrapper">
              {/* Troque pelo seu arquivo local quando tiver */}
              <div className="pixel-art-wrapper">
                <img
                  src={avatarImage}
                  alt="Pixel Art Programmer"
                  className="pixel-avatar"
                />
                <div className="pixel-glow"></div>
              </div>
              <div className="pixel-glow"></div>
            </div>
          </div>

          {/* Lado Direito: Texto */}
          <div className="about-text-content">
            <div className="about-card">
              <p className="highlight-p">
                Sou um desenvolvedor apaixonado por transformar linhas de código
                em soluções reais.
              </p>
              <p>
                Com experiência sólida tanto no <strong>Frontend</strong> quanto
                no <strong>Backend</strong>, meu foco é sempre entregar a melhor
                experiência possível para o usuário final, sem sacrificar a
                performance e a escalabilidade.
              </p>
              <p>
                Atualmente, estou me aprofundando em arquiteturas de
                microsserviços e explorando novas formas de otimizar aplicações
                web complexas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
