// Blog topic clusters. Articles are in Italian, so names stay in Italian.

export const categories = [
  {
    slug: 'siti-e-google',
    name: 'Siti e Google',
    description: 'Farsi trovare: sito, scheda Google e recensioni per le attività locali.',
  },
  {
    slug: 'ai-nel-lavoro',
    name: 'AI nel lavoro',
    description: 'Prompt, strumenti e metodi per usare l’AI ogni giorno, senza complicazioni.',
  },
  {
    slug: 'automazioni',
    name: 'Automazioni e processi',
    description: 'Togliere passaggi manuali con strumenti no-code come n8n e Make.',
  },
  {
    slug: 'customer-success',
    name: 'Customer Success',
    description: 'Onboarding, retention e relazione con i clienti, per chi vende servizi o software.',
  },
] as const

export type CategorySlug = (typeof categories)[number]['slug']

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}
