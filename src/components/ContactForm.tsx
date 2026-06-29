import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabase'
import { CALENDLY_URL } from '../lib/constants'
import './ContactForm.css'

type Status = 'idle' | 'submitting' | 'error'

export function ContactForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [messaggio, setMessaggio] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const { error: insertError } = await supabase
      .from('leads')
      .insert({ nome, email, messaggio })

    if (insertError) {
      setStatus('error')
      setError('Qualcosa è andato storto. Riprova o scrivimi direttamente via email.')
      return
    }

    window.location.href = CALENDLY_URL
  }

  return (
    <section className="section section-soft contact" id="contatti">
      <div className="container">
        <div className="contact-header">
          <span className="eyebrow">Contatti</span>
          <h2>Parliamo del tuo progetto</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contact-field">
            <label htmlFor="messaggio">Messaggio</label>
            <textarea
              id="messaggio"
              rows={4}
              required
              value={messaggio}
              onChange={(e) => setMessaggio(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Invio in corso…' : 'Invia messaggio'}
          </button>
          {status === 'error' && <p className="contact-message is-error">{error}</p>}
        </form>
      </div>
    </section>
  )
}
