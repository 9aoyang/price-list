import { useState } from 'react'
import './App.css'
import { priceData } from './data/priceData'
import type { MainCategory, SubCategory, ServiceItem } from './data/priceData'

type ViewType = 'main' | 'subcategory' | 'service'

interface NavigationState {
  view: ViewType
  mainCategory?: MainCategory
  subCategory?: SubCategory
  service?: ServiceItem
}

function App() {
  const [navigation, setNavigation] = useState<NavigationState>({ view: 'main' })

  const navigateToSubCategory = (mainCategory: MainCategory) => {
    setNavigation({ view: 'subcategory', mainCategory })
  }

  const navigateToService = (service: ServiceItem) => {
    setNavigation({ ...navigation, view: 'service', service })
  }

  const navigateBack = () => {
    if (navigation.view === 'service') {
      setNavigation({ view: 'subcategory', mainCategory: navigation.mainCategory })
    } else if (navigation.view === 'subcategory') {
      setNavigation({ view: 'main' })
    }
  }

  const renderMainMenu = () => (
    <div className="main-menu">
      <div className="category-grid">
        {priceData.map(category => (
          <div
            key={category.id}
            className="main-category-card"
            onClick={() => navigateToSubCategory(category)}
          >
            <div className="category-icon">{category.icon}</div>
            <h2>{category.name}</h2>
            <div className="subcategory-count">
              {category.subCategories.length} 个分类
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSubCategoryMenu = () => {
    if (!navigation.mainCategory) return null
    
    return (
      <div className="subcategory-menu">
        <div className="subcategory-grid">
          {navigation.mainCategory.subCategories.map(subCategory => (
            <div key={subCategory.id} className="subcategory-section">
              <h3 className="subcategory-title">{subCategory.name}</h3>
              <div className="services-grid">
                {subCategory.services.map(service => (
                  <div
                    key={service.id}
                    className="service-card"
                    onClick={() => navigateToService(service)}
                  >
                    <h4>{service.name}</h4>
                    {service.description && (
                      <p className="service-description">{service.description}</p>
                    )}
                    <div className="price-preview">
                      {service.prices.single && service.prices.single[0] && (
                        <span>起价 ¥{service.prices.single[0].price}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderServiceDetail = () => {
    if (!navigation.service) return null
    
    const service = navigation.service
    
    return (
      <div className="service-detail">
        <div className="service-header">
          <div className="program-info">
            <h3>Program Basic Information</h3>
          </div>
          <div className="pricing-policy">
            <h3>Pricing Policy</h3>
          </div>
        </div>
        
        <div className="pricing-table">
          <div className="table-header">
            <div>项目名称</div>
            <div>单次</div>
            <div>首次体验</div>
            <div>疗程价格</div>
          </div>
          <div className="table-body">
            <div className="table-row">
              <div className="col-name">{service.name}</div>
              <div className="col-single">
                {service.prices.single?.map((price, index) => (
                  <div key={index} className="price-item">
                    {typeof price.price === 'number' ? price.price : price.price}
                  </div>
                ))}
              </div>
              <div className="col-first-time">
                {service.prices.firstTime?.map((price, index) => (
                  <div key={index} className="price-item">
                    {typeof price.price === 'number' ? price.price : price.price}
                  </div>
                ))}
              </div>
              <div className="col-package">
                {service.prices.package?.map((price, index) => (
                  <div key={index} className="price-item">
                    {typeof price.price === 'number' ? `${price.price}` : price.price}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const getBreadcrumb = () => {
    const breadcrumbs: string[] = []
    
    if (navigation.mainCategory) {
      breadcrumbs.push(navigation.mainCategory.name)
    }
    
    if (navigation.service) {
      breadcrumbs.push(navigation.service.name)
    }
    
    return breadcrumbs
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          {navigation.view !== 'main' && (
            <button className="back-button" onClick={navigateBack}>
              ← 返回
            </button>
          )}
          {getBreadcrumb().length > 0 && (
            <div className="breadcrumb">
              {getBreadcrumb().join(' / ')}
            </div>
          )}
        </div>
      </header>

      <main className="content">
        {navigation.view === 'main' && renderMainMenu()}
        {navigation.view === 'subcategory' && renderSubCategoryMenu()}
        {navigation.view === 'service' && renderServiceDetail()}
      </main>
    </div>
  )
}

export default App
