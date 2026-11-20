import { EXAMPLE_URL } from '../lib/site'
import './ExampleSites.css'

export const exampleSites = [
  {
    slug: 'caffe-dorico',
    name: 'Caffè Dorico',
    kind: 'Bar pasticceria',
    host: 'bellelli-digital.com/esempi/caffe-dorico',
    text: 'Colazioni e aperitivo, orari “aperto ora”, mappa e pulsante per chiamare.',
  },
  {
    slug: 'bottega',
    name: 'Bottega Terra Cilento',
    kind: 'Ceramiche artigianali',
    host: 'bellelli-digital.com/esempi/bottega',
    text: 'Pezzi in vendita, corsi al tornio e ordini direttamente su WhatsApp.',
  },
  {
    slug: 'freelance',
    name: 'Elena Marino',
    kind: 'Graphic designer freelance',
    host: 'bellelli-digital.com/esempi/freelance',
    text: 'Lavori scelti, servizi con prezzi indicativi e preventivo in un tocco.',
  },
]

// Live, scaled previews of the example sites, each opening the real page.
export function ExampleSites() {
  return (
    <div className="ex-grid">
      {exampleSites.map((e) => {
        const url = `${EXAMPLE_URL}${e.slug}/`
        return (
          <a className="ex-card" key={e.slug} href={url} target="_blank" rel="noopener">
            <div className="ex-browser" aria-hidden="true">
              <div className="ex-bar">
                <span className="ex-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="ex-url">{e.host}</span>
              </div>
              <div className="ex-preview">
                <iframe src={url} title={`Anteprima ${e.name}`} tabIndex={-1} loading="lazy" />
              </div>
            </div>
            <div className="ex-info">
              <span className="ex-kind">{e.kind}</span>
              <h3>{e.name}</h3>
              <p>{e.text}</p>
              <span className="ex-open">
                Apri il sito <span aria-hidden="true">↗</span>
              </span>
            </div>
          </a>
        )
      })}
    </div>
  )
}
