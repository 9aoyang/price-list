// Load assets globally from the common services directory
const serviceAssets = import.meta.glob('../assets/services/**/*.{png,jpg,jpeg}', { 
  eager: true, 
  query: '?url',
  import: 'default'
}) as Record<string, string>

export function getAssetUrl(key?: string) {
  if (!key) return undefined
  
  // Construct prefix looking into the services directory
  // src/utils/assets.ts -> ../assets/services/
  const prefix = `../assets/services/${key}/`
  
  // 1. Try to find a thumbnail first
  const thumbMatch = Object.keys(serviceAssets).find(path => path.startsWith(prefix) && path.includes('/thumbnails/'))
  if (thumbMatch) return serviceAssets[thumbMatch]
  
  // 2. Fallback to first available image
  const match = Object.keys(serviceAssets).find(path => path.startsWith(prefix))
  return match ? serviceAssets[match] : undefined
}