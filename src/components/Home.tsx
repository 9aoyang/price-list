import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './Home.css'
import founderPortrait from '../assets/home/founder_portrait.jpg'
import brandIntro1 from '../assets/home/brand_intro_1.jpg'
import brandIntro2 from '../assets/home/brand_intro_2.jpg'
import brandIntro3 from '../assets/home/brand_intro_3.jpg'

// Load environment images - Original and Thumbnails
const lumenFull = import.meta.glob('../assets/environment/lumen/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  as: 'url'
})
const lumenThumbs = import.meta.glob('../assets/environment/lumen/thumbnails/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  as: 'url'
})

const nymphFull = import.meta.glob('../assets/environment/nymph/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  as: 'url'
})
const nymphThumbs = import.meta.glob('../assets/environment/nymph/thumbnails/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  as: 'url'
})

interface HomeProps {
  onExploreClick: () => void
}

interface ImageSet {
  full: string
  thumb: string
  name: string
}

const Home: React.FC<HomeProps> = ({ onExploreClick }) => {
  const environmentRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'lumen' | 'nymph'>('lumen')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Memoize image matching logic
  const currentImageSets = useMemo(() => {
    const fulls = activeTab === 'lumen' ? lumenFull : nymphFull
    const thumbs = activeTab === 'lumen' ? lumenThumbs : nymphThumbs
    
    const sets: ImageSet[] = []
    
    Object.entries(fulls).forEach(([path, fullUrl]) => {
      const filename = path.split('/').pop()
      if (!filename) return

      // Find matching thumbnail
      const thumbKey = Object.keys(thumbs).find(key => key.endsWith(`/${filename}`))
      if (thumbKey) {
        sets.push({
          full: fullUrl as string,
          thumb: thumbs[thumbKey] as string,
          name: filename
        })
      }
    })
    
    return sets
  }, [activeTab])

  const scrollToEnvironment = () => {
    environmentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Lightbox Handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden' // Lock scroll
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = '' // Unlock scroll
  }, [])

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    setLightboxIndex(prev => 
      prev === null ? null : (prev + 1) % currentImageSets.length
    )
  }, [currentImageSets.length])

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    setLightboxIndex(prev => 
      prev === null ? null : (prev - 1 + currentImageSets.length) % currentImageSets.length
    )
  }, [currentImageSets.length])

  // Keyboard Navigation
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, closeLightbox, handleNext, handlePrev])

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${brandIntro1})` }}>
        <div className="hero-content">
          <h1>云夏拾光</h1>
          <h2>Lumen Beauty</h2>
          <p className="slogan">以光为笔，雕刻时光中的永恒肌韵</p>
          <div className="hero-actions">
            <button className="explore-btn" onClick={onExploreClick}>
              探索服务
            </button>
            <button className="explore-btn secondary" onClick={scrollToEnvironment}>
              店内环境
            </button>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="section founder-section">
        <div className="section-content centered-column">
          <div className="founder-header">
            <h3>创始人寄语</h3>
            <h4>A Letter from the Founder</h4>
          </div>
          <div className="founder-message-container">
            <span className="quote-mark start">“</span>
            <div className="founder-quote-body">
              <p className="main-quote">光的诗人，肌肤的史学家</p>
              <p>先成为你自己，你才是母亲，女儿和妻子，</p>
              <p>我们不是与时间赛跑的人，而是光的译者</p>
              <p>将每一道皱纹译作星辰的轨迹，把每寸肌肤的呼吸写成四季的情书</p>
              <p>在云夏拾光，美从不是一场征服，而是你与光阴心照不宣的共谋</p>
              <p>我们只负责点燃那束光，照亮时间早已赠予你的答案</p>
            </div>
            <span className="quote-mark end">”</span>
          </div>
        </div>
      </section>

      {/* Brand Culture Section */}
      <section className="section culture-section">
        <div className="section-content">
          <div className="text-content">
            <h3>品牌文化</h3>
            <h4>Brand Culture</h4>
            <div className="culture-item">
              <strong>使命</strong>
              <p>让美成为可持续的生命力，成为杭州首家高新科技抗衰中心</p>
            </div>
            <div className="culture-item">
              <strong>愿景</strong>
              <p>以光为笔，雕刻时光中的永恒肌韵</p>
            </div>
            <div className="culture-item">
              <strong>价值观</strong>
              <p>我们相信，衰老是宇宙熵增法则下的诗意破绽</p>
              <p>通过量子级肌肤信号编译，重构细胞昼夜节律的星辰轨迹</p>
            </div>
          </div>
          <div className="image-content">
            <img src={brandIntro3} alt="Brand Culture" />
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="section environment-section" ref={environmentRef}>
        <div className="section-content column-layout">
           <div className="gallery-header">
            <h3>店内环境</h3>
            <h4>Environment</h4>
            <p>静谧优雅的空间，为您提供舒适的护肤体验</p>
            
            <div className="gallery-tabs">
              <button 
                className={`tab-btn ${activeTab === 'lumen' ? 'active' : ''}`}
                onClick={() => setActiveTab('lumen')}
              >
                Lumen Beauty (云夏拾光)
              </button>
              <button 
                className={`tab-btn ${activeTab === 'nymph' ? 'active' : ''}`}
                onClick={() => setActiveTab('nymph')}
              >
                Nymph (宁芙)
              </button>
            </div>
          </div>
          
          <div className="gallery-grid">
            {currentImageSets.map((imgSet, index) => (
              <div 
                key={`${activeTab}-${index}`} 
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={imgSet.thumb} 
                  alt={`${activeTab} Environment ${index + 1}`} 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="footer-cta">
        <button className="explore-btn" onClick={onExploreClick}>
          预约体验
        </button>
      </div>

      {/* Premium Lightbox - Rendered via Portal */}
      {lightboxIndex !== null && currentImageSets[lightboxIndex] && createPortal(
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <button className="lightbox-btn lightbox-prev" onClick={handlePrev} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <img 
              src={currentImageSets[lightboxIndex].full} 
              alt={`Environment View ${lightboxIndex + 1}`} 
              className="lightbox-image"
            />

            <button className="lightbox-btn lightbox-next" onClick={handleNext} aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="lightbox-counter">
              {lightboxIndex + 1} / {currentImageSets.length}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default Home