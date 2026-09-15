import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

const Footer = () => {
  const author = siteConfig('AUTHOR') || 'SheepX'

  return (
    <footer className='myfuwari-footer py-4'>
      <div className='max-w-6xl mx-auto px-4 flex items-center justify-between'>
        <nav className='flex items-center gap-4'>
          <SmartLink href='/' className='text-sm text-[var(--myfuwari-muted)] hover:text-[var(--myfuwari-primary)] transition-colors'>
            首页
          </SmartLink>
          <SmartLink href='/about' className='text-sm text-[var(--myfuwari-muted)] hover:text-[var(--myfuwari-primary)] transition-colors'>
            关于�?
          </SmartLink>
          <SmartLink href='/contact' className='text-sm text-[var(--myfuwari-muted)] hover:text-[var(--myfuwari-primary)] transition-colors'>
            联系�?
          </SmartLink>
        </nav>
        <div className='text-sm text-[var(--myfuwari-muted)]'>
          &copy; 2026 {author}
        </div>
      </div>
    </footer>
  )
}

export default Footer

