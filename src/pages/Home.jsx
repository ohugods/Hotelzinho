import { Link } from 'react-router-dom'
import { Heart, Users, Award, Clock, Star, ArrowRight, Play, Shield, Sparkles, Calendar, Camera, MessageCircle, CheckCircle, Baby, BookOpen, Target, Home } from 'lucide-react'
import './Home.css'

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section Redesenhado */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Onde a magia da infância ganha vida</span>
            </div>
            <h1 className="hero-title">
              FazDeConta
            </h1>
            <p className="hero-subtitle">
              Hotelzinho para seu filho
            </p>
            <p className="hero-description">
              Cuidamos do seu filho com amor, segurança e dedicação. 
              Um ambiente acolhedor onde cada criança se desenvolve feliz.
            </p>
            <div className="hero-buttons">
              <Link to="/contato" className="btn-primary hero-btn">
                <Calendar size={20} />
                Agendar Visita
              </Link>
              <Link to="/servicos" className="btn-outline hero-btn">
                <Play size={20} />
                Ver Serviços
              </Link>
            </div>
            <div className="hero-features">
              <div className="feature-item">
                <Heart size={18} />
                <span>Amor & Carinho</span>
              </div>
              <div className="feature-item">
                <Shield size={18} />
                <span>Segurança Total</span>
              </div>
              <div className="feature-item">
                <Sparkles size={18} />
                <span>Aprendizado Lúdico</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="image-placeholder">
                <img src="/logoFazDeConta.png" alt="FazDeConta Logo" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Redesenhados */}
      <section className="differentials-section">
        <div className="container">
          <div className="section-header">
            <h2>Por que escolher o FazDeConta?</h2>
            <p>Nossos diferenciais fazem toda a diferença no desenvolvimento do seu filho</p>
          </div>
          <div className="differentials-grid">
            <div className="differential-card">
              <div className="differential-icon">
                <Users size={32} />
              </div>
              <h3>Equipe Dedicada</h3>
              <p>Pessoas apaixonadas pelo cuidado infantil e comprometidas com o bem-estar das crianças</p>
            </div>
            <div className="differential-card">
              <div className="differential-icon">
                <Clock size={32} />
              </div>
              <h3>Horário Flexível</h3>
              <p>Atendemos de segunda a sexta das 6h30 às 17h, com opções de horário estendido</p>
            </div>
            <div className="differential-card">
              <div className="differential-icon">
                <Award size={32} />
              </div>
              <h3>Excelência em Educação</h3>
              <p>Metodologia lúdica que estimula o desenvolvimento integral da criança</p>
            </div>
            <div className="differential-card">
              <div className="differential-icon">
                <Star size={32} />
              </div>
              <h3>Ambiente Acolhedor</h3>
              <p>Espaço seguro e estimulante onde cada criança se sente em casa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Benefícios para seu filho</h2>
              <p className="benefits-description">
                No FazDeConta, cada criança recebe cuidados personalizados que promovem 
                o desenvolvimento integral e a felicidade.
              </p>
              <div className="benefits-list">
                <div className="benefit-item">
                  <CheckCircle size={20} className="benefit-icon" />
                  <div className="benefit-content">
                    <h4>Desenvolvimento Social</h4>
                    <p>Interação com outras crianças em ambiente seguro e supervisionado</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={20} className="benefit-icon" />
                  <div className="benefit-content">
                    <h4>Estimulação Cognitiva</h4>
                    <p>Atividades educativas que desenvolvem habilidades motoras e intelectuais</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={20} className="benefit-icon" />
                  <div className="benefit-content">
                    <h4>Alimentação Saudável</h4>
                    <p>Cardápio balanceado preparado por nutricionistas especializados</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={20} className="benefit-icon" />
                  <div className="benefit-content">
                    <h4>Segurança Total</h4>
                    <p>Ambiente 100% seguro com monitoramento e equipe qualificada</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-visual">
              <div className="benefits-image">
                <div className="image-placeholder">
                  <Baby size={80} />
                  <span>Ambiente Feliz e Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Preview Redesenhado */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Nossa História de <span className="highlight">Amor</span></h2>
              <p className="about-description">
                Há mais de 10 anos, somos referência em educação infantil na região. 
                Nosso compromisso é oferecer um ambiente onde cada criança possa 
                explorar, descobrir e crescer com alegria e segurança.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <Heart size={18} className="feature-icon" />
                  <span>Cuidado individualizado para cada criança</span>
                </div>
                <div className="about-feature">
                  <Shield size={18} className="feature-icon" />
                  <span>Ambiente 100% seguro e monitorado</span>
                </div>
                <div className="about-feature">
                  <Sparkles size={18} className="feature-icon" />
                  <span>Atividades lúdicas e educativas</span>
                </div>
              </div>
              <Link to="/sobre" className="btn-primary about-btn">
                <span>Conheça Nossa História</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="about-visual">
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <Home size={20} />
                  </div>
                  <div className="stat-label">Ambiente Acolhedor</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <Heart size={20} />
                  </div>
                  <div className="stat-label">Muito Amor e Carinho</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <Target size={20} />
                  </div>
                  <div className="stat-label">Foco no Desenvolvimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Perguntas Frequentes</h2>
            <p>Esclarecemos as principais dúvidas sobre nossos serviços</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Qual a idade das crianças atendidas?</h4>
              <p>Atendemos crianças de 4 meses a 6 anos, com turmas organizadas por faixa etária.</p>
            </div>
            <div className="faq-item">
              <h4>Quais documentos são necessários?</h4>
              <p>RG da criança, comprovante de vacinação, atestado médico e comprovante de residência.</p>
            </div>
            <div className="faq-item">
              <h4>O que está incluído na mensalidade?</h4>
              <p>Refeições, atividades educativas, material didático e relatórios de desenvolvimento.</p>
            </div>
            <div className="faq-item">
              <h4>Como é a adaptação da criança?</h4>
              <p>Processo gradual e personalizado, com acompanhamento da nossa equipe pedagógica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>O que os pais dizem sobre nós</h2>
            <p>Depoimentos de famílias que confiam no FazDeConta para cuidar de seus tesouros mais preciosos</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"O FazDeConta transformou a vida da nossa filha. Ela adora ir todos os dias e voltamos encantados com o cuidado e carinho da equipe."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Mariana Silva</h4>
                  <span>Mãe da Sofia</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Profissionais incríveis e um ambiente acolhedor. Meu filho se desenvolveu muito desde que começou no FazDeConta. Recomendo de olhos fechados!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Carlos Santos</h4>
                  <span>Pai do Pedro</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"A melhor escolha que fizemos para nossa família. O atendimento é excepcional e as atividades são sempre criativas e educativas."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Ana Costa</h4>
                  <span>Mãe da Isabella</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para fazer parte da nossa família?</h2>
            <p>Agende uma visita e veja pessoalmente como transformamos o cuidado infantil em uma experiência única e especial.</p>
            <div className="cta-buttons">
              <Link to="/contato" className="btn-primary">
                <MessageCircle size={20} />
                Agendar Visita
              </Link>
              <Link to="/galeria" className="btn-secondary">
                <Camera size={20} />
                Ver Nossa Galeria
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

