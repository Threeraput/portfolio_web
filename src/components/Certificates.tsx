import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Certificates() {
  const { ref: headerRef, className: headerClass } = useScrollReveal()
  const { t } = useLanguage()

  const certificates = [
    {
      id: 1,
      nameKey: 'certificates.items.one.name',
      issuerKey: 'certificates.items.one.issuer',
    },
    {
      id: 2,
      nameKey: 'certificates.items.two.name',
      issuerKey: 'certificates.items.two.issuer',
    },
    {
      id: 3,
      nameKey: 'certificates.items.three.name',
      issuerKey: 'certificates.items.three.issuer',
    },
  ]

  const CertIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  )

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
        <div className="cert-grid stagger">
          {certificates.map((cert, i) => (
            <div
              key={cert.id}
              className="cert-card reveal is-visible"
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className="ic">
                <CertIcon />
              </div>
              <h3>
                {t(cert.nameKey)}
              </h3>
              <span>
                {t(cert.issuerKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
