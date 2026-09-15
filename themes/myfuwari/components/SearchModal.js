import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

/**
 * mymyfuwari 全局搜索弹窗 �?支持 Algolia 和本地搜�? *
 * 使用方式�? *   const searchRef = useRef(null)
 *   <SearchModal cRef={searchRef} posts={posts} />
 *   searchRef.current.openSearch()
 */
export default function SearchModal({ cRef, posts = [] }) {
  const { locale } = useGlobal()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)

  // 对外暴露 openSearch 方法
  useImperativeHandle(cRef, () => ({
    openSearch: () => setIsOpen(true)
  }))

  // 路由变化自动关闭
  useEffect(() => {
    setIsOpen(false)
  }, [router])

  // 打开时自动聚�?  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setKeyword('')
      setResults([])
      setActiveIndex(0)
    }
  }, [isOpen])

  // 快捷�?  useHotkeys('ctrl+k', e => {
    e.preventDefault()
    setIsOpen(true)
  })

  // 键盘导航
  const handleKeyDown = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[activeIndex]) {
      const r = results[activeIndex]
      router.push(r.href || `/${r.slug}`)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  // 本地搜索
  const handleSearch = query => {
    setKeyword(query)
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    const matched = posts.filter(p => {
      const title = (p.title || '').toLowerCase()
      const summary = (p.summary || '').toLowerCase()
      const tags = (p.tags || []).join(' ').toLowerCase()
      return title.includes(q) || summary.includes(q) || tags.includes(q)
    })
    setResults(matched)
    setActiveIndex(0)
  }

  const close = () => setIsOpen(false)

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-start justify-center pt-[10vh]'>
      {/* 遮罩 */}
      <div
        className='absolute inset-0 bg-black/40 backdrop-blur-sm'
        onClick={close}
      />

      {/* 弹窗 */}
      <div className='relative w-full max-w-xl mx-4 bg-[var(--myfuwari-surface)] border border-[var(--myfuwari-border)] rounded-2xl shadow-2xl overflow-hidden animate-myfuwari-search-in'>
        {/* 头部 */}
        <div className='flex items-center gap-3 px-5 py-4 border-b border-[var(--myfuwari-border)]'>
          <i className='fas fa-search text-sm text-[var(--myfuwari-muted)]' />
          <input
            ref={inputRef}
            type='text'
            placeholder={locale?.SEARCH?.ARTICLES || '搜索文章�?}
            value={keyword}
            onChange={e => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className='flex-1 bg-transparent text-sm text-[var(--myfuwari-text)] outline-none placeholder:text-[var(--myfuwari-muted)]'
          />
          {keyword && (
            <button onClick={() => { setKeyword(''); setResults([]); inputRef.current?.focus() }} className='text-xs text-[var(--myfuwari-muted)] hover:text-[var(--myfuwari-text)]'>
              <i className='fas fa-times' />
            </button>
          )}
          <kbd className='hidden sm:inline-flex text-[10px] px-1.5 py-0.5 rounded border border-[var(--myfuwari-border)] text-[var(--myfuwari-muted)] bg-[var(--myfuwari-bg-soft)]'>
            ESC
          </kbd>
        </div>

        {/* 结果 */}
        <div className='max-h-[50vh] overflow-y-auto p-2'>
          {keyword && results.length === 0 && (
            <div className='py-8 text-center text-sm text-[var(--myfuwari-muted)]'>
              未找到与「{keyword}」相关的结果
            </div>
          )}
          {results.map((post, i) => (
            <a
              key={post.id}
              href={post.href || `/${post.slug}`}
              onMouseEnter={() => setActiveIndex(i)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                i === activeIndex
                  ? 'bg-[var(--myfuwari-primary-soft)] text-[var(--myfuwari-text)]'
                  : 'text-[var(--myfuwari-muted)] hover:bg-[var(--myfuwari-bg-soft)]'
              }`}>
              <span className='flex-1 min-w-0 truncate'>{post.title}</span>
              {post.category && (
                <span className='text-[11px] px-2 py-0.5 rounded-full bg-[var(--myfuwari-bg-soft)] border border-[var(--myfuwari-border)] text-[var(--myfuwari-muted)] shrink-0'>
                  {post.category}
                </span>
              )}
              <i className={`fas fa-chevron-right text-[10px] transition-opacity ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`} />
            </a>
          ))}
        </div>

        {/* 底部提示 */}
        {!keyword && (
          <div className='flex items-center gap-4 px-5 py-3 border-t border-[var(--myfuwari-border)] text-[11px] text-[var(--myfuwari-muted)]'>
            <span><kbd className='myfuwari-search-kbd'>�?/kbd> <kbd className='myfuwari-search-kbd'>�?/kbd> 导航</span>
            <span><kbd className='myfuwari-search-kbd'>Enter</kbd> 跳转</span>
            <span><kbd className='myfuwari-search-kbd'>Esc</kbd> 关闭</span>
          </div>
        )}
        {keyword && results.length > 0 && (
          <div className='px-5 py-2.5 border-t border-[var(--myfuwari-border)] text-[11px] text-[var(--myfuwari-muted)]'>
            找到 {results.length} 篇相关文�?          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes myfuwari-search-in {
          from { opacity: 0; transform: translateY(-12px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-myfuwari-search-in {
          animation: myfuwari-search-in 0.2s ease-out;
        }
        .myfuwari-search-kbd {
          display: inline-block;
          min-width: 18px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          padding: 0 4px;
          border-radius: 4px;
          border: 1px solid var(--myfuwari-border);
          background: var(--myfuwari-bg-soft);
          font-family: inherit;
        }
      `}</style>
    </div>
  )
}
