import { Link } from '@tanstack/react-router'
import { getCategory } from '../content/categories'
import { sortedPosts } from '../content/posts'
import './HeroCards.css'

// Blog hero: the latest articles as a small stack of cards.
export function BlogStack() {
  const latest = sortedPosts().slice(0, 3)
  return (
    <div className="hc hc-blog">
      <div className="hc-glow" />
      {latest.map((p, i) => (
        <Link
          key={p.slug}
          to="/blog/$slug"
          params={{ slug: p.slug }}
          className={`hc-post hc-post-${i + 1}`}
        >
          <span className="hc-chip">{getCategory(p.category)?.name}</span>
          <strong>{p.title}</strong>
          <span className="hc-meta">{p.minutes} min di lettura →</span>
        </Link>
      ))}
    </div>
  )
}

// Risorse hero: the two free PDFs as covers.
export function ResourceCovers() {
  return (
    <div className="hc hc-res" aria-hidden="true">
      <div className="hc-glow" />
      <div className="hc-pdf hc-pdf-1">
        <span className="hc-pdf-tag">Checklist PDF</span>
        <strong>Scheda Google in ordine</strong>
        <ul>
          <li>Nome e categoria</li>
          <li>Orari e foto</li>
          <li>Recensioni</li>
        </ul>
        <i />
        <i />
        <i />
      </div>
      <div className="hc-pdf hc-pdf-2">
        <span className="hc-pdf-tag">Guida PDF</span>
        <strong>10 prompt AI per le recensioni</strong>
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="hc-free">Gratis</span>
    </div>
  )
}
