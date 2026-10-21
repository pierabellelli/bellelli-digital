import { useLanguage } from '../lib/Language'
import './SmartWebsite.css'

export function SmartWebsite() {
  const { t } = useLanguage()
  const s = t.smart

  return (
    <section className="section smart-section" id="sito-smart">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2>{s.title}</h2>
          <p>{s.intro}</p>
        </div>

        <div className="smart-grid">
          <article className="smart-offer">
            <span className="smart-badge">{s.badge}</span>
            <h3>{s.name}</h3>
            <p className="smart-summary">{s.summary}</p>

            <div className="smart-pages" aria-label={s.pagesTitle}>
              {s.pages.map((page, index) => (
                <span className="smart-page" key={page}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {page}
                </span>
              ))}
            </div>

            <h4 className="smart-subheading">{s.includes}</h4>
            <ul className="smart-feature-list">
              {s.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a href="#contatti" className="btn btn-primary">
              {s.cta} <span aria-hidden="true">↗</span>
            </a>
            <p className="smart-smallprint">{s.priceNote}</p>
          </article>

          <aside className="smart-flow" aria-label={s.flowEyebrow}>
            <span className="eyebrow">{s.flowEyebrow}</span>
            <h3>{s.flowTitle}</h3>
            <p>{s.flowIntro}</p>
            <ol className="smart-flow-steps">
              {s.flowSteps.map((step, index) => (
                <li key={step.title}>
                  <span className="smart-flow-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="smart-flow-note">{s.flowNote}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
