import { useEffect } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ClusterGrid, PostRows } from '../components/BlogPreview'
import { useLanguage } from '../lib/Language'
import { sortedPosts } from '../content/posts'
import { getCategory } from '../content/categories'
import '../components/Blog.css'

export const Route = createFileRoute('/blog/categoria/$cat')({
  loader: ({ params }) => {
    const category = getCategory(params.cat)
    if (!category) throw notFound()
    return category
  },
  component: CategoryPage,
})

function CategoryPage() {
  const category = Route.useLoaderData()
  const { t, language } = useLanguage()
  const b = t.blog
  const items = sortedPosts().filter((p) => p.category === category.slug)

  useEffect(() => {
    // Runs after the language provider has set the home page title.
    const id = window.setTimeout(() => {
      document.title = `${category.name} — Blog Bellelli Digital`
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', category.description)
      document
        .querySelector('link[rel="canonical"]')
        ?.setAttribute(
          'href',
          `https://bellelli-digital.com/blog/categoria/${category.slug}`,
        )
    }, 0)
    return () => window.clearTimeout(id)
  }, [category, language])

  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="blog-page">
        <div className="container">
          <header className="blog-hero">
            <Link to="/blog" className="text-link article-back">
              <span aria-hidden="true">←</span> {b.back}
            </Link>
            <span className="eyebrow">{b.eyebrow}</span>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </header>
          <section className="blog-block">
            {items.length > 0 ? (
              <PostRows items={items} />
            ) : (
              <p className="blog-empty">{b.soon}.</p>
            )}
          </section>
          <section className="blog-block">
            <h2>{b.clusterAll}</h2>
            <ClusterGrid current={category.slug} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
