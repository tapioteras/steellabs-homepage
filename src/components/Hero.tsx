import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-kicker">
          <span className="blink-cursor">_</span> {t.hero.kicker}
        </p>
        <h1 className="hero-title">
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2Prefix}{' '}
          <span className="glitch-text" data-text={t.hero.titleLine2Accent}>
            {t.hero.titleLine2Accent}
          </span>
        </h1>
        <p className="hero-lede">{t.hero.lede}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="mailto:info@steellabs.io">
            info@steellabs.io
          </a>
          <a className="btn btn-ghost" href="#referenssit">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
