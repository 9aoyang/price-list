import type { MainCategory } from '../data/priceData'
import { getAssetUrl } from '../utils/assets'
import './MainMenu.css'

interface MainMenuProps {
  categories: MainCategory[]
  activeStore: 'lumen' | 'nymph'
  onStoreChange: (store: 'lumen' | 'nymph') => void
  onCategorySelect: (category: MainCategory) => void
}

export default function MainMenu({ categories, activeStore, onStoreChange, onCategorySelect }: MainMenuProps) {
  return (
    <div className='main-menu'>
      <div className='store-toggle'>
        <button 
          className={`store-btn ${activeStore === 'lumen' ? 'active' : ''}`}
          onClick={() => onStoreChange('lumen')}
        >
          Lumen Beauty
        </button>
        <button 
          className={`store-btn ${activeStore === 'nymph' ? 'active' : ''}`}
          onClick={() => onStoreChange('nymph')}
        >
          Nymph 宁芙
        </button>
      </div>

      <div className='category-grid'>
        {categories.map((category, index) => {
          return (
            <div
              key={category.id}
              className='main-category-card'
              onClick={() => onCategorySelect(category)}
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
