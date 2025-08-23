import type { ServiceItem } from '../data/priceData'
import './ServiceDetail.css'

interface ServiceDetailProps {
  service: ServiceItem
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className='service-detail'>
      {/* iPad版本的表格布局 */}
      <div className='pricing-table desktop-table'>
        <div className='table-header'>
          <div>Program</div>
          <div>Unit price</div>
          <div>VIP price</div>
          <div>Course price</div>
        </div>
        <div className='table-body'>
          <div className='table-row'>
            <div className='col-name'>{service.name}</div>
            <div className='col-single'>
              {service.prices.single?.map((price, index) => (
                <div key={index} className='price-item'>
                  {typeof price.price === 'number'
                    ? price.price
                    : price.price}
                </div>
              ))}
            </div>
            <div className='col-first-time'>
              {service.prices.firstTime?.map((price, index) => (
                <div key={index} className='price-item'>
                  {typeof price.price === 'number'
                    ? price.price
                    : price.price}
                </div>
              ))}
            </div>
            <div className='col-package'>
              {service.prices.package?.map((price, index) => (
                <div key={index} className='price-item'>
                  {typeof price.price === 'number'
                    ? `${price.price}`
                    : price.price}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 移动端版本的卡片布局 */}
      <div className='mobile-price-cards'>
        <h2 className='service-title'>{service.name}</h2>
        
        <div className='price-cards-grid'>
          {service.prices.single && service.prices.single.length > 0 && (
            <div className='price-card'>
              <div className='price-card-header'>
                <h3 className='price-card-title'>Unit price</h3>
              </div>
              <div className='price-card-content'>
                {service.prices.single.map((price, index) => (
                  <div key={index} className='mobile-price-item'>
                    {typeof price.price === 'number' ? price.price : price.price}
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
                    {typeof price.price === 'number' ? price.price : price.price}
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
                    {typeof price.price === 'number' ? `${price.price}` : price.price}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}