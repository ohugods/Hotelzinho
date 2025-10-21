import { Link } from 'react-router-dom'
import { CheckCircle2, Coffee, BookOpen, Play, Utensils, Droplets, Moon, ToyBrick, Cookie, Hammer, BookOpenCheck, Home } from 'lucide-react'
import './Services.css'

const Services = () => {
  return (
    <div className="services-page">
      {/* Cronograma */}
      <section className="schedule-section section bg-beige">
        <div className="container">
          <h2 className="section-title">Rotina Diária</h2>
          <p className="schedule-description">
            Nossa rotina é cuidadosamente planejada para oferecer equilíbrio entre atividades educativas,
            recreativas e momentos de descanso, garantindo o desenvolvimento integral da criança.
          </p>

           <div className="schedule-cards-grid">
            <div className="schedule-card card arrival-card">
              <div className="schedule-card-icon">
                <Home size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">06:30 - 07:00</div>
                <h4>Chegada e Acolhimento</h4>
                <p>Recepção calorosa das crianças com atividades de integração</p>
              </div>
            </div>

            <div className="schedule-card card meal-card">
              <div className="schedule-card-icon">
                <Coffee size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">07:00 - 07:30</div>
                <h4>Café da Manhã</h4>
                <p>Refeição saudável preparada com carinho pela nossa equipe</p>
              </div>
            </div>

            <div className="schedule-card card education-card">
              <div className="schedule-card-icon">
                <BookOpen size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">07:30 - 09:00</div>
                <h4>Atividades Educativas</h4>
                <p>Aprendizado lúdico através de jogos e brincadeiras educativas</p>
              </div>
            </div>

            <div className="schedule-card card play-card">
              <div className="schedule-card-icon">
                <Play size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">09:00 - 10:00</div>
                <h4>Parquinho</h4>
                <p>Atividades físicas ao ar livre em ambiente seguro</p>
              </div>
            </div>

            <div className="schedule-card card meal-card">
              <div className="schedule-card-icon">
                <Utensils size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">10:00 - 10:40</div>
                <h4>Almoço</h4>
                <p>Refeição balanceada com cardápio nutricionalmente equilibrado</p>
              </div>
            </div>

            <div className="schedule-card card hygiene-card">
              <div className="schedule-card-icon">
                <Droplets size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">10:40 - 11:00</div>
                <h4>Banho</h4>
                <p>Higiene pessoal com supervisão especializada</p>
              </div>
            </div>

            <div className="schedule-card card rest-card">
              <div className="schedule-card-icon">
                <Moon size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">11:00 - 12:00</div>
                <h4>Descanso</h4>
                <p>Momento de soneca em ambiente tranquilo e confortável</p>
              </div>
            </div>

            <div className="schedule-card card play-card">
              <div className="schedule-card-icon">
                <ToyBrick size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">12:00 - 12:30</div>
                <h4>Brinquedoteca</h4>
                <p>Espaço livre para brincadeiras criativas e sociais</p>
              </div>
            </div>

            <div className="schedule-card card meal-card">
              <div className="schedule-card-icon">
                <Cookie size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">12:30 - 13:30</div>
                <h4>Lanche da Tarde</h4>
                <p>Refeição leve e nutritiva para recarregar as energias</p>
              </div>
            </div>

            <div className="schedule-card card creative-card">
              <div className="schedule-card-icon">
                <Hammer size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">13:30 - 15:30</div>
                <h4>Oficinas Diversas</h4>
                <p>Atividades criativas como arte, música e teatro</p>
              </div>
            </div>

            <div className="schedule-card card education-card">
              <div className="schedule-card-icon">
                <BookOpenCheck size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">15:30 - 16:30</div>
                <h4>Contação de Histórias</h4>
                <p>Momento mágico de histórias e imaginação</p>
              </div>
            </div>

            <div className="schedule-card card departure-card">
              <div className="schedule-card-icon">
                <Home size={20} />
              </div>
              <div className="schedule-card-content">
                <div className="schedule-time">16:30 - 17:00</div>
                <h4>Organização de Despedida</h4>
                <p>Preparação para a saída com atividades de encerramento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pacotes */}
      <section className="packages-section section bg-light">
        <div className="container">
          <h2 className="section-title">Nossos Pacotes</h2>
          <p className="packages-description">
            Oferecemos opções flexíveis para atender às necessidades da sua família,
            com pacotes mensais e diárias especiais para fins de semana e feriados.
          </p>

          <div className="packages-grid grid grid-3">
            <div className="package-card card featured">
              <div className="package-header">
                <h3>Pacote Mensal</h3>
                <div className="package-price">
                  <span className="price">R$ 1.200</span>
                  <span className="period">/mês</span>
                </div>
              </div>
              <div className="package-features">
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Segunda a sexta-feira (7h às 17h)</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Refeições inclusas (café, almoço, lanche)</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Relatórios mensais de progresso</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Atividades especiais mensais</span>
                </div>
              </div>
              <Link to="/contato" className="btn-primary">
                Solicitar Orçamento
              </Link>
            </div>

            <div className="package-card card">
              <div className="package-header">
                <h3>Diária Fins de Semana</h3>
                <div className="package-price">
                  <span className="price">R$ 150</span>
                  <span className="period">/dia</span>
                </div>
              </div>
              <div className="package-features">
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Sábados e domingos (8h às 18h)</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Refeições inclusas (almoço e lanche)</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Atividades recreativas especiais</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Flexibilidade de horários</span>
                </div>
              </div>
              <Link to="/contato" className="btn-primary">
                Agendar Diária
              </Link>
            </div>

            <div className="package-card card">
              <div className="package-header">
                <h3>Diária Feriados</h3>
                <div className="package-price">
                  <span className="price">R$ 180</span>
                  <span className="period">/dia</span>
                </div>
              </div>
              <div className="package-features">
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Feriados e recessos escolares</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Refeições completas inclusas</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Atividades temáticas especiais</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 className="feature-check" size={18} />
                  <span>Programação diferenciada</span>
                </div>
              </div>
              <Link to="/contato" className="btn-primary">
                Agendar Feriado
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services