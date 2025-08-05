import type { MainCategory } from '../data/priceData'
import './MainMenu.css'

interface MainMenuProps {
  categories: MainCategory[]
  onCategorySelect: (category: MainCategory) => void
}

export default function MainMenu({ categories, onCategorySelect }: MainMenuProps) {
  return (
    <div className='main-menu'>
      <div className='category-grid'>
        {categories.map((category, index) => (
          <div
            key={category.id}
            className='main-category-card'
            onClick={() => onCategorySelect(category)}
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <h2>{category.name}</h2>
            <div className='subcategory-count'>
              {category.subCategories.length} 个分类
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}