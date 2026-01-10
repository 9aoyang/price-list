import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCategory, getStoreName, getPriceDisplay } from '../utils/dataHelpers'
import { getAssetUrl } from '../utils/assets'
import { analyzeImage } from '../utils/colorUtils'
import Header from './Header'
import './SubCategoryMenu.css'

interface SubCategoryHeaderProps {
  subCategory: {
    name: string;
    slogan?: string;
  };
  bgImage?: string;
}

const SubCategoryHeader = ({ subCategory, bgImage }: SubCategoryHeaderProps) => {
  const [isDarkBg, setIsDarkBg] = useState(false);

  useEffect(() => {
    if (bgImage) {
      analyzeImage(bgImage).then(analysis => {
        setIsDarkBg(analysis.isDark);
      });
    }
  }, [bgImage]);

  // CASE 1: No Image -> Render simple text header
  if (!bgImage) {
    return (
      <div className="subcategory-header-simple">
        <h3 className='subcategory-title simple'>{subCategory.name}</h3>
        {subCategory.slogan && <p className="subcategory-slogan simple">{subCategory.slogan}</p>}
      </div>
    );
  }

  // CASE 2: Has Image -> Render full banner card
  return (
    <div className={`subcategory-header-card ${isDarkBg ? 'text-light' : 'text-dark'}`}>
      <div 
        className="subcategory-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="subcategory-info">
        <h3 className='subcategory-title'>{subCategory.name}</h3>
        {subCategory.slogan && <p className="subcategory-slogan">{subCategory.slogan}</p>}
      </div>
    </div>
  );
};

export default function SubCategoryMenu() {
  const navigate = useNavigate()
  const { store, categoryId } = useParams<{ store: string, categoryId: string }>()
  
  const mainCategory = getCategory(store, categoryId)
  const storeName = getStoreName(store)

  if (!mainCategory) {
    return <div className="error-container">Category not found</div>
  }

  const handleServiceSelect = (serviceName: string) => {
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
          
          return (
            <div 
              key={subCategory.name} 
              className='subcategory-section'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SubCategoryHeader 
                subCategory={subCategory}
                bgImage={bgImage}
              />

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