import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Certificates() {
  const { ref: headerRef, className: headerClass } = useScrollReveal()
  const { language } = useLanguage()

  const certificates = [
    {
      id: 1,
      name: { en: '[Certificate Name]', th: '[ชื่อใบรับรอง]' },
      issuer: { en: '[Issuing Organization], [Year]', th: '[หน่วยงานผู้ออก], [ปี]' },
    },
    {
      id: 2,
      name: { en: '[Certificate Name]', th: '[ชื่อใบรับรอง]' },
      issuer: { en: '[Issuing Organization], [Year]', th: '[หน่วยงานผู้ออก], [ปี]' },
    },
    {
      id: 3,
      name: { en: '[Certificate Name]', th: '[ชื่อใบรับรอง]' },
      issuer: { en: '[Issuing Organization], [Year]', th: '[หน่วยงานผู้ออก], [ปี]' },
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
            {language === 'th' ? 'ใบรับรอง' : 'Certificates'}
          </span>
          <h2>
            {language === 'th'
              ? 'การเรียนรู้อย่างต่อเนื่อง'
              : 'Continuous learning'}
          </h2>
          <p>
            {language === 'th'
              ? 'คอร์สและใบรับรองที่สนับสนุนการทำงานด้านวิศวกรรมของผม'
              : 'Courses and certifications that support my day-to-day engineering work.'}
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
                {language === 'th' ? cert.name.th : cert.name.en}
              </h3>
              <span>
                {language === 'th' ? cert.issuer.th : cert.issuer.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
