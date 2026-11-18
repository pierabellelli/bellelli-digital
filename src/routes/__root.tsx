import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Layout, PageHero } from '../components/Blocks'
import { Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Outlet,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <Layout>
      <PageHero eyebrow="Errore 404" title="Questa pagina non esiste.">
        <Link to="/" className="btn btn-primary">
          Torna alla home
        </Link>
      </PageHero>
    </Layout>
  )
}
