import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { localeFromPath } from './i18n/LanguageContext'
import { initAnalytics } from './analytics'

initAnalytics()

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App locale={localeFromPath(window.location.pathname)} />
  </StrictMode>
)

// Production pages are prerendered (scripts/prerender.mjs), so attach to the
// existing markup; the dev server serves an empty root, so render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
