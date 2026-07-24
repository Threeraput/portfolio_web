import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import enTranslations from '../i18n/en.json'
import thTranslations from '../i18n/th.json'

type Language = 'en' | 'th'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'

  const storedLanguage = window.localStorage.getItem('language')
  if (storedLanguage === 'en' || storedLanguage === 'th') {
    return storedLanguage
  }

  const htmlLanguage = document.documentElement.getAttribute('data-lang')
  if (htmlLanguage === 'en' || htmlLanguage === 'th') {
    return htmlLanguage
  }

  return 'en'
}

function getTranslationValue(language: Language, key: string): string {
  const source = language === 'th' ? thTranslations : enTranslations
  const resolve = (root: unknown) => {
    if (!root || typeof root !== 'object') return undefined

    return key.split('.').reduce<unknown>((current, segment) => {
      if (!current || typeof current !== 'object') return undefined
      return (current as Record<string, unknown>)[segment]
    }, root)
  }

  const translatedValue = resolve(source)
  if (typeof translatedValue === 'string') {
    return translatedValue
  }

  const fallbackValue = resolve(enTranslations)
  if (typeof fallbackValue === 'string') {
    return fallbackValue
  }

  return key
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-lang', language)
    window.localStorage.setItem('language', language)
  }, [language])

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang)
  }

  const t = (key: string): string => getTranslationValue(language, key)

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
