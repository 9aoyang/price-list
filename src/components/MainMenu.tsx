import { useNavigate, useParams } from 'react-router-dom'
import { getStoreData } from '../utils/dataHelpers'
import './MainMenu.css'

// Import brand environment images
import lumenBanner from '../assets/environment/lumen/DSCF3047.jpg'
import nymphBanner from '../assets/environment/nymph/IMG_2933.jpeg'

export default function MainMenu() {
  const navigate = useNavigate()
  const { store } = useParams<{ store: string }>()
  
  // Default to lumen if store is undefined or invalid
  const activeStore = (store === 'nymph' ? 'nymph' : 'lumen')
  const categories = getStoreData(activeStore)

  const handleStoreChange = (newStore: 'lumen' | 'nymph') => {
    navigate(`/menu/${newStore}`)
  }

  const handleCategorySelect = (categoryId: string | number) => {
    navigate(`/menu/${activeStore}/category/${categoryId}`)
  }

  const storeInfo = {
    lumen: {
      title: 'Lumen Beauty',
      subtitle: '以光为笔，雕刻时光中的永恒肌韵'
    },
    nymph: {
      title: 'Nymph 宁芙',
      subtitle: '让美成为可持续的生命力'
    }
  }

  const currentStore = storeInfo[activeStore]

  return (
    <div className='main-menu'>
      <div 
        className='brand-hero-large'
        style={{
          backgroundImage: `url(${activeStore === 'lumen' ? lumenBanner : nymphBanner})`
        }}
      >
        <div className='hero-overlay'></div>
        <div className='hero-content-wrapper'>
          <div className='hero-text'>
            <h1>{currentStore.title}</h1>
            <p className='hero-subtitle'>{currentStore.subtitle}</p>
          </div>
          <div className='store-toggle-glass'>
            <button 
              className={`store-btn ${activeStore === 'lumen' ? 'active' : ''}`}
              onClick={() => handleStoreChange('lumen')}
            >
              Lumen Beauty
            </button>
            <button 
              className={`store-btn ${activeStore === 'nymph' ? 'active' : ''}`}
              onClick={() => handleStoreChange('nymph')}
            >
              Nymph 宁芙
            </button>
          </div>
        </div>
      </div>

      <div className='category-grid' key={activeStore}>
        {categories.map((category, index) => {
          return (
            <div
              key={category.id}
              className='main-category-card'
              onClick={() => handleCategorySelect(category.id)}
              style={{ 
                animationDelay: `${(index + 1) * 0.1}s`
              }}
            >
              <div className="card-content">
                <h2>{category.name}</h2>
                {category.slogan && <p className="category-slogan">{category.slogan}</p>}
                <div className='subcategory-count'>
                  {category.subCategories.length} 个分类
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
