import { useLanguage } from '../i18n/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="osaaminen" className="section">
      <div className="section-heading">
        <span className="section-eyebrow">{t.skills.eyebrow}</span>
        <h2>{t.skills.heading}</h2>
        <p className="section-intro">{t.skills.intro}</p>
      </div>
      <div className="skills-grid">
        {t.skills.items.map((skill) => (
          <article key={skill.tag} className="skill-card">
            <span className="skill-tag">{skill.tag}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
