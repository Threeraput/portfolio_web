import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { ref: ref1, className: className1 } = useScrollReveal()
  const { ref: ref2, className: className2 } = useScrollReveal()
  const { ref: ref3, className: className3 } = useScrollReveal()
  const { ref: actionsRef, className: actionsClass } = useScrollReveal()
  const { ref: metaRef, className: metaClass } = useScrollReveal()
  const { ref: illustrationRef, className: illustrationClass } = useScrollReveal(true)
  const { t } = useLanguage()

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <span
            className={`hero-greeting ${className1}`}
            ref={ref1}
          >
              {t('hero.greeting')}
          </span>
          <h1 className={`${className2}`} ref={ref2}>
            {t('hero.name')}<br />
            <span className="role">
              {t('hero.role')}
            </span>
          </h1>
          <p className={`lead ${className3}`} ref={ref3}>
            {t('hero.lead')}
          </p>
          <div className={`hero-actions ${actionsClass}`} ref={actionsRef}>
            <a
              href="/resume/Theeraphat_CV.pdf"
              download="Theeraphat_CV.pdf"
              className="btn btn-primary"
              id="downloadResumeBtn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
              </svg>
              <span>{t('hero.downloadResume')}</span>
            </a>
            <a href="#projects" className="btn btn-ghost">
              <span>{t('hero.viewProjects')}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14m0 0-6-6m6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className={`hero-meta ${metaClass}`} ref={metaRef}>
            <div>
              <strong>3+</strong>
              <span>{t('hero.featuredProjects')}</span>
            </div>
            <div>
              <strong>6</strong>
              <span>{t('hero.coreSkillAreas')}</span>
            </div>
            <div>
              <strong>TH / EN</strong>
              <span>{t('hero.languages')}</span>
            </div>
          </div>
        </div>

        <div className={`hero-illustration ${illustrationClass}`} ref={illustrationRef}>
          <img
            src="/developer%20animation.svg"
            alt="Developer illustration"
            width="100%"
            style={{ maxWidth: '420px' }}
          />
        </div>
      </div>
    </section>
  )
}
