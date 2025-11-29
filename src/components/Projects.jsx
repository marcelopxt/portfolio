import React from 'react';
import { ExternalLink, ShoppingCart, CheckSquare, Laptop, Github, Globe } from 'lucide-react';
import './Projects.css';
export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <div className="projects-header-flex">
          <div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem', lineHeight: 1.2 }}>
              Projetos em Destaque
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>Trabalhos recentes que demonstram minhas habilidades</p>
          </div>
          <a href="https://github.com/marcelopxt" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, paddingBottom: '5px' }}>
            Ver Github <ExternalLink size={18} />
          </a>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-thumb thumb-1">
              <div className="thumb-icon"><ShoppingCart /></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">E-Commerce Base</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Plataforma completa de comércio de peças artesanais com sistema de login, frete, carrinho e pagamentos.
              </p>
              <div className="project-tags">
                <span className="project-tag">PHP</span>
                <span className="project-tag">Laravel</span>
                <span className="project-tag">JS</span>
                <span className="project-tag">MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/marcelopxt/Ceramica" className="link-item">
                  <Github size={16} /> Código
                </a>
                <a href="#" className="link-item">
                  <Globe size={16} /> Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-thumb thumb-2">
              <div className="thumb-icon"><CheckSquare /></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Gerenciador de Notas</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Gestor de anotações para organizar com tags e ter acesso rápido a estatísticas sobre elas.
              </p>
              <div className="project-tags">
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Express</span>
                <span className="project-tag">Javascript</span>
                <span className="project-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/marcelopxt/Notas" className="link-item">
                  <Github size={16} /> Código
                </a>
                <a href="#" className="link-item">
                  <Globe size={16} /> Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-thumb thumb-3">
              <div className="thumb-icon"><Laptop /></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Aplicação Java desktop / API Laravel</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                API desenvolvida em Laravel para gerenciar alunos e uma aplicação Java Desktop que consome essa API para realizar operações de CRUD.
              </p>
              <div className="project-tags">
                <span className="project-tag">Java</span>
                <span className="project-tag">PHP</span>
                <span className="project-tag">Java Swing</span>
                <span className="project-tag">Laravel</span>
                <span className="project-tag">MySQL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/marcelopxt/Projeto_aplicacao_Java_com_API" className="link-item">
                  <Github size={16} /> Código
                </a>
                <a href="#" className="link-item">
                  <Globe size={16} /> Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}