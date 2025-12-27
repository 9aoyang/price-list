import { useParams } from 'react-router-dom'
import { getService, getStoreName } from '../utils/dataHelpers'
import Header from './Header'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { store, categoryId, serviceId } = useParams<{ store: string, categoryId: string, serviceId: string }>()
  
  const data = getService(store, categoryId, serviceId)
  const storeName = getStoreName(store)

  if (!data) {
    return <div className="error-container">Service not found</div>
  }

  const { service, category } = data

  return (
    <div className='service-detail-wrapper'>
      <Header 
        variant="default" 
        title={service.name} 
        subtitle={`${storeName} / ${category.name}`} 
      />

      <div className='service-detail'>
        {/* Desktop Table Layout */}
        <div className='pricing-table desktop-table'>
          <div className='table-header'>
            <div>Program</div>
            <div>Unit price</div>
            <div>VIP price</div>
            <div>Course price</div>
          </div>
          <div className='table-body'>
            <div className='table-row'>
              <div className='service-name-cell'>{service.name}</div>
              <div className='price-cell'>
                {service.prices.single?.map((p, i) => (
                  <div key={i}>{p.price}</div>
                ))}
              </div>
              <div className='price-cell'>
                {service.prices.firstTime?.map((p, i) => (
                  <div key={i}>{p.price}</div>
                ))}
              </div>
              <div className='price-cell'>
                {service.prices.package?.map((p, i) => (
                  <div key={i}>{p.price}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards Layout */}
        <div className='mobile-price-cards'>
          <div className='price-cards-grid'>
            {service.prices.single && service.prices.single.length > 0 && (
              <div className='price-card'>
                <div className='price-card-header'>
                  <h3 className='price-card-title'>Unit price</h3>
                </div>
                <div className='price-card-content'>
                  {service.prices.single.map((price, index) => (
                    <div key={index} className='mobile-price-item'>
                      {price.price}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.prices.firstTime && service.prices.firstTime.length > 0 && (
              <div className='price-card'>
                <div className='price-card-header'>
                  <h3 className='price-card-title'>VIP price</h3>
                </div>
                <div className='price-card-content'>
                  {service.prices.firstTime.map((price, index) => (
                    <div key={index} className='mobile-price-item'>
                      {price.price}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.prices.package && service.prices.package.length > 0 && (
              <div className='price-card'>
                <div className='price-card-header'>
                  <h3 className='price-card-title'>Course price</h3>
                </div>
                <div className='price-card-content'>
                  {service.prices.package.map((price, index) => (
                    <div key={index} className='mobile-price-item'>
                      {price.price}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
