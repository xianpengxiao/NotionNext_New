import FlipCard from '@/components/FlipCard'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const ContactCard = () => {
  if (!siteConfig('MYFUWARI_WIDGET_CONTACT', true, CONFIG)) return null

  const title =
    siteConfig('MYFUWARI_CONTACT_TITLE', 'Contact', CONFIG) || 'Contact'
  const desc =
    siteConfig(
      'MYFUWARI_CONTACT_DESCRIPTION',
      'Join the community and discuss ideas.',
      CONFIG
    ) || ''
  const url = siteConfig('MYFUWARI_CONTACT_URL', '', CONFIG)
  const text = siteConfig('MYFUWARI_CONTACT_TEXT', 'Get in touch', CONFIG)
  const useFlip = siteConfig('MYFUWARI_CONTACT_FLIP_CARD', true, CONFIG)
  const frontBadge = siteConfig(
    'MYFUWARI_CONTACT_FRONT_BADGE',
    'Community',
    CONFIG
  )
  const backTitle = siteConfig(
    'MYFUWARI_CONTACT_BACK_TITLE',
    'How we respond',
    CONFIG
  )
  const backDesc = siteConfig(
    'MYFUWARI_CONTACT_BACK_DESCRIPTION',
    'Share your idea, bug report, or collaboration request.',
    CONFIG
  )
  const backText = siteConfig('MYFUWARI_CONTACT_BACK_TEXT', 'Open Contact', CONFIG)
  const openInNewTab = /^https?:\/\//i.test(url)

  const jumpToContact = () => {
    if (!url) return
    if (openInNewTab) {
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }
    window.location.href = url
  }

  const frontContent = (
    <div className='myfuwari-card p-5 h-full'>
      <div className='mb-3 flex items-center justify-between gap-2'>
        <h3 className='text-sm font-semibold tracking-wide uppercase text-[var(--myfuwari-muted)]'>
          {title}
        </h3>
        {frontBadge && (
          <span className='text-[11px] px-2 py-0.5 rounded-full bg-[var(--myfuwari-primary-soft)] text-[var(--myfuwari-primary)]'>
            {frontBadge}
          </span>
        )}
      </div>
      {desc && (
        <p className='text-sm leading-6 text-[var(--myfuwari-muted)] mb-2 line-clamp-2'>
          {desc}
        </p>
      )}
      {url && <p className='myfuwari-link text-sm font-medium'>{text} →</p>}
    </div>
  )

  const backContent = (
    <div className='myfuwari-card p-5 h-full bg-[var(--myfuwari-bg-soft)]'>
      <h4 className='text-base font-semibold mb-2'>{backTitle}</h4>
      <p className='text-sm text-[var(--myfuwari-muted)] leading-6 mb-2 line-clamp-2'>
        {backDesc}
      </p>
      {url && (
        <p className='myfuwari-link text-sm font-medium'>{backText} →</p>
      )}
    </div>
  )

  if (!useFlip) {
    return (
      <section
        className={url ? 'cursor-pointer' : ''}
        onClick={jumpToContact}
        role={url ? 'link' : undefined}
        tabIndex={url ? 0 : undefined}
        onKeyDown={e => {
          if (url && (e.key === 'Enter' || e.key === ' ')) jumpToContact()
        }}>
        {frontContent}
      </section>
    )
  }

  return (
    <section
      className={`h-48 ${url ? 'cursor-pointer' : ''}`}
      onClick={jumpToContact}
      role={url ? 'link' : undefined}
      tabIndex={url ? 0 : undefined}
      onKeyDown={e => {
        if (url && (e.key === 'Enter' || e.key === ' ')) jumpToContact()
      }}>
      <FlipCard frontContent={frontContent} backContent={backContent} />
    </section>
  )
}

export default ContactCard

