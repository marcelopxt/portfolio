import React, { useState } from "react";
import "./Projects.css";
import {
  Github,
  ExternalLink,
  Folder,
  X,
  Image as ImageIcon,
} from "lucide-react";

// --- Importação das Imagens do Projeto Cerâmica ---
import ceramicaInicial from "../assets/ceramica/pagina_inicial.webp";
import ceramicaCadastro from "../assets/ceramica/pagina_cadastro.webp";
import ceramicaLogin from "../assets/ceramica/pagina_login.webp";
import ceramicaProdutos from "../assets/ceramica/pagina_produtos.webp";
import ceramicaProduto from "../assets/ceramica/pagina_produto.webp";
import ceramicaCarrinho from "../assets/ceramica/carrinho.webp";
import ceramicaSobre from "../assets/ceramica/pagina_sobre.webp";
import ceramicaFooter from "../assets/ceramica/footer.webp";

// --- Importação das Imagens do Projeto Java API ---
import javaIndex from "../assets/java_api/index.png";
import javaNew from "../assets/java_api/new.png";
import javaEdit from "../assets/java_api/edit.png";
import javaDelete from "../assets/java_api/delete.png";
import javaApiGet from "../assets/java_api/api_get.png";
import javaApiPost from "../assets/java_api/api_post.png";
import javaApiPut from "../assets/java_api/api_put.png";
import javaApiDelete from "../assets/java_api/api_delete.png";

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
        demo: "https://projetoceramica.marcelopxt.dev/",
      },
      // Usando a variável importada
      image: ceramicaCadastro, 
      screenshots: [
        {
          url: ceramicaInicial,
          title: "Página Inicial",
        },
        {
          url: ceramicaCadastro,
          title: "Cadastro de Usuário",
        },
        {
          url: ceramicaLogin,
          title: "Tela de Login",
        },
        {
          url: ceramicaProdutos,
          title: "Catálogo de Produtos",
        },
        {
          url: ceramicaProduto,
          title: "Detalhes do Produto",
        },
        {
          url: ceramicaCarrinho,
          title: "Carrinho de Compras",
        },
        {
          url: ceramicaSobre,
          title: "Página Sobre",
        },
        {
          url: ceramicaFooter,
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
      image: javaIndex,
      screenshots: [
        { url: javaIndex, title: "Tela Inicial Java" },
        { url: javaNew, title: "Novo Registro" },
        { url: javaEdit, title: "Edição de Dados" },
        { url: javaDelete, title: "Exclusão de Registro" },
        { url: javaApiGet, title: "Rota API: GET" },
        { url: javaApiPost, title: "Rota API: POST" },
        { url: javaApiPut, title: "Rota API: PUT" },
        { url: javaApiDelete, title: "Rota API: DELETE" },
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
