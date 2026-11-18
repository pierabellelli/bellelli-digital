import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Layout, PageHero } from '../components/Blocks'
import { ClusterGrid, PostRows } from '../components/BlogParts'
import { sortedPosts } from '../content/posts'
import { getCategory } from '../content/categories'
import { useSeo } from '../lib/useSeo'

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
  const items = sortedPosts().filter((p) => p.category === category.slug)
  useSeo(`${category.name} — Blog`, category.description, `/blog/categoria/${category.slug}`)

  return (
    <Layout>
      <PageHero eyebrow="Blog · Argomento" title={category.name} intro={category.description}>
        <Link to="/blog" className="text-link">
          <span aria-hidden="true">←</span> Tutti gli articoli
        </Link>
      </PageHero>
      <div className="container blog-body">
        <section>
          <div className="rows-head">
            <h2>Articoli</h2>
          </div>
          {items.length > 0 ? (
            <PostRows items={items} />
          ) : (
            <p className="blog-empty">Primi articoli in arrivo.</p>
          )}
        </section>
        <section className="blog-block">
          <div className="rows-head">
            <h2>Altri argomenti</h2>
          </div>
          <div className="blog-gap">
            <ClusterGrid current={category.slug} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
