import { Link } from 'react-router-dom'
import { Heart, Calendar, Users, Shield, Star, ArrowRight, Baby, Clock } from 'lucide-react'
import './MobileHome.css'

const MobileHome = () => {
  return (
    <div className="mobile-home">
      {/* Hero Section - Muito Simples */}
      <section className="mobile-hero">
        <div className="mobile-hero-content">
          <Heart size={48} className="mobile-hero-icon" />
          <h1 className="mobile-hero-title">FazDeConta</h1>
          <p className="mobile-hero-subtitle">Hotelzinho para seu filho</p>
          <p className="mobile-hero-description">
            Cuidamos do seu filho com amor, segurança e dedicação em um ambiente acolhedor.
          </p>

          <div className="mobile-hero-buttons">
            <Link to="/contato" className="mobile-btn-primary">
              <Calendar size={20} />
              Agendar Visita
            </Link>
            <Link to="/servicos" className="mobile-btn-secondary">
              Ver Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Vantagens - Cards Grandes e Simples */}
      <section className="mobile-advantages">
        <h2 className="mobile-section-title">Por que escolher o FazDeConta?</h2>

        <div className="mobile-advantage-cards">
          <div className="mobile-advantage-card">
            <Users size={32} className="mobile-card-icon" />
            <h3>Equipe Dedicada</h3>
            <p>Pessoas apaixonadas pelo cuidado infantil e comprometidas com o bem-estar das crianças.</p>
          </div>

          <div className="mobile-advantage-card">
            <Clock size={32} className="mobile-card-icon" />
            <h3>Horário Flexível</h3>
            <p>Atendemos de segunda a sexta das 6h30 às 17h, com opções de horário estendido.</p>
          </div>

          <div className="mobile-advantage-card">
            <Shield size={32} className="mobile-card-icon" />
            <h3>Segurança Total</h3>
            <p>Ambiente 100% seguro com monitoramento e equipe qualificada em primeiros socorros.</p>
          </div>

          <div className="mobile-advantage-card">
            <Star size={32} className="mobile-card-icon" />
            <h3>Ambiente Acolhedor</h3>
            <p>Espaço seguro e estimulante onde cada criança se sente em casa.</p>
          </div>
        </div>
      </section>

      {/* Benefícios para o Filho */}
      <section className="mobile-benefits">
        <h2 className="mobile-section-title">Benefícios para seu filho</h2>

        <div className="mobile-benefits-content">
          <div className="mobile-benefits-text">
            <p>
              No FazDeConta, cada criança recebe cuidados personalizados que promovem
              o desenvolvimento integral e a felicidade.
            </p>
          </div>

          <div className="mobile-benefits-list">
            <div className="mobile-benefit-item">
              <div className="mobile-benefit-icon">👨‍👩‍👧‍👦</div>
              <div className="mobile-benefit-text">
                <h4>Desenvolvimento Social</h4>
                <p>Interação com outras crianças em ambiente seguro</p>
              </div>
            </div>

            <div className="mobile-benefit-item">
              <div className="mobile-benefit-icon">🧠</div>
              <div className="mobile-benefit-text">
                <h4>Estimulação Cognitiva</h4>
                <p>Atividades que desenvolvem habilidades motoras e intelectuais</p>
              </div>
            </div>

            <div className="mobile-benefit-item">
              <div className="mobile-benefit-icon">🍎</div>
              <div className="mobile-benefit-text">
                <h4>Alimentação Saudável</h4>
                <p>Cardápio balanceado preparado por nutricionistas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Preview Simples */}
      <section className="mobile-about-preview">
        <h2 className="mobile-section-title">Nossa História</h2>

        <div className="mobile-about-content">
          <p className="mobile-about-description">
            Somos referência em educação infantil na região há mais de 10 anos.
            Nosso compromisso é criar um ambiente seguro e acolhedor.
          </p>

          <div className="mobile-about-features">
            <div className="mobile-about-feature">
              <Heart size={20} />
              <span>Cuidado individualizado</span>
            </div>
            <div className="mobile-about-feature">
              <Shield size={20} />
              <span>Ambiente 100% seguro</span>
            </div>
            <div className="mobile-about-feature">
              <Star size={20} />
              <span>Atividades lúdicas</span>
            </div>
          </div>

          <Link to="/sobre" className="mobile-btn-primary">
            Conheça Nossa História
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* FAQ Simples */}
      <section className="mobile-faq">
        <h2 className="mobile-section-title">Perguntas Frequentes</h2>

        <div className="mobile-faq-list">
          <div className="mobile-faq-item">
            <h4>Qual a idade das crianças?</h4>
            <p>Atendemos de 4 meses a 6 anos, com turmas por faixa etária.</p>
          </div>

          <div className="mobile-faq-item">
            <h4>Quais documentos são necessários?</h4>
            <p>RG da criança, comprovante de vacinação e comprovante de residência.</p>
          </div>

          <div className="mobile-faq-item">
            <h4>O que está incluído na mensalidade?</h4>
            <p>Refeições, atividades educativas, material didático e relatórios.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mobile-cta">
        <h2>Pronto para fazer parte da nossa família?</h2>
        <p>Agende uma visita e veja pessoalmente nossa magia!</p>

        <div className="mobile-cta-buttons">
          <Link to="/contato" className="mobile-btn-primary">
            📞 Agendar Visita
          </Link>
          <Link to="/galeria" className="mobile-btn-secondary">
            📸 Ver Galeria
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MobileHome
