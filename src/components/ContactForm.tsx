import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabase'
import { CONTACT_EMAIL } from '../lib/constants'
import { useLanguage } from '../lib/Language'
import './ContactForm.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const { t } = useLanguage()
  const c = t.contact
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [messaggio, setMessaggio] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!supabase || status === 'submitting') return
    if (!nome.trim() || !messaggio.trim()) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    try {
      const { error } = await supabase
        .from('leads')
        .insert({
          nome: nome.trim(),
          email: email.trim(),
          messaggio: messaggio.trim(),
        })
      if (error) {
        setStatus('error')
        return
      }
      setStatus('success')
      setNome('')
      setEmail('')
      setMessaggio('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contatti">
      <div className="container contact-layout">
        <div className="contact-header">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2>{c.title}</h2>
          <p className="contact-intro">{c.intro}</p>
          <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL} <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-note">{c.note}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(c.callSubject)}`}
            className="btn btn-secondary"
          >
            {c.callCta} <span aria-hidden="true">↗</span>
          </a>
        </div>
        {supabase ? (
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-busy={status === 'submitting'}
          >
            <div className="contact-field">
              <label htmlFor="nome">{c.name}</label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="email">{c.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="messaggio">{c.message}</label>
              <textarea
                id="messaggio"
                name="messaggio"
                rows={5}
                required
                maxLength={5000}
                placeholder={c.placeholder}
                value={messaggio}
                onChange={(e) => setMessaggio(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary contact-submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? c.submitting : c.submit}{' '}
              <span aria-hidden="true">↗</span>
            </button>
            <div aria-live="polite" aria-atomic="true">
              {status === 'success' && (
                <p className="contact-message is-success">{c.success}</p>
              )}
              {status === 'error' && (
                <p className="contact-message is-error">{c.error}</p>
              )}
            </div>
          </form>
        ) : (
          <div className="contact-fallback">
            <span className="fallback-symbol" aria-hidden="true">
              ↗
            </span>
            <p>{c.unavailable}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
              {c.emailCta}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
