import React from 'react';
import { Layout, Server, Database } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  return (
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
  );
}