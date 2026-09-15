import { AdSlot } from '@/components/GoogleAdsense'
import WWAds from '@/components/WWAds'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const AdCard = () => {
  if (!siteConfig('MYFUWARI_WIDGET_AD', false, CONFIG)) return null

  return (
    <section className='myfuwari-card p-5'>
      <h3 className='text-sm font-semibold mb-3 tracking-wide uppercase text-[var(--myfuwari-muted)]'>
        Sponsors
      </h3>
      <div className='space-y-3'>
        {siteConfig('MYFUWARI_WIDGET_WWADS', true, CONFIG) && <WWAds orientation='vertical' />}
        {siteConfig('MYFUWARI_WIDGET_ADSENSE', false, CONFIG) && <AdSlot />}
      </div>
    </section>
  )
}

export default AdCard

