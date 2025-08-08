import './Header.css'

interface HeaderProps {
  view: 'main' | 'subcategory' | 'service'
  mainCategory?: string
  service?: string
  onBack: () => void
}

export default function Header({
  view,
  mainCategory,
  service,
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
            <h1>LumenBeauty</h1>
            <p className='subtitle'>以光为笔，雕刻时光中的永恒肌韵</p>
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
