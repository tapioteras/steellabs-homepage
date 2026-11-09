import { LOCALES, LOCALE_LABELS } from '../i18n/content'
import { localeHref, useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitcher() {
  const { locale } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {LOCALES.map((code, index) => (
        <span key={code} className="lang-switcher-item">
          <a
            href={localeHref(locale, code)}
            hrefLang={code}
            lang={code}
            className={code === locale ? 'lang-switcher-active' : ''}
            aria-current={code === locale ? 'page' : undefined}
          >
            {LOCALE_LABELS[code]}
          </a>
          {index < LOCALES.length - 1 && <span className="lang-switcher-sep">/</span>}
        </span>
      ))}
    </div>
  )
}
