import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../context/LanguageContext'

export type ProjectMedia =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string; alt?: string }
  | { type: 'placeholder'; label: string; color: string }

export type ProjectModalData = {
  id: number
  icon: React.ReactNode
  bgGradient: string
  titleKey: string
  descriptionKey: string
  stack: string[]
  media?: ProjectMedia[]
}

type ProjectModalProps = {
  project: ProjectModalData
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const { t } = useLanguage()

  const media = project.media ?? []
  const hasMedia = media.length > 0
  const slideCount = hasMedia ? media.length : 1

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setActiveSlide((i) => (i - 1 + slideCount) % slideCount)
      if (e.key === 'ArrowRight') setActiveSlide((i) => (i + 1) % slideCount)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, slideCount])

  const goTo = (index: number) => setActiveSlide((index + slideCount) % slideCount)

  return createPortal(
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-carousel">
          {hasMedia ? (
            media[activeSlide].type === 'video' ? (
              <video
                key={media[activeSlide].src}
                className="modal-slide"
                src={media[activeSlide].src}
                controls
                autoPlay
              />
            ) : media[activeSlide].type === 'image' ? (
              <img
                key={media[activeSlide].src}
                className="modal-slide"
                src={media[activeSlide].src}
                alt={media[activeSlide].alt ?? t(project.titleKey)}
              />
            ) : (
              <div
                key={media[activeSlide].label}
                className="modal-slide modal-slide-placeholder"
                style={{ background: media[activeSlide].color }}
              >
                <div className="modal-placeholder-icon">{project.icon}</div>
                <span className="modal-placeholder-label">{media[activeSlide].label}</span>
              </div>
            )
          ) : (
            <div
              className="modal-slide modal-slide-placeholder"
              style={{ background: project.bgGradient }}
            >
              <div className="modal-placeholder-icon">{project.icon}</div>
              <span className="modal-placeholder-label">
                {t('projects.mediaComingSoon')}
              </span>
            </div>
          )}

          {slideCount > 1 && (
            <>
              <button
                className="modal-nav-btn modal-nav-prev"
                onClick={() => goTo(activeSlide - 1)}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="modal-nav-btn modal-nav-next"
                onClick={() => goTo(activeSlide + 1)}
                aria-label="Next"
              >
                ›
              </button>
            </>
          )}
        </div>

        {slideCount > 1 && (
          <div className="modal-thumbnails">
            {Array.from({ length: slideCount }, (_, i) => (
              <button
                key={i}
                className={`modal-thumb ${i === activeSlide ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        <div className="modal-body">
          <h3>{t(project.titleKey)}</h3>
          <p>{t(project.descriptionKey)}</p>
          <div className="project-stack">
            {project.stack.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
