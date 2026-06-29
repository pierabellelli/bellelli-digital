import { CALENDLY_URL } from '../lib/constants'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <h1 className="hero-tagline">
          Ho automatizzato processi per centinaia di aziende. Ora lo faccio per la tua.
        </h1>
        <p className="hero-subtitle">
          Consulenza e implementazione AI per Customer Success e operations: meno lavoro
          manuale, più tempo per i tuoi clienti.
        </p>
        <div className="hero-ctas">
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Prenota una call gratuita
          </a>
          <a href="#servizi" className="btn btn-secondary">
            Scopri i servizi
          </a>
        </div>
      </div>
    </section>
  )
}
