import { createFileRoute, Link } from '@tanstack/react-router'
import { CtaBand, Layout, PageHero } from '../components/Blocks'
import { useSeo } from '../lib/useSeo'

export const Route = createFileRoute('/servizi')({
  component: Servizi,
})

const services = [
  {
    title: 'Sito web',
    text: 'Una pagina chiara (fino a 3 nel pacchetto Plus), pensata prima di tutto per il telefono.',
    items: [
      'Servizi o menu, orari, mappa e contatti',
      'Pulsanti fissi Chiama e WhatsApp',
      'Testi scritti con te, ottimizzati per Google',
      'Pubblicazione gratuita, dominio a tuo nome',
    ],
  },
  {
    title: 'Scheda Google',
    text: 'La cosa che i clienti vedono per prima su Google Maps, spesso prima del sito.',
    items: [
      'Categorie e descrizione corrette',
      'Orari, festivi e chiusure stagionali',
      'Foto, collegamento al sito e a WhatsApp',
      'Prime risposte alle recensioni',
    ],
  },
  {
    title: 'AI per la tua attività',
    text: 'Un’ora di formazione sulla tua attività, con strumenti che puoi usare da solo dal giorno dopo.',
    items: [
      '10 modelli per rispondere alle recensioni',
      'Prompt per post, offerte e messaggi ai clienti',
      'Cosa non condividere mai con l’AI',
      'Guida “La tua AI in 10 minuti al giorno”',
    ],
  },
  {
    title: 'Manutenzione',
    text: 'Facoltativa, 29 € al mese, disdici quando vuoi.',
    items: [
      'Una modifica al mese',
      'Orari e offerte sempre aggiornati',
      'Controllo mensile della scheda Google',
      'Modifiche extra a 35 € l’ora',
    ],
  },
]

function Servizi() {
  useSeo(
    'Servizi',
    'Sito web, scheda Google, formazione AI e manutenzione per attività locali. Tutto in un pacchetto a prezzo fisso, pronto in 7 giorni.',
    '/servizi',
  )
  return (
    <Layout>
      <PageHero
        eyebrow="Servizi"
        title={
          <>
            Una cosa sola, <em>fatta bene.</em>
          </>
        }
        intro="Porto online le attività locali: sito, scheda Google e AI, in un unico pacchetto a prezzo fisso. Ecco cosa c’è dentro."
      >
        <Link to="/attivita-digitale" hash="pacchetti" className="btn btn-dark">
          Vedi pacchetti e prezzi
        </Link>
      </PageHero>

      <section className="section section-top-0">
        <div className="container">
          <div className="features">
            {services.map((s, i) => (
              <div className="feature" key={s.title}>
                <span className="feature-n">0{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-soft">
        <div className="container split">
          <h2 className="split-title">Per chi è.</h2>
          <div className="split-body">
            <p className="big">
              Bar, ristoranti, negozi, artigiani, estetiste, palestre, studi e aziende
              agricole: chi lavora bene di persona ma online è poco visibile.
            </p>
            <p>
              Non è un’agenzia di marketing: non gestisco i social ogni giorno e non
              prometto clienti garantiti. Ti do le basi giuste, fatte bene, e ti
              insegno a mantenerle.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  )
}
