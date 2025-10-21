import { Link } from 'react-router-dom'
import { Heart, Award, Users, Smile, Target, Eye, Shield, Sparkles, ArrowRight, Home, Target as TargetIcon, Heart as HeartIcon } from 'lucide-react'
import './About.css'

const About = () => {
  const team = [
    {
      name: 'Ana Ester',
      role: 'Fundadora',
      description: 'Com mais de 15 anos de experiência em educação infantil, Ana é apaixonada por criar ambientes acolhedores onde as crianças podem florescer. Formada em Pedagogia pela USP, com especialização em Desenvolvimento Infantil, ela dedica sua vida a proporcionar experiências significativas e memoráveis para cada criança.',
      emoji: '👩‍🏫',
    },
    {
      name: 'Marina Oliveira',
      role: 'Co-fundadora & Psicopedagoga',
      description: 'Marina é a alma criativa do FazDeConta, onde transforma cada dia em uma aventura de descobertas. Com mestrado em Educação Especial e Inclusiva, ela cria experiências mágicas que despertam a curiosidade natural das crianças, garantindo que cada uma se sinta única e valorizada.',
      emoji: '👩‍🎓',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Amor Incondicional',
      description: 'Cada criança é recebida com carinho genuíno, criando laços afetivos que duram para sempre.',
    },
    {
      icon: Shield,
      title: 'Proteção Total',
      description: 'Ambiente 100% seguro com monitoramento 24h e equipe especializada em primeiros socorros.',
    },
    {
      icon: Sparkles,
      title: 'Magia do Aprender',
      description: 'Transformamos cada momento em uma descoberta, onde brincar e aprender se tornam uma só experiência.',
    },
    {
      icon: Users,
      title: 'Diversidade & Respeito',
      description: 'Celebramos as diferenças e criamos um espaço onde todas as crianças se sentem acolhidas e especiais.',
    },
  ]

  const stats = [
    { icon: Award, number: '15+', label: 'Anos Transformando Vidas' },
    { icon: Users, number: '25+', label: 'Especialistas Qualificados' },
    { icon: Smile, number: '500+', label: 'Famílias Felizes' },
    { icon: Heart, number: '100%', label: 'Amor & Dedicação' },
  ]

  const heroStats = [
    { icon: Home, number: '15+', label: 'Anos de Experiência' },
    { icon: HeartIcon, number: '500+', label: 'Famílias Atendidas' },
    { icon: TargetIcon, number: '100%', label: 'Dedicação' },
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Heart size={16} />
              <span>Nossa História de Amor</span>
            </div>
            <h1 className="hero-title">Sobre Nós</h1>
            <p className="hero-subtitle">
              Conheça as pessoas e a história por trás do FazDeConta
            </p>
            <div className="hero-stats">
              {heroStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="hero-stat">
                    <div className="stat-icon">
                      <Icon size={24} />
                    </div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <Target size={32} />
              </div>
              <h2>Nossa Missão</h2>
              <p>
                Proporcionar um ambiente seguro, acolhedor e estimulante onde cada criança
                possa desenvolver todo seu potencial através do brincar, do aprender e do
                conviver. Nosso compromisso é com o desenvolvimento integral de cada pequeno,
                respeitando sua individualidade e promovendo valores essenciais para a vida.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-icon">
                <Eye size={32} />
              </div>
              <h2>Nossa Visão</h2>
              <p>
                Ser referência em educação infantil, reconhecida pela excelência no cuidado
                e no desenvolvimento das crianças. Queremos ser o lugar onde as famílias
                confiam plenamente, sabendo que seus filhos estão em um ambiente que promove
                não apenas o aprendizado, mas também a felicidade e o bem-estar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossa Equipe</h2>
            <p className="section-subtitle">
              Conheça as fundadoras que tornaram o FazDeConta realidade
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-header">
                  <div className="team-emoji">{member.emoji}</div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
                <div className="team-card-content">
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Place */}
      <section className="about-place">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Sobre o FazDeConta</h2>
            <p className="section-subtitle">
              Um espaço pensado com carinho para o desenvolvimento das crianças
            </p>
            
            <div className="about-text">
              <p>
                O <strong>FazDeConta</strong> nasceu do sonho de criar um lugar onde
                as crianças pudessem ser simplesmente crianças - brincar, explorar, aprender e
                crescer em um ambiente seguro e acolhedor. Em 2015, Ana Carolina e Marina uniram
                suas experiências e paixões para transformar esse sonho em realidade.
              </p>
              <p>
                Nosso espaço foi cuidadosamente projetado para oferecer o melhor em educação
                infantil. Com salas amplas e iluminadas, áreas externas seguras, brinquedoteca
                equipada e ambientes específicos para cada atividade, garantimos que cada momento
                seja uma oportunidade de aprendizado e diversão.
              </p>
              <p>
                Mais do que um hotelzinho infantil, somos uma extensão da sua família. Aqui,
                cada criança é tratada com amor, respeito e atenção individualizada. Nossa equipe
                multidisciplinar é formada por profissionais qualificados e apaixonados pelo que
                fazem, sempre prontos para proporcionar as melhores experiências.
              </p>
              <p>
                Acreditamos que a infância é a fase mais importante da vida, e nosso compromisso
                é fazer de cada dia uma experiência memorável e enriquecedora. No FazDeConta,
                criamos memórias felizes que duram para sempre!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossos Valores</h2>
            <p className="section-subtitle">
              Os princípios que guiam nosso trabalho todos os dias
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <Icon size={36} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    <Icon size={32} />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para uma nova aventura?</h2>
            <p>
              Descubra como o FazDeConta pode transformar os dias do seu filho em momentos
              mágicos de aprendizado, diversão e crescimento. Agende sua visita e veja
              de perto toda a magia que preparamos para vocês!
            </p>
            <Link to="/contato" className="btn-primary">
              Quero Conhecer
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About