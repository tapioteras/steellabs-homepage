import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ConsentBanner from './components/ConsentBanner'
import { LanguageProvider } from './i18n/LanguageContext'
import type { Locale } from './i18n/content'

export default function App({ locale }: { locale: Locale }) {
  return (
    <LanguageProvider locale={locale}>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <ConsentBanner />
    </LanguageProvider>
  )
}
