import './AboutMe.css'

const TAGS = [
  '10+ anni in Customer Success',
  'SaaS internazionale',
  'AI applicata',
  'Prodotti digitali',
]

export function AboutMe() {
  return (
    <section className="section" id="chi-sono">
      <div className="container about">
        <div className="about-avatar">PB</div>
        <div>
          <span className="eyebrow">Chi sono</span>
          <h2 className="about-name">Piera Bellelli</h2>
          <p className="about-bio">
            Sono Team Lead di Customer Success con oltre dieci anni di esperienza in aziende
            SaaS internazionali. Ho costruito onboarding, processi di retention, health score e
            automazioni per team e clienti in mercati diversi. Con Bellelli Digital porto questa
            esperienza fuori dalla teoria: analizzo ciò che rallenta il business e lo trasformo
            in un sistema più semplice, misurabile e sostenibile.
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
