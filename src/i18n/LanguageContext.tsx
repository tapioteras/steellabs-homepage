import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, LOCALES, type Content, type Locale } from './content'

const STORAGE_KEY = 'steellabs-lang'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored && (LOCALES as string[]).includes(stored) ? (stored as Locale) : null
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale() ?? 'en')

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  useEffect(() => {
    document.documentElement.lang = locale
    const t = content[locale]
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: content[locale] }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
