import './ChatPreview.css'

// What happens after you write: a chat with a free Google listing check.
export function ChatPreview() {
  return (
    <div className="chat" aria-hidden="true">
      <div className="chat-glow" />
      <div className="chat-window">
        <div className="chat-top">
          <span className="chat-logo">b.</span>
          <div>
            <strong>Piera · Bellelli Digital</strong>
            <span>di solito risponde in giornata</span>
          </div>
        </div>
        <div className="chat-body">
          <p className="msg msg-in">
            Ciao! Ho un bar a Paestum, su Google ci trovano poco. Puoi dare un’occhiata?
            <time>10:12</time>
          </p>
          <p className="msg msg-out">
            Ciao Anna! Ho guardato la tua scheda Google, ecco cosa sistemerei subito:
            <time>11:40</time>
          </p>
          <div className="msg msg-out msg-card">
            <strong>Verifica gratuita</strong>
            <ul>
              <li><b>✕</b> Orari della domenica mancanti</li>
              <li><b>✕</b> Solo 2 foto, del 2019</li>
              <li><b>✕</b> 6 recensioni senza risposta</li>
              <li className="ok"><b>✓</b> Categoria corretta</li>
            </ul>
            <time>11:41</time>
          </div>
          <p className="msg msg-out">
            Ti va una chiamata di 15 minuti per vedere come risolvere? Senza impegno.
            <time>11:41</time>
          </p>
          <p className="msg msg-in msg-typing">
            <span />
            <span />
            <span />
          </p>
        </div>
      </div>
      <span className="chat-badge">Risposta entro 24 ore</span>
    </div>
  )
}
