import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { content, type Content, type Locale } from './content'

// Each language has its own URL (fi at the site root, en under /en/), so the
// locale is fixed per page: it is passed in from main.tsx / entry-server.tsx,
// and switching language is a normal link to the other page.

type LanguageContextValue = {
  locale: Locale
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/** Detects the locale from a URL path: anything under an `/en/` segment is English. */
export function localeFromPath(pathname: string): Locale {
  return /(^|\/)en(\/|\/index\.html)?$/.test(pathname) ? 'en' : 'fi'
}

/**
 * Relative href from the current locale's page to another locale's page.
 * Relative so it works both on steellabs.io and on the github.io subpath.
 */
export function localeHref(from: Locale, to: Locale): string {
  if (from === to) return './'
  return to === 'en' ? './en/' : '../'
}

export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<LanguageContextValue>(() => ({ locale, t: content[locale] }), [locale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
