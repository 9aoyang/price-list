import type { MainCategory, ServiceItem } from '../data/priceData'
import './SubCategoryMenu.css'

interface SubCategoryMenuProps {
  mainCategory: MainCategory
  onServiceSelect: (service: ServiceItem) => void
}

export default function SubCategoryMenu({ mainCategory, onServiceSelect }: SubCategoryMenuProps) {
  return (
    <div className='subcategory-menu'>
      <div className='subcategory-grid'>
        {mainCategory.subCategories.map((subCategory) => (
          <div key={subCategory.id} className='subcategory-section'>
            <h3 className='subcategory-title'>{subCategory.name}</h3>
            <div className='services-grid'>
              {subCategory.services.map((service) => (
                <div
                  key={service.id}
                  className='service-card'
                  onClick={() => onServiceSelect(service)}
                >
                  <h4>{service.name}</h4>
                  {service.description && (
                    <p className='service-description'>
                      {service.description}
                    </p>
                  )}
                  <div className='price-preview'>
                    {service.prices.single && service.prices.single[0] && (
                      <span>{service.prices.single[0].price}元起</span>
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