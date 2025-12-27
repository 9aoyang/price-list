import { useLocation, matchPath } from 'react-router-dom'
import { useState, useEffect } from 'react'
import lumenBg from '../assets/environment/lumen/DSCF3047.JPG'
import nymphBg from '../assets/environment/nymph/IMG_2933.jpeg'

export default function GlobalBackground() {
  const location = useLocation()
  const [activeStore, setActiveStore] = useState<'lumen' | 'nymph'>('lumen')

  useEffect(() => {
    // Try to match /menu/:store...
    const match = matchPath('/menu/:store/*', location.pathname)
    if (match && match.params.store) {
      const store = match.params.store === 'nymph' ? 'nymph' : 'lumen'
      setActiveStore(store)
    }
    // If on home page, maybe we don't show this bg or keep last one? 
    // Home page has its own hero, so this bg should be behind it (z-index -1)
  }, [location])

  // Don't show on Home page if Home handles its own background completely
  // But Home.tsx has sections, so having a fixed bg behind is fine.
  
  return (
    <div 
      className='app-global-bg'
      style={{
        backgroundImage: `url(${activeStore === 'lumen' ? lumenBg : nymphBg})`
      }}
    />
  )
}
