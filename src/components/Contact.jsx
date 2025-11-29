import React, { useState } from 'react';
import './Contact.css';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Loader2, Check } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      // ⚠️ TROQUE "SEU_CODIGO_AQUI" PELO ID DO FORMSPREE
      const response = await fetch("https://formspree.io/f/movpajdd", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Limpa o formulário
        // Volta o botão ao normal após 4 segundos
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contato">
      <div className="container">
        
        <div className="contact-wrapper">
          
          {/* Lado Esquerdo: Infos (Visual Antigo) */}
          <div className="contact-info">
            <div className="info-header">
              <h2 className="section-title">Vamos Conversar?</h2>
              <p className="section-desc">
                Tem um projeto em mente ou quer apenas bater um papo sobre tecnologia? 
                Estou sempre aberto a novas oportunidades e desafios.
              </p>
            </div>

            <div className="info-details">
              <div className="detail-item">
                <div className="icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>marcelopeixoto314@gmail.com</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3>Localização</h3>
                  <p>Brasil (Remoto)</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <p>Me encontre nas redes:</p>
              <div className="social-icons">
                <a href="https://github.com/marcelopxt" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/marcelopeixotodesouza" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com/marcelo.pxt_" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Seu Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Como devo te chamar?" 
                  required 
                  disabled={status === 'sending' || status === 'success'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Seu Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="exemplo@email.com" 
                  required 
                  disabled={status === 'sending' || status === 'success'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Sua Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Me conte sobre seu projeto..." 
                  rows="5"
                  required 
                  disabled={status === 'sending' || status === 'success'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${status}`} 
                disabled={status === 'sending' || status === 'success'}
              >
                {status === 'sending' ? (
                  <> <Loader2 className="spin" size={18} /> Enviando... </>
                ) : status === 'success' ? (
                  <> <Check size={18} /> Mensagem Enviada! </>
                ) : status === 'error' ? (
                  'Erro. Tente novamente.'
                ) : (
                  <>Enviar Mensagem <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}