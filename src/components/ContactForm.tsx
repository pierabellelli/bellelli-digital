import { useState, type FormEvent } from 'react'
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
  const [errorCode, setErrorCode] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'submitting') return
    const trimmedNome = nome.trim()
    const trimmedEmail = email.trim()
    const trimmedMessaggio = messaggio.trim()
    if (!trimmedNome || !trimmedEmail || !trimmedMessaggio) {
      setStatus('error')
      return
    }
    // The static blueprint in public/__forms.html is picked up by Netlify at deploy time.
    const botField = new FormData(e.currentTarget).get('bot-field')?.toString() ?? ''
    const fields = new URLSearchParams({
      'form-name': 'contact',
      nome: trimmedNome,
      email: trimmedEmail,
      messaggio: trimmedMessaggio,
      'bot-field': botField,
    })
    setStatus('submitting')
    setErrorCode('')
    try {
      // This is a static Vite site, not an SSR app. POST to the home
      // document so Netlify can process the registered contact form.
      // Fall back to the static form blueprint only for a 404/405.
      const payload = fields.toString()
      let response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      })
      if (response.status === 404 || response.status === 405) {
        response = await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: payload,
        })
      }
      if (!response.ok) {
        setErrorCode(`HTTP ${response.status}`)
        throw new Error(`Contact form submission failed: HTTP ${response.status}`)
      }
      setStatus('success')
      setNome('')
      setEmail('')
      setMessaggio('')
    } catch (error) {
      console.error('Contact form submission error:', error)
      // Preserve visitor input for retry or copying into an email.
      if (error instanceof TypeError) setErrorCode('Network error')
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
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          aria-busy={status === 'submitting'}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact-bot-field" aria-hidden="true">
            <label htmlFor="contact-bot-field">
              Leave this field empty
              <input id="contact-bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
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
              <p className="contact-message is-error">
                {c.error}{' '}
                {errorCode && <small className="contact-error-code">({errorCode}) </small>}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
