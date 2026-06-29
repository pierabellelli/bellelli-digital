import './AboutMe.css'

const TAGS = ['10+ anni in CS', 'SaaS internazionale', 'AI operativa', 'Cilento, Italia']

export function AboutMe() {
  return (
    <section className="section" id="chi-sono">
      <div className="container about">
        <div className="about-avatar">PB</div>
        <div>
          <span className="eyebrow">Chi sono</span>
          <h2 className="about-name">Piera Bellelli</h2>
          <p className="about-bio">
            Per anni ho guidato team di Customer Success in realtà SaaS internazionali,
            costruendo processi e automazioni che hanno fatto risparmiare tempo a centinaia di
            aziende. Oggi metto la stessa esperienza al servizio del tuo business, con un
            approccio pratico e concreto all'AI.
          </p>
          <div className="about-tags">
            {TAGS.map((tag) => (
              <span key={tag} className="about-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
