import { createFileRoute, Link } from '@tanstack/react-router'
import { CtaBand, Layout, Packages, PageHero, WeekSteps } from '../components/Blocks'
import { HeroShowcase } from '../components/HeroShowcase'
import { ExampleSites } from '../components/ExampleSites'
import { automation } from '../lib/site'
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
  { q: 'Le richieste dei clienti dove arrivano?', a: 'Nel pacchetto Plus il modulo del sito salva ogni richiesta in un foglio Google, ti avvisa via email e manda al cliente una risposta automatica. Se vuoi anche email e WhatsApp in un CRM, con promemoria, c’è Contatti in automatico.' },
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
        visual={<HeroShowcase />}
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
        <a href="#esempi" className="btn btn-secondary">
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

      <section className="section examples-band" id="esempi">
        <div className="container">
          <div className="ex-head">
            <div>
              <p className="eyebrow">Esempi</p>
              <h2>Tre attività, tre siti.</h2>
            </div>
            <p>Passa sopra un’anteprima per scorrerla, cliccala per aprire il sito vero.</p>
          </div>
          <ExampleSites />
          <p className="section-note">
            Attività immaginarie, siti veri. Ogni sito parte da un modello per settore e
            diventa tuo con testi, foto, colori e servizi della tua attività.
          </p>
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

      <section className="section section-top-0" id="contatti-automatici">
        <div className="container">
          <div className="rows-head">
            <p className="eyebrow">In più</p>
            <h2>Contatti in automatico.</h2>
            <p className="section-intro">
              Ogni richiesta finisce in un piccolo CRM fatto per la tua attività. Il cliente
              riceve subito una risposta, tu un avviso. Nessun contatto si perde.
            </p>
          </div>
          <div className="features">
            {automation.steps.map((s, i) => (
              <div className="feature" key={s.title}>
                <span className="feature-n">0{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="maintenance automation-diff">
            <strong>{automation.plusDiff.title}</strong>
            <p>{automation.plusDiff.text}</p>
          </div>
          <div className="packages packages-2">
            {automation.levels.map((l) => (
              <article className="package" key={l.name}>
                <h3>{l.name}</h3>
                <p className="package-price">
                  {l.price} <small>una tantum</small>
                </p>
                <ul className="package-list">
                  {l.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/parliamone"
                  search={{ pacchetto: 'Contatti in automatico' }}
                  className="btn btn-secondary"
                >
                  Chiedi informazioni
                </Link>
              </article>
            ))}
          </div>
          <p className="smallprint">{automation.note}</p>
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
