import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria o envio real do formulário
    console.log('Formulário enviado:', formData)
    setSubmitted(true)
    
    // Reset após 3 segundos
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        childAge: '',
        message: '',
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Nossa Localização',
      content: 'Avenida Adelson Plaster, 456\nMelgaço, DM - ES\nCEP: 29900-000',
    },
    {
      icon: Phone,
      title: 'Fale Conosco',
      content: '(27) 99999-9999\n(27) 3333-4444\nWhatsApp disponível',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@fazdeconta.com.br\ninfo@fazdeconta.com.br\nResposta em até 24h',
    },
    {
      icon: Clock,
      title: 'Funcionamento',
      content: 'Segunda a Sexta: 06:30 às 17:00\nFins de Semana: 08:00 às 18:00\nFeriados: Consultar disponibilidade',
    },
  ]

  const faqs = [
    {
      question: 'A partir de que idade posso matricular meu filho?',
      answer: 'Recebemos crianças a partir de 6 meses até 6 anos de idade. Cada faixa etária tem atividades e cuidados específicos, garantindo o desenvolvimento adequado para cada fase da infância.',
    },
    {
      question: 'Como funciona a alimentação no FazDeConta?',
      answer: 'Todas as refeições são preparadas em nossa cozinha por nutricionistas especializadas. Oferecemos café da manhã, almoço e lanche da tarde, sempre com cardápio balanceado e adaptado para cada idade.',
    },
    {
      question: 'Posso agendar uma visita antes de matricular?',
      answer: 'Claro! Recomendamos fortemente que você conheça nosso espaço pessoalmente. Agendamos visitas de segunda a sexta das 9h às 17h e aos sábados das 9h às 13h.',
    },
    {
      question: 'Como acompanho o desenvolvimento do meu filho?',
      answer: 'Mantemos comunicação constante através de relatórios mensais, fotos das atividades e reuniões periódicas. Você sempre saberá como seu filho está se desenvolvendo conosco.',
    },
    {
      question: 'Qual a segurança oferecida?',
      answer: 'Temos monitoramento 24h, equipe treinada em primeiros socorros, ambiente totalmente seguro e protocolos rigorosos de entrada e saída. A segurança é nossa prioridade máxima.',
    },
    {
      question: 'Vocês atendem em feriados?',
      answer: 'Sim! Oferecemos atendimento especial em feriados com programação diferenciada e atividades temáticas. Consulte nossa disponibilidade para datas específicas.',
    },
  ]

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Entre em Contato</h1>
            <p className="hero-subtitle">
              Estamos aqui para responder suas dúvidas e agendar uma visita ao FazDeConta
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="contact-info-card">
                  <div className="info-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{info.title}</h3>
                  <p className="info-content">{info.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="form-section">
        <div className="container">
          <div className="form-content">
            {/* Contact Form */}
            <div className="form-container">
              <div className="form-header">
                <h2>Agende uma Visita</h2>
                <p>
                  Preencha o formulário abaixo e entraremos em contato em breve para agendar
                  sua visita ao FazDeConta.
                </p>
              </div>

              {submitted ? (
                <div className="success-message">
                  <CheckCircle size={64} />
                  <h3>Mensagem Enviada!</h3>
                  <p>Obrigado pelo contato. Retornaremos em breve!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="childAge">Idade da Criança</label>
                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      placeholder="Ex: 3 anos"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Conte-nos um pouco sobre suas necessidades..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <Send size={20} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>

            {/* Map / Additional Info */}
            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={64} />
                <h3>Venha nos Conhecer!</h3>
                <p>
                  Avenida Adelson Plaster, 456<br />
                  Melgaço, DM - ES<br />
                  <strong>Estacionamento gratuito disponível</strong>
                </p>
              </div>

              <div className="visit-info">
                <h3>O que você vai descobrir na visita?</h3>
                <ul>
                  <li>Ambientes preparados especialmente para cada idade</li>
                  <li>Equipe qualificada e apaixonada pelo que faz</li>
                  <li>Atividades educativas em tempo real</li>
                  <li>Estrutura de segurança e monitoramento</li>
                  <li>Cardápio nutricional balanceado</li>
                  <li>Metodologia de ensino lúdica</li>
                  <li>Relatórios de desenvolvimento detalhados</li>
                  <li>Ambiente familiar e acolhedor</li>
                </ul>

                <div className="visit-hours">
                  <h4>Horário de Visitas</h4>
                  <p>
                    Segunda a Sexta: <strong>9h às 17h</strong><br />
                    Sábados: <strong>9h às 13h</strong><br />
                    <span className="highlight">
                      Agende com antecedência para garantir melhor atendimento!
                    </span>
                  </p>
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
            <h2 className="section-title">Perguntas Frequentes</h2>
            <p className="section-subtitle">
              Respostas para as dúvidas mais comuns
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <p>
              Não encontrou a resposta que procurava?{' '}
              <a href="#" className="faq-link">
                Entre em contato conosco!
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para conhecer o FazDeConta?</h2>
            <p>
              Venha nos visitar e descubra por que somos a escolha de centenas de famílias!
            </p>
            <div className="cta-buttons">
              <a href="tel:+5511999999999" className="btn-primary">
                <Phone size={20} />
                Ligar Agora
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact