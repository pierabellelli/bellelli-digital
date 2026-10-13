import { useLanguage } from '../lib/Language'
import './Services.css'

export function Services() {
  const { t } = useLanguage()
  return (
    <section className="section" id="servizi">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2>{t.services.title}</h2>
          <p>{t.services.intro}</p>
        </div>
        <div className="services-grid">
          {t.services.items.map((item, i) => (
            <article className="service-card" key={item.title}>
              <span className="service-index" aria-hidden="true">
                0{i + 1} /
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="service-deliverable">
                <span aria-hidden="true">↳</span> {item.deliverable}
              </div>
            </article>
          ))}
        </div>
        <div className="section-action">
          <a href="#contatti" className="text-link">
            {t.services.cta} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
