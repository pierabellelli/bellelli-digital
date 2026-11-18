import { useEffect } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useLanguage } from '../lib/Language'
import { formatDate, posts, type Block } from '../content/posts'
import '../components/Blog.css'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
})

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={index}>{block.text}</h2>
    case 'ul':
      return (
        <ul key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )
    default:
      return <p key={index}>{block.text}</p>
  }
}

function BlogPost() {
  const post = Route.useLoaderData()
  const { t, language } = useLanguage()
  const b = t.blog
  const f = t.services.featured

  useEffect(() => {
    // Runs after the language provider has set the home page title.
    const id = window.setTimeout(() => {
      document.title = `${post.title} — Bellelli Digital`
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', post.excerpt)
      document
        .querySelector('link[rel="canonical"]')
        ?.setAttribute('href', `https://bellelli-digital.com/blog/${post.slug}`)
    }, 0)
    return () => window.clearTimeout(id)
  }, [post, language])

  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="blog-page">
        <article className="container article">
          <Link to="/blog" className="text-link article-back">
            <span aria-hidden="true">←</span> {b.back}
          </Link>
          <p className="blog-meta">
            <time dateTime={post.date}>{formatDate(post.date, language)}</time>
            {' · '}
            {post.minutes} {b.minutes}
          </p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-body">{post.body.map(renderBlock)}</div>
          <aside className="article-cta">
            <span className="eyebrow">{f.eyebrow}</span>
            <strong>{f.title}</strong>
            <p>{f.text}</p>
            <a className="btn btn-primary" href={f.url}>
              {f.cta} <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  )
}

function PostNotFound() {
  const { t } = useLanguage()
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="blog-page">
        <div className="container article">
          <h1>404</h1>
          <Link to="/blog" className="text-link">
            <span aria-hidden="true">←</span> {t.blog.back}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
