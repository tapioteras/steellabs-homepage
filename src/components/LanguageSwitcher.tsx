import { LOCALES, LOCALE_LABELS } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {LOCALES.map((code, index) => (
        <span key={code} className="lang-switcher-item">
          <button
            type="button"
            className={code === locale ? 'lang-switcher-active' : ''}
            aria-current={code === locale}
            onClick={() => setLocale(code)}
          >
            {LOCALE_LABELS[code]}
          </button>
          {index < LOCALES.length - 1 && <span className="lang-switcher-sep">/</span>}
        </span>
      ))}
    </div>
  )
}
