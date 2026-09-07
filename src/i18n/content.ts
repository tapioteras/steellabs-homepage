export type Locale = 'en' | 'fi'

export const LOCALES: Locale[] = ['en', 'fi']

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  fi: 'FI',
}

type NavLink = {
  href: string
  label: string
}

type SkillItem = {
  tag: string
  title: string
  description: string
}

type ProjectItem = {
  name: string
  url: string
  description: string
}

export type Content = {
  meta: {
    title: string
    description: string
  }
  nav: {
    links: NavLink[]
    cta: string
    linkedin: string
  }
  hero: {
    kicker: string
    titleLine1: string
    titleLine2Prefix: string
    titleLine2Accent: string
    lede: string
    ctaSecondary: string
  }
  skills: {
    eyebrow: string
    heading: string
    intro: string
    items: SkillItem[]
  }
  projects: {
    eyebrow: string
    heading: string
    intro: string
    badge: string
    linkLabel: string
    items: ProjectItem[]
  }
  footer: {
    eyebrow: string
    heading: string
    linkedinLabel: string
    tagline: string
    copyrightSuffix: string
  }
}

export const content: Record<Locale, Content> = {
  en: {
    meta: {
      title: 'Steel Labs',
      description:
        'Steel Labs — AI adoption, dev team leadership, and value-driven software engineering.',
    },
    nav: {
      links: [
        { href: '#osaaminen', label: 'Skills' },
        { href: '#referenssit', label: 'Work' },
        { href: '#yhteys', label: 'Contact' },
      ],
      cta: 'Get in touch',
      linkedin: 'LinkedIn',
    },
    hero: {
      kicker: 'AI adoption & software engineering',
      titleLine1: 'AI into action.',
      titleLine2Prefix: 'Value made',
      titleLine2Accent: 'visible.',
      lede: 'I help teams and organizations bring AI into everyday work, one step at a time — and I lead, code, and build analytics myself when that’s the best way to create value. Sometimes the answer is code, sometimes it isn’t. Always a visible, demoable result.',
      ctaSecondary: 'See examples',
    },
    skills: {
      eyebrow: '// current expertise',
      heading: 'What I bring to the table',
      intro:
        'The goal is always value creation — sometimes that means writing code, sometimes it means something else. What matters is a visible result you can demo to the client, regularly.',
      items: [
        {
          tag: '01',
          title: 'AI coaching for teams & organizations',
          description:
            'I take AI adoption through step by step — from pilot to everyday use across the whole organization.',
        },
        {
          tag: '02',
          title: 'AI models & AI bots in production',
          description:
            'Solid track record bringing AI models into different parts of organizations, and building custom AI bots.',
        },
        {
          tag: '03',
          title: 'Leading dev teams & hands-on coding',
          description:
            '15+ years in IT: leading teams, hands-on coding, and technical design, all in one package.',
        },
        {
          tag: '04',
          title: 'Analytics & proactive quality management',
          description:
            'Data-driven solutions, for example proactive bug detection before issues ever reach production.',
        },
      ],
    },
    projects: {
      eyebrow: '// examples',
      heading: 'Samples of the work',
      intro:
        'Everything below was built AI-assisted — the same approach I use when building for clients.',
      badge: 'AI-built',
      linkLabel: 'Open site →',
      items: [
        {
          name: 'recipes.steellabs.io',
          url: 'https://recipes.steellabs.io/',
          description: 'Recipe app — from idea to build, AI-assisted.',
        },
        {
          name: 'working-hours.steellabs.io',
          url: 'https://working-hours.steellabs.io/',
          description: 'Working hours tracking and management, built using AI tooling.',
        },
        {
          name: 'steel-balance.steellabs.io',
          url: 'https://steel-balance.steellabs.io/',
          description: 'Financial balance tracking tool, AI-built.',
        },
      ],
    },
    footer: {
      eyebrow: '// contact',
      heading: 'Ready to build the next demoable result?',
      linkedinLabel: 'LinkedIn ↗',
      tagline:
        'Steel Labs — AI adoption, dev team leadership, and value-driven software engineering.',
      copyrightSuffix: 'Steel Labs. All rights reserved.',
    },
  },
  fi: {
    meta: {
      title: 'Steel Labs',
      description:
        'Steel Labs — AI-jalkautus, devtiimien johtaminen ja arvoa tuottava ohjelmistokehitys.',
    },
    nav: {
      links: [
        { href: '#osaaminen', label: 'Osaaminen' },
        { href: '#referenssit', label: 'Referenssit' },
        { href: '#yhteys', label: 'Yhteys' },
      ],
      cta: 'Ota yhteyttä',
      linkedin: 'LinkedIn',
    },
    hero: {
      kicker: 'AI-jalkautus & ohjelmistokehitys',
      titleLine1: 'Tekoäly käyttöön.',
      titleLine2Prefix: 'Arvo',
      titleLine2Accent: 'näkyväksi.',
      lede: 'Autan tiimejä ja organisaatioita ottamaan AI:n osaksi arkea, vaihe vaiheelta — ja johdan, koodaan ja rakennan analytiikkaa kun se on paras tapa tuottaa arvoa. Joskus ratkaisu on koodia, joskus jotain muuta. Aina näkyvä, demottava tulos.',
      ctaSecondary: 'Katso esimerkkejä',
    },
    skills: {
      eyebrow: '// nykyosaaminen',
      heading: 'Mitä tuon pöytään',
      intro:
        'Tavoite on aina arvontuotto — joskus se vaatii ohjelmointia, joskus jotain muuta. Tärkeintä on näkyvä tulos, jota voidaan demota asiakkaalle säännöllisesti.',
      items: [
        {
          tag: '01',
          title: 'AI-sparraus tiimeille & organisaatioille',
          description:
            'Vien AI:n käyttöönoton ja jalkautuksen läpi vaiheittain — pilotista arkikäyttöön koko organisaatiossa.',
        },
        {
          tag: '02',
          title: 'AI-mallit & AI-botit tuotantoon',
          description:
            'Vankka kokemus AI-mallien tuomisesta osaksi eri organisaatioiden toimintoja sekä räätälöityjen AI-bottien rakentamisesta.',
        },
        {
          tag: '03',
          title: 'Devtiimien johtaminen & koodaus',
          description:
            'Yli 15 vuoden kokemus IT-alalta: tiimien vetämistä, käytännön koodausta ja teknistä suunnittelua yhdessä paketissa.',
        },
        {
          tag: '04',
          title: 'Analytiikka & proaktiivinen laadunhallinta',
          description:
            'Datavetoisia ratkaisuja, esimerkiksi bugien ennakoivaan havaitsemiseen ennen kuin ne ehtivät tuotantoon.',
        },
      ],
    },
    projects: {
      eyebrow: '// esimerkkejä',
      heading: 'Näytteitä tekemisestä',
      intro:
        'Kaikki alla olevat sivustot on kehitetty AI-avusteisesti — samalla otteella, jolla rakennan ratkaisuja asiakkaille.',
      badge: 'AI-kehitetty',
      linkLabel: 'Avaa sivusto →',
      items: [
        {
          name: 'recipes.steellabs.io',
          url: 'https://recipes.steellabs.io/',
          description: 'Reseptisovellus — ideasta toteutukseen AI-avusteisesti.',
        },
        {
          name: 'working-hours.steellabs.io',
          url: 'https://working-hours.steellabs.io/',
          description: 'Työaikojen seuranta ja hallinta, rakennettu AI-työkaluja hyödyntäen.',
        },
        {
          name: 'steel-balance.steellabs.io',
          url: 'https://steel-balance.steellabs.io/',
          description: 'Talouden/tasapainon seurantatyökalu, AI-kehitetty.',
        },
      ],
    },
    footer: {
      eyebrow: '// yhteys',
      heading: 'Rakennetaanko seuraava demottava tulos?',
      linkedinLabel: 'LinkedIn ↗',
      tagline: 'Steel Labs — AI-jalkautus, devtiimien johtaminen ja arvoa tuottava ohjelmistokehitys.',
      copyrightSuffix: 'Steel Labs. Kaikki oikeudet pidätetään.',
    },
  },
}
