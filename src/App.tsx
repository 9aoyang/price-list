import { useState } from 'react'
import './styles/global.css'
import { priceData } from './data/priceData'
import type { MainCategory, SubCategory, ServiceItem } from './data/priceData'
import Header from './components/Header'
import MainMenu from './components/MainMenu'
import SubCategoryMenu from './components/SubCategoryMenu'
import ServiceDetail from './components/ServiceDetail'

type ViewType = 'main' | 'subcategory' | 'service'

interface NavigationState {
  view: ViewType
  mainCategory?: MainCategory
  subCategory?: SubCategory
  service?: ServiceItem
}

function App() {
  const [navigation, setNavigation] = useState<NavigationState>({
    view: 'main'
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  const smoothTransition = (newNavigation: NavigationState) => {
    if (isTransitioning) return

    setIsTransitioning(true)

    setTimeout(() => {
      setNavigation(newNavigation)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
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
    }
  }


  return (
    <div className='app'>
      <Header
        view={navigation.view}
        mainCategory={navigation.mainCategory?.name}
        service={navigation.service?.name}
        onBack={navigateBack}
      />

      <main className={`content ${isTransitioning ? 'transitioning' : ''}`}>
        <div
          className={`page-container ${
            isTransitioning ? 'fade-out' : 'fade-in'
          }`}
        >
          {navigation.view === 'main' && (
            <MainMenu
              categories={priceData}
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
