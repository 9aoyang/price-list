// Load assets globally
const lumenAssets = import.meta.glob('../assets/lumen/**/*.{png,jpg,jpeg}', { 
  eager: true, 
  query: '?url',
  import: 'default'
})
const nymphAssets = import.meta.glob('../assets/nymph/**/*.{png,jpg,jpeg}', { 
  eager: true, 
  query: '?url',
  import: 'default'
})

export function getAssetUrl(key?: string) {
  if (!key) return undefined
  const isLumen = key.startsWith('lumen')
  const assets = isLumen ? lumenAssets : nymphAssets
  // Construct prefix. The keys in assets are relative to THIS file.
  // src/utils/assets.ts -> ../assets/ resolves to src/assets.
  const prefix = `../assets/${key}/`
  
  // 1. Try to find a thumbnail first
  const thumbMatch = Object.keys(assets).find(path => path.startsWith(prefix) && path.includes('/thumbnails/'))
  if (thumbMatch) return assets[thumbMatch]
  
  // 2. Fallback to first available image
  const match = Object.keys(assets).find(path => path.startsWith(prefix))
  return match ? assets[match] : undefined
}
