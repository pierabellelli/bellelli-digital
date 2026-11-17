import { Link } from '@tanstack/react-router'
import { useLanguage } from '../lib/Language'
import { formatDate, sortedPosts } from '../content/posts'
import './Blog.css'

export function BlogPreview() {
  const { t, language } = useLanguage()
  const b = t.blog
  const latest = sortedPosts().slice(0, 3)

  return (
    <section className="section section-soft" id="blog">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{b.eyebrow}</span>
          <h2>{b.title}</h2>
          <p>{b.intro}</p>
          {b.note && <p className="blog-note">{b.note}</p>}
        </div>
        <BlogList posts={latest} language={language} readMore={b.readMore} minutes={b.minutes} />
        <div className="section-action">
          <Link to="/blog" className="text-link">
            {b.all} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function BlogList({
  posts,
  language,
  readMore,
  minutes,
}: {
  posts: ReturnType<typeof sortedPosts>
  language: 'it' | 'en'
  readMore: string
  minutes: string
}) {
  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <article className="blog-card" key={post.slug}>
          <p className="blog-meta">
            <time dateTime={post.date}>{formatDate(post.date, language)}</time>
            {' · '}
            {post.minutes} {minutes}
          </p>
          <h3>
            <Link to="/blog/$slug" params={{ slug: post.slug }}>
              {post.title}
            </Link>
          </h3>
          <p>{post.excerpt}</p>
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="text-link"
            aria-label={`${readMore}: ${post.title}`}
          >
            {readMore} <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  )
}
