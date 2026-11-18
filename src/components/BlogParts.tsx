import { Link } from '@tanstack/react-router'
import { formatDate, posts, type Post } from '../content/posts'
import { categories, getCategory } from '../content/categories'
import './Blog.css'

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
            <time dateTime={post.date}>{formatDate(post.date, 'it')}</time>
            {' · '}
            {post.minutes} min di lettura
          </p>
        </li>
      ))}
    </ul>
  )
}

export function ClusterGrid({ current }: { current?: string }) {
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
                ? 'Primi articoli in arrivo'
                : `${count} ${count === 1 ? 'articolo' : 'articoli'}`}
            </small>
            <em>
              Esplora <span aria-hidden="true">→</span>
            </em>
          </Link>
        )
      })}
    </div>
  )
}
