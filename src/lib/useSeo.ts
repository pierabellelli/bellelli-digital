import { useEffect } from 'react'
import { SITE_URL } from './site'

const SUFFIX = 'Bellelli Digital'

/** Sets the document title, meta description and canonical URL for a page. */
export function useSeo(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title.includes(SUFFIX) ? title : `${title} — ${SUFFIX}`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', `${SITE_URL}${path}`)
  }, [title, description, path])
}
