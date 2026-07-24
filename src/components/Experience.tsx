import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { ref: headerRef, className: headerClass } = useScrollReveal()
  const { t } = useLanguage()

  const experiences = [
    {
      id: 1,
      periodKey: 'experience.items.coop.period',
      titleKey: 'experience.items.coop.title',
      companyKey: 'experience.items.coop.company',
      descriptionKey: 'experience.items.coop.description',
    },
    {
      id: 2,
      periodKey: 'experience.items.degree.period',
      titleKey: 'experience.items.degree.title',
      companyKey: 'experience.items.degree.company',
      descriptionKey: 'experience.items.degree.description',
    },
  ]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className={`section-head ${headerClass}`} ref={headerRef}>
          <span className="eyebrow">
            {t('experience.eyebrow')}
          </span>
          <h2>
            {t('experience.title')}
          </h2>
          <p>
            {t('experience.description')}
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="timeline-item reveal is-visible"
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-period">
                  {t(exp.periodKey)}
                </span>
                <h3>
                  {t(exp.titleKey)}
                </h3>
                <h4>
                  {t(exp.companyKey)}
                </h4>
                <p>
                  {t(exp.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
