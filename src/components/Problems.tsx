import './Problems.css'

const PROBLEMS = [
  {
    title: 'Il team perde tempo in attività ripetitive',
    text: 'Onboarding, follow-up e reportistica assorbono ore che potrebbero essere dedicate ai clienti e alla crescita.',
  },
  {
    title: 'I dati esistono, ma non guidano le decisioni',
    text: 'CRM, email e fogli di calcolo non dialogano: le informazioni si disperdono e il lavoro si duplica.',
  },
  {
    title: 'I clienti vengono seguiti quando il problema è già evidente',
    text: 'Mancano segnali tempestivi su rischio, adozione e opportunità di espansione.',
  },
  {
    title: "L'AI resta un esperimento",
    text: 'Si provano strumenti diversi, ma senza un processo chiaro, adozione reale o risultati misurabili.',
  },
]

export function Problems() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="problems-header">
          <span className="eyebrow">Dove posso fare la differenza</span>
          <h2>Quando il business cresce, anche le inefficienze diventano più costose</h2>
        </div>
        <div className="problems-list">
          {PROBLEMS.map((p) => (
            <div className="problem-item" key={p.title}>
              <span className="problem-check" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8.5L6 11.5L13 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="problem-text">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
