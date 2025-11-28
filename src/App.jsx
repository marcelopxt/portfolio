import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Code2,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Layout,
  Server,
  Database,
  ExternalLink,
  ShoppingCart,
  CheckSquare,
  Laptop,
  Globe
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para navbar mudar de cor ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função de Scroll Suave ajustado para a altura da navbar
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="container flex justify-between items-center">
          <div className="logo" onClick={() => scrollToId('home')}>
            <Code2 color="var(--accent-primary)" style={{ marginRight: '0.5rem' }} />
            <span>Marcelo Peixoto</span>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links md-flex items-center gap-8">
            <button onClick={() => scrollToId('home')}>Home</button>
            <button onClick={() => scrollToId('sobre')}>Sobre</button>
            <button onClick={() => scrollToId('skills')}>Skills</button>
            <button onClick={() => scrollToId('projetos')}>Projetos</button>
            <button onClick={() => scrollToId('contato')}>Contato</button>
            <a
              href="https://drive.google.com/file/d/1GRQcvhXY1W27KW7rX1NEzlQjjvvwz0MW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
            >
              Resume / CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToId('home')}>Home</button>
          <button onClick={() => scrollToId('sobre')}>Sobre</button>
          <button onClick={() => scrollToId('skills')}>Skills</button>
          <button onClick={() => scrollToId('projetos')}>Projetos</button>
          <button onClick={() => scrollToId('contato')}>Contato</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero container">
        <div className="hero-content">
          <div className="badge">Disponível para novos projetos</div>
          <h1>
            Olá, eu sou <br />
            <span className="gradient-text">Desenvolvedor Fullstack</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Desenvolvedor Fullstack
          </h2>
          <p>
            Especialista em criar soluções web de alta performance. Do front-end elegante ao back-end robusto, transformo ideias complexas em código limpo.
          </p>

          <div className="hero-actions">
            <button onClick={() => scrollToId('projetos')} className="btn-primary">Ver Projetos</button>
            <button onClick={() => scrollToId('contato')} className="btn-secondary">Entrar em Contato</button>
          </div>

          <div className="social-links">
            <a href="https://github.com/marcelopxt" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/marcelopeixotodesouza" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:marcelopeixoto314@gmail.com">
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
              <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'monospace' }}>
                developer.js
              </span>
            </div>
            <div className="code-content">
              <div>
                <span className="c-purple">const</span> <span className="c-yellow">profile</span> <span className="c-gray">=</span> <span className="c-gray">{`{`}</span>
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span className="c-cyan">name:</span> <span className="c-green">'Marcelo'</span>,
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span className="c-cyan">role:</span> <span className="c-green">'Fullstack Dev'</span>,
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span className="c-cyan">skills:</span> <span className="c-gray">[</span>
              </div>
              <div style={{ paddingLeft: '3rem' }}>
                <span className="c-green">'PHP'</span>, <span className="c-green">'Laravel'</span>, <span className="c-green">'JS'</span>
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span className="c-gray">]</span>,
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span className="c-cyan">hireable:</span> <span className="c-orange">true</span>
              </div>
              <div className="c-gray">{'};'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
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

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div className="section-header">
            <h2>Tech Stack</h2>
            <p style={{ color: 'var(--text-muted)' }}>As principais tecnologias que domino</p>
          </div>

          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-box">
                  <Layout size={24} />
                </div>
                <h3>Frontend</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>

            {/* Backend */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-box" style={{ color: '#34d399' }}>
                  <Server size={24} />
                </div>
                <h3>Backend</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">Laravel</span>
                <span className="skill-tag">API REST</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Node.js</span>
              </div>
            </div>

            {/* Database */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-box" style={{ color: '#c084fc' }}>
                  <Database size={24} />
                </div>
                <h3>DevOps & DB</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos">
        <div className="container">
          {/* Cabeçalho Flex */}
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
            {/* Project 1 */}
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

            {/* Project 2 */}
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

            {/* Project 3 */}
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

      {/* CONTATO */}
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

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
            <a href="https://github.com/marcelopxt" style={{ color: 'var(--text-dim)' }}><Github /></a>
            <a href="https://linkedin.com/in/marcelopeixotodesouza" style={{ color: 'var(--text-dim)' }}><Linkedin /></a>
          </div>
          <p>&copy; 2025 Marcelo Peixoto. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;