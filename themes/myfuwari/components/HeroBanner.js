import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const HeroBanner = ({ siteInfo }) => {
  if (!siteConfig('MYFUWARI_HERO_ENABLE', true, CONFIG)) return null

  const cover =
    siteInfo?.pageCover ||
    siteConfig('MYFUWARI_HERO_BG_IMAGE', '', CONFIG) ||
    siteConfig('HOME_BANNER_IMAGE')

  return (
    <section className='myfuwari-hero mb-4 overflow-hidden'>
      {cover && (
        <div
          className='myfuwari-hero-bg'
          style={{ backgroundImage: `url(${cover})` }}
        />
      )}
      <div className='myfuwari-hero-mask' />
      {siteConfig('MYFUWARI_HERO_CREDIT_TEXT', '', CONFIG) && (
        <div className='max-w-6xl mx-auto px-4 relative z-[3]'>
          <SmartLink
            href={siteConfig('MYFUWARI_HERO_CREDIT_LINK', '#', CONFIG)}
            className='myfuwari-hero-credit'
            target='_blank'
            rel='noopener noreferrer'>
            © {siteConfig('MYFUWARI_HERO_CREDIT_TEXT', '', CONFIG)}
          </SmartLink>
        </div>
      )}
    </section>
  )
}

export default HeroBanner

