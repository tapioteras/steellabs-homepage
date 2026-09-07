import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="site-header">
      <a href="#top" className="brand">
        <Logo className="brand-logo" />
        <span className="brand-name">
          STEEL<span className="brand-name-accent">LABS</span>
        </span>
      </a>
      <nav className="site-nav">
        {t.nav.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="mailto:info@steellabs.io">
          {t.nav.cta}
        </a>
        <a
          className="nav-linkedin"
          href="https://www.linkedin.com/company/steel-labs-ltd"
          target="_blank"
          rel="noreferrer noopener"
        >
          {t.nav.linkedin}
        </a>
        <LanguageSwitcher />
      </nav>
    </header>
  )
}
