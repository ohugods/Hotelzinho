import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'
import './MobileHeader.css'

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="mobile-header">
      <div className="mobile-header-container">
        <Link to="/" className="mobile-logo" onClick={closeMenu}>
          <Heart size={24} />
          <span>FazDeConta</span>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav">
          <div className="mobile-nav-content">
            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
              🏠 Início
            </Link>
            <Link to="/servicos" className="mobile-nav-link" onClick={closeMenu}>
              🎨 Serviços
            </Link>
            <Link to="/sobre" className="mobile-nav-link" onClick={closeMenu}>
              👥 Sobre Nós
            </Link>
            <Link to="/galeria" className="mobile-nav-link" onClick={closeMenu}>
              📸 Galeria
            </Link>
            <Link to="/contato" className="mobile-nav-link" onClick={closeMenu}>
              📞 Contato
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default MobileHeader
