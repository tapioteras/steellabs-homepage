// Google Analytics 4 (gtag.js), loaded only after the visitor accepts
// analytics cookies (required in Finland/EU). Until then nothing is sent to
// Google, and clicks are not queued either.
//
// Custom events (parameters are registered as custom dimensions in GA4):
//   contact_click    { contact_method: 'email' | 'linkedin', link_location }   key event
//   project_click    { project_name, link_location }
//   section_click    { link_target, link_location }   in-page links (#referenssit …)
//   language_switch  { language }

const GA_MEASUREMENT_ID = 'G-BNFS0FEL37'
const CONSENT_KEY = 'steellabs-analytics-consent'
export const OPEN_CONSENT_EVENT = 'steellabs:open-consent'

export type Consent = 'granted' | 'denied'

type DataLayerWindow = Window & { dataLayer?: unknown[] }

// gtag() must push the `arguments` object itself, not an array, or gtag.js ignores it
function gtag(..._args: unknown[]) {
  const w = window as DataLayerWindow
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push(arguments)
}

export function getConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

let gaLoaded = false
let trackingAllowed = false

function loadGa() {
  if (gaLoaded) return
  gaLoaded = true
  gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

/** Removes Google Analytics cookies (_ga, _ga_<id>) after consent is withdrawn. */
function clearAnalyticsCookies() {
  const host = window.location.hostname
  const domains = ['', host, `.${host.replace(/^www\./, '')}`]
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim()
    if (name === '_ga' || name.startsWith('_ga_') || name === '_gid') {
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
      }
    }
  }
}

export function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // storage blocked: the choice applies to this page view only
  }
  trackingAllowed = value === 'granted'
  if (value === 'granted') {
    if (gaLoaded) gtag('consent', 'update', { analytics_storage: 'granted' })
    loadGa()
  } else {
    if (gaLoaded) gtag('consent', 'update', { analytics_storage: 'denied' })
    clearAnalyticsCookies()
  }
}

function track(event: string, params: Record<string, string>) {
  if (!trackingAllowed) return
  gtag('event', event, params)
}

function linkLocation(el: Element): string {
  if (el.closest('.site-header')) return 'header'
  if (el.closest('.hero')) return 'hero'
  if (el.closest('#referenssit')) return 'projects'
  if (el.closest('.site-footer')) return 'footer'
  return 'page'
}

/** One delegated listener classifies every link click on the page. */
function onClick(e: MouseEvent) {
  const link = (e.target as Element | null)?.closest?.('a')
  if (!link) return
  const href = link.getAttribute('href') ?? ''
  const location = linkLocation(link)

  if (link.closest('.lang-switcher')) {
    track('language_switch', { language: link.getAttribute('hreflang') ?? '' })
  } else if (href.startsWith('mailto:')) {
    track('contact_click', { contact_method: 'email', link_location: location })
  } else if (href.includes('linkedin.com')) {
    track('contact_click', { contact_method: 'linkedin', link_location: location })
  } else if (location === 'projects' && /^https?:/.test(href)) {
    track('project_click', { project_name: new URL(href).hostname, link_location: location })
  } else if (href.startsWith('#')) {
    track('section_click', { link_target: href, link_location: location })
  }
}

export function initAnalytics() {
  if (getConsent() === 'granted') {
    trackingAllowed = true
    loadGa()
  }
  document.addEventListener('click', onClick, { capture: true })
}
