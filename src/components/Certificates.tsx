import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import CertificateModal from './CertificateModal'

const CERTIFICATES_PER_PAGE = 6

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const { ref: headerRef, className: headerClass } = useScrollReveal()
  const { t } = useLanguage()

  const certificates = [
    {
      id: 1,
      nameKey: 'certificates.items.one.name',
      issuerKey: 'certificates.items.one.issuer',
      image: '/cert/build_app.png',
    },
    {
      id: 2,
      nameKey: 'certificates.items.two.name',
      issuerKey: 'certificates.items.two.issuer',
      image: '/cert/aws_gosoft_cert.png',
    },
    {
      id: 3,
      nameKey: 'certificates.items.three.name',
      issuerKey: 'certificates.items.three.issuer',
      image: '/cert/cert_good_study.png',
    },
    {
      id: 4,
      nameKey: 'certificates.items.four.name',
      issuerKey: 'certificates.items.four.issuer',
      image: '/cert/ai_for_thai.png',
    },
  ]

  const totalPages = Math.ceil(certificates.length / CERTIFICATES_PER_PAGE)
  const paginatedCertificates = certificates.slice(
    (currentPage - 1) * CERTIFICATES_PER_PAGE,
    currentPage * CERTIFICATES_PER_PAGE
  )

  const goToPage = (page: number) => {
    setCurrentPage(page)
    document.getElementById('certificateGrid')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className={`section-head ${headerClass}`} ref={headerRef}>
          <span className="eyebrow">
            {t('certificates.eyebrow')}
          </span>
          <h2>
            {t('certificates.title')}
          </h2>
          <p>
            {t('certificates.description')}
          </p>
        </div>
        <div className="cert-grid stagger" id="certificateGrid">
          {paginatedCertificates.map((cert, i) => (
            <div
              key={cert.id}
              className="cert-card reveal is-visible"
              style={{ '--i': i } as React.CSSProperties}
              onClick={() => setActiveIndex((currentPage - 1) * CERTIFICATES_PER_PAGE + i)}
              role="button"
              tabIndex={0}
            >
              <img
                className="cert-card-image"
                src={cert.image}
                alt={t(cert.nameKey)}
              />
              <h3>
                {t(cert.nameKey)}
              </h3>
              <span>
                {t(cert.issuerKey)}
              </span>
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

      {activeIndex !== null && (
        <CertificateModal
          certificates={certificates}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  )
}
