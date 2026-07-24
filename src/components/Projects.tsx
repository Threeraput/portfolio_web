import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref: headerRef, className: headerClass } = useScrollReveal()
  const { ref: filterRef, className: filterClass } = useScrollReveal()
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      category: 'mobile',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.6"
        >
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18-5h-3M3 16v3a2 2 0 0 0 2 2h3m11-5v3a2 2 0 0 1-2 2h-3" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      bgGradient: 'linear-gradient(135deg,rgba(var(--primary-rgb),.25),rgba(168,218,220,.3))',
      titleKey: 'projects.items.faceAttendance.title',
      descriptionKey: 'projects.items.faceAttendance.description',
      stack: ['Flutter', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Firebase'],
    },
    {
      id: 2,
      category: 'mobile',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8C63"
          strokeWidth="1.6"
        >
          <path d="M9 2h6l3 3v17H6V5l3-3Z" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      ),
      bgGradient: 'linear-gradient(135deg,rgba(168,230,207,.35),rgba(255,214,165,.3))',
      titleKey: 'projects.items.transcriptChecker.title',
      descriptionKey: 'projects.items.transcriptChecker.description',
      stack: ['React Native', 'SQLite'],
    },
    {
      id: 3,
      category: 'data',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B4763B"
          strokeWidth="1.6"
        >
          <path d="M3 3v18h18" />
          <path d="m7 15 4-5 3 3 5-7" />
        </svg>
      ),
      bgGradient: 'linear-gradient(135deg,rgba(255,214,165,.35),rgba(var(--primary-rgb),.22))',
      titleKey: 'projects.items.stockPrediction.title',
      descriptionKey: 'projects.items.stockPrediction.description',
      stack: ['Python', 'Regression Modeling', 'Pandas'],
    },
  ]

  const filters = [
    { value: 'all', labelKey: 'projects.filters.all' },
    { value: 'mobile', labelKey: 'projects.filters.mobile' },
    { value: 'web', labelKey: 'projects.filters.web' },
    { value: 'data', labelKey: 'projects.filters.data' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className={`section-head ${headerClass}`} ref={headerRef}>
          <span className="eyebrow">
            {t('projects.eyebrow')}
          </span>
          <h2>
            {t('projects.title')}
          </h2>
          <p>
            {t('projects.description')}
          </p>
        </div>

        <div className={`filter-bar ${filterClass}`} ref={filterRef}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {t(filter.labelKey)}
            </button>
          ))}
        </div>

        <div className="project-grid stagger" id="projectGrid">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="project-card reveal is-visible"
              style={{ '--i': i } as React.CSSProperties}
            >
              <div
                className="project-shot"
                style={{ background: project.bgGradient }}
              >
                {project.icon}
              </div>
              <div className="project-body">
                <h3>{t(project.titleKey)}</h3>
                <p>{t(project.descriptionKey)}</p>
                <div className="project-stack">
                  {project.stack.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href="#" className="btn btn-ghost btn-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                    </svg>
                    GitHub
                  </a>
                  <a href="#" className="btn btn-primary btn-sm">
                    <span>{t('projects.liveDemo')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
