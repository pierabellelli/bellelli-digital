import { useLanguage } from '../lib/Language'
import './Hero.css'

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero
  return (
    <section id="top" className="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">{h.eyebrow}</span>
          <h1 className="hero-tagline">
            {h.title}
            <br />
            <span>{h.highlight}</span>
          </h1>
          <p className="hero-subtitle">{h.intro}</p>
          <div className="hero-ctas">
            <a href="#contatti" className="btn btn-primary">
              {h.primary} <span aria-hidden="true">↗</span>
            </a>
            <a href="#prodotti" className="text-link">
              {h.secondary} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-note">{h.note}</p>
        </div>
        <div className="hero-visual">
          <div className="process-panel">
            <div className="process-panel-heading">
              <span>{h.panelTag}</span>
              <span className="panel-dots" aria-hidden="true">
                ● ● ●
              </span>
            </div>
            <div className="process-step">
              <span className="step-symbol" aria-hidden="true">
                01
              </span>
              <div>
                <strong>{h.before}</strong>
                <p>{h.beforeText}</p>
              </div>
            </div>
            <div className="process-connector" aria-hidden="true">
              ↓
            </div>
            <div className="process-step is-accent">
              <span className="step-symbol" aria-hidden="true">
                02
              </span>
              <div>
                <strong>{h.middle}</strong>
                <p>{h.middleText}</p>
              </div>
            </div>
            <div className="process-connector" aria-hidden="true">
              ↓
            </div>
            <div className="process-step">
              <span className="step-symbol" aria-hidden="true">
                03
              </span>
              <div>
                <strong>{h.after}</strong>
                <p>{h.afterText}</p>
              </div>
            </div>
            <p className="process-panel-note">{h.panelNote}</p>
          </div>
          <a className="shebuilds-note" href="#shebuilds">
            <span className="status-dot" aria-hidden="true" />
            <span>
              <strong>{h.status}</strong>
              <small>{h.statusDetail}</small>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
