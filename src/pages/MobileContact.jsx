import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'
import './MobileContact.css'

const MobileContact = () => {
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
    console.log('Formulário enviado:', formData)
    setSubmitted(true)

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
      title: 'Localização',
      content: 'Avenida Adelson Plaster, 456\nMelgaço, DM - ES',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(27) 99999-9999',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@fazdeconta.com.br',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Sex: 06:30 às 17:00',
    },
  ]

  return (
    <div className="mobile-contact">
      {/* Hero Section */}
      <section className="mobile-contact-hero">
        <h1>Entre em Contato</h1>
        <p>Estamos aqui para responder suas dúvidas</p>
      </section>

      {/* Contact Info Cards */}
      <section className="mobile-contact-info">
        <div className="mobile-contact-grid">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div key={index} className="mobile-contact-card">
                <div className="mobile-contact-icon">
                  <Icon size={24} />
                </div>
                <h3>{info.title}</h3>
                <p className="mobile-contact-content">{info.content}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mobile-contact-form-section">
        <div className="mobile-form-container">
          <div className="mobile-form-header">
            <h2>Agende uma Visita</h2>
            <p>Preencha o formulário abaixo</p>
          </div>

          {submitted ? (
            <div className="mobile-success-message">
              <CheckCircle size={48} />
              <h3>Mensagem Enviada!</h3>
              <p>Obrigado pelo contato. Retornaremos em breve!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mobile-contact-form">
              <div className="mobile-form-group">
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

              <div className="mobile-form-group">
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

              <div className="mobile-form-group">
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

              <div className="mobile-form-group">
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

              <div className="mobile-form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Conte-nos suas necessidades..."
                ></textarea>
              </div>

              <button type="submit" className="mobile-submit-btn">
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mobile-quick-actions">
        <h2>Entre em contato diretamente</h2>

        <div className="mobile-action-buttons">
          <a href="tel:+5511999999999" className="mobile-action-btn primary">
            <Phone size={20} />
            Ligar Agora
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="mobile-action-btn secondary">
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="mobile-faq-preview">
        <h2>Perguntas Frequentes</h2>

        <div className="mobile-faq-items">
          <div className="mobile-faq-item">
            <h4>Qual a idade atendida?</h4>
            <p>Crianças de 4 meses a 6 anos</p>
          </div>

          <div className="mobile-faq-item">
            <h4>Documentos necessários?</h4>
            <p>RG, comprovante de vacinação e residência</p>
          </div>

          <div className="mobile-faq-item">
            <h4>O que inclui a mensalidade?</h4>
            <p>Refeições, atividades e relatórios</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MobileContact
