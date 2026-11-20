import './PackageVisual.css'

// "What's inside": the Attività Digitale package taken apart into its pieces.
export function PackageVisual() {
  return (
    <div className="pk" aria-hidden="true">
      <div className="pk-glow" />
      <svg className="pk-lines" viewBox="0 0 460 520" preserveAspectRatio="none">
        <path d="M230 235 C 170 200, 120 150, 105 95" />
        <path d="M230 235 C 290 200, 340 150, 355 95" />
        <path d="M230 235 C 170 270, 120 330, 105 385" />
        <path d="M230 235 C 290 270, 340 330, 355 385" />
        <path className="pk-line-add" d="M230 270 L 230 470" />
      </svg>

      <div className="pk-hub">
        <span>Attività Digitale</span>
        <strong>da 390 €</strong>
        <small>prezzo fisso · 7 giorni</small>
      </div>

      <div className="pk-card pk-site">
        <div className="pk-phone">
          <i className="pk-phone-head" />
          <i />
          <i />
          <i className="pk-phone-btn" />
        </div>
        <div>
          <b>Sito</b>
          <span>Pensato per il telefono</span>
        </div>
      </div>

      <div className="pk-card pk-google">
        <div className="pk-maps">
          <em>Aperto ora</em>
          <span className="pk-stars">4,9 ★★★★★</span>
        </div>
        <div>
          <b>Scheda Google</b>
          <span>Foto, orari, recensioni</span>
        </div>
      </div>

      <div className="pk-card pk-ai">
        <p className="pk-bubble">
          <small>✦ AI</small>
          Grazie Giulia! Ti aspettiamo presto.
        </p>
        <div>
          <b>Risposte con l’AI</b>
          <span>Recensioni e messaggi</span>
        </div>
      </div>

      <div className="pk-card pk-train">
        <div className="pk-cal">
          <span>1 h</span>
        </div>
        <div>
          <b>Formazione</b>
          <span>Ti insegno a gestirlo</span>
        </div>
      </div>

      <div className="pk-addon">+ Contatti in automatico</div>
    </div>
  )
}
