import { useEffect, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Layout, PageHero } from '../components/Blocks'
import { ClusterGrid, PostRows } from '../components/BlogParts'
import { searchPosts } from '../content/posts'
import { useSeo } from '../lib/useSeo'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const results = searchPosts(query)
  useSeo(
    'Blog',
    'Articoli pratici su siti, Google, AI e automazioni per piccole attività e professionisti.',
    '/blog',
  )

  useEffect(() => {
    // Cmd+K / Ctrl+K jumps to the search field.
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <Layout>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Digitale pratico. <em>Niente formule magiche.</em>
          </>
        }
        intro="Articoli per titolari, freelance e professionisti che vogliono usare meglio siti, Google, AI e automazioni, senza diventare tecnici."
      >
        <label className="blog-search" htmlFor="blog-search">
          <span className="visually-hidden">Cerca nel blog</span>
          <input
            ref={inputRef}
            id="blog-search"
            type="search"
            placeholder="Cerca tra gli articoli…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <kbd aria-hidden="true">⌘K</kbd>
        </label>
      </PageHero>

      <div className="container blog-body">
        {query.trim() ? (
          <section aria-live="polite">
            {results.length > 0 ? (
              <PostRows items={results} />
            ) : (
              <p className="blog-empty">Nessun articolo trovato. Prova con un’altra parola.</p>
            )}
          </section>
        ) : (
          <>
            <section>
              <div className="rows-head">
                <h2>Esplora per argomento</h2>
              </div>
              <div className="blog-gap">
                <ClusterGrid />
              </div>
            </section>
            <section className="blog-block">
              <div className="rows-head">
                <h2>Tutti gli articoli</h2>
              </div>
              <PostRows items={results} />
            </section>
          </>
        )}
      </div>
    </Layout>
  )
}
