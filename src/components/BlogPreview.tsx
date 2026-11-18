import { Link } from '@tanstack/react-router'
import { useLanguage } from '../lib/Language'
import { formatDate, posts, sortedPosts, type Post } from '../content/posts'
import { categories, getCategory } from '../content/categories'
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
        <div className="blog-grid">
          {latest.map((post) => (
            <article className="blog-card" key={post.slug}>
              <CategoryLabel slug={post.category} />
              <h3>
                <Link to="/blog/$slug" params={{ slug: post.slug }}>
                  {post.title}
                </Link>
              </h3>
              <p>{post.excerpt}</p>
              <p className="blog-meta">
                <time dateTime={post.date}>{formatDate(post.date, language)}</time>
                {' · '}
                {post.minutes} {b.minutes}
              </p>
            </article>
          ))}
        </div>
        <div className="section-action">
          <Link to="/blog" className="text-link">
            {b.all} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function CategoryLabel({ slug }: { slug: string }) {
  const category = getCategory(slug)
  if (!category) return null
  return (
    <Link
      to="/blog/categoria/$cat"
      params={{ cat: category.slug }}
      className="blog-category"
    >
      {category.name}
    </Link>
  )
}

export function PostRows({ items }: { items: Post[] }) {
  const { t, language } = useLanguage()
  const b = t.blog
  return (
    <ul className="post-rows">
      {items.map((post) => (
        <li key={post.slug} className="post-row">
          <CategoryLabel slug={post.category} />
          <h3>
            <Link to="/blog/$slug" params={{ slug: post.slug }}>
              {post.title}
            </Link>
          </h3>
          <p>{post.excerpt}</p>
          <p className="blog-meta">
            <time dateTime={post.date}>{formatDate(post.date, language)}</time>
            {' · '}
            {post.minutes} {b.minutes}
          </p>
        </li>
      ))}
    </ul>
  )
}

export function ClusterGrid({ current }: { current?: string }) {
  const { t } = useLanguage()
  const b = t.blog
  return (
    <div className="cluster-grid">
      {categories.map((c) => {
        const count = posts.filter((p) => p.category === c.slug).length
        return (
          <Link
            key={c.slug}
            to="/blog/categoria/$cat"
            params={{ cat: c.slug }}
            className={`cluster-card${current === c.slug ? ' is-current' : ''}`}
          >
            <strong>{c.name}</strong>
            <span>{c.description}</span>
            <small>
              {count === 0
                ? b.soon
                : `${count} ${count === 1 ? b.article : b.articles}`}
            </small>
            <em>
              {b.explore} <span aria-hidden="true">→</span>
            </em>
          </Link>
        )
      })}
    </div>
  )
}
