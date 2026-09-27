import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import ProjectModal, { type ProjectModalData, type ProjectMedia } from './ProjectModal'

const PROJECTS_PER_PAGE = 4

// Simulated screenshot slides until real project media is available
const makePlaceholderMedia = (colors: string[]): ProjectMedia[] =>
  colors.map((color, i) => ({
    type: 'placeholder',
    color,
    label: `Screenshot ${i + 1}`,
  }))

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null)
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
      media: makePlaceholderMedia([
        'linear-gradient(135deg,#7FB3D5,#5499C7)',
        'linear-gradient(135deg,#5499C7,#2E86C1)',
        'linear-gradient(135deg,#2E86C1,#1B4F72)',
        'linear-gradient(135deg,#85C1E9,#3498DB)',
        'linear-gradient(135deg,#AED6F1,#5DADE2)',
      ]),
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
      media: makePlaceholderMedia([
        'linear-gradient(135deg,#82E0AA,#58D68D)',
        'linear-gradient(135deg,#58D68D,#28B463)',
        'linear-gradient(135deg,#28B463,#1D8348)',
        'linear-gradient(135deg,#A9DFBF,#52BE80)',
        'linear-gradient(135deg,#D5F5E3,#7DCEA0)',
      ]),
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
      media: makePlaceholderMedia([
        'linear-gradient(135deg,#F0B27A,#E59866)',
        'linear-gradient(135deg,#E59866,#CA6F1E)',
        'linear-gradient(135deg,#CA6F1E,#9C640C)',
        'linear-gradient(135deg,#F5CBA7,#EB984E)',
        'linear-gradient(135deg,#FAE5D3,#F0B27A)',
      ]),
    },
    {
      id: 4,
      category: 'web',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B7DB4"
          strokeWidth="1.6"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 4v5" />
        </svg>
      ),
      bgGradient: 'linear-gradient(135deg,rgba(168,200,230,.35),rgba(var(--primary-rgb),.22))',
      titleKey: 'projects.items.taskDashboard.title',
      descriptionKey: 'projects.items.taskDashboard.description',
      stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      media: makePlaceholderMedia([
        'linear-gradient(135deg,#85C1E9,#5DADE2)',
        'linear-gradient(135deg,#5DADE2,#2980B9)',
        'linear-gradient(135deg,#2980B9,#1F618D)',
        'linear-gradient(135deg,#AED6F1,#7FB3D5)',
        'linear-gradient(135deg,#D6EAF8,#85C1E9)',
      ]),
    },
    {
      id: 5,
      category: 'web',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8C5CB4"
          strokeWidth="1.6"
        >
          <path d="M4 4h16v12H8l-4 4Z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      ),
      bgGradient: 'linear-gradient(135deg,rgba(216,180,230,.35),rgba(var(--primary-rgb),.22))',
      titleKey: 'projects.items.chatSupport.title',
      descriptionKey: 'projects.items.chatSupport.description',
      stack: ['Next.js', 'Socket.IO', 'Redis'],
      media: makePlaceholderMedia([
        'linear-gradient(135deg,#C39BD3,#A569BD)',
        'linear-gradient(135deg,#A569BD,#7D3C98)',
        'linear-gradient(135deg,#7D3C98,#512E5F)',
        'linear-gradient(135deg,#D7BDE2,#BB8FCE)',
        'linear-gradient(135deg,#EBDEF0,#C39BD3)',
      ]),
    },
    {
      id: 6,
      category: 'data',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B4405C"
          strokeWidth="1.6"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
      bgGradient: 'linear-gradient(135deg,rgba(230,180,190,.35),rgba(var(--primary-rgb),.22))',
      titleKey: 'projects.items.sentimentAnalysis.title',
      descriptionKey: 'projects.items.sentimentAnalysis.description',
      stack: ['Python', 'NLP', 'Scikit-learn'],
      media: makePlaceholderMedia([
        'linear-gradient(135deg,#F1948A,#EC7063)',
        'linear-gradient(135deg,#EC7063,#CB4335)',
        'linear-gradient(135deg,#CB4335,#943126)',
        'linear-gradient(135deg,#F5B7B1,#F1948A)',
        'linear-gradient(135deg,#FADBD8,#F1948A)',
      ]),
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

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  const handleFilterChange = (value: string) => {
    setActiveFilter(value)
    setCurrentPage(1)
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
    document.getElementById('projectGrid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
              onClick={() => handleFilterChange(filter.value)}
            >
              {t(filter.labelKey)}
            </button>
          ))}
        </div>

        <div className="project-grid stagger" id="projectGrid">
          {paginatedProjects.map((project, i) => (
            <div
              key={project.id}
              className="project-card reveal is-visible"
              style={{ '--i': i } as React.CSSProperties}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
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
                  <a href="#" className="btn btn-ghost btn-sm" onClick={(e) => e.stopPropagation()}>
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
                  <a href="#" className="btn btn-primary btn-sm" onClick={(e) => e.stopPropagation()}>
                    <span>{t('projects.liveDemo')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {t('projects.pagination.prev')}
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-btn pagination-num ${page === currentPage ? 'active' : ''}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="pagination-btn"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {t('projects.pagination.next')}
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
