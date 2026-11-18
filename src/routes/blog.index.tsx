import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { BlogList } from '../components/BlogPreview'
import { useLanguage } from '../lib/Language'
import { sortedPosts } from '../content/posts'
import '../components/Blog.css'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const { t, language } = useLanguage()
  const b = t.blog

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

  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="blog-page">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">{b.eyebrow}</span>
            <h1>{b.title}</h1>
            <p>{b.intro}</p>
            {b.note && <p className="blog-note">{b.note}</p>}
          </div>
          <BlogList
            posts={sortedPosts()}
            language={language}
            readMore={b.readMore}
            minutes={b.minutes}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
