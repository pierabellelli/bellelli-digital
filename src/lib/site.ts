// Shared content for the whole site (Italian only).

export const CONTACT_EMAIL = 'piera.bellelli@gmail.com'
export const WHATSAPP_NUMBER = '+39 329 196 9548'
export const WHATSAPP_URL =
  'https://wa.me/393291969548?text=' +
  encodeURIComponent('Ciao Piera, vorrei informazioni su Attività Digitale in 7 giorni.')
export const LINKEDIN_URL = 'https://www.linkedin.com/in/piera-bellelli/'
export const SITE_URL = 'https://bellelli-digital.com'
export const EXAMPLE_URL = '/esempi/'

export const packages = [
  {
    name: 'Base',
    price: '390 €',
    launch: 'Prezzo lancio 290 € per i primi 3 clienti',
    featured: false,
    summary: 'Sito di una pagina e scheda Google sistemata.',
    features: [
      'Sito di una pagina, pensato per il telefono',
      'Scheda Google sistemata: orari, foto, descrizione',
      'Pulsanti Chiama e WhatsApp',
      'Fino a 2 giri di modifiche',
    ],
  },
  {
    name: 'Completo',
    price: '590 €',
    launch: 'Prezzo lancio 390 € per i primi 3 clienti',
    featured: true,
    summary: 'Base, più modelli AI per le recensioni e un’ora di formazione.',
    features: [
      'Tutto il pacchetto Base',
      '10 modelli AI per rispondere alle recensioni',
      '1 ora di formazione AI sulla tua attività',
      'Guida “La tua AI in 10 minuti al giorno”',
    ],
  },
  {
    name: 'Plus',
    price: '790 €',
    launch: '',
    featured: false,
    summary: 'Completo, sito fino a 3 pagine e 5 post social pronti.',
    features: [
      'Tutto il pacchetto Completo',
      'Sito fino a 3 pagine',
      'Prenotazione o richiesta preventivo',
      'Richieste dal sito salvate in un foglio Google, con avviso a te e risposta al cliente',
      '5 post social pronti da pubblicare',
    ],
  },
]

export const automation = {
  steps: [
    { title: 'Arriva la richiesta', text: 'Dal modulo del sito, da un’email o da WhatsApp.' },
    { title: 'L’AI la legge', text: 'Ricava nome, telefono e servizio, e capisce se è un preventivo, un’informazione o un problema.' },
    { title: 'Entra nel tuo CRM', text: 'Un gestionale semplice, costruito sulle tue esigenze, con lo stato di ogni cliente.' },
    { title: 'Risposta e promemoria', text: 'Il cliente riceve subito una risposta. Se dopo 2 giorni nessuno l’ha ricontattato, ti arriva un avviso.' },
  ],
  levels: [
    {
      name: 'Email e CRM',
      price: 'da 390 €',
      features: [
        'CRM su misura per la tua attività',
        'Richieste dal sito e dall’email salvate in automatico',
        'Risposta automatica via email al cliente',
        'Promemoria se una richiesta resta senza risposta',
        'Riepilogo settimanale dei contatti',
      ],
    },
    {
      name: 'Con WhatsApp automatico',
      price: 'da 690 €',
      features: [
        'Tutto il livello Email e CRM',
        'Messaggi WhatsApp ricevuti salvati nel CRM',
        'Conferme e promemoria automatici su WhatsApp',
        'Attivazione del numero su WhatsApp Business Platform',
        'Assistenza da 29 €/mese, disdici quando vuoi',
      ],
    },
  ],
  plusDiff: {
    title: 'Rispetto al Plus',
    text: 'Il Plus salva solo le richieste del sito in un foglio Google. Qui hai un CRM vero, con email, WhatsApp, promemoria e riepilogo settimanale. Si aggiunge a qualsiasi pacchetto o si richiede da solo.',
  },
  note:
    'I messaggi WhatsApp automatici hanno un piccolo costo per messaggio applicato da Meta, che ti spiego prima di partire.',
}

export const steps = [
  { day: 'G0', title: 'Chiamata di 30 minuti', text: 'Mi racconti l’attività e cosa vuoi mettere in evidenza.' },
  { day: 'G1', title: 'Materiali', text: 'Mi mandi foto, logo e orari, e mi dai accesso alla scheda Google.' },
  { day: 'G2–4', title: 'Costruzione', text: 'Scrivo i testi, creo il sito e sistemo la scheda Google.' },
  { day: 'G5', title: 'Anteprima', text: 'Guardi il sito e chiedi le modifiche.' },
  { day: 'G7', title: 'Online e formazione', text: 'Pubblichiamo e ti mostro come usare l’AI in un’ora.' },
]

export const maintenance = {
  title: 'Manutenzione 29 €/mese',
  text: 'Una modifica al mese, orari e offerte aggiornati, controllo della scheda Google. Disdici quando vuoi.',
}

export const smallprint =
  'Pagamento: 50% all’avvio, 50% alla pubblicazione. Sito, dominio e account restano intestati a te; l’unico costo esterno è il dominio, circa 10-20 € l’anno.'
