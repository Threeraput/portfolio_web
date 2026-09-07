import { useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const { toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const navLinksRef = useRef<HTMLDivElement>(null)

  const handleNavLinkClick = () => {
    setMobileNavOpen(false)
  }

  const navLinks = [
    { href: '#home', labelKey: 'nav.home' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#skills', labelKey: 'nav.skills' },
    { href: '#projects', labelKey: 'nav.projects' },
    { href: '#experience', labelKey: 'nav.experience' },
    { href: '#certificates', labelKey: 'nav.certificates' },
    { href: '#contact', labelKey: 'nav.contact' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">TRP</span>
          <span>My portfolio</span>
        </a>

        <nav
          className={`nav-links ${mobileNavOpen ? 'open' : ''}`}
          ref={navLinksRef}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavLinkClick}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang-toggle">
            <button
              className={language === 'th' ? 'active' : ''}
              onClick={() => setLanguage('th')}
            >
              TH
            </button>
            <button
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <svg
              className="icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            <svg
              className="icon-moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
            </svg>
          </button>
          <button
            className={`burger ${mobileNavOpen ? 'open' : ''}`}
            id="burger"
            aria-label="Menu"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
