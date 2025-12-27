import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css' // We can reuse the existing CSS

export default function GlobalBackButton() {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Don't show on Home page
  if (location.pathname === '/') return null

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <button 
      className='unified-back-btn'
      onClick={handleBack}
      aria-label="Go Back"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
