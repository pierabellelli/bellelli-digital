import { useLanguage } from '../lib/Language'
import './AttivitaDigitale.css'

export function AttivitaDigitale() {
  const { t } = useLanguage()
  const d = t.digital

  return (
    <section className="section digital-section" id="attivita-digitale">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{d.eyebrow}</span>
          <h2>{d.title}</h2>
          <p>{d.intro}</p>
        </div>

        <div className="digital-grid">
          <div className="digital-plans">
            {d.plans.map((plan) => (
              <article
                key={plan.name}
                className={`digital-plan${plan.featured ? ' is-featured' : ''}`}
              >
                {plan.featured && (
                  <span className="digital-badge">{d.recommended}</span>
                )}
                <h3>{plan.name}</h3>
                <p className="digital-price">
                  {plan.price} <small>{d.oneOff}</small>
                </p>
                {plan.launch && (
                  <p className="digital-launch">{plan.launch}</p>
                )}
                <ul className="digital-feature-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a
                  href="#contatti"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {d.planCta} {plan.name}
                </a>
              </article>
            ))}
            <div className="digital-maintenance">
              <strong>{d.maintTitle}</strong>
              <p>{d.maintText}</p>
            </div>
            <p className="digital-smallprint">{d.smallprint}</p>
          </div>

          <aside className="digital-week" aria-label={d.weekTitle}>
            <span className="eyebrow">{d.weekEyebrow}</span>
            <h3>{d.weekTitle}</h3>
            <ol className="digital-steps">
              {d.steps.map((step) => (
                <li key={step.day}>
                  <span className="digital-day" aria-hidden="true">
                    {step.day}
                  </span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="digital-week-note">{d.weekNote}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
