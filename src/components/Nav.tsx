import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import './Nav.css'

const links = [
  { to: '/attivita-digitale', label: 'Attività Digitale' },
  { to: '/servizi', label: 'Servizi' },
  { to: '/chi-sono', label: 'Chi sono' },
  { to: '/blog', label: 'Blog' },
  { to: '/risorse', label: 'Risorse' },
] as const

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <a className="skip-link" href="#main">
        Vai al contenuto
      </a>
      <header className="nav">
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" aria-label="Bellelli Digital, home">
            bellelli<span>.digital</span>
          </Link>
          <nav
            id="primary-navigation"
            aria-label="Navigazione principale"
            className={`nav-links${open ? ' is-open' : ''}`}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ 'aria-current': 'page', className: 'is-active' }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/parliamone"
              className="btn btn-primary nav-cta"
              onClick={() => setOpen(false)}
            >
              Parliamone <span aria-hidden="true">↗</span>
            </Link>
          </nav>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </header>
    </>
  )
}
