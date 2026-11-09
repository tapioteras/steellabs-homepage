// Runs after the client and SSR builds (see "build" in package.json).
// Writes a fully rendered page per language plus sitemap.xml:
//   dist/index.html     Finnish (site root)
//   dist/en/index.html  English
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, head, pageUrl } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
)

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const headBlock = /<!--head:start[\s\S]*?<!--head:end-->/

const pages = [
  { locale: 'fi', file: 'index.html', assetPrefix: './' },
  { locale: 'en', file: 'en/index.html', assetPrefix: '../' },
]

for (const { locale, file, assetPrefix } of pages) {
  if (!headBlock.test(template) || !template.includes('<!--app-html-->')) {
    throw new Error('index.html is missing the prerender placeholders')
  }
  // Assets are linked relative to the page, and /en/ is one folder deeper.
  // Rewrite the template's own links first, before the rendered app (whose
  // language links are already relative to their page) is inserted.
  const html = template
    .replace(/(href|src)="\.\//g, `$1="${assetPrefix}`)
    .replace(/<html lang="[^"]*">/, `<html lang="${locale}">`)
    .replace(headBlock, () => head(locale))
    .replace('<!--app-html-->', () => render(locale))

  const out = join(dist, file)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  console.log(`prerendered ${locale} -> dist/${file}`)
}

const today = new Date().toISOString().slice(0, 10)
const alternates = pages
  .map((p) => `    <xhtml:link rel="alternate" hreflang="${p.locale}" href="${pageUrl(p.locale)}"/>`)
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (p) => `  <url>
    <loc>${pageUrl(p.locale)}</loc>
    <lastmod>${today}</lastmod>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl('fi')}"/>
  </url>`,
  )
  .join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
console.log('wrote dist/sitemap.xml')

rmSync(ssrDir, { recursive: true, force: true })
