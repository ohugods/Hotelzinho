import { useState } from 'react'
import { Home, Smile, Building, Baby, Camera, Heart } from 'lucide-react'
import './Gallery.css'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('todos')

  const categories = [
    { id: 'todos', name: 'Todas as Fotos', icon: Camera },
    { id: 'ambiente', name: 'Nossos Ambientes', icon: Building },
    { id: 'atividades', name: 'Atividades', icon: Smile },
    { id: 'espacos', name: 'Espaços Especiais', icon: Home },
    { id: 'momentos', name: 'Momentos Únicos', icon: Heart },
  ]

  // Galeria organizada com imagens representativas
  const images = [
    // Ambientes
    { id: 1, category: 'ambiente', title: 'Recepção Acolhedora', emoji: '🏠', color: 'pink', description: 'Primeiro contato com carinho' },
    { id: 2, category: 'ambiente', title: 'Salas de Atividades', emoji: '🏫', color: 'blue', description: 'Ambientes preparados para aprender' },
    { id: 3, category: 'ambiente', title: 'Refeitório Nutritivo', emoji: '🍽️', color: 'green', description: 'Alimentação saudável e gostosa' },
    { id: 4, category: 'ambiente', title: 'Área Externa Segura', emoji: '🌳', color: 'yellow', description: 'Diversão ao ar livre protegida' },
    
    // Atividades
    { id: 5, category: 'atividades', title: 'Arte e Criatividade', emoji: '🎨', color: 'orange', description: 'Expressão através da arte' },
    { id: 6, category: 'atividades', title: 'Jogos Educativos', emoji: '🧩', color: 'purple', description: 'Aprender brincando' },
    { id: 7, category: 'atividades', title: 'Música e Movimento', emoji: '🎵', color: 'pink', description: 'Ritmo e coordenação' },
    { id: 8, category: 'atividades', title: 'Contação de Histórias', emoji: '📖', color: 'blue', description: 'Imaginação em ação' },
    
    // Espaços Especiais
    { id: 9, category: 'espacos', title: 'Brinquedoteca Completa', emoji: '🧸', color: 'pink', description: 'Mundo de brinquedos educativos' },
    { id: 10, category: 'espacos', title: 'Biblioteca Infantil', emoji: '📚', color: 'blue', description: 'Cantinho da leitura' },
    { id: 11, category: 'espacos', title: 'Parquinho Externo', emoji: '🎪', color: 'green', description: 'Diversão ao ar livre' },
    { id: 12, category: 'espacos', title: 'Sala de Descanso', emoji: '😴', color: 'gray', description: 'Momento de relaxar' },
    
    // Momentos Únicos
    { id: 13, category: 'momentos', title: 'Sorrisos Contagiantes', emoji: '😊', color: 'yellow', description: 'Alegria pura das crianças' },
    { id: 14, category: 'momentos', title: 'Amizades Verdadeiras', emoji: '👫', color: 'green', description: 'Laços que duram para sempre' },
    { id: 15, category: 'momentos', title: 'Descobertas Diárias', emoji: '🌟', color: 'orange', description: 'Cada dia uma nova aventura' },
    { id: 16, category: 'momentos', title: 'Crescimento Feliz', emoji: '🌱', color: 'pink', description: 'Desenvolvimento com amor' },
  ]

  const filteredImages = activeCategory === 'todos' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  const spaces = [
    {
      title: 'Ambientes Climatizados',
      description: 'Salas com temperatura ideal para o conforto e bem-estar das crianças durante todo o ano.',
      emoji: '🌡️',
    },
    {
      title: 'Parquinho Seguro',
      description: 'Área externa com piso emborrachado e brinquedos certificados para cada faixa etária.',
      emoji: '🌳',
    },
    {
      title: 'Brinquedoteca Mágica',
      description: 'Mundo de brinquedos educativos que estimulam a criatividade e o desenvolvimento.',
      emoji: '🧸',
    },
    {
      title: 'Cozinha Nutritiva',
      description: 'Preparo de refeições balanceadas com ingredientes frescos e acompanhamento nutricional.',
      emoji: '👨‍🍳',
    },
    {
      title: 'Cantinho da Leitura',
      description: 'Biblioteca com acervo diversificado para despertar o amor pelos livros desde cedo.',
      emoji: '📚',
    },
    {
      title: 'Sala do Soninho',
      description: 'Ambiente tranquilo e aconchegante para momentos de descanso e relaxamento.',
      emoji: '😴',
    },
  ]

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Nossa Galeria</h1>
            <p className="hero-subtitle">
              Conheça nossos espaços e veja momentos especiais do dia a dia no FazDeConta
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          {/* Category Filters */}
          <div className="gallery-filters">
            {categories.map((category, index) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`filter-btn ${isActive ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{category.name}</span>
                </button>
              )
            })}
          </div>

          {/* Image Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`gallery-placeholder color-${image.color}`}>
                  <div className="gallery-emoji">{image.emoji}</div>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
                <div className="gallery-overlay">
                  <Camera size={24} />
                  <span>Ver Foto</span>
                </div>
              </div>
            ))}
          </div>

          {/* Info Message */}
          <div className="gallery-info">
            <h3>📸 Fotos Reais em Breve!</h3>
            <p>
              Estamos preparando fotos reais dos nossos espaços e das atividades para você.
              Por enquanto, estas representações mostram a diversidade e qualidade do que oferecemos.
              <span className="highlight">
                Agende uma visita para conhecer pessoalmente tudo o que temos a oferecer! 🏠
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="spaces-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossos Espaços</h2>
            <p className="section-subtitle">
              Ambientes cuidadosamente planejados para o desenvolvimento infantil
            </p>
          </div>

          <div className="spaces-grid">
            {spaces.map((space, index) => (
              <div key={index} className="space-card">
                <div className="space-emoji">{space.emoji}</div>
                <h3>{space.title}</h3>
                <p>{space.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Quer ver tudo de perto?</h2>
            <p>
              Agende uma visita e conheça pessoalmente nossos espaços, estrutura e metodologia.
              Será um prazer receber você e sua família!
            </p>
            <a href="/contato" className="btn-primary">
              Agendar Visita
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery