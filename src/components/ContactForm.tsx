import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL } from '../lib/site'
import './ContactForm.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const PACKAGES = ['Non lo so ancora', 'Base', 'Completo', 'Plus', 'Contatti in automatico', 'Altro']

export function ContactForm({ initialPackage }: { initialPackage?: string }) {
  const [nome, setNome] = useState('')
  const [attivita, setAttivita] = useState('')
  const [contatto, setContatto] = useState('')
  const [pacchetto, setPacchetto] = useState(
    initialPackage && PACKAGES.includes(initialPackage) ? initialPackage : PACKAGES[0],
  )
  const [messaggio, setMessaggio] = useState('')
  const [privacy, setPrivacy] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [errorCode, setErrorCode] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'submitting') return
    if (!nome.trim() || !attivita.trim() || !contatto.trim() || !privacy) {
      setStatus('error')
      return
    }
    // The static blueprint in public/__forms.html is picked up by Netlify at deploy time.
    const botField = new FormData(e.currentTarget).get('bot-field')?.toString() ?? ''
    const payload = new URLSearchParams({
      'form-name': 'contact',
      nome: nome.trim(),
      attivita: attivita.trim(),
      contatto: contatto.trim(),
      pacchetto,
      messaggio: messaggio.trim(),
      'bot-field': botField,
    }).toString()
    setStatus('submitting')
    setErrorCode('')
    try {
      // Static Vite site: POST to the home document so Netlify processes the
      // registered form; fall back to the blueprint only for a 404/405.
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
      setAttivita('')
      setContatto('')
      setMessaggio('')
      setPrivacy(false)
    } catch (error) {
      console.error('Contact form submission error:', error)
      if (error instanceof TypeError) setErrorCode('Network error')
      setStatus('error')
    }
  }

  return (
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
          Non compilare questo campo
          <input id="contact-bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="nome">Il tuo nome</label>
          <input id="nome" name="nome" autoComplete="name" required maxLength={120}
            value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="contact-field">
          <label htmlFor="attivita">Attività e paese</label>
          <input id="attivita" name="attivita" required maxLength={160}
            placeholder="es. Bar Centrale, Agropoli"
            value={attivita} onChange={(e) => setAttivita(e.target.value)} />
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-field">
          <label htmlFor="contatto">Email o telefono</label>
          <input id="contatto" name="contatto" required maxLength={254}
            value={contatto} onChange={(e) => setContatto(e.target.value)} />
        </div>
        <div className="contact-field">
          <label htmlFor="pacchetto">Pacchetto che ti interessa</label>
          <select id="pacchetto" name="pacchetto" value={pacchetto}
            onChange={(e) => setPacchetto(e.target.value)}>
            {PACKAGES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="contact-field">
        <label htmlFor="messaggio">Messaggio (facoltativo)</label>
        <textarea id="messaggio" name="messaggio" rows={4} maxLength={5000}
          placeholder="Hai già un sito o una scheda Google? Cosa vorresti migliorare?"
          value={messaggio} onChange={(e) => setMessaggio(e.target.value)} />
      </div>
      <label className="contact-consent" htmlFor="privacy">
        <input id="privacy" name="privacy" type="checkbox" required
          checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
        Accetto che i miei dati siano usati solo per rispondere a questa richiesta.
      </label>
      <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Invio in corso…' : 'Invia la richiesta'}{' '}
        <span aria-hidden="true">↗</span>
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === 'success' && (
          <p className="contact-message is-success">
            Grazie, ho ricevuto la tua richiesta. Ti rispondo entro 24 ore lavorative.
          </p>
        )}
        {status === 'error' && (
          <p className="contact-message is-error">
            Controlla i campi obbligatori e riprova, oppure scrivimi a{' '}
            {errorCode && <small className="contact-error-code">({errorCode}) </small>}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        )}
      </div>
    </form>
  )
}
