import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { ref: avatarRef, className: avatarClass } = useScrollReveal(true)
  const { ref: eyebrowRef, className: eyebrowClass } = useScrollReveal()
  const { ref: titleRef, className: titleClass } = useScrollReveal()
  const { ref: p1Ref, className: p1Class } = useScrollReveal()
  const { ref: p2Ref, className: p2Class } = useScrollReveal()
  const { language } = useLanguage()

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
      title: { en: 'Computer Science', th: 'วิทยาการคอมพิวเตอร์' },
      subtitle: { en: 'Kasetsart University', th: 'มหาวิทยาลัยเกษตรศาสตร์' },
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
      title: { en: 'Full Stack Developer', th: 'ฟูลสแตกดีเวลลอปเปอร์' },
      subtitle: { en: 'Web & Mobile', th: 'เว็บและมือถือ' },
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
      title: { en: 'Thailand', th: 'ประเทศไทย' },
      subtitle: { en: 'Based in Nakhon Pathom', th: 'พักอาศัยที่นครปฐม' },
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
      title: { en: 'Thai / English', th: 'ไทย / อังกฤษ' },
      subtitle: { en: 'Professional working proficiency', th: 'ใช้งานได้ในระดับมืออาชีพ' },
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
            <span>{language === 'th' ? 'พร้อมทำงาน' : 'Open to work'}</span>
          </div>
        </div>

        <div className="about-bio">
          <span className={`eyebrow ${eyebrowClass}`} ref={eyebrowRef}>
            {language === 'th' ? 'เกี่ยวกับผม' : 'About Me'}
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
            {language === 'th'
              ? 'สร้างซอฟต์แวร์อย่างพิถีพิถัน ตั้งแต่ไอเดียจนถึงการใช้งานจริง'
              : 'Building software with care, from idea to deployment'}
          </h2>
          <p className={`${p1Class}`} ref={p1Ref}>
            {language === 'th'
              ? 'ผมเป็นบัณฑิตวิทยาการคอมพิวเตอร์จากมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน มีประสบการณ์ด้านวิศวกรรมซอฟต์แวร์จากการฝึกงานแบบสหกิจศึกษา ชอบทำงานครบทุกส่วนของระบบ ทั้งออกแบบหน้าบ้านที่ใช้งานง่าย สร้าง API ที่เชื่อถือได้ และพัฒนาแอปมือถือที่ใช้งานได้จริง'
              : 'I\'m a Computer Science graduate from Kasetsart University, Kamphaeng Saen Campus, with hands-on software engineering experience gained through cooperative education. I enjoy working across the stack — designing intuitive front-ends, building dependable APIs, and shipping mobile apps that people actually use.'}
          </p>
          <p className={`${p2Class}`} ref={p2Ref}>
            {language === 'th'
              ? 'ผลงานล่าสุดของผมครอบคลุมระบบเช็คชื่อด้วยใบหน้าแบบเรียลไทม์ แอปตรวจสอบผลการเรียนบนมือถือ และโมเดลทำนายราคาหุ้นด้วยแมชชีนเลิร์นนิง แต่ละโปรเจกต์คือการเปลี่ยนโจทย์จริงให้กลายเป็นผลิตภัณฑ์ที่ใช้งานได้'
              : 'My recent work spans a real-time face attendance system, a mobile transcript checker, and a machine-learning stock price prediction model — each one an exercise in turning a practical problem into a working product.'}
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
                  <h4>{language === 'th' ? card.title.th : card.title.en}</h4>
                  <span>{language === 'th' ? card.subtitle.th : card.subtitle.en}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
