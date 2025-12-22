import { useState, useEffect } from 'react'
import './styles/global.css'
import { priceData } from './data/priceData'
import { nymphPriceData } from './data/nymphPriceData'
import type { MainCategory, SubCategory, ServiceItem } from './data/priceData'
import Header from './components/Header'
import MainMenu from './components/MainMenu'
import SubCategoryMenu from './components/SubCategoryMenu'
import ServiceDetail from './components/ServiceDetail'
import Home from './components/Home'

type ViewType = 'home' | 'main' | 'subcategory' | 'service'
type StoreType = 'lumen' | 'nymph'

interface NavigationState {
  view: ViewType
  mainCategory?: MainCategory
  subCategory?: SubCategory
  service?: ServiceItem
}

function App() {
  const [activeStore, setActiveStore] = useState<StoreType>('lumen')
  const [navigation, setNavigation] = useState<NavigationState>({
    view: 'home'
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentPriceData = activeStore === 'lumen' ? priceData : nymphPriceData

  const smoothTransition = (newNavigation: NavigationState) => {
    if (isTransitioning) return

    setIsTransitioning(true)

    // 立即滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' })

    setTimeout(() => {
      setNavigation(newNavigation)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }

  // 监听页面变化，确保滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [navigation.view])

  const navigateToMain = () => {
    smoothTransition({ view: 'main' })
  }

  const navigateToSubCategory = (mainCategory: MainCategory) => {
    smoothTransition({ view: 'subcategory', mainCategory })
  }

  const navigateToService = (service: ServiceItem) => {
    smoothTransition({ ...navigation, view: 'service', service })
  }

  const navigateBack = () => {
    if (navigation.view === 'service') {
      smoothTransition({
        view: 'subcategory',
        mainCategory: navigation.mainCategory
      })
    } else if (navigation.view === 'subcategory') {
      smoothTransition({ view: 'main' })
    } else if (navigation.view === 'main') {
      smoothTransition({ view: 'home' })
    }
  }


  return (
    <div className='app'>
      {navigation.view !== 'home' && (
        <Header
          view={navigation.view}
          mainCategory={navigation.mainCategory?.name}
          service={navigation.service?.name}
          activeStore={activeStore}
          onBack={navigateBack}
        />
      )}

      <main className={`content ${isTransitioning ? 'transitioning' : ''}`}>
        <div
          className={`page-container ${
            isTransitioning ? 'fade-out' : 'fade-in'
          }`}
        >
          {navigation.view === 'home' && (
            <Home 
              onExploreClick={navigateToMain}
            />
          )}
          {navigation.view === 'main' && (
            <MainMenu
              categories={currentPriceData}
              activeStore={activeStore}
              onStoreChange={setActiveStore}
              onCategorySelect={navigateToSubCategory}
            />
          )}
          {navigation.view === 'subcategory' && navigation.mainCategory && (
            <SubCategoryMenu
              mainCategory={navigation.mainCategory}
              onServiceSelect={navigateToService}
            />
          )}
          {navigation.view === 'service' && navigation.service && (
            <ServiceDetail service={navigation.service} />
          )}
        </div>
      </main>
    </div>
  )
}

export default App