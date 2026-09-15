/* eslint-disable react/no-unknown-property */

const Style = () => {
  return <style jsx global>{`
    #theme-myfuwari {
      --myfuwari-bg: #f3f4f8;
      --myfuwari-bg-soft: #f6f4e8;
      --myfuwari-surface: #ffffff;
      --myfuwari-muted: #72767d;
      --myfuwari-text: #232a37;
      --myfuwari-primary: #b8a320;
      --myfuwari-primary-soft: rgba(184, 163, 32, 0.14);
      --myfuwari-border: #e9e8df;
      --myfuwari-gradient: linear-gradient(135deg, #b8a320 0%, #e0ce63 100%);
    }

    .dark #theme-myfuwari {
      --myfuwari-bg: #0d1117;
      --myfuwari-bg-soft: #131a25;
      --myfuwari-surface: #171f2c;
      --myfuwari-muted: #9ca3af;
      --myfuwari-text: #f3f4f6;
      --myfuwari-primary: #d3bf53;
      --myfuwari-primary-soft: rgba(211, 191, 83, 0.2);
      --myfuwari-border: #283446;
      --myfuwari-gradient: linear-gradient(135deg, #8576ff 0%, #4ba9ff 100%);
    }

    #theme-myfuwari.myfuwari-bg {
      background:
        radial-gradient(circle at 10% -10%, var(--myfuwari-primary-soft) 0, transparent 45%),
        radial-gradient(circle at 100% 10%, rgba(122, 199, 255, 0.14) 0, transparent 35%),
        var(--myfuwari-bg);
    }

    #theme-myfuwari {
      transition: background-color 0.2s ease, color 0.2s ease;
      overflow-x: clip;
    }

    #theme-myfuwari .myfuwari-card {
      background: var(--myfuwari-surface);
      border: 1px solid var(--myfuwari-border);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    #theme-myfuwari .myfuwari-card-hover:hover {
      transform: translateY(-2px);
      box-shadow: 0 18px 44px rgba(15, 23, 42, 0.12);
    }

    #theme-myfuwari .myfuwari-cover-wrap {
      overflow: hidden;
      border-radius: 16px;
    }

    #theme-myfuwari .myfuwari-cover-wrap img {
      transition: transform 0.35s ease;
    }
    #theme-myfuwari .myfuwari-profile-card {
      padding: .95rem;
    }
    #theme-myfuwari .myfuwari-profile-link {
      border-radius: 1rem;
      overflow: hidden;
    }
    #theme-myfuwari .myfuwari-profile-thumb {
      background: var(--myfuwari-bg-soft);
      transform: translateY(0) scale(1);
      transition: transform .2s ease;
    }
    #theme-myfuwari .myfuwari-profile-thumb img {
      transition: transform .24s ease, filter .24s ease;
    }
    #theme-myfuwari .myfuwari-profile-overlay {
      position: absolute;
      inset: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 2rem;
      background: rgba(12, 18, 30, .24);
      opacity: 0;
      transform: scale(.92);
      transition: opacity .2s ease, transform .2s ease;
      pointer-events: none;
    }
    #theme-myfuwari .myfuwari-profile-link:hover .myfuwari-profile-thumb {
      transform: translateY(1px) scale(.992);
    }
    #theme-myfuwari .myfuwari-profile-link:hover .myfuwari-profile-thumb img {
      transform: scale(1.02);
      filter: saturate(1.03) brightness(.9);
    }
    #theme-myfuwari .myfuwari-profile-link:hover .myfuwari-profile-overlay {
      opacity: 1;
      transform: scale(1);
    }

    #theme-myfuwari .myfuwari-card-hover:hover .myfuwari-cover-enlarge img {
      transform: scale(1.03);
    }

    #theme-myfuwari .myfuwari-link {
      color: var(--myfuwari-primary);
      transition: opacity 0.2s ease;
    }
    #theme-myfuwari .myfuwari-link:hover {
      opacity: 0.78;
    }
    #theme-myfuwari .myfuwari-footer {
      border-top: 1px dashed color-mix(in oklab, var(--myfuwari-border) 85%, transparent);
      background: transparent;
    }
    #theme-myfuwari .myfuwari-copy-btn {
      border: 1px solid color-mix(in oklab, var(--myfuwari-primary) 24%, var(--myfuwari-border));
      background: color-mix(in oklab, var(--myfuwari-primary) 8%, var(--myfuwari-surface));
      color: color-mix(in oklab, var(--myfuwari-primary) 80%, var(--myfuwari-text));
      border-radius: .6rem;
      font-size: .8rem;
      font-weight: 600;
      padding: .35rem .65rem;
      transition: all .2s ease;
    }
    #theme-myfuwari .myfuwari-copy-btn:hover {
      background: color-mix(in oklab, var(--myfuwari-primary) 14%, var(--myfuwari-surface));
    }

    #theme-myfuwari .myfuwari-navbar {
      backdrop-filter: blur(8px);
      background: color-mix(in oklab, var(--myfuwari-surface) 86%, transparent);
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
    #theme-myfuwari .myfuwari-tool-btn {
      width: 2.1rem;
      height: 2.1rem;
      border-radius: 0.65rem;
      border: 1px solid color-mix(in oklab, var(--myfuwari-border) 75%, transparent);
      background: color-mix(in oklab, var(--myfuwari-bg-soft) 82%, #fff);
      color: color-mix(in oklab, var(--myfuwari-primary) 56%, var(--myfuwari-muted));
      font-size: .86rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all .2s ease;
    }
    #theme-myfuwari .myfuwari-tool-btn:hover {
      color: var(--myfuwari-primary);
      transform: translateY(-1px);
    }
    #theme-myfuwari .myfuwari-theme-panel {
      background: var(--myfuwari-surface);
      border-radius: 16px;
    }
    #theme-myfuwari .myfuwari-hue-wrap {
      width: 100%;
      height: 1.5rem;
      padding: 0 .25rem;
      border-radius: .5rem;
      background: color-mix(in oklab, var(--myfuwari-bg-soft) 90%, transparent);
    }
    #theme-myfuwari .myfuwari-hue-slider {
      width: 100%;
      -webkit-appearance: none;
      appearance: none;
      height: 1.5rem;
      background: linear-gradient(
        90deg,
        hsl(0, 85%, 65%) 0%,
        hsl(60, 85%, 65%) 16%,
        hsl(120, 85%, 65%) 32%,
        hsl(180, 85%, 65%) 48%,
        hsl(240, 85%, 65%) 64%,
        hsl(300, 85%, 65%) 82%,
        hsl(360, 85%, 65%) 100%
      );
      border-radius: .5rem;
    }
    #theme-myfuwari .myfuwari-hue-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: .55rem;
      height: 1rem;
      border-radius: .2rem;
      background: rgba(255,255,255,.88);
      border: 1px solid rgba(0,0,0,.08);
      cursor: pointer;
    }
    #theme-myfuwari .myfuwari-hue-slider::-moz-range-thumb {
      width: .55rem;
      height: 1rem;
      border-radius: .2rem;
      background: rgba(255,255,255,.88);
      border: 1px solid rgba(0,0,0,.08);
      cursor: pointer;
    }

    #theme-myfuwari .myfuwari-hero {
      position: relative;
      min-height: 56vh;
      max-height: 72vh;
      border-radius: 0;
      margin-top: -92px;
      padding-top: 92px;
    }
    #theme-myfuwari .myfuwari-hero-content {
      padding-top: clamp(3.5rem, 10vh, 7rem);
      padding-bottom: 2rem;
    }
    @media (max-width: 768px) {
      #theme-myfuwari .myfuwari-hero {
        min-height: 26vh;
        max-height: 36vh;
        margin-top: -72px;
        padding-top: 72px;
      }
      #theme-myfuwari .myfuwari-main-overlap {
        margin-top: -18px;
      }
      #theme-myfuwari .myfuwari-navbar {
        border-radius: 0 0 14px 14px;
      }
      #theme-myfuwari #posts-wrapper > article {
        border-radius: 1rem;
      }
      #theme-myfuwari .myfuwari-post-title {
        font-size: 2rem !important;
      }
      #theme-myfuwari .myfuwari-summary {
        -webkit-line-clamp: 2;
      }
      #theme-myfuwari .myfuwari-profile-card {
        margin-top: .25rem;
      }
    }
    #theme-myfuwari .myfuwari-hero-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transform: scale(1.01);
      filter: saturate(1.05);
    }
    #theme-myfuwari .myfuwari-hero-mask {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        120deg,
        rgba(15, 23, 42, 0.32) 0%,
        rgba(15, 23, 42, 0.14) 55%,
        rgba(15, 23, 42, 0.04) 100%
      );
      z-index: 1;
    }
    #theme-myfuwari .myfuwari-hero-btn {
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.95);
      color: #111827;
      font-size: 0.85rem;
      font-weight: 600;
      padding: 0.55rem 0.95rem;
    }
    #theme-myfuwari .myfuwari-hero-btn-soft {
      background: rgba(255, 255, 255, 0.18);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.28);
    }
    #theme-myfuwari .myfuwari-hero-credit {
      position: absolute;
      right: 1.1rem;
      bottom: 1rem;
      font-size: .7rem;
      color: rgba(255,255,255,.9);
      background: rgba(0,0,0,.36);
      border-radius: 999px;
      padding: .25rem .6rem;
    }

    #theme-myfuwari .myfuwari-overlap {
      margin-top: -26px;
      position: relative;
      z-index: 5;
    }
    #theme-myfuwari .myfuwari-main-overlap {
      margin-top: -42px;
      position: relative;
      z-index: 10;
    }

    #theme-myfuwari .myfuwari-chip {
      background: var(--myfuwari-bg-soft);
      border: 1px solid var(--myfuwari-border);
      border-radius: 999px;
      color: var(--myfuwari-muted);
      font-size: 12px;
      line-height: 1;
      padding: 0.45rem 0.75rem;
    }

    #theme-myfuwari .myfuwari-title-gradient {
      background: var(--myfuwari-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    #theme-myfuwari .myfuwari-prose :is(h1, h2, h3, h4, h5) {
      color: var(--myfuwari-text);
    }

    #theme-myfuwari #article-wrapper .notion {
      font-size: 1rem;
    }

    #theme-myfuwari .catalog-item span {
      color: var(--myfuwari-muted);
    }

    #theme-myfuwari .myfuwari-summary {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    #theme-myfuwari .myfuwari-meta-row {
      display: flex;
      align-items: center;
      gap: .35rem .42rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: .76rem;
      color: #8c9097;
      min-height: 1.5rem;
    }
    @media (max-width: 1023px) {
      #theme-myfuwari .myfuwari-meta-row {
        flex-wrap: wrap;
        white-space: normal;
        overflow: visible;
      }
      #theme-myfuwari .myfuwari-meta-tags {
        flex-wrap: wrap;
        white-space: normal;
        max-width: 100%;
      }
      #theme-myfuwari .myfuwari-post-title,
      #theme-myfuwari .myfuwari-post-title a {
        overflow-wrap: anywhere;
        word-break: break-word;
      }
    }
    #theme-myfuwari .myfuwari-meta-item {
      display: inline-flex;
      align-items: center;
      gap: .34rem;
      padding: 0;
      border-radius: 0;
      background: transparent;
      border: none;
      color: #777d86;
      flex: 0 0 auto;
    }
    #theme-myfuwari .myfuwari-meta-icon {
      width: 1.1rem;
      height: 1.1rem;
      border-radius: .28rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: .72rem;
      color: color-mix(in oklab, var(--myfuwari-primary) 72%, #9aa0aa);
      background: color-mix(in oklab, var(--myfuwari-primary) 13%, #faf8ed);
      border: 1px solid color-mix(in oklab, var(--myfuwari-primary) 16%, var(--myfuwari-border));
    }
    #theme-myfuwari .myfuwari-meta-text {
      color: #7d838d;
    }
    #theme-myfuwari .myfuwari-meta-tags {
      display: inline-flex;
      align-items: center;
      gap: .28rem;
      min-height: 1.28rem;
      color: #838892;
      flex: 0 0 auto;
    }
    #theme-myfuwari .myfuwari-meta-tags i {
      width: 1.1rem;
      height: 1.1rem;
      border-radius: .28rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: .72rem;
      color: color-mix(in oklab, var(--myfuwari-primary) 72%, #9aa0aa);
      background: color-mix(in oklab, var(--myfuwari-primary) 13%, #faf8ed);
      border: 1px solid color-mix(in oklab, var(--myfuwari-primary) 16%, var(--myfuwari-border));
    }
    #theme-myfuwari .myfuwari-post-title {
      position: relative;
      padding-left: 12px;
    }
    #theme-myfuwari .myfuwari-post-title::before {
      content: '';
      position: absolute;
      left: 0;
      top: .45rem;
      width: 4px;
      height: 1.45rem;
      border-radius: 999px;
      background: var(--myfuwari-primary);
    }
    #theme-myfuwari .myfuwari-section-title {
      position: relative;
      padding-left: 10px;
    }
    #theme-myfuwari .myfuwari-section-title::before {
      content: '';
      position: absolute;
      left: 0;
      top: .2rem;
      width: 3px;
      height: 14px;
      border-radius: 999px;
      background: var(--myfuwari-primary);
    }

    #theme-myfuwari .myfuwari-float-btn {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: 1px solid color-mix(in oklab, var(--myfuwari-border) 85%, transparent);
      background: var(--myfuwari-surface);
      color: color-mix(in oklab, var(--myfuwari-primary) 75%, var(--myfuwari-muted));
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
      cursor: pointer;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    #theme-myfuwari .myfuwari-float-btn:hover {
      transform: translateY(-2px);
      opacity: 0.88;
    }
    #theme-myfuwari .myfuwari-float-wrap {
      right: max(1rem, calc((100vw - 72rem) / 2 - 2.8rem));
      bottom: 1.15rem;
    }
    #theme-myfuwari .myfuwari-toc-mobile {
      position: fixed;
      inset: 0;
      z-index: 60;
    }
    #theme-myfuwari .myfuwari-toc-mask {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, .32);
      backdrop-filter: blur(1.5px);
    }
    #theme-myfuwari .myfuwari-toc-panel {
      position: absolute;
      right: .8rem;
      bottom: 4.35rem;
      width: min(21rem, calc(100vw - 1.6rem));
      max-height: 58vh;
      overflow: hidden;
    }
    @media (max-width: 1280px) {
      #theme-myfuwari .myfuwari-float-wrap {
        right: 1.05rem;
        bottom: 1rem;
      }
    }
    #theme-myfuwari .myfuwari-social-btn {
      width: 1.95rem;
      height: 1.95rem;
      border-radius: .65rem;
      background: color-mix(in oklab, var(--myfuwari-primary) 10%, var(--myfuwari-surface));
      border: 1px solid color-mix(in oklab, var(--myfuwari-primary) 22%, var(--myfuwari-border));
      color: color-mix(in oklab, var(--myfuwari-primary) 88%, #8c8c8c);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all .18s ease;
    }
    #theme-myfuwari .myfuwari-social-btn:hover {
      transform: translateY(-1px);
      color: var(--myfuwari-primary);
    }
    #theme-myfuwari .myfuwari-analytics-item {
      padding: .7rem .35rem;
      border-radius: .85rem;
    }
    #theme-myfuwari .myfuwari-analytics-label {
      font-size: 10px;
      line-height: 1.2;
      text-transform: uppercase;
      letter-spacing: .08em;
      color: var(--myfuwari-muted);
      overflow-wrap: anywhere;
      word-break: break-word;
      white-space: normal;
    }
    #theme-myfuwari .myfuwari-readmore-rail {
      width: 3.5rem;
      min-width: 3.5rem;
      border-radius: 1rem;
      align-items: center;
      justify-content: center;
      border: 1px solid color-mix(in oklab, var(--myfuwari-primary) 16%, var(--myfuwari-border));
      background: color-mix(in oklab, var(--myfuwari-primary) 8%, var(--myfuwari-surface));
      color: var(--myfuwari-primary);
      font-size: 1.06rem;
      transition: all .2s ease;
      opacity: .95;
    }
    #theme-myfuwari .myfuwari-pagination {
      --_page-size: 2.75rem;
    }
    #theme-myfuwari .myfuwari-page-btn,
    #theme-myfuwari .myfuwari-page-num {
      width: var(--_page-size);
      height: var(--_page-size);
      border-radius: .75rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: color-mix(in oklab, var(--myfuwari-text) 70%, #8f8f8f);
      background: var(--myfuwari-surface);
      border: 1px solid var(--myfuwari-border);
      transition: all .18s ease;
    }
    #theme-myfuwari .myfuwari-page-btn:hover,
    #theme-myfuwari .myfuwari-page-num:hover {
      color: var(--myfuwari-primary);
      border-color: color-mix(in oklab, var(--myfuwari-primary) 30%, var(--myfuwari-border));
    }
    #theme-myfuwari .myfuwari-page-box {
      border-radius: .85rem;
      background: var(--myfuwari-surface);
      border: 1px solid var(--myfuwari-border);
      padding: .15rem;
    }
    #theme-myfuwari .myfuwari-page-num-active {
      color: #fff;
      background: var(--myfuwari-primary);
      border-color: var(--myfuwari-primary);
    }
    #theme-myfuwari .myfuwari-page-btn-disabled {
      pointer-events: none;
      opacity: .45;
    }
    #theme-myfuwari .myfuwari-page-ellipsis {
      width: 2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--myfuwari-muted);
      font-size: .8rem;
    }
    #theme-myfuwari #posts-wrapper article:hover .myfuwari-readmore-rail {
      background: color-mix(in oklab, var(--myfuwari-primary) 10%, var(--myfuwari-surface));
      transform: translateX(1px);
    }
    #theme-myfuwari #posts-wrapper {
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }
    #theme-myfuwari #posts-wrapper article {
      border-radius: 1.15rem;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }
    #theme-myfuwari aside > section.myfuwari-card {
      border-radius: 1.05rem;
    }
    #theme-myfuwari aside .myfuwari-card {
      box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
    }
    #theme-myfuwari aside .myfuwari-chip {
      font-size: 13px;
      padding: .45rem .72rem;
    }
    #theme-myfuwari aside .myfuwari-card h3 {
      letter-spacing: .06em;
    }
    #theme-myfuwari .myfuwari-card,
    #theme-myfuwari #posts-wrapper > article {
      animation: myfuwari-enter .28s ease both;
    }
    /* Readmore �?modal 使用 fixed 定位；文章主卡若保留 transform/animation 会把它困在卡片内 */
    #theme-myfuwari article.myfuwari-card {
      animation: none !important;
      transform: none !important;
    }
    @keyframes myfuwari-enter {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: none; }
    }
  `}</style>
}

export { Style }

