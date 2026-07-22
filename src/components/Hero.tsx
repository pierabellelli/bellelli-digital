import { CALENDLY_URL } from '../lib/constants'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <span className="eyebrow hero-eyebrow">AI operativa · Customer Success · Prodotti digitali</span>
        <h1 className="hero-tagline">
          Meno lavoro manuale. Clienti più seguiti. Un business che cresce meglio.
        </h1>
        <p className="hero-subtitle">
          Aiuto aziende SaaS, startup e piccole imprese a trasformare processi complessi in
          automazioni, strategie di Customer Success e soluzioni digitali concrete.
        </p>
        <div className="hero-ctas">
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Raccontami il tuo progetto
          </a>
          <a href="#servizi" className="btn btn-secondary">
            Scopri come lavoro
          </a>
        </div>
      </div>
    </section>
  )
}
