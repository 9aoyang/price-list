import { useNavigate, useParams } from 'react-router-dom'
import { getCategory, getStoreName, getPriceDisplay } from '../utils/dataHelpers'
import { getAssetUrl } from '../utils/assets'
import Header from './Header'
import './SubCategoryMenu.css'

export default function SubCategoryMenu() {
  const navigate = useNavigate()
  const { store, categoryId } = useParams<{ store: string, categoryId: string }>()
  
  const mainCategory = getCategory(store, categoryId)
  const storeName = getStoreName(store)

  if (!mainCategory) {
    return <div className="error-container">Category not found</div>
  }

  const handleServiceSelect = (serviceName: string) => {
    // Encode service name for URL safety
    navigate(`/menu/${store}/category/${categoryId}/service/${encodeURIComponent(serviceName)}`)
  }

  return (
    <div className='subcategory-menu'>
      <Header 
        title={mainCategory.name} 
        subtitle={storeName} 
      />
      
      <div className='subcategory-list'>
        {mainCategory.subCategories?.map((subCategory, index) => {
          const bgImage = getAssetUrl(subCategory.assetKey)
          const mode = subCategory.displayMode || 'cover'
          
          return (
            <div 
              key={subCategory.name} 
              className='subcategory-section'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="subcategory-header-card">
                {bgImage && (
                  <div 
                    className={`subcategory-image mode-${mode}`}
                    style={{ backgroundImage: `url(${bgImage})` }}
                  />
                )}
                <div className="subcategory-info">
                  <h3 className='subcategory-title'>{subCategory.name}</h3>
                  {subCategory.slogan && <p className="subcategory-slogan">{subCategory.slogan}</p>}
                </div>
              </div>

              <div className='service-grid'>
                {subCategory.services?.map((item) => (
                  <div
                    key={item.name}
                    className='service-card'
                    onClick={() => handleServiceSelect(item.name)}
                  >
                    <div className='service-info'>
                      <h4>{item.name}</h4>
                      <div className='service-meta'>
                        <span className='price'>¥{getPriceDisplay(item)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}