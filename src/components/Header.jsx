import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logoFazDeConta.png" alt="FazDeConta Logo" className="logo-image" />
          <div className="logo-text">
            <h1>FazDeConta</h1>
            <span className="tagline">Hotelzinho para Crianças</span>
          </div>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'active' : ''}
                onClick={closeMenu}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/servicos"
                className={isActive('/servicos') ? 'active' : ''}
                onClick={closeMenu}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={isActive('/sobre') ? 'active' : ''}
                onClick={closeMenu}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                className={isActive('/galeria') ? 'active' : ''}
                onClick={closeMenu}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={isActive('/contato') ? 'active' : ''}
                onClick={closeMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'bar-open' : ''}`}></span>
        </div>
      </div>
    </header>
  )
}

export default Header

