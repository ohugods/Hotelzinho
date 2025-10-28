import { Home, List, Calendar } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const MBottomNav = () => {
  return (
    <nav className="m-bottom-nav" aria-label="Navegação principal">
      <NavLink to="/" end className={({ isActive }) => `m-tab ${isActive ? 'active' : ''}`}>
        <Home size={22} />
        <span>Início</span>
      </NavLink>
      <NavLink to="/servicos" className={({ isActive }) => `m-tab ${isActive ? 'active' : ''}`}>
        <List size={22} />
        <span>Serviços</span>
      </NavLink>
      <NavLink to="/agendar" className={({ isActive }) => `m-tab ${isActive ? 'active' : ''}`}>
        <Calendar size={22} />
        <span>Agendar</span>
      </NavLink>
    </nav>
  )
}

export default MBottomNav


