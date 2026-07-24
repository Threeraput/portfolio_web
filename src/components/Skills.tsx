import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { ref: headerRef, className: headerClass } = useScrollReveal()
  const { t } = useLanguage()

  const skillCategories = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 21h8M12 18v3" />
        </svg>
      ),
      bgColor: 'rgba(var(--primary-rgb),.14)',
      titleKey: 'skills.categories.frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8C8F"
          strokeWidth="2"
        >
          <path d="M4 17V7a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        </svg>
      ),
      bgColor: 'rgba(168,218,220,.35)',
      titleKey: 'skills.categories.backend',
      skills: ['NestJS', 'Node.js', 'FastAPI', 'REST API'],
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B4763B"
          strokeWidth="2"
        >
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      ),
      bgColor: 'rgba(255,214,165,.4)',
      titleKey: 'skills.categories.database',
      skills: ['PostgreSQL', 'SQLite', 'Firebase'],
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8C63"
          strokeWidth="2"
        >
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      ),
      bgColor: 'rgba(168,230,207,.4)',
      titleKey: 'skills.categories.mobile',
      skills: ['Flutter', 'Dart', 'React Native'],
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C0554E"
          strokeWidth="2"
        >
          <path d="M4 4v6h6M20 20v-6h-6" />
          <path d="M20 8a8 8 0 0 0-14.9-2M4 16a8 8 0 0 0 14.9 2" />
        </svg>
      ),
      bgColor: 'rgba(255,170,165,.28)',
      titleKey: 'skills.categories.devops',
      skills: ['Git', 'CI/CD', 'Docker'],
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.4-3.4a4 4 0 0 1-5.4 5.4l-6.6 6.6a2 2 0 1 1-2.8-2.8l6.6-6.6a4 4 0 0 1 5.4-5.4Z" />
        </svg>
      ),
      bgColor: 'rgba(var(--primary-rgb),.14)',
      titleKey: 'skills.categories.tools',
      skills: ['VS Code', 'Figma', 'Postman'],
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className={`section-head ${headerClass}`} ref={headerRef}>
          <span className="eyebrow">
            {t('skills.eyebrow')}
          </span>
          <h2>
            {t('skills.title')}
          </h2>
          <p>
            {t('skills.description')}
          </p>
        </div>

        <div className="skills-grid stagger">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="skill-card reveal is-visible"
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className="ic" style={{ background: category.bgColor }}>
                {category.icon}
              </div>
              <h3>{t(category.titleKey)}</h3>
              <div className="tag-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
