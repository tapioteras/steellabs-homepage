import { useLanguage } from '../i18n/LanguageContext'
import { OPEN_CONSENT_EVENT } from '../analytics'
import { BUSINESS_ID } from '../i18n/content'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer id="yhteys" className="site-footer">
      <div className="footer-inner">
        <div className="footer-cta">
          <span className="section-eyebrow">{t.footer.eyebrow}</span>
          <h2>{t.footer.heading}</h2>
          <div className="footer-contacts">
            <a className="btn btn-primary btn-large" href="mailto:info@steellabs.io">
              info@steellabs.io
            </a>
            <a
              className="btn btn-ghost btn-large"
              href="https://www.linkedin.com/company/steel-labs-ltd"
              target="_blank"
              rel="noreferrer noopener"
            >
              {t.footer.linkedinLabel}
            </a>
          </div>
        </div>
        <div className="footer-meta">
          <p>{t.footer.tagline}</p>
          <button
            type="button"
            className="footer-consent"
            onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
          >
            {t.consent.settings}
          </button>
          {/* the year is baked in at build time; the browser may disagree after New Year */}
          <p className="footer-copyright" suppressHydrationWarning>
            © {year} {t.footer.copyrightSuffix} · {t.footer.businessIdLabel} {BUSINESS_ID}
          </p>
        </div>
      </div>
    </footer>
  )
}
