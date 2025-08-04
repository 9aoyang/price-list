import './Header.css'

interface HeaderProps {
  view: 'main' | 'subcategory' | 'service'
  mainCategory?: string
  service?: string
  onBack: () => void
}

export default function Header({ view, mainCategory, service, onBack }: HeaderProps) {
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
        <button
          className='back-button'
          onClick={onBack}
          aria-label='返回上一级'
        >
          ←
        </button>
      )}
      <div className='header-content'>
        {view === 'main' ? (
          <div className='main-title'>
            <h1>LumenBeauty</h1>
            <p className='subtitle'>专业美肌 • 精致护理 • 品质生活</p>
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