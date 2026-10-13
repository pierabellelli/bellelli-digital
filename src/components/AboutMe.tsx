import { useLanguage } from '../lib/Language'
import './AboutMe.css'

export function AboutMe() {
  const { t } = useLanguage()
  const a = t.about
  return (
    <section className="section" id="chi-sono">
      <div className="container about">
        <div className="about-identity">
          <div className="about-avatar" aria-hidden="true">
            PB<span>↗</span>
          </div>
          <span className="identity-caption">
            Piera Bellelli
            <br />
            <small>Bellelli Digital</small>
          </span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">{a.eyebrow}</span>
          <h2>{a.title}</h2>
          <p className="about-role">{a.role}</p>
          <p className="about-bio">{a.bio}</p>
          <p className="about-bio">{a.second}</p>
          <div className="about-tags">
            {a.tags.map((tag) => (
              <span key={tag} className="about-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="shebuilds-card" id="shebuilds">
            <div className="shebuilds-heading">
              <span className="shebuilds-wordmark">Lovable SheBuilds</span>
              <span className="product-badge">{a.badge}</span>
            </div>
            <h3>{a.shebuildsTitle}</h3>
            <p>{a.shebuildsText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
