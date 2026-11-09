# Steel Labs — kotisivut

Steel Labsin kotisivu (steellabs.io). React + TypeScript + Vite, ei taustavarastoa.

## Ajaminen paikallisesti

```bash
npm install
npm run dev
```

Avaa selaimessa osoite, jonka `npm run dev` tulostaa (oletuksena http://localhost:5173).

## Kielet ja hakukonenäkyvyys

- Suomi on juuressa (`/`), englanti polussa `/en/`. Kieli päätellään osoitteesta, ja kielivalitsin on tavallinen linkki.
- `npm run build` esirenderöi kummankin kielen valmiiksi HTML:ksi (`scripts/prerender.mjs` + `src/entry-server.tsx`), joten hakukoneet ja linkkiesikatselut näkevät koko sisällön ilman JavaScriptiä.
- Otsikot, kuvaukset, canonical, hreflang, Open Graph ja JSON-LD syntyvät `src/i18n/content.ts`:n sisällöstä (`head()` tiedostossa `src/entry-server.tsx`). Build kirjoittaa myös `sitemap.xml`:n.
- Jakokuvat ovat `public/og-fi.png` ja `public/og-en.png` (1200×630).

## Tuotantoversion kääntäminen

```bash
npm run build
```

Lopputulos syntyy `dist/`-kansioon. Voit esikatsella sitä komennolla `npm run preview`.

## Julkaisu GitHub Pagesiin

1. Varmista, että repo on pushattu GitHubiin ja että sinulla on kirjoitusoikeus siihen.
2. Aja:

   ```bash
   npm run deploy
   ```

   Tämä kääntää sivuston ja julkaisee `dist/`-kansion sisällön `gh-pages`-haaraan (käyttää `gh-pages`-pakettia).
3. Mene GitHubissa repon **Settings → Pages** -välilehdelle ja valitse lähteeksi `gh-pages`-haara (juurihakemisto `/`).
4. Custom-domain on jo valmiiksi asetettu `public/CNAME`-tiedostossa (`steellabs.io`) — GitHub täyttää domain-kentän automaattisesti ensimmäisen julkaisun jälkeen. Muista vielä osoittaa DNS (A/ALIAS-tietueet GitHub Pagesin IP-osoitteisiin tai CNAME `<käyttäjä>.github.io`) domainin rekisterinpitäjän puolella.
