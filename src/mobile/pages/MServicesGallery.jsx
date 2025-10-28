const services = [
  { title: 'Rotina acolhedora', desc: 'Chegada, refeições e soninho com cuidado individual.' },
  { title: 'Atividades educativas', desc: 'Arte, música, leitura e jogos sensoriais.' },
  { title: 'Alimentação saudável', desc: 'Cardápio balanceado com acompanhamento.' },
]

const gallery = [
  { emoji: '🧸', label: 'Brinquedoteca' },
  { emoji: '📚', label: 'Leitura' },
  { emoji: '🌳', label: 'Parquinho' },
  { emoji: '🍽️', label: 'Refeitório' },
  { emoji: '🎨', label: 'Artes' },
  { emoji: '😴', label: 'Descanso' },
]

const MServicesGallery = () => {
  return (
    <div className="m-screen">
      <section className="m-list">
        {services.map((s, i) => (
          <div className="m-item" key={i}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="m-grid">
        {gallery.map((g, i) => (
          <div className="m-tile" key={i}>
            <div className="m-emoji" aria-hidden>{g.emoji}</div>
            <span className="m-caption">{g.label}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MServicesGallery


