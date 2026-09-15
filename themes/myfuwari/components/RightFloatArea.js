import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { isCommentServiceConfigured } from '../utils/commentEnabled'
import Toc from './Toc'

const RightFloatArea = ({ post }) => {
  const [visible, setVisible] = useState(false)
  const [showTocDrawer, setShowTocDrawer] = useState(false)
  const { isDarkMode, toggleDarkMode, locale } = useGlobal()
  const hasToc = Boolean(post?.toc && post.toc.length > 1)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 180)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <>
      {showTocDrawer && hasToc && (
        <div className='myfuwari-toc-mobile lg:hidden'>
          <div className='myfuwari-toc-mask' onClick={() => setShowTocDrawer(false)} />
          <section className='myfuwari-card myfuwari-toc-panel p-4'>
            <div className='flex items-center justify-between mb-2'>
              <h3 className='text-sm font-semibold tracking-wide uppercase text-[var(--myfuwari-muted)]'>
                目录
              </h3>
              <button
                type='button'
                className='myfuwari-tool-btn'
                onClick={() => setShowTocDrawer(false)}>
                <i className='fas fa-times' />
              </button>
            </div>
            <Toc toc={post.toc} />
          </section>
        </div>
      )}
      <div className='myfuwari-float-wrap fixed z-30 flex flex-col gap-2'>
        <button className='myfuwari-float-btn' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className='fas fa-angle-up' />
        </button>
        {hasToc && (
          <button
            className='myfuwari-float-btn lg:hidden'
            onClick={() => setShowTocDrawer(true)}>
            <i className='fas fa-list-ul' />
          </button>
        )}
        {post &&
          siteConfig('MYFUWARI_WIDGET_TO_COMMENT', true, CONFIG) &&
          isCommentServiceConfigured() && (
          <button
            type='button'
            className='myfuwari-float-btn'
            aria-label={locale?.COMMON?.COMMENTS || 'Comments'}
            onClick={() => document.getElementById('comment')?.scrollIntoView({ behavior: 'smooth' })}>
            <i className='far fa-comment-dots' />
          </button>
        )}
        {siteConfig('MYFUWARI_WIDGET_DARK_MODE', true, CONFIG) && (
          <button className='myfuwari-float-btn' onClick={toggleDarkMode}>
            {isDarkMode ? '☀' : '☾'}
          </button>
        )}
      </div>
    </>
  )
}

export default RightFloatArea

