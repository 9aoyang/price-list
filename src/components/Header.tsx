import './Header.css'

interface HeaderProps {
  view: 'home' | 'main' | 'subcategory' | 'service'
  mainCategory?: string
  service?: string
  activeStore?: 'lumen' | 'nymph'
  onBack: () => void
}

export default function Header({
  view,
  mainCategory,
  service,
  activeStore = 'lumen',
  onBack
}: HeaderProps) {
  const getBreadcrumb = () => {
    const breadcrumbs: string[] = []

    if (mainCategory) {
      breadcrumbs.push(mainCategory)
    }

    if (service) {
      breadcrumbs.push(service)
    }

    return breadcrumbs
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
    <header className='header'>
      {view !== 'main' && (
        <div
          className='back-button'
          onClick={onBack}
          role='button'
          tabIndex={0}
          aria-label='返回上一级'
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onBack()
            }
          }}
        >
          ←
        </div>
      )}
      <div className='header-content'>
        {view === 'main' ? (
          <div className='main-title'>
            <h1>{currentStore.title}</h1>
            <p className='subtitle'>{currentStore.subtitle}</p>
          </div>
        ) : (
          getBreadcrumb().length > 0 && (
            <div className='breadcrumb'>{getBreadcrumb().join(' / ')}</div>
          )
        )}
      </div>
    </header>
  )
}
