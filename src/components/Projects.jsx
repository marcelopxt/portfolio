import React, { useState } from "react";
import "./Projects.css";
import {
  Github,
  ExternalLink,
  Folder,
  X,
  Image as ImageIcon,
} from "lucide-react";

export default function Projects() {
  // Estado para controlar qual projeto está aberto no modal
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
        demo: "#",
      },
      // Imagem de capa
      image: "src/assets/ceramica/pagina_cadastro.png",
      screenshots: [
        {
          url: "src/assets/ceramica/pagina_inicial.png",
          title: "Página Inicial",
        },
        {
          url: "src/assets/ceramica/pagina_cadastro.png",
          title: "Cadastro de Usuário",
        },
        {
          url: "src/assets/ceramica/pagina_login.png",
          title: "Tela de Login",
        },
        {
          url: "src/assets/ceramica/pagina_produtos.png",
          title: "Catálogo de Produtos",
        },
        {
          url: "src/assets/ceramica/pagina_produto.png",
          title: "Detalhes do Produto",
        },
        {
          url: "src/assets/ceramica/carrinho.png",
          title: "Carrinho de Compras",
        },
        {
          url: "src/assets/ceramica/pagina_sobre.png",
          title: "Página Sobre",
        },
        {
          url: "src/assets/ceramica/footer.png",
          title: "Rodapé e Links",
        },
      ],
    },
    {
      id: 2,
      title: "Sistema Escolar & API",
      description:
        "Integração complexa entre uma API RESTful em Laravel e um cliente Desktop Java Swing.",
      tags: ["Java", "Laravel", "API REST", "Swing"],
      links: {
        code: "https://github.com/marcelopxt/Projeto_aplicacao_Java_com_API",
        demo: "#",
      },
      image: "src/assets/java_api/index.png",
      screenshots: [
        { url: "src/assets/java_api/index.png", title: "Tela Inicial Java" },
        { url: "src/assets/java_api/new.png", title: "Novo Registro" },
        { url: "src/assets/java_api/edit.png", title: "Edição de Dados" },
        { url: "src/assets/java_api/delete.png", title: "Exclusão de Registro" },
        { url: "src/assets/java_api/api_get.png", title: "Rota API: GET" },
        { url: "src/assets/java_api/api_post.png", title: "Rota API: POST" },
        { url: "src/assets/java_api/api_put.png", title: "Rota API: PUT" },
        { url: "src/assets/java_api/api_delete.png", title: "Rota API: DELETE" },
      ],
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Impede o scroll da página de fundo
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Libera o scroll
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
                style={{ cursor: "pointer" }}
              >
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <div className="view-gallery">
                    <ImageIcon size={32} />
                    <span>Ver Galeria</span>
                  </div>
                </div>
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
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-code"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href={project.links.demo}
                    className="btn-demo"
                    title="Demo Indisponível (Em breve)"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MODAL (Lightbox) --- */}
        {selectedProject && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
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
                        <img
                          src={shot.url}
                          alt={shot.title}
                          loading="lazy"
                        />
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