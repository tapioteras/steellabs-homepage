import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="referenssit" className="section">
      <div className="section-heading">
        <span className="section-eyebrow">{t.projects.eyebrow}</span>
        <h2>{t.projects.heading}</h2>
        <p className="section-intro">{t.projects.intro}</p>
      </div>
      <div className="projects-grid">
        {t.projects.items.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="project-card"
          >
            <span className="project-badge">{t.projects.badge}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className="project-link">{t.projects.linkLabel}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
