import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../context/LanguageContext'

export type CertificateModalData = {
  id: number
  nameKey: string
  issuerKey: string
  image?: string
}

type CertificateModalProps = {
  certificates: CertificateModalData[]
  activeIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function CertificateModal({
  certificates,
  activeIndex,
  onClose,
  onNavigate,
}: CertificateModalProps) {
  const { t } = useLanguage()
  const certificate = certificates[activeIndex]
  const canNavigate = certificates.length > 1

  const goTo = (index: number) => onNavigate((index + certificates.length) % certificates.length)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goTo(activeIndex - 1)
      if (e.key === 'ArrowRight') goTo(activeIndex + 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, activeIndex, certificates.length])

  return createPortal(
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="cert-modal-carousel">
          {certificate.image ? (
            <img
              key={certificate.image}
              className="cert-modal-image"
              src={certificate.image}
              alt={t(certificate.nameKey)}
            />
          ) : (
            <div className="cert-modal-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>{t('certificates.imageComingSoon')}</span>
            </div>
          )}

          {canNavigate && (
            <>
              <button
                className="modal-nav-btn modal-nav-prev"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous certificate"
              >
                ‹
              </button>
              <button
                className="modal-nav-btn modal-nav-next"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next certificate"
              >
                ›
              </button>
            </>
          )}
        </div>

        {canNavigate && (
          <div className="modal-thumbnails">
            {certificates.map((_, i) => (
              <button
                key={i}
                className={`modal-thumb ${i === activeIndex ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Certificate ${i + 1}`}
              />
            ))}
          </div>
        )}

        <div className="cert-modal-body">
          <h3>{t(certificate.nameKey)}</h3>
          <span>{t(certificate.issuerKey)}</span>
        </div>
      </div>
    </div>,
    document.body
  )
}
