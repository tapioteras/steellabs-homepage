import { useLanguage } from '../i18n/LanguageContext'

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
          <p className="footer-copyright">
            © {year} {t.footer.copyrightSuffix}
          </p>
        </div>
      </div>
    </footer>
  )
}
