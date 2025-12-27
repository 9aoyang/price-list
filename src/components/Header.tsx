import './Header.css'

interface PageHeaderProps {
  title?: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  if (!title && !subtitle) return null

  return (
    <header className='standard-header'>
      <div className='header-content'>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </div>
    </header>
  )
}
