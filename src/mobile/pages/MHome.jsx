import { Link } from 'react-router-dom'
import { Calendar, MapPin } from 'lucide-react'

const MHome = () => {
  return (
    <div className="m-screen">
      <section className="m-hero">
        <img className="m-hero-logo" src="/logoFazDeConta.png" alt="FazDeConta" />
        <h2 className="m-hero-title">Cuidando com amor e segurança</h2>
        <p className="m-hero-sub">Cuidado acolhedor, atividades lúdicas e ambiente seguro.</p>
        <div className="m-hero-actions">
          <Link to="/agendar" className="m-btn-primary">
            <Calendar size={18} />
            Agendar visita
          </Link>
          <Link to="/servicos" className="m-btn-outline">Ver serviços</Link>
        </div>
      </section>

      {/* Informações rápidas */}
      <section className="m-info">
        <div className="m-info-item">
          <span className="m-info-label">Horário</span>
          <span className="m-info-value">Seg a Sex · 06h30 às 17h</span>
        </div>
        <div className="m-info-item">
          <span className="m-info-label">Faixa etária</span>
          <span className="m-info-value">4 meses a 6 anos</span>
        </div>
        <div className="m-info-item">
          <span className="m-info-label">Localização</span>
          <a href="https://maps.google.com/?q=Melgaço+DM" target="_blank" rel="noopener noreferrer" className="m-info-link">
            <MapPin size={14} />
            Melgaço - DM
          </a>
        </div>
      </section>

      {/* Prévia da rotina */}
      <section className="m-section">
        <h3 className="m-section-title">Como é um dia por aqui</h3>
        <ul className="m-steps">
          <li>
            <span className="m-step-time">06:30</span>
            <div>
              <strong>Chegada e acolhimento</strong>
              <p>Integração tranquila e afetuosa.</p>
            </div>
          </li>
          <li>
            <span className="m-step-time">07:00</span>
            <div>
              <strong>Café da manhã</strong>
              <p>Refeição saudável e balanceada.</p>
            </div>
          </li>
          <li>
            <span className="m-step-time">08:00</span>
            <div>
              <strong>Atividades lúdicas</strong>
              <p>Brincadeiras que desenvolvem habilidades.</p>
            </div>
          </li>
        </ul>
        <Link to="/servicos" className="m-link">Ver rotina completa</Link>
      </section>

      {/* Mini depoimentos */}
      <section className="m-section">
        <h3 className="m-section-title">O que os pais dizem</h3>
        <div className="m-testimonials">
          <blockquote>
            “Equipe maravilhosa, minha filha adora!”
            <cite> — Mariana</cite>
          </blockquote>
          <blockquote>
            “Ambiente acolhedor e muito seguro.”
            <cite> — Carlos</cite>
          </blockquote>
        </div>
      </section>
    </div>
  )
}

export default MHome


