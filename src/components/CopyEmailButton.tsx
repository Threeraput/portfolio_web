import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLanguage } from '../context/LanguageContext'

type CopyEmailButtonProps = {
  className: string
  ariaLabel: string
  children: ReactNode
}

const EMAIL = 'threeraput5tmr@gmail.com'

export default function CopyEmailButton({ className, ariaLabel, children }: CopyEmailButtonProps) {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)
  const { t } = useLanguage()

  useEffect(() => () => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
  }, [])

  const handleClick = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setIsCopied(true)
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <>
      <button type="button" className={className} aria-label={ariaLabel} onClick={handleClick}>
        {children}
      </button>
      {isCopied && (
        <div className="copy-toast" role="status" aria-live="polite">
          {t('contact.emailCopied')}
        </div>
      )}
    </>
  )
}