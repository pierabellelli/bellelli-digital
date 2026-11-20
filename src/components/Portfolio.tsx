import { Link } from '@tanstack/react-router'
import './Portfolio.css'

type Project = {
  kind: string
  name: string
  text: string
  status: string
  tags: string[]
  href?: string
  to?: string
  cta?: string
}

const projects: Project[] = [
  {
    kind: 'App',
    name: 'OmbrellOne',
    text: 'Ordini dall’ombrellone con un QR code: il cliente sceglie dal telefono, il bar dello stabilimento riceve l’ordine. Con pannello di gestione, periodo di prova e pagine privacy.',
    status: 'Online',
    tags: ['React', 'Supabase', 'Email automatiche'],
    href: 'https://ombrellone.app/',
    cta: 'Visita il sito',
  },
  {
    kind: 'App con AI',
    name: 'WorkflowDoctor',
    text: 'Descrivi un lavoro che fai a mano ogni settimana e l’AI ti dice cosa si può automatizzare e con quali strumenti. Costruita in 3 giorni per l’evento She Builds di Lovable.',
    status: 'Online',
    tags: ['AI', 'Login e database', 'Italiano e inglese'],
    href: 'https://workflowdoctor.lovable.app/',
    cta: 'Provala',
  },
  {
    kind: 'Automazione',
    name: 'Note della chiamata → CRM',
    text: 'Dopo ogni chiamata gli appunti finiscono da soli nel CRM, ordinati e con i prossimi passi. Niente più copia e incolla.',
    status: 'In uso',
    tags: ['Make', 'CRM', 'AI'],
  },
  {
    kind: 'Siti',
    name: 'Tre siti di esempio',
    text: 'Un bar, una bottega di ceramiche, una freelance: i modelli da cui partono i siti di Attività Digitale.',
    status: 'Online',
    tags: ['Mobile', 'WhatsApp', 'Scheda Google'],
    to: '/attivita-digitale',
    cta: 'Guardali',
  },
]

export function Portfolio() {
  return (
    <div className="pf-grid">
      {projects.map((p, i) => (
        <article className="pf-card" key={p.name}>
          <div className="pf-top">
            <span className="pf-n">0{i + 1}</span>
            <span className="pf-kind">{p.kind}</span>
          </div>
          <h3>{p.name}</h3>
          <p>{p.text}</p>
          <ul className="pf-tags">
            {p.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="pf-foot">
            <span className="pf-status">{p.status}</span>
            {p.href && (
              <a href={p.href} className="text-link" target="_blank" rel="noopener">
                {p.cta} <span aria-hidden="true">↗</span>
              </a>
            )}
            {p.to && (
              <Link to={p.to} hash="esempi" className="text-link">
                {p.cta} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
