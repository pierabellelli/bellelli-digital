import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { copy, type Language } from './copy'

function getLanguage(): Language {
  const query = new URLSearchParams(window.location.search).get('lang')
  if (query === 'en' || query === 'it') return query
  try {
    return localStorage.getItem('bellelli-language') === 'en' ? 'en' : 'it'
  } catch {
    return 'it'
  }
}

const LanguageContext = createContext({
  language: 'it' as Language,
  setLanguage: (_language: Language) => {},
  t: copy.it,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getLanguage)
  useEffect(() => {
    const onPopState = () => setLanguage(getLanguage())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  useEffect(() => {
    const { title, description } = copy[language].meta
    document.documentElement.lang = language
    document.title = title
    const values: Record<string, string> = {
      'meta[name="description"]': description,
      'meta[property="og:title"]': title,
      'meta[property="og:description"]': description,
      'meta[property="og:locale"]': language === 'it' ? 'it_IT' : 'en_GB',
      'meta[name="twitter:title"]': title,
      'meta[name="twitter:description"]': description,
    }
    for (const [selector, value] of Object.entries(values))
      document.querySelector(selector)?.setAttribute('content', value)
    const canonical = `https://bellelli-digital.com/${language === 'en' ? '?lang=en' : ''}`
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', canonical)
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute('content', canonical)
    const url = new URL(window.location.href)
    if (language === 'en') url.searchParams.set('lang', 'en')
    else url.searchParams.delete('lang')
    window.history.replaceState(window.history.state, '', url)
    try {
      localStorage.setItem('bellelli-language', language)
    } catch {
      /* Language still works without storage. */
    }
  }, [language])
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: copy[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
