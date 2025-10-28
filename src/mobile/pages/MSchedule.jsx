import { useState } from 'react'

const initial = { name: '', phone: '', childAge: '', time: '', message: '' }

const MSchedule = () => {
  const [data, setData] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const onChange = (e) => {
    const { name, value } = e.target
    setData((d) => ({ ...d, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!data.name || !data.phone) return setStatus('error')
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 700))
    setStatus('success')
    setData(initial)
  }

  return (
    <div className="m-screen">
      <form className="m-form" onSubmit={submit}>
        <label>
          <span>Seu nome</span>
          <input name="name" value={data.name} onChange={onChange} required />
        </label>
        <label>
          <span>Telefone</span>
          <input name="phone" inputMode="tel" placeholder="(00) 00000-0000" value={data.phone} onChange={onChange} required />
        </label>
        <label>
          <span>Idade da criança</span>
          <input name="childAge" value={data.childAge} onChange={onChange} />
        </label>
        <label>
          <span>Preferência de horário</span>
          <select name="time" value={data.time} onChange={onChange}>
            <option value="">Selecione</option>
            <option>Manhã</option>
            <option>Tarde</option>
            <option>Integral</option>
          </select>
        </label>
        <label>
          <span>Mensagem</span>
          <textarea name="message" rows={3} value={data.message} onChange={onChange} />
        </label>
        <button className="m-btn-primary" type="submit" disabled={status==='submitting'}>
          {status==='submitting' ? 'Enviando...' : 'Enviar pedido de visita'}
        </button>
        {status==='success' && <p className="m-success">Recebemos seu pedido! Entraremos em contato.</p>}
        {status==='error' && <p className="m-error">Preencha nome e telefone.</p>}
      </form>
    </div>
  )
}

export default MSchedule


