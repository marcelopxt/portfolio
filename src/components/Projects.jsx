import React from 'react';
import './Projects.css';
import { Github, ExternalLink, Folder } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Base",
      description: "Plataforma completa de comércio com sistema de carrinho, cálculo de frete e painel administrativo.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      links: {
        code: "https://github.com/marcelopxt/Ceramica",
        demo: "#"
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Gerenciador de Notas",
      description: "App de produtividade para organização pessoal com sistema de tags, busca rápida e modo escuro.",
      tags: ["Node.js", "Express", "MongoDB", "React"],
      links: {
        code: "https://github.com/marcelopxt/Notas",
        demo: "#"
      },
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Sistema Escolar & API",
      description: "Integração complexa entre uma API RESTful em Laravel e um cliente Desktop Java Swing.",
      tags: ["Java", "Laravel", "API REST", "Swing"],
      links: {
        code: "https://github.com/marcelopxt/Projeto_aplicacao_Java_com_API",
        demo: "#"
      },
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "teste",
      description: "Plataforma completa de comércio com sistema de carrinho, cálculo de frete e painel administrativo.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      links: {
        code: "https://github.com/marcelopxt/Ceramica",
        demo: "#"
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projetos">
      <div className="container">
        
        {/* Header da Seção */}
        <div className="projects-header">
          <div className="header-content">
            <h2>Projetos em Destaque</h2>
            <p>Uma seleção do que tenho construído recentemente</p>
          </div>
          <a 
            href="https://github.com/marcelopxt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link-btn"
          >
            <Github size={20} />
            Ver todos no Github
          </a>
        </div>

        {/* Grid de Cards */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              {/* Imagem com Overlay */}
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <Folder size={40} strokeWidth={1.5} />
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                
                {/* Tags */}
                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tech-pill">{tag}</span>
                  ))}
                </div>

                {/* Botões de Ação */}
                <div className="card-actions">
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="btn-code">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.links.demo} className="btn-demo" title="Demo Indisponível (Em breve)">
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}