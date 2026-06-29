import './Products.css'

// TODO: aggiorna con l'URL definitivo di OmbrellOne
const OMBRELLONE_URL = 'https://ombrellone.app'

export function Products() {
  return (
    <section className="section" id="prodotti">
      <div className="container">
        <div className="products-header">
          <span className="eyebrow">Prodotti</span>
          <h2>Strumenti che ho costruito</h2>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-top">
              <h3>OmbrellOne</h3>
            </div>
            <p>Prenotazioni e gestione operativa per stabilimenti balneari, semplice e veloce.</p>
            <a href={OMBRELLONE_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Scopri OmbrellOne
            </a>
          </div>
          <div className="product-card is-soon">
            <div className="product-top">
              <h3>FlowMat</h3>
              <span className="product-badge">In arrivo</span>
            </div>
            <p>Automazione dei flussi operativi per team di Customer Success. Presto disponibile.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
