import { useState } from 'react'
import { useLanguage } from '../lib/Language'
import './Nav.css'

export function Nav() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-logo" aria-label="Bellelli Digital">
            bellelli<span>.digital</span>
          </a>
          <nav
            id="primary-navigation"
            aria-label={t.nav.label}
            className={`nav-links${open ? ' is-open' : ''}`}
          >
            <a href="#sito-smart" onClick={() => setOpen(false)}>
              {t.nav.smart}
            </a>
            <a href="#prodotti" onClick={() => setOpen(false)}>
              {t.nav.projects}
            </a>
            <a href="#chi-sono" onClick={() => setOpen(false)}>
              {t.nav.about}
            </a>
            <a
              href="#contatti"
              className="btn btn-primary nav-cta"
              onClick={() => setOpen(false)}
            >
              {t.nav.contact} <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <div className="nav-controls">
            <div
              className="language-switch"
              role="group"
              aria-label={t.nav.language}
            >
              <button
                type="button"
                lang="it"
                aria-label="Italiano"
                aria-pressed={language === 'it'}
                onClick={() => setLanguage('it')}
              >
                IT
              </button>
              <button
                type="button"
                lang="en"
                aria-label="English"
                aria-pressed={language === 'en'}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="primary-navigation"
              aria-label={open ? t.nav.close : t.nav.menu}
              onClick={() => setOpen(!open)}
            >
              <span aria-hidden="true">{open ? '×' : '☰'}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
