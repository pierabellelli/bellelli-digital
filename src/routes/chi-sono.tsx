import { createFileRoute } from '@tanstack/react-router'
import { CtaBand, Layout, PageHero } from '../components/Blocks'
import { Portfolio } from '../components/Portfolio'
import { useSeo } from '../lib/useSeo'
import { LINKEDIN_URL } from '../lib/site'

export const Route = createFileRoute('/chi-sono')({
  component: ChiSono,
})

const principles = [
  {
    title: 'Spiegare',
    text: 'Niente parole tecniche. Se una cosa non è chiara, è un problema mio, non tuo.',
  },
  {
    title: 'Semplificare',
    text: 'Poche cose che servono davvero, fatte bene, invece di dieci a metà.',
  },
  {
    title: 'Restare',
    text: 'Dopo la consegna non sparisco: rispondo, aggiusto, ti aiuto a crescere.',
  },
]

function ChiSono() {
  useSeo(
    'Chi sono',
    'Piera Bellelli: anni nel Customer Success di aziende software internazionali, istruttrice di Pilates, vive a Capaccio Paestum.',
    '/chi-sono',
  )
  return (
    <Layout>
      <PageHero
        eyebrow="Chi sono"
        title={
          <>
            Ciao, sono <em>Piera.</em>
          </>
        }
        intro="Lavoro con la tecnologia da molti anni e mi piace portare la mia conoscenza al servizio delle piccole aziende e dei freelance."
      />

      <section className="section section-top-0">
        <div className="container split">
          <div>
            <img className="photo photo-tall" src="/piera-bellelli.jpg" alt="Piera Bellelli" width="512" height="512" loading="lazy" />
          </div>
          <div className="split-body">
            <p className="big">
              Da anni lavoro nel Customer Success per aziende software internazionali:
              aiuto i clienti a usare bene la tecnologia, a partire con il piede giusto
              e a ottenere risultati.
            </p>
            <p>
              Ho imparato che il problema raramente è lo strumento. È il tempo, il non
              sapere da dove iniziare, il sentirsi soli davanti a uno schermo. Per questo
              lavoro sempre allo stesso modo: ascolto, semplifico, accompagno.
            </p>
            <p>
              Con Bellelli Digital porto questo metodo alle attività della mia zona. Bar,
              negozi, artigiani e professionisti che lavorano bene di persona e meritano di essere
              trovati anche online.
            </p>
            <p>
              <a href={LINKEDIN_URL} className="text-link" target="_blank" rel="noopener noreferrer">
                Il mio percorso su LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section band-soft">
        <div className="container">
          <h2 className="band-title">Come lavoro.</h2>
          <div className="features features-3">
            {principles.map((p, i) => (
              <div className="feature" key={p.title}>
                <span className="feature-n">0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="progetti">
        <div className="container">
          <div className="rows-head">
            <p className="eyebrow">Progetti</p>
            <h2>Cosa ho costruito.</h2>
          </div>
          <p className="lead pf-lead">
            App, automazioni e siti che ho progettato e costruito io, con l’AI come braccio
            operativo. Gli stessi strumenti che uso per la tua attività.
          </p>
          <Portfolio />
        </div>
      </section>

      <section className="section band-soft">
        <div className="container split">
          <h2 className="split-title">Fuori dallo schermo.</h2>
          <div className="split-body">
            <p className="big">
              Vivo a Capaccio Paestum, tra i Templi e il mare.
            </p>
            <p>
              Sono istruttrice di Pilates certificata e appena posso vado a cavallo: la
              natura del Cilento è il posto dove ricarico le energie. Mi piace imparare
              cose nuove, oggi soprattutto sull’intelligenza artificiale, e spiegarle in
              modo semplice a chi non ha tempo di studiarle.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Ci conosciamo?" />
    </Layout>
  )
}
