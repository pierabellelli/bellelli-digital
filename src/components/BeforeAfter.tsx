import './BeforeAfter.css'

const PHOTO =
  'https://images.unsplash.com/photo-1777558578066-44266564ee65?w=700&q=70&auto=format'

// A Google listing before and after Attività Digitale, revealed by a sliding divider.
export function BeforeAfter() {
  return (
    <div className="ba" aria-hidden="true">
      <div className="ba-glow" />
      <div className="ba-frame">
        {/* Prima */}
        <div className="ba-card ba-before">
          <div className="ba-photo ba-photo-empty">
            <span>Nessuna foto</span>
          </div>
          <div className="ba-body">
            <strong className="ba-name">Caffè Dorico</strong>
            <p className="ba-rating">
              3,8 <span className="ba-stars ba-stars-grey">★★★★</span>
              <span className="ba-off">★</span> (12)
            </p>
            <p className="ba-meta">Bar · Capaccio Paestum</p>
            <p className="ba-warn">Orari non disponibili</p>
            <div className="ba-actions">
              <span>Chiama</span>
              <span>Indicazioni</span>
              <span className="ba-missing">Nessun sito</span>
            </div>
            <div className="ba-review">
              <p>
                <b>Marco F.</b> <span className="ba-stars ba-stars-grey">★★</span>
              </p>
              <p>Ho chiamato tre volte per prenotare, nessuno risponde.</p>
              <p className="ba-noreply">Nessuna risposta del titolare</p>
            </div>
          </div>
        </div>

        {/* Dopo */}
        <div className="ba-card ba-after">
          <div className="ba-photo" style={{ backgroundImage: `url(${PHOTO})` }}>
            <span className="ba-count">+24 foto</span>
          </div>
          <div className="ba-body">
            <strong className="ba-name">Caffè Dorico</strong>
            <p className="ba-rating">
              4,9 <span className="ba-stars">★★★★★</span> (312)
            </p>
            <p className="ba-meta">Bar pasticceria · Capaccio Paestum</p>
            <p className="ba-open">
              <b>Aperto</b> · Chiude alle 23:00
            </p>
            <div className="ba-actions">
              <span>Chiama</span>
              <span>Indicazioni</span>
              <span className="ba-site">Sito</span>
            </div>
            <div className="ba-review">
              <p>
                <b>Marco F.</b> <span className="ba-stars">★★</span>
              </p>
              <p>Ho chiamato tre volte per prenotare, nessuno risponde.</p>
              <div className="ba-reply">
                <span>✦ Risposta del titolare, scritta con l’AI</span>
                Ci scusi Marco! Ora può prenotare anche su WhatsApp, rispondiamo in giornata.
              </div>
            </div>
          </div>
        </div>

        <div className="ba-divider">
          <span className="ba-handle">‹ ›</span>
        </div>
        <span className="ba-label ba-label-before">Prima</span>
        <span className="ba-label ba-label-after">Dopo · in 7 giorni</span>
      </div>
    </div>
  )
}
