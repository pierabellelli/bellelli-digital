import { createFileRoute } from '@tanstack/react-router'
import { Layout, PageHero } from '../components/Blocks'
import { ContactForm } from '../components/ContactForm'
import { ChatPreview } from '../components/ChatPreview'
import { CONTACT_EMAIL, LINKEDIN_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from '../lib/site'
import { useSeo } from '../lib/useSeo'

type Search = { pacchetto?: string }

export const Route = createFileRoute('/parliamone')({
  validateSearch: (search: Record<string, unknown>): Search => ({
    pacchetto: typeof search.pacchetto === 'string' ? search.pacchetto : undefined,
  }),
  component: Parliamone,
})

function Parliamone() {
  const { pacchetto } = Route.useSearch()
  useSeo(
    'Parliamone',
    'Raccontami la tua attività: modulo, WhatsApp o email. Ti rispondo entro 24 ore lavorative.',
    '/parliamone',
  )
  return (
    <Layout>
      <PageHero
        visual={<ChatPreview />}
        eyebrow="Parliamone"
        title={
          <>
            Raccontami la tua <em>attività.</em>
          </>
        }
        intro="Ti rispondo entro 24 ore lavorative. Se vuoi, guardo la tua scheda Google e ti dico cosa migliorerei, senza impegno."
      />
      <section className="section section-top-0">
        <div className="container contact-layout">
          <aside className="contact-side">
            <div>
              <h2>WhatsApp</h2>
              <a href={WHATSAPP_URL} className="btn btn-dark" rel="noopener">
                Scrivimi su WhatsApp
              </a>
              <p>{WHATSAPP_NUMBER}</p>
            </div>
            <div>
              <h2>Email</h2>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <h2>LinkedIn</h2>
              <a href={LINKEDIN_URL} className="contact-email" target="_blank" rel="noopener noreferrer">
                Piera Bellelli
              </a>
            </div>
            <div>
              <h2>Dove</h2>
              <p>Capaccio Paestum (SA). Lavoro anche in videochiamata.</p>
            </div>
          </aside>
          <ContactForm key={pacchetto ?? 'none'} initialPackage={pacchetto} />
        </div>
      </section>
    </Layout>
  )
}
