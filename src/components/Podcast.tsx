import { useLanguage } from '../lib/Language'
import './Podcast.css'

export function Podcast() {
  const { t } = useLanguage()
  const p = t.podcast
  return (
    <section className="section section-soft podcast" id="podcast">
      <div className="container podcast-layout">
        <div className="podcast-cover-wrap">
          <img
            className="podcast-cover"
            src="/clienti-che-restano-cover.jpg"
            alt={p.alt}
            loading="lazy"
            width="420"
            height="420"
          />
        </div>
        <div className="podcast-copy">
          <div className="podcast-labels">
            <span className="eyebrow">{p.eyebrow}</span>
            <span className="podcast-badge">{p.badge}</span>
          </div>
          <h2 lang="it">{p.title}</h2>
          <p className="podcast-lead">{p.lead}</p>
          <p>{p.text}</p>
          <ul className="podcast-points">
            {p.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a href="#contatti" className="btn btn-secondary">
            {p.cta} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
