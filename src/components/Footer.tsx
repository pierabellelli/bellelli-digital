import { CONTACT_EMAIL } from '../lib/constants'
import { useLanguage } from '../lib/Language'
import './Footer.css'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#top" className="nav-logo">
            bellelli<span>.digital</span>
          </a>
          <p>{t.footer.line}</p>
          <a href="#top" className="text-link">
            {t.footer.top} ↑
          </a>
        </div>
        <div className="footer-inner">
          <span>
            © {new Date().getFullYear()} Bellelli Digital · Piera Bellelli
          </span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  )
}
