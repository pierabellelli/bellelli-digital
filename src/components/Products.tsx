import './Products.css'

// TODO: aggiorna con l'URL definitivo di OmbrellOne
const OMBRELLONE_URL = 'https://ombrellone.app'

export function Products() {
  return (
    <section className="section" id="prodotti">
      <div className="container">
        <div className="products-header">
          <span className="eyebrow">Dalle idee ai prodotti</span>
          <h2>Soluzioni digitali nate da problemi reali</h2>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-top">
              <h3>OmbrellOne</h3>
            </div>
            <p>
              Ordini, prenotazioni e gestione operativa per stabilimenti balneari: meno passaggi
              manuali, un servizio più semplice per staff e clienti.
            </p>
            <a href={OMBRELLONE_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Scopri OmbrellOne
            </a>
          </div>
          <div className="product-card is-soon">
            <div className="product-top">
              <h3>FlowMat</h3>
              <span className="product-badge">In arrivo</span>
            </div>
            <p>
              Un'app pensata per insegnanti di Pilates: crea lezioni per zona, durata e attrezzo,
              salva sequenze, varianti e note in un unico posto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
