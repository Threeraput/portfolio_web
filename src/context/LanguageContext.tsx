import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'en' | 'th'

interface TranslationKey {
  en: string
  th: string
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'
    const htmlElement = document.documentElement
    return (htmlElement.getAttribute('data-lang') as Language) || 'en'
  })

  useEffect(() => {
    const htmlElement = document.documentElement
    const initialLang = (htmlElement.getAttribute('data-lang') as Language) || 'en'
    setLanguageState(initialLang)
  }, [])

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang)
    document.documentElement.setAttribute('data-lang', newLang)
  }

  const t = (key: TranslationKey): string => {
    return key[language] || key.en
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
