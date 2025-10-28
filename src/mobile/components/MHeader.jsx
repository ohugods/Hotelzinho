import { Calendar, Home, List } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const MHeader = () => {
  const location = useLocation()
  const titleMap = {
    '/': 'FazDeConta',
    '/servicos': 'Serviços',
    '/agendar': 'Agendar',
  }
  const title = titleMap[location.pathname] || 'FazDeConta'

  return (
    <header className="m-header">
      <div className="m-header-inner">
        <Link to="/" className="m-logo">
          <img src="/logoFazDeConta.png" alt="FazDeConta" />
        </Link>
        <h1 className="m-title" aria-live="polite">{title}</h1>
        <Link to="/agendar" className="m-cta" aria-label="Agendar visita">
          <Calendar size={20} />
          <span>Agendar</span>
        </Link>
      </div>
    </header>
  )
}

export default MHeader


