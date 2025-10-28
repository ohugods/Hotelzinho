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
    </div>
  )
}

export default MHome


