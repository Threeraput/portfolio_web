import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { ref: ref1, className: className1 } = useScrollReveal()
  const { ref: ref2, className: className2 } = useScrollReveal()
  const { ref: ref3, className: className3 } = useScrollReveal()
  const { ref: actionsRef, className: actionsClass } = useScrollReveal()
  const { ref: metaRef, className: metaClass } = useScrollReveal()
  const { ref: illustrationRef, className: illustrationClass } = useScrollReveal(true)
  const { language } = useLanguage()

  const handleResumeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    alert(
      language === 'th'
        ? 'Please add your resume PDF link (for example, /resume.pdf).'
        : 'Add your resume PDF link here (e.g. /resume.pdf) to enable this button.'
    )
  }

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <span
            className={`hero-greeting ${className1}`}
            ref={ref1}
          >
            👋 {language === 'th' ? 'สวัสดีครับ ผมชื่อ' : 'Hi, I\'m'}
          </span>
          <h1 className={`${className2}`} ref={ref2}>
            Theeraphat "Por" Chumchit<br />
            <span className="role">
              {language === 'th' ? 'ฟูลสแตกดีเวลลอปเปอร์' : 'Full Stack Developer'}
            </span>
          </h1>
          <p className={`lead ${className3}`} ref={ref3}>
            {language === 'th'
              ? 'บัณฑิตวิทยาการคอมพิวเตอร์จากมหาวิทยาลัยเกษตรศาสตร์ ผู้พัฒนาเว็บและแอปพลิเคชันมือถือที่สะอาดและเชื่อถือได้ ตั้งแต่ส่วนติดต่อผู้ใช้ด้วย React ไปจนถึง API ด้วย NestJS และแอปด้วย Flutter'
              : 'Computer Science graduate from Kasetsart University building clean, reliable web and mobile products — from React interfaces to NestJS APIs and Flutter apps.'}
          </p>
          <div className={`hero-actions ${actionsClass}`} ref={actionsRef}>
            <a
              href="#"
              className="btn btn-primary"
              id="downloadResumeBtn"
              onClick={handleResumeClick}
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
              <span>{language === 'th' ? 'ดาวน์โหลดเรซูเม่' : 'Download Resume'}</span>
            </a>
            <a href="#projects" className="btn btn-ghost">
              <span>{language === 'th' ? 'ดูผลงาน' : 'View Projects'}</span>
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
              <span>{language === 'th' ? 'ผลงานเด่น' : 'Featured Projects'}</span>
            </div>
            <div>
              <strong>6</strong>
              <span>{language === 'th' ? 'สายทักษะหลัก' : 'Core Skill Areas'}</span>
            </div>
            <div>
              <strong>TH / EN</strong>
              <span>{language === 'th' ? 'ภาษา' : 'Languages'}</span>
            </div>
          </div>
        </div>

        <div className={`hero-illustration ${illustrationClass}`} ref={illustrationRef}>
          <svg viewBox="0 0 420 420" width="100%" style={{ maxWidth: '420px' }}>
            <circle className="float-2" cx="330" cy="90" r="46" fill="var(--accent)" opacity=".55" />
            <circle className="float-3" cx="60" cy="330" r="34" fill="var(--secondary)" opacity=".55" />
            <rect className="float-3" x="30" y="60" width="46" height="46" rx="14" fill="var(--success)" opacity=".5" />
            <g className="float-1">
              <rect x="70" y="130" width="280" height="180" rx="16" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
              <rect x="92" y="152" width="236" height="118" rx="10" fill="var(--bg)" />
              <circle cx="110" cy="166" r="4" fill="var(--danger)" />
              <circle cx="124" cy="166" r="4" fill="var(--accent)" />
              <circle cx="138" cy="166" r="4" fill="var(--success)" />
              <text x="106" y="196" fontFamily="monospace" fontSize="13" fill="var(--primary)">
                {'</>'}
              </text>
              <rect x="106" y="208" width="120" height="8" rx="4" fill="var(--primary)" opacity=".55" />
              <rect x="106" y="224" width="160" height="8" rx="4" fill="var(--secondary)" opacity=".7" />
              <rect x="106" y="240" width="90" height="8" rx="4" fill="var(--accent)" opacity=".7" />
              <rect x="60" y="300" width="300" height="18" rx="9" fill="var(--border)" />
              <rect x="150" y="318" width="120" height="12" rx="6" fill="var(--border)" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
