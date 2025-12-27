import { useNavigate, useLocation, useParams } from 'react-router-dom'
import './Header.css'

interface HeaderProps {
  variant?: 'overlay' | 'default'
  title?: string
  subtitle?: string
}

export default function Header({ variant = 'default', title, subtitle }: HeaderProps) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const isHome = location.pathname === '/'
  
  // Custom back logic
  const handleBack = () => {
    // If specific logic is needed per page, we can inspect location
    navigate(-1)
  }

  if (isHome) return null

  return (
    <>
      {/* 统一的返回按钮，绝对定位或固定定位 */}
      <button 
        className={`unified-back-btn ${variant}`}
        onClick={handleBack}
        aria-label="Go Back"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* 仅在非 overlay 模式下显示的标题栏 (Breadcrumbs 或 页面标题) */}
      {variant === 'default' && (title || subtitle) && (
        <header className='standard-header'>
          <div className='header-content'>
            {title && <h1>{title}</h1>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        </header>
      )}
    </>
  )
}