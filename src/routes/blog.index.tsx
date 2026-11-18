import { useEffect, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ClusterGrid, PostRows } from '../components/BlogPreview'
import { useLanguage } from '../lib/Language'
import { searchPosts } from '../content/posts'
import '../components/Blog.css'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const { t, language } = useLanguage()
  const b = t.blog
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const results = searchPosts(query)

  useEffect(() => {
    // Runs after the language provider has set the home page title.
    const id = window.setTimeout(() => {
      document.title = `${b.eyebrow} — Bellelli Digital`
      document
        .querySelector('link[rel="canonical"]')
        ?.setAttribute('href', 'https://bellelli-digital.com/blog')
    }, 0)
    return () => window.clearTimeout(id)
  }, [b.eyebrow, language])

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
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="blog-page">
        <div className="container">
          <header className="blog-hero">
            <span className="eyebrow">{b.eyebrow}</span>
            <h1>{b.heroTitle}</h1>
            <p>{b.heroIntro}</p>
            {b.note && <p className="blog-note">{b.note}</p>}
            <label className="blog-search" htmlFor="blog-search">
              <span className="visually-hidden">{b.searchLabel}</span>
              <input
                ref={inputRef}
                id="blog-search"
                type="search"
                placeholder={b.search}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
              <kbd aria-hidden="true">⌘K</kbd>
            </label>
          </header>

          {query.trim() ? (
            <section className="blog-block" aria-live="polite">
              {results.length > 0 ? (
                <PostRows items={results} />
              ) : (
                <p className="blog-empty">{b.noResults}</p>
              )}
            </section>
          ) : (
            <>
              <section className="blog-block">
                <h2>{b.clustersTitle}</h2>
                <ClusterGrid />
              </section>
              <section className="blog-block">
                <h2>{b.allTitle}</h2>
                <PostRows items={results} />
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
