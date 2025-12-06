import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import "./Hero.css";
import TextScramble from "./TextScramble";

export default function Hero({ scrollToId }) {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <div className="badge">Disponível para novos projetos</div>
        <h1>
          <TextScramble text="Desenvolvedor" className="gradient-text" />
          <br />
          <TextScramble text="Fullstack" className="gradient-text" />
        </h1>
        <p>
          Especialista em criar soluções web de alta performance. Do front-end
          elegante ao back-end robusto, transformo ideias complexas em código
          limpo.
        </p>

        <div className="hero-actions">
          <button
            onClick={() => scrollToId("projetos")}
            className="btn-primary"
          >
            Ver Projetos
          </button>
          <button
            onClick={() => scrollToId("contato")}
            className="btn-secondary"
          >
            Entrar em Contato
          </button>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/marcelopxt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no Github"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/marcelopeixotodesouza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no Linkedin"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:marcelopeixoto314@gmail.com"
          aria-label="Enviar Email">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="code-visual">
        <div className="blur-orb orb-1"></div>
        <div className="blur-orb orb-2"></div>
        <div className="code-card">
          <div className="code-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
            <span
              style={{
                marginLeft: "auto",
                fontSize: "0.75rem",
                color: "var(--text-dim)",
                fontFamily: "monospace",
              }}
            >
              developer.js
            </span>
          </div>
          <div className="code-content">
            <div>
              <span className="c-purple">const</span>{" "}
              <span className="c-yellow">profile</span>{" "}
              <span className="c-gray">=</span>{" "}
              <span className="c-gray">{`{`}</span>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="c-cyan">name:</span>{" "}
              <span className="c-green">'Marcelo'</span>,
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="c-cyan">role:</span>{" "}
              <span className="c-green">'Fullstack Dev'</span>,
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="c-cyan">skills:</span>{" "}
              <span className="c-gray">[</span>
            </div>
            <div style={{ paddingLeft: "3rem" }}>
              <span className="c-green">'PHP'</span>,{" "}
              <span className="c-green">'Laravel'</span>,{" "}
              <span className="c-green">'JS'</span>
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="c-gray">]</span>,
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <span className="c-cyan">hireable:</span>{" "}
              <span className="c-orange">true</span>
            </div>
            <div className="c-gray">{"};"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
