import { Link } from 'react-router-dom'
import { Heart, Shield, Sparkles, Calendar } from 'lucide-react'

const MHome = () => {
  return (
    <div className="m-screen">
      <section className="m-hero">
        <img className="m-hero-logo" src="/logoFazDeConta.png" alt="FazDeConta" />
        <h2 className="m-hero-title">Hotelzinho infantil com amor e segurança</h2>
        <p className="m-hero-sub">Cuidado acolhedor, atividades lúdicas e ambiente seguro.</p>
        <div className="m-hero-actions">
          <Link to="/agendar" className="m-btn-primary">
            <Calendar size={18} />
            Agendar visita
          </Link>
          <Link to="/servicos" className="m-btn-outline">Ver serviços</Link>
        </div>
      </section>

      {/* Destaques rápidos */}
      <section className="m-cards">
        <div className="m-card">
          <Heart size={22} />
          <div>
            <h3>Carinho de verdade</h3>
            <p>Equipe apaixonada pelo desenvolvimento infantil.</p>
          </div>
        </div>
        <div className="m-card">
          <Shield size={22} />
          <div>
            <h3>Segurança total</h3>
            <p>Ambiente monitorado e protocolos claros.</p>
          </div>
        </div>
        <div className="m-card">
          <Sparkles size={22} />
          <div>
            <h3>Aprender brincando</h3>
            <p>Atividades lúdicas diariamente.</p>
          </div>
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
          <span className="m-info-value">Visite-nos para conhecer</span>
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

      {/* CTA final */}
      <section className="m-banner">
        <div>
          <h3>Pronto para conhecer de perto?</h3>
          <p>Agende uma visita e tire suas dúvidas.</p>
        </div>
        <Link to="/agendar" className="m-btn-primary">Agendar agora</Link>
      </section>
    </div>
  )
}

export default MHome


