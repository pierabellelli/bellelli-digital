// Blog posts. To add one: copy an entry, change slug, date and text.
// Newest first is handled by sortedPosts().

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }

export type Post = {
  slug: string
  title: string
  date: string // YYYY-MM-DD
  excerpt: string
  minutes: number
  tags: string[]
  body: Block[]
}

export const posts: Post[] = [
  {
    slug: 'scheda-google-attivita-7-controlli',
    title: 'La scheda Google della tua attività: 7 controlli da fare in 10 minuti',
    date: '2026-11-17',
    excerpt:
      'Prima di entrare in un bar o chiamare un artigiano, quasi tutti guardano Google Maps. Ecco cosa controllare oggi, dal telefono, senza spendere nulla.',
    minutes: 4,
    tags: ['Google', 'Attività locali'],
    body: [
      {
        type: 'p',
        text: 'Per molte attività locali la scheda Google (Google Business Profile) è la prima cosa che un nuovo cliente vede, prima ancora del sito. Se è incompleta o sbagliata, quel cliente spesso sceglie qualcun altro senza che tu lo sappia. La buona notizia: si sistema in poco tempo, gratis.',
      },
      { type: 'h2', text: 'I 7 controlli' },
      {
        type: 'ol',
        items: [
          'Orari: sono quelli veri, compresi i giorni festivi e la chiusura stagionale?',
          'Categoria principale: descrive davvero cosa fai (es. “Pasticceria” e non solo “Bar”)?',
          'Telefono e WhatsApp: il numero risponde negli orari indicati?',
          'Foto: ci sono almeno 5 foto recenti di locale, prodotti e ingresso?',
          'Descrizione: in poche righe dice chi sei, cosa offri e in quale zona?',
          'Sito web: il link porta a una pagina che funziona bene da telefono?',
          'Recensioni: hai risposto alle ultime, anche a quelle negative?',
        ],
      },
      { type: 'h2', text: 'Da dove iniziare' },
      {
        type: 'p',
        text: 'Se hai poco tempo, inizia da orari e recensioni: sono le due cose che fanno perdere più clienti quando sono trascurate. Poi aggiungi le foto, che si fanno con il telefono in pochi minuti.',
      },
      {
        type: 'p',
        text: 'Se preferisci che lo faccia io, insieme al sito e a un’ora di formazione AI, trovi tutto in Attività Digitale in 7 giorni.',
      },
    ],
  },
  {
    slug: 'rispondere-recensioni-con-ai',
    title: 'Rispondere alle recensioni con l’AI, senza sembrare un robot',
    date: '2026-11-10',
    excerpt:
      'L’AI può prepararti una buona bozza in pochi secondi. Il tocco finale però deve restare tuo: ecco un metodo semplice e un prompt da copiare.',
    minutes: 5,
    tags: ['AI', 'Recensioni'],
    body: [
      {
        type: 'p',
        text: 'Rispondere alle recensioni dice a chi legge che ti importa dei clienti. Il problema è il tempo, e la tentazione di copiare sempre la stessa frase. Un assistente AI come ChatGPT o Claude può aiutarti a scrivere risposte personali in un minuto.',
      },
      { type: 'h2', text: 'Il metodo in 3 passi' },
      {
        type: 'ol',
        items: [
          'Incolla la recensione nell’assistente AI, senza nome e cognome del cliente.',
          'Chiedi una bozza con il tono della tua attività e un dettaglio concreto.',
          'Rileggi e cambia almeno una frase con parole tue prima di pubblicare.',
        ],
      },
      { type: 'h2', text: 'Un prompt da copiare' },
      {
        type: 'p',
        text: '“Sei il titolare di [tipo di attività] a [paese]. Scrivi una risposta breve (massimo 4 frasi) a questa recensione. Tono: cordiale e professionale. Ringrazia, riprendi un dettaglio citato dal cliente e, se la recensione è negativa, scusati per il problema e proponi di parlarne in privato. Niente frasi fatte. Recensione: [incolla qui].”',
      },
      { type: 'h2', text: 'Cosa evitare' },
      {
        type: 'ul',
        items: [
          'Non inserire mai dati personali dei clienti nell’AI.',
          'Non pubblicare la bozza senza averla riletta: l’AI può inventare dettagli.',
          'Non discutere in pubblico: con le recensioni negative, una risposta calma vale più di una spiegazione lunga.',
        ],
      },
    ],
  },
]

export function sortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function formatDate(date: string, language: 'it' | 'en') {
  return new Date(`${date}T12:00:00`).toLocaleDateString(
    language === 'it' ? 'it-IT' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' },
  )
}
