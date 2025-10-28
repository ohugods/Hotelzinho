import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import './MobileFooter.css'

const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-content">
        <div className="mobile-footer-logo">
          <Heart size={24} />
          <h3>FazDeConta</h3>
          <p>Hotelzinho para Crianças</p>
        </div>

        <div className="mobile-footer-links">
          <Link to="/servicos" className="mobile-footer-link">
            🎨 Serviços
          </Link>
          <Link to="/sobre" className="mobile-footer-link">
            👥 Sobre Nós
          </Link>
          <Link to="/galeria" className="mobile-footer-link">
            📸 Galeria
          </Link>
          <Link to="/contato" className="mobile-footer-link">
            📞 Contato
          </Link>
        </div>

        <div className="mobile-footer-contact">
          <div className="mobile-contact-item">
            <Phone size={16} />
            <span>(27) 99999-9999</span>
          </div>
          <div className="mobile-contact-item">
            <Mail size={16} />
            <span>contato@fazdeconta.com.br</span>
          </div>
          <div className="mobile-contact-item">
            <MapPin size={16} />
            <span>Melgaço, ES</span>
          </div>
        </div>

        <div className="mobile-footer-bottom">
          <p>© 2025 FazDeConta - Todos os direitos reservados</p>
          <p>Desenvolvido por Hugo Dalmasio</p>
        </div>
      </div>
    </footer>
  )
}

export default MobileFooter
