import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { ref: headerRef, className: headerClass } = useScrollReveal()
  const { language } = useLanguage()

  const experiences = [
    {
      id: 1,
      period: { en: 'Cooperative Education', th: 'สหกิจศึกษา' },
      title: { en: 'Software Engineer (Co-op)', th: 'วิศวกรซอฟต์แวร์ (สหกิจศึกษา)' },
      company: {
        en: '[Company Name] · Full Stack & Mobile Development',
        th: '[ชื่อบริษัท] · พัฒนาเว็บและแอปพลิเคชันมือถือ',
      },
      description: {
        en: 'Contributed to full-stack and mobile application development, working across front-end interfaces, back-end services, and databases within a team environment.',
        th: 'มีส่วนร่วมในการพัฒนาแอปพลิเคชันเว็บและมือถือแบบครบวงจร ทำงานทั้งส่วนหน้าบ้าน หลังบ้าน และฐานข้อมูลร่วมกับทีม',
      },
    },
    {
      id: 2,
      period: '2020 – 2024',
      title: { en: 'B.Sc. Computer Science', th: 'ปริญญาตรี วิทยาการคอมพิวเตอร์' },
      company: {
        en: 'Kasetsart University, Kamphaeng Saen Campus',
        th: 'มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน',
      },
      description: {
        en: 'Studied core computer science fundamentals with a focus on software engineering, culminating in a machine-learning stock prediction project.',
        th: 'ศึกษาพื้นฐานวิทยาการคอมพิวเตอร์โดยเน้นด้านวิศวกรรมซอฟต์แวร์ และจบด้วยโปรเจกต์ทำนายราคาหุ้นด้วยแมชชีนเลิร์นนิง',
      },
    },
  ]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className={`section-head ${headerClass}`} ref={headerRef}>
          <span className="eyebrow">
            {language === 'th' ? 'ประสบการณ์' : 'Experience'}
          </span>
          <h2>
            {language === 'th' ? 'ประสบการณ์ทำงาน' : 'Where I\'ve worked'}
          </h2>
          <p>
            {language === 'th'
              ? 'ประสบการณ์ด้านวิศวกรรมซอฟต์แวร์จากการฝึกงานแบบสหกิจศึกษา'
              : 'Practical software engineering experience gained through cooperative education.'}
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
                  {typeof exp.period === 'string'
                    ? exp.period
                    : language === 'th'
                      ? exp.period.th
                      : exp.period.en}
                </span>
                <h3>
                  {language === 'th' ? exp.title.th : exp.title.en}
                </h3>
                <h4>
                  {language === 'th' ? exp.company.th : exp.company.en}
                </h4>
                <p>
                  {language === 'th'
                    ? exp.description.th
                    : exp.description.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
