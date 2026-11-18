import { Link } from '@tanstack/react-router'
import { CONTACT_EMAIL } from '../lib/constants'
import { useLanguage } from '../lib/Language'
import './Footer.css'

const OFFER_URL = 'https://attivita.bellelli-digital.com'

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              bellelli<span>.digital</span>
            </Link>
            <p>{f.line}</p>
          </div>
          <nav className="footer-cols" aria-label="Footer">
            <div>
              <h2>{f.explore}</h2>
              <a href="/#servizi">{t.nav.services}</a>
              <a href="/#prodotti">{t.nav.projects}</a>
              <Link to="/blog">{t.nav.blog}</Link>
              <a href="/#chi-sono">{t.nav.about}</a>
            </div>
            <div>
              <h2>{f.start}</h2>
              <a href={OFFER_URL}>{f.offer} ↗</a>
              <a href="/#contatti">{f.talk}</a>
            </div>
            <div>
              <h2>{f.contact}</h2>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <span>{f.location}</span>
            </div>
          </nav>
        </div>
        <div className="footer-inner">
          <span>
            © {new Date().getFullYear()} Bellelli Digital · Piera Bellelli
          </span>
          <a href="#main" className="text-link">
            {f.top} ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
