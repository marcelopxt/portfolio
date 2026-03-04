import React, { useState } from "react";
import "./Projects.css";
import {
  Github,
  ExternalLink,
  X,
  Image as ImageIcon,
  Wrench,
} from "lucide-react";

import ceramicaInicial from "../assets/ceramica/pagina_inicial.webp";
import ceramicaCadastro from "../assets/ceramica/pagina_cadastro.webp";
import ceramicaLogin from "../assets/ceramica/pagina_login.webp";
import ceramicaProdutos from "../assets/ceramica/pagina_produtos.webp";
import ceramicaProduto from "../assets/ceramica/pagina_produto.webp";
import ceramicaCarrinho from "../assets/ceramica/carrinho.webp";
import ceramicaSobre from "../assets/ceramica/pagina_sobre.webp";
import ceramicaFooter from "../assets/ceramica/footer.webp";

import proativaIndex from "../assets/proativa/index.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Base",
      description:
        "Plataforma completa de comércio com sistema de carrinho, cálculo de frete e painel administrativo.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      links: {
        code: "https://github.com/marcelopxt/Ceramica",
        demo: null,
      },
      image: ceramicaCadastro,
      screenshots: [
        { url: ceramicaInicial, title: "Página Inicial" },
        { url: ceramicaCadastro, title: "Cadastro de Usuário" },
        { url: ceramicaLogin, title: "Tela de Login" },
        { url: ceramicaProdutos, title: "Catálogo de Produtos" },
        { url: ceramicaProduto, title: "Detalhes do Produto" },
        { url: ceramicaCarrinho, title: "Carrinho de Compras" },
        { url: ceramicaSobre, title: "Página Sobre" },
        { url: ceramicaFooter, title: "Rodapé e Links" },
      ],
    },
    {
      id: 2,
      title: "Site Institucional Proativa",
      description:
        "Plataforma comercial para clínica de Saúde e Segurança do Trabalho (SST), focada na conversão e exposição de serviços como consultoria e medicina ocupacional.",
      tags: ["React", "Vite", "Tailwind CSS"],
      links: {
        code: "https://github.com/marcelopxt/reforma-proativa",
        demo: "https://proativa.netlify.app",
      },
      image: proativaIndex,
      screenshots: [{ url: proativaIndex, title: "Página Inicial" }],
    },
    {
      id: 3,
      title: "Projeto em Construção",
      description:
        "Em breve um novo projeto estará disponível para visualização. Trabalhando em novas soluções e aprimorando habilidades.",
      tags: ["Em Breve"],
      links: {
        code: null,
        demo: null,
      },
      image: null, // Definido como null para acionar o placeholder
      screenshots: [],
    },
  ];

  const handleOpenModal = (project) => {
    if (!project.screenshots || project.screenshots.length === 0) return;

    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projetos">
      <div className="container">
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

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="card-image-wrapper"
                onClick={() => handleOpenModal(project)}
                style={{
                  cursor:
                    project.screenshots && project.screenshots.length > 0
                      ? "pointer"
                      : "default",
                }}
              >
                {/* Renderização condicional da imagem ou do placeholder */}
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "220px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        "#1e293b" /* Tom escuro, ajuste conforme seu CSS */,
                      color: "#64748b",
                    }}
                  >
                    <Wrench size={48} style={{ marginBottom: "10px" }} />
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      Em Construção
                    </span>
                  </div>
                )}

                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="card-overlay">
                    <div className="view-gallery">
                      <ImageIcon size={32} />
                      <span>Ver Galeria</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-actions">
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-code"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="btn-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <button className="close-btn" onClick={handleCloseModal}>
                  <X size={24} />
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-desc">{selectedProject.description}</p>

                <div className="modal-gallery">
                  {selectedProject.screenshots &&
                    selectedProject.screenshots.map((shot, index) => (
                      <div key={index} className="gallery-item">
                        <h4 className="gallery-title">{shot.title}</h4>
                        <img src={shot.url} alt={shot.title} loading="lazy" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
