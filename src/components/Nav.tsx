import { CALENDLY_URL } from '../lib/constants'
import './Nav.css'

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          bellelli<span>.digital</span>
        </a>
        <nav className="nav-links">
          <a href="#servizi">Servizi</a>
          <a href="#prodotti">Prodotti</a>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Prenota una call
          </a>
        </nav>
      </div>
    </header>
  )
}
