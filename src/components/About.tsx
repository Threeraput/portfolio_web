import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { ref: avatarRef, className: avatarClass } = useScrollReveal(true)
  const { ref: eyebrowRef, className: eyebrowClass } = useScrollReveal()
  const { ref: titleRef, className: titleClass } = useScrollReveal()
  const { ref: p1Ref, className: p1Class } = useScrollReveal()
  const { ref: p2Ref, className: p2Class } = useScrollReveal()
  const { t } = useLanguage()

  const infoCards = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
        >
          <path d="M22 10 12 5 2 10l10 5 10-5Z" />
          <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
      ),
      bgColor: 'rgba(var(--primary-rgb),.14)',
      titleKey: 'about.cards.education.title',
      subtitleKey: 'about.cards.education.subtitle',
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8C8F"
          strokeWidth="2"
        >
          <path d="m8 3-5 9 5 9M16 3l5 9-5 9" />
        </svg>
      ),
      bgColor: 'rgba(168,218,220,.35)',
      titleKey: 'about.cards.role.title',
      subtitleKey: 'about.cards.role.subtitle',
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B4763B"
          strokeWidth="2"
        >
          <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
      bgColor: 'rgba(255,214,165,.4)',
      titleKey: 'about.cards.location.title',
      subtitleKey: 'about.cards.location.subtitle',
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8C63"
          strokeWidth="2"
        >
          <path d="M4 5h16M4 12h10M4 19h7" />
        </svg>
      ),
      bgColor: 'rgba(168,230,207,.4)',
      titleKey: 'about.cards.language.title',
      subtitleKey: 'about.cards.language.subtitle',
    },
  ]

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className={`avatar-wrap ${avatarClass}`} ref={avatarRef}>
          <div className="avatar">
            <span>PC</span>
          </div>
          <div className="avatar-badge">
            <span className="dot"></span>
            <span>{t('about.status')}</span>
          </div>
        </div>

        <div className="about-bio">
          <span className={`eyebrow ${eyebrowClass}`} ref={eyebrowRef}>
            {t('about.eyebrow')}
          </span>
          <h2
            className={`${titleClass}`}
            ref={titleRef}
            style={{
              fontSize: 'clamp(26px,3.2vw,34px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '18px',
            }}
          >
            {t('about.title')}
          </h2>
          <p className={`${p1Class}`} ref={p1Ref}>
            {t('about.bio1')}
          </p>
          <p className={`${p2Class}`} ref={p2Ref}>
            {t('about.bio2')}
          </p>

          <div className="info-cards stagger">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="info-card reveal is-visible"
                style={{ '--i': i } as React.CSSProperties}
              >
                <div className="ic" style={{ background: card.bgColor }}>
                  {card.icon}
                </div>
                <div>
                  <h4>{t(card.titleKey)}</h4>
                  <span>{t(card.subtitleKey)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
