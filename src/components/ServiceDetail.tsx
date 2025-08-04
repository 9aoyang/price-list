import type { ServiceItem } from '../data/priceData'
import './ServiceDetail.css'

interface ServiceDetailProps {
  service: ServiceItem
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className='service-detail'>
      <div className='pricing-table'>
        <div className='table-header'>
          <div>项目名称</div>
          <div>单次</div>
          <div>首次体验</div>
          <div>疗程价格</div>
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
    </div>
  )
}