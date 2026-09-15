const formatDate = d => {
  if (!d) return ''
  const s = String(d)
  const m = s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/)
  return m ? `${m[1]}.${m[2].padStart(2, '0')}.${m[3].padStart(2, '0')}` : s
}

const getSummary = post => {
  const text = post?.summary || post?.textContent || ''
  return text.length > 40 ? text.slice(0, 40) + 'â€? : text
}

const toMonthAnchor = month => `archive-${String(month).replace(/[^0-9a-zA-Z_-]/g, '-')}`

const ArchiveList = ({ archivePosts = {} }) => {
  return (
    <div className='space-y-6'>
      {Object.keys(archivePosts).map(month => (
        <section key={month} id={toMonthAnchor(month)} className='myfuwari-card p-5 scroll-mt-24'>
          <h2 className='myfuwari-section-title text-xl font-semibold mb-3'>{month}</h2>
          <div className='divide-y divide-[var(--myfuwari-border)] -mt-3'>
            {archivePosts[month]?.map(post => {
              const coverSrc = post.pageCoverThumbnail || post.pageCover || ''
              const summary = getSummary(post)
              const date = formatDate(post.publishDay || post.date?.start_date || post.createdTime)
              return (
                <a
                  key={post.id}
                  href={post.href || `/${post.slug}`}
                  className='flex items-start gap-3 py-3 group transition-colors'>
                  {coverSrc && (
                    <div className='w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-[var(--myfuwari-bg-soft)]'>
                      <img src={coverSrc} alt='' className='w-full h-full object-cover' loading='lazy' />
                    </div>
                  )}
                  <div className='min-w-0 flex-1'>
                    <div className='text-sm sm:text-base font-medium text-[var(--myfuwari-text)] group-hover:text-[var(--myfuwari-primary)] transition-colors leading-6'>
                      {post.title}
                    </div>
                    {summary && (
                      <div className='text-xs text-[var(--myfuwari-muted)] mt-0.5 leading-5 line-clamp-1'>
                        {summary}
                      </div>
                    )}
                  </div>
                  {date && (
                    <span className='text-[11px] text-[var(--myfuwari-muted)] shrink-0 mt-0.5 whitespace-nowrap'>
                      {date}
                    </span>
                  )}
                </a>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ArchiveList
