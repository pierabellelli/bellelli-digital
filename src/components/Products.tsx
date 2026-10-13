import { useLanguage } from '../lib/Language'
import './Products.css'

export function Products() {
  const { t } = useLanguage()
  const p = t.projects
  return (
    <section className="section section-soft" id="prodotti">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{p.eyebrow}</span>
          <h2>{p.title}</h2>
          <p>{p.intro}</p>
        </div>
        <article className="featured-project">
          <div className="featured-copy">
            <span className="eyebrow">{p.featured}</span>
            <div className="featured-title">
              <h3>WorkflowDoctor</h3>
              <span className="product-badge">{p.stage}</span>
            </div>
            <p className="featured-lead">{p.workflowIntro}</p>
            <p>{p.workflowText}</p>
            <ul className="project-points">
              {p.workflowPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#contatti" className="btn btn-primary">
              {p.workflowCta} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="project-direction">
            <span className="direction-label">{p.preview}</span>
            <div className="direction-mark" aria-hidden="true">
              W<span>↗</span>
            </div>
            <ol>
              {p.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <span className="direction-footer">{p.shebuilds}</span>
          </div>
        </article>
        <div className="products-grid">
          <article className="product-card">
            <span className="project-category">{p.ombrelloneTag}</span>
            <h3>OmbrellOne</h3>
            <p>{p.ombrellone}</p>
            <a href="#contatti" className="text-link">
              {p.ombrelloneCta} <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="product-card">
            <span className="project-category">{p.flowmatTag}</span>
            <h3>FlowMat</h3>
            <p>{p.flowmat}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
