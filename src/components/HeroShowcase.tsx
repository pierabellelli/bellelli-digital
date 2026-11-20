import { EXAMPLE_URL } from '../lib/site'
import './HeroShowcase.css'

// Sito + Google + AI in one picture: a phone with a live example site,
// a Google Maps listing card and an AI-written review reply.
export function HeroShowcase() {
  return (
    <div className="showcase" aria-hidden="true">
      <div className="showcase-glow" />

      <div className="showcase-phone">
        <span className="showcase-chip">01 · Sito</span>
        <div className="showcase-screen">
          <iframe
            src={`${EXAMPLE_URL}caffe-dorico/`}
            title="Sito di esempio Caffè Dorico"
            tabIndex={-1}
            loading="eager"
          />
        </div>
      </div>

      <div className="showcase-card showcase-maps">
        <span className="showcase-chip">02 · Google</span>
        <div className="maps-top">
          <span className="maps-pin" />
          <div>
            <strong>Caffè Dorico</strong>
            <span className="maps-rating">
              4,9 <span className="maps-stars">★★★★★</span> (312)
            </span>
          </div>
        </div>
        <p className="maps-meta">Bar pasticceria · Capaccio Paestum</p>
        <p className="maps-open">
          <b>Aperto</b> · Chiude alle 23:00
        </p>
        <div className="maps-actions">
          <span>Chiama</span>
          <span>Indicazioni</span>
          <span>Sito</span>
        </div>
      </div>

      <div className="showcase-card showcase-review">
        <span className="showcase-chip">03 · AI</span>
        <div className="review-head">
          <span className="review-av">GE</span>
          <div>
            <strong>Giulia E.</strong>
            <span className="maps-stars">★★★★★</span>
          </div>
        </div>
        <p>Il cornetto al pistacchio più buono del Cilento!</p>
        <div className="review-reply">
          <span>✦ Risposta scritta con l’AI</span>
          Grazie Giulia! Ti aspettiamo per la prossima colazione.
        </div>
      </div>
    </div>
  )
}
