import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../context/LanguageContext'

const technologyIcons: Record<string, string> = {
  React: 'react.svg',
  TypeScript: 'typescript.svg',
  JavaScript: 'javascript.svg',
  'Tailwind CSS': 'tailwindcss.svg',
  NestJS: 'nestjs.svg',
  'Node.js': 'nodedotjs.svg',
  FastAPI: 'fastapi.svg',
  'REST API': 'swagger.svg',
  PostgreSQL: 'Postgresql_elephant.svg',
  SQLite: 'sqlite.svg',
  Firebase: 'firebase.svg',
  Flutter: 'icon_flutter.svg',
  Dart: 'dart.svg',
  'React Native': 'react.svg',
  Git: 'git.svg',
  'CI/CD': 'githubactions.svg',
  Docker: 'docker.svg',
  'VS Code': 'vscode.png',
  Figma: 'figma.svg',
  Postman: 'postman.svg',
}

function TechnologyLogo({
  skill,
  className = 'technology-logo',
}: {
  skill: keyof typeof technologyIcons
  className?: string
}) {
  return (
    <img
      className={className}
      src={`/icons/${technologyIcons[skill]}`}
      alt={`${skill} logo`}
    />
  )
}

export default function Skills() {
  const { ref: headerRef, className: headerClass } = useScrollReveal()
  const { t } = useLanguage()

  const skillCategories = [
    {
      icon: <TechnologyLogo skill="React" className="category-logo" />,
      bgColor: 'transparent',
      titleKey: 'skills.categories.frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    },
    {
      icon: <TechnologyLogo skill="Node.js" className="category-logo" />,
      bgColor: 'transparent',
      titleKey: 'skills.categories.backend',
      skills: ['NestJS', 'Node.js', 'FastAPI', 'REST API'],
    },
    {
      icon: <TechnologyLogo skill="PostgreSQL" className="category-logo" />,
      bgColor: 'transparent',
      titleKey: 'skills.categories.database',
      skills: ['PostgreSQL', 'SQLite', 'Firebase'],
    },
    {
      icon: <TechnologyLogo skill="Flutter" className="category-logo" />,
      bgColor: 'transparent',
      titleKey: 'skills.categories.mobile',
      skills: ['Flutter', 'Dart', 'React Native'],
    },
    {
      icon: <TechnologyLogo skill="Docker" className="category-logo" />,
      bgColor: 'transparent',
      titleKey: 'skills.categories.devops',
      skills: ['Git', 'CI/CD', 'Docker'],
    },
    {
      icon: <TechnologyLogo skill="VS Code" className="category-logo" />,
      bgColor: 'transparent',
      titleKey: 'skills.categories.tools',
      skills: ['VS Code', 'Figma', 'Postman'],
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className={`section-head ${headerClass}`} ref={headerRef}>
          <span className="eyebrow">
            {t('skills.eyebrow')}
          </span>
          <h2>
            {t('skills.title')}
          </h2>
          <p>
            {t('skills.description')}
          </p>
        </div>

        <div className="skills-grid stagger">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="skill-card reveal is-visible"
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className="ic" style={{ background: category.bgColor }}>
                {category.icon}
              </div>
              <h3>{t(category.titleKey)}</h3>
              <div className="tag-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">
                    <TechnologyLogo skill={skill as keyof typeof technologyIcons} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
