import { useLanguage } from '../lib/Language'
import './Method.css'

export function Method() {
  const { t } = useLanguage()
  return (
    <section className="section method">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.method.eyebrow}</span>
          <h2>{t.method.title}</h2>
        </div>
        <div className="method-grid">
          {t.method.items.map((item, i) => (
            <div className="method-step" key={item.title}>
              <span className="method-number" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
