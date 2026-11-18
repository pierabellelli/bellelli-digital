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

const faqs = [
  { q: 'Di chi è il sito?', a: 'Tuo. Dominio e account sono intestati a te, io vengo aggiunta come collaboratrice.' },
  { q: 'Posso modificarlo da solo?', a: 'Le modifiche le faccio io: con la manutenzione una al mese è inclusa, altrimenti costano 35 € l’ora.' },
  { q: 'Quanto costa ogni anno?', a: 'Solo il dominio, circa 10-20 €. La pubblicazione del sito è gratuita e la manutenzione è facoltativa.' },
  { q: 'E se non mi piace?', a: 'Prima della pubblicazione vedi l’anteprima e puoi chiedere fino a 2 giri di modifiche. Il saldo si paga solo quando il sito va online.' },
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
          Guarda un sito di esempio
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
        <div className="container split">
          <div>
            <p className="eyebrow">Un esempio</p>
            <h2 className="split-title">Caffè Dorico, Paestum.</h2>
          </div>
          <div className="split-body">
            <p className="big">
              Il sito di un bar pasticceria immaginario: menu, orari che mostrano se
              è aperto in quel momento, mappa e pulsanti sempre a portata di pollice.
            </p>
            <p>
              È il modello da cui parto per bar e ristoranti. Per negozi, artigiani e
              studi uso modelli simili, adattati al tuo lavoro.
            </p>
            <a href={EXAMPLE_URL} className="text-link">
              Apri il sito di esempio <span aria-hidden="true">↗</span>
            </a>
          </div>
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
