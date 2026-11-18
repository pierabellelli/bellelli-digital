import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Layout } from '../components/Blocks'
import { CategoryLabel } from '../components/BlogParts'
import { useSeo } from '../lib/useSeo'
import { formatDate, posts, type Block } from '../content/posts'
import '../components/Blog.css'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  component: BlogPost,
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
  useSeo(post.title, post.excerpt, `/blog/${post.slug}`)

  return (
    <Layout>
      <article className="container article blog-page">
        <Link to="/blog" className="text-link article-back">
          <span aria-hidden="true">←</span> Torna al blog
        </Link>
        <CategoryLabel slug={post.category} />
        <h1>{post.title}</h1>
        <p className="blog-meta">
          <time dateTime={post.date}>{formatDate(post.date, 'it')}</time>
          {' · '}
          {post.minutes} min di lettura
        </p>
        <p className="article-excerpt">{post.excerpt}</p>
        <div className="article-body">{post.body.map(renderBlock)}</div>
        <aside className="article-cta">
          <span className="eyebrow">Per le attività locali</span>
          <strong>Attività Digitale in 7 giorni</strong>
          <p>Sito, scheda Google e AI per rispondere alle recensioni, pronti in una settimana a prezzo fisso.</p>
          <Link className="btn btn-primary" to="/attivita-digitale">
            Scopri l’offerta <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </article>
    </Layout>
  )
}
