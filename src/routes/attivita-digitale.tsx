import { createFileRoute, Link } from '@tanstack/react-router'
import { CtaBand, Layout, Packages, PageHero, WeekSteps } from '../components/Blocks'
import { EXAMPLE_URL } from '../lib/site'
import { useSeo } from '../lib/useSeo'

export const Route = createFileRoute('/attivita-digitale')({
  component: AttivitaDigitale,
})

const problems = [
  { title: 'Nessun sito', text: 'Solo una pagina Facebook, che chi non ti conosce non apre.' },
  { title: 'Orari sbagliati', text: 'Google dice “aperto” quando sei chiuso, o il contrario. Il cliente va altrove.' },
  { title: 'Recensioni senza risposta', text: 'Chi legge una critica senza risposta pensa che non ti importi.' },
]

const examples = [
  {
    hash: 'bar',
    name: 'Caffè Dorico',
    kind: 'Bar pasticceria',
    text: 'Colazioni, pasticceria e aperitivo, con orari “aperto ora”, mappa e pulsante per chiamare.',
  },
  {
    hash: 'freelance',
    name: 'Elena Marino',
    kind: 'Graphic designer freelance',
    text: 'Lavori scelti, servizi con prezzi indicativi e richiesta di preventivo in un tocco.',
  },
  {
    hash: 'bottega',
    name: 'Bottega Terra Cilento',
    kind: 'Ceramiche artigianali ad Agropoli',
    text: 'Pezzi in vendita, corsi al tornio e ordini direttamente su WhatsApp.',
  },
]

const faqs = [
  { q: 'Di chi è il sito?', a: 'Tuo. Dominio e account sono intestati a te, io vengo aggiunta come collaboratrice.' },
  { q: 'Posso modificarlo da solo?', a: 'Le modifiche le faccio io: con la manutenzione una al mese è inclusa, altrimenti costano 35 € l’ora.' },
  { q: 'Quanto costa ogni anno?', a: 'Solo il dominio, circa 10-20 €. La pubblicazione del sito è gratuita e la manutenzione è facoltativa.' },
  { q: 'E se non mi piace?', a: 'Prima della pubblicazione vedi l’anteprima e puoi chiedere fino a 2 giri di modifiche. Il saldo si paga solo quando il sito va online.' },
  { q: 'Le richieste dei clienti dove arrivano?', a: 'Nel pacchetto Plus il modulo del sito salva ogni richiesta in un foglio Google, ti avvisa via email e manda al cliente una risposta automatica. Così nessun contatto si perde.' },
  { q: 'Lavori anche fuori dal Cilento?', a: 'Sì: chiamata, revisione e formazione si fanno anche in videochiamata.' },
]

function AttivitaDigitale() {
  useSeo(
    'Attività Digitale in 7 giorni',
    'Sito, scheda Google e AI per la tua attività, pronti in 7 giorni a prezzo fisso: Base 390 €, Completo 590 €, Plus 790 €.',
    '/attivita-digitale',
  )
  return (
    <Layout>
      <PageHero
        big
        eyebrow="Attività Digitale in 7 giorni"
        title={
          <>
            Sito, Google e AI. <em>In una settimana.</em>
          </>
        }
        intro="I clienti ti cercano sul telefono prima di entrare o di chiamarti. Ti preparo tutto quello che serve perché ti trovino, e ti insegno a gestirlo."
      >
        <Link to="/parliamone" className="btn btn-dark">
          Prenota una chiamata di 15 minuti
        </Link>
        <a href={EXAMPLE_URL} className="btn btn-secondary">
          Guarda i siti di esempio
        </a>
      </PageHero>

      <section className="section section-top-0">
        <div className="container">
          <div className="rows-head">
            <h2>Cosa trovano oggi su Google?</h2>
          </div>
          <div className="features features-3">
            {problems.map((p, i) => (
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

      <section className="section band-soft">
        <div className="container">
          <h2 className="band-title">La tua settimana.</h2>
          <WeekSteps detailed />
        </div>
      </section>

      <section className="section" id="pacchetti">
        <div className="container">
          <h2 className="band-title">Tre pacchetti, nessuna sorpresa.</h2>
          <Packages detailed />
        </div>
      </section>

      <section className="section band-soft">
        <div className="container">
          <div className="rows-head">
            <p className="eyebrow">Esempi</p>
            <h2>Tre attività, tre siti.</h2>
          </div>
          <div className="features features-3">
            {examples.map((e, i) => (
              <a className="feature" key={e.hash} href={`${EXAMPLE_URL}#${e.hash}`}>
                <span className="feature-n">0{i + 1}</span>
                <div>
                  <h3>{e.name}</h3>
                  <p>
                    <strong>{e.kind}.</strong> {e.text}
                  </p>
                  <span className="text-link">
                    Guarda il sito <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="section-note">
            Attività immaginarie, siti veri. Ogni sito parte da un modello per settore e
            diventa tuo con testi, foto, colori e servizi della tua attività.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <h2 className="split-title">Domande frequenti</h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Partiamo?"
        text="In 15 minuti guardiamo insieme la tua scheda Google e ti dico cosa migliorerei. Senza impegno."
      />
    </Layout>
  )
}
