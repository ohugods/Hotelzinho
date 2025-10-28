import { Link } from 'react-router-dom'
import { Clock, Users, Heart, Calendar, MapPin } from 'lucide-react'

const services = [
  { 
    icon: Clock, 
    title: 'Rotina Acolhedora', 
    desc: 'Chegada tranquila, refeições balanceadas e momentos de descanso com cuidado individualizado.'
  },
  { 
    icon: Users, 
    title: 'Atividades Educativas', 
    desc: 'Brincadeiras que desenvolvem habilidades motoras, cognitivas e sociais através de metodologia lúdica.'
  },
  { 
    icon: Heart, 
    title: 'Cuidado Especializado', 
    desc: 'Equipe qualificada oferece atenção individual, acompanhamento do desenvolvimento e muito carinho.'
  },
]

const schedule = [
  { time: '06:30', activity: 'Chegada e acolhimento' },
  { time: '07:00', activity: 'Café da manhã' },
  { time: '08:00', activity: 'Atividades educativas' },
  { time: '09:30', activity: 'Lanche da manhã' },
  { time: '10:00', activity: 'Parquinho' },
  { time: '11:30', activity: 'Almoço' },
  { time: '12:30', activity: 'Descanso' },
  { time: '14:00', activity: 'Lanche da tarde' },
  { time: '14:30', activity: 'Atividades recreativas' },
  { time: '16:30', activity: 'Saída' },
]

const packages = [
  {
    name: 'Período Integral',
    price: 'R$ 450',
    period: '/mês',
    features: ['Segunda a sexta', '06h30 às 17h', 'Todas as refeições']
  },
  {
    name: 'Meio Período',
    price: 'R$ 320',
    period: '/mês',
    features: ['Segunda a sexta', '06h30 às 12h', 'Café e lanche']
  },
]

const gallery = [
  { emoji: '🏠', label: 'Recepção' },
  { emoji: '🎨', label: 'Artes' },
  { emoji: '📚', label: 'Leitura' },
  { emoji: '🧸', label: 'Brinquedoteca' },
  { emoji: '🌳', label: 'Parquinho' },
  { emoji: '🍽️', label: 'Refeitório' },
]

const MServicesGallery = () => {
  return (
    <div className="m-screen">
      {/* Serviços Principais */}
      <section className="m-section">
        <h3 className="m-section-title">Nossos Serviços</h3>
        <div className="m-services">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="m-service">
                <div className="m-service-header">
                  <Icon size={20} />
                  <h4>{service.title}</h4>
                </div>
                <p className="m-service-desc">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Cronograma Diário */}
      <section className="m-section">
        <h3 className="m-section-title">Rotina Diária</h3>
        <div className="m-schedule">
          {schedule.map((item, i) => (
            <div key={i} className="m-schedule-item">
              <span className="m-schedule-time">{item.time}</span>
              <span className="m-schedule-activity">{item.activity}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pacotes de Serviços */}
      <section className="m-section">
        <h3 className="m-section-title">Nossos Pacotes</h3>
        <div className="m-packages">
          {packages.map((pkg, i) => (
            <div key={i} className="m-package">
              <h4>{pkg.name}</h4>
              <div className="m-package-price">
                <span className="m-price">{pkg.price}</span>
                <span className="m-period">{pkg.period}</span>
              </div>
              <ul className="m-package-features">
                {pkg.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link to="/agendar" className="m-btn-primary m-package-cta">
          <Calendar size={18} />
          Agendar visita
        </Link>
      </section>

      {/* Galeria */}
      <section className="m-section">
        <h3 className="m-section-title">Nossos Espaços</h3>
        <div className="m-gallery">
          {gallery.map((item, i) => (
            <div key={i} className="m-gallery-item">
              <div className="m-gallery-emoji">{item.emoji}</div>
              <span className="m-gallery-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default MServicesGallery


