import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { Nav } from './Nav'
import { Footer } from './Footer'
import {
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  maintenance,
  packages,
  smallprint,
  steps,
} from '../lib/site'
import './Blocks.css'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  big = false,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
  big?: boolean
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={big ? 'display' : 'display display-sm'}>{title}</h1>
        {(intro || children) && (
          <div className="page-hero-row">
            {intro && <p className="lead">{intro}</p>}
            {children && <div className="page-hero-actions">{children}</div>}
          </div>
        )}
      </div>
    </section>
  )
}

export function WeekSteps({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="week" aria-label="La settimana, giorno per giorno">
      {steps.map((s) => (
        <li key={s.day}>
          <span className="week-day">{s.day}</span>
          <strong>{s.title}</strong>
          {detailed && <span className="week-text">{s.text}</span>}
        </li>
      ))}
    </ol>
  )
}

export function Packages({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="packages-wrap">
      <div className="packages">
        {packages.map((p) => (
          <article
            key={p.name}
            className={`package${p.featured ? ' is-featured' : ''}`}
          >
            <h3>
              {p.name}
              {p.featured && <span className="package-badge">consigliato</span>}
            </h3>
            <p className="package-price">
              {p.price} <small>una tantum</small>
            </p>
            {p.launch && <p className="package-launch">{p.launch}</p>}
            {detailed ? (
              <ul className="package-list">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            ) : (
              <p className="package-summary">{p.summary}</p>
            )}
            {detailed && (
              <Link
                to="/parliamone"
                search={{ pacchetto: p.name }}
                className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`}
              >
                Scegli {p.name}
              </Link>
            )}
          </article>
        ))}
      </div>
      {detailed && (
        <>
          <div className="maintenance">
            <strong>{maintenance.title}</strong>
            <p>{maintenance.text}</p>
          </div>
          <p className="smallprint">{smallprint}</p>
        </>
      )}
    </div>
  )
}

export function CtaBand({
  title = 'Parliamone.',
  text = 'Raccontami la tua attività: ti rispondo entro 24 ore lavorative.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band-actions">
          <Link to="/parliamone" className="btn btn-primary">
            Compila il modulo <span aria-hidden="true">↗</span>
          </Link>
          <a href={WHATSAPP_URL} className="cta-band-wa" rel="noopener">
            o su WhatsApp: {WHATSAPP_NUMBER}
          </a>
        </div>
      </div>
    </section>
  )
}
