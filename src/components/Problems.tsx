import { useLanguage } from '../lib/Language'
import './Problems.css'

export function Problems() {
  const { t } = useLanguage()
  return (
    <section className="section section-soft">
      <div className="container problems-layout">
        <div className="problems-header">
          <span className="eyebrow">{t.problems.eyebrow}</span>
          <h2>{t.problems.title}</h2>
          <p>{t.problems.intro}</p>
        </div>
        <div className="problems-list">
          {t.problems.items.map((item, i) => (
            <div className="problem-item" key={item.title}>
              <span className="problem-number" aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
