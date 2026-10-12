import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { projects, type ProjectData } from '../data/projects'
import ProjectModal from './ProjectModal'

const PROJECTS_PER_PAGE = 4

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const { ref: headerRef, className: headerClass } = useScrollReveal()
  const { ref: filterRef, className: filterClass } = useScrollReveal()
  const { t } = useLanguage()


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
          {paginatedProjects.map((project, i) => {
            const coverImage =
              project.coverImage ??
              project.media?.find((item) => item.type === 'image')?.src

            return (
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
                  {coverImage ? (
                    <img className="project-shot-image" src={coverImage} alt="" />
                  ) : project.icon}
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
                        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 0 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                      </svg>
                      GitHub
                    </a>
                    <a href="#" className="btn btn-primary btn-sm" onClick={(e) => e.stopPropagation()}>
                      <span>{t('projects.liveDemo')}</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
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
