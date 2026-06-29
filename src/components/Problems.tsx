import './Problems.css'

const PROBLEMS = [
  {
    title: 'Processi manuali che rallentano il team',
    text: 'Onboarding, reportistica e follow-up gestiti a mano, con troppo tempo perso ogni settimana.',
  },
  {
    title: 'Dati sparsi tra troppi tool',
    text: 'CRM, email, fogli di calcolo che non si parlano e costringono a lavoro duplicato.',
  },
  {
    title: 'Customer Success reattivo, non proattivo',
    text: 'Mancano segnali chiari su chi rischia di disdire o chi è pronto per un upsell.',
  },
  {
    title: 'AI percepita come complessa o lontana',
    text: 'Si sa che serve automazione, ma non si sa da dove iniziare né come renderla operativa.',
  },
]

export function Problems() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="problems-header">
          <span className="eyebrow">Cosa risolvo</span>
          <h2>I problemi che affronto ogni giorno con i miei clienti</h2>
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
