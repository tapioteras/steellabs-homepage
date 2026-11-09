import { useEffect, useState } from 'react'
import { getConsent, OPEN_CONSENT_EVENT, setConsent, type Consent } from '../analytics'
import { useLanguage } from '../i18n/LanguageContext'

// Shown until the visitor chooses; reopened from the footer's cookie-settings
// link. Hidden in the prerendered HTML (the choice lives in the browser), so it
// only appears after hydration.
export default function ConsentBanner() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (getConsent() === null) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
  }, [])

  if (!open) return null

  const choose = (value: Consent) => {
    setConsent(value)
    setOpen(false)
  }

  return (
    <section className="consent-banner" aria-label={t.consent.title}>
      <div className="consent-text">
        <h2 className="consent-title">{t.consent.title}</h2>
        <p>{t.consent.text}</p>
      </div>
      <div className="consent-actions">
        <button type="button" className="btn btn-ghost" onClick={() => choose('denied')}>
          {t.consent.decline}
        </button>
        <button type="button" className="btn btn-primary" onClick={() => choose('granted')}>
          {t.consent.accept}
        </button>
      </div>
    </section>
  )
}
