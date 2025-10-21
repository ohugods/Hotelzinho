import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo e Descrição */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>FazDeConta</h3>
              <span className="footer-tagline">Hotelzinho para Crianças</span>
            </div>
            <p className="footer-description">
              Um espaço seguro, acolhedor e educativo onde seu filho pode brincar, 
              aprender e crescer feliz.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="footer-section">
            <h4 className="footer-title">Links Rápidos</h4>
            <ul className="footer-links">
              {[
                { name: 'Início', path: '/' },
                { name: 'Serviços', path: '/servicos' },
                { name: 'Sobre Nós', path: '/sobre' },
                { name: 'Galeria', path: '/galeria' },
                { name: 'Contato', path: '/contato' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários */}
          <div className="footer-section">
            <h4 className="footer-title">Horário de Funcionamento</h4>
            <div className="schedule-info">
              <div className="schedule-item">
                <div className="schedule-period">Segunda a Sexta</div>
                <div className="schedule-time">06:30 - 17:00</div>
              </div>
              <div className="schedule-item">
                <div className="schedule-period">Fins de Semana</div>
                <div className="schedule-time">08:00 - 18:00</div>
              </div>
              <div className="schedule-item">
                <div className="schedule-period">Feriados</div>
                <div className="schedule-time">Consultar disponibilidade</div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="footer-section">
            <h4 className="footer-title">Entre em Contato</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-address">
                  Avenida Adelson Plaster,<br />
                  Melgaço, DM - ES
                </div>
              </div>
              <div className="contact-item">
                <a href="tel:+5511999999999" className="contact-link">
                  (27) 99999-9999
                </a>
              </div>
              <div className="contact-item">
                <a href="mailto:contato@fazdeconta.com.br" className="contact-link">
                  contato@fazdeconta.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 FazDeConta - Hotelzinho Infantil. Todos os direitos reservados.
          </p>
          <p className="footer-credits">
            Desenvolvido por{' '}
            <a 
              href="https://linkedin.com/in/hugods" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-link"
            >
              Hugo Dalmasio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

