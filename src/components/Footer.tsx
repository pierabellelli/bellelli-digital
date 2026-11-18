import { Link } from '@tanstack/react-router'
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from '../lib/site'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              bellelli<span>.digital</span>
            </Link>
            <p>Sito, Google e AI per le attività locali. Capaccio Paestum (SA).</p>
          </div>
          <nav className="footer-cols" aria-label="Link del sito">
            <div>
              <h2>Esplora</h2>
              <Link to="/attivita-digitale">Attività Digitale</Link>
              <Link to="/servizi">Servizi</Link>
              <Link to="/chi-sono">Chi sono</Link>
              <Link to="/blog">Blog</Link>
            </div>
            <div>
              <h2>Inizia</h2>
              <Link to="/parliamone">Parliamone</Link>
              <a href="/esempi/">Siti di esempio</a>
              <Link to="/risorse">Risorse gratuite</Link>
            </div>
            <div>
              <h2>Contatti</h2>
              <a href={WHATSAPP_URL} rel="noopener">
                WhatsApp {WHATSAPP_NUMBER}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </nav>
        </div>
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Bellelli Digital · Piera Bellelli</span>
          <a href="#main" className="text-link">
            Torna su ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
