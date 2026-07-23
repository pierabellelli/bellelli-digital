import './Podcast.css'

export function Podcast() {
  return (
    <section className="section section-soft podcast" id="podcast">
      <div className="container podcast-layout">
        <div className="podcast-cover-wrap">
          <img
            className="podcast-cover"
            src="/clienti-che-restano-cover.jpg"
            alt="Copertina del podcast Clienti che restano"
          />
        </div>
        <div className="podcast-copy">
          <div className="podcast-labels">
            <span className="eyebrow">Il podcast di Bellelli Digital</span>
            <span className="podcast-badge">In arrivo</span>
          </div>
          <h2>Clienti che restano</h2>
          <p className="podcast-lead">Customer Success, AI e crescita raccontati in modo concreto.</p>
          <p>
            Strategie, errori ed esperienze reali per migliorare onboarding, adozione e
            fidelizzazione, senza trasformare ogni relazione con il cliente in un processo
            impersonale.
          </p>
          <ul className="podcast-points">
            <li>Episodi brevi e pratici</li>
            <li>Un'azione da applicare subito</li>
            <li>Solo audio, senza rumore inutile</li>
          </ul>
          <a href="#contatti" className="btn btn-secondary">
            Proponi un tema
          </a>
        </div>
      </div>
    </section>
  )
}
