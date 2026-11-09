// Build-time entry used by scripts/prerender.mjs to turn each language's page
// into static HTML, so crawlers and link previews see the full content.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { content, LOCALES, type Locale } from './i18n/content'

export function render(locale: Locale): string {
  return renderToString(
    <StrictMode>
      <App locale={locale} />
    </StrictMode>,
  )
}

export const SITE_URL = 'https://steellabs.io'
const LINKEDIN_URL = 'https://www.linkedin.com/company/steel-labs-ltd'

const PAGE_PATH: Record<Locale, string> = { fi: '/', en: '/en/' }
const OG_LOCALE: Record<Locale, string> = { fi: 'fi_FI', en: 'en_US' }
const DEFAULT_LOCALE: Locale = 'fi'

export function pageUrl(locale: Locale): string {
  return SITE_URL + PAGE_PATH[locale]
}

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** schema.org description of the business, so search engines know what Steel Labs offers. */
function structuredData(locale: Locale): string {
  const t = content[locale]
  const orgId = `${SITE_URL}/#organization`
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: 'Steel Labs',
        url: pageUrl(DEFAULT_LOCALE),
        image: `${SITE_URL}/og-${locale}.png`,
        email: 'info@steellabs.io',
        description: t.meta.description,
        areaServed: { '@type': 'Country', name: 'Finland' },
        sameAs: [LINKEDIN_URL],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.skills.heading,
          itemListElement: t.skills.items.map((item) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.title, description: item.description },
          })),
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl(locale)}#webpage`,
        url: pageUrl(locale),
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: locale,
        about: { '@id': orgId },
      },
    ],
  }
  // `<` escaped so the JSON can never close the <script> element early
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

/** Everything that differs per language inside <head>. */
export function head(locale: Locale): string {
  const t = content[locale]
  const url = pageUrl(locale)
  const image = `${SITE_URL}/og-${locale}.png`
  const others = LOCALES.filter((l) => l !== locale)

  return [
    `<title>${esc(t.meta.title)}</title>`,
    `<meta name="description" content="${esc(t.meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LOCALES.map((l) => `<link rel="alternate" hreflang="${l}" href="${pageUrl(l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LOCALE)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Steel Labs" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(t.meta.title)}" />`,
    `<meta property="og:description" content="${esc(t.meta.description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(t.meta.title)}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[locale]}" />`,
    ...others.map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(t.meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(t.meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${structuredData(locale)}</script>`,
  ].join('\n    ')
}
