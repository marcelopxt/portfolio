import React from 'react';
import './Skills.css'; // Certifique-se de usar o CSS atualizado acima
import { Layout, Server, Database } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Tech Stack</h2>
          <p style={{ color: 'var(--text-muted)' }}>As ferramentas que uso para construir o futuro</p>
        </div>

        <div className="skills-grid">
          
          {/* FRONTEND */}
          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon-box">
                <Layout size={28} />
              </div>
              <h3>Frontend</h3>
            </div>
            
            <div className="tech-grid">
              {/* React */}
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React</span>
              </div>
              {/* JS */}
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
                <span>Javascript</span>
              </div>
              {/* Bootstrap */}
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                <span>Bootstrap</span>
              </div>
               {/* HTML/CSS (Opcional) */}
               <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                <span>CSS3</span>
              </div>
            </div>
          </div>

          {/* BACKEND */}
          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon-box" style={{ color: '#34d399', background: 'rgba(52, 211, 153, 0.1)' }}>
                <Server size={28} />
              </div>
              <h3>Backend</h3>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                <span>PHP</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" />
                <span>Laravel</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                <span>Java</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" />
                <span>Node.js</span>
              </div>
            </div>
          </div>

          {/* DEVOPS & DB */}
          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon-box" style={{ color: '#c084fc', background: 'rgba(192, 132, 252, 0.1)' }}>
                <Database size={28} />
              </div>
              <h3>Data & Ops</h3>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                <span>MySQL</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <span>Git</span>
              </div>
               {/* Exemplo Genérico para CI/CD pois não tem ícone único */}
               <div className="tech-item">
                <div style={{width:'32px', height:'32px', background:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px', color:'#000', fontWeight:'bold'}}>CI</div>
                <span>CI/CD</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}