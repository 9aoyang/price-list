import { priceData } from '../data/priceData'
import { nymphPriceData } from '../data/nymphPriceData'
import type { MainCategory, SubCategory, ServiceItem } from '../data/priceData'

export type StoreType = 'lumen' | 'nymph'

export const getPriceDisplay = (service: ServiceItem): string | number => {
  if (service.prices?.single?.length) {
    return service.prices.single[0].price
  }
  if (service.prices?.firstTime?.length) {
    return service.prices.firstTime[0].price
  }
  if (service.prices?.package?.length) {
    return service.prices.package[0].price
  }
  return '咨询店内'
}

export const getStoreData = (store: string | undefined): MainCategory[] => {
  return store === 'nymph' ? nymphPriceData : priceData
}

export const getStoreName = (store: string | undefined) => {
  return store === 'nymph' ? 'Nymph 宁芙' : 'Lumen Beauty'
}

export const getCategory = (store: string | undefined, categoryId: string | undefined): MainCategory | undefined => {
  const data = getStoreData(store)
  // Simple find, assuming IDs are unique enough or exact matches
  // In a real app, IDs should be stable slugs. 
  // For now, we compare names or added IDs. 
  // Since original data uses `id` as number or string, let's verify.
  return data.find(c => c.id.toString() === categoryId)
}

export const getService = (
  store: string | undefined, 
  categoryId: string | undefined, 
  serviceId: string | undefined
): { service: ServiceItem, category: MainCategory, subCategory: SubCategory } | undefined => {
  const category = getCategory(store, categoryId)
  if (!category) return undefined

  for (const subCat of category.subCategories) {
    const service = subCat.services.find(s => s.name === serviceId || s.name === decodeURIComponent(serviceId || ''))
    if (service) {
      return { service, category, subCategory: subCat }
    }
  }
  return undefined
}
