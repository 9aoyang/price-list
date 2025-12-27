import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles/global.css'
import Home from './components/Home'
import MainMenu from './components/MainMenu'
import SubCategoryMenu from './components/SubCategoryMenu'
import ServiceDetail from './components/ServiceDetail'
import GlobalBackground from './components/GlobalBackground'

function App() {
  return (
    <BrowserRouter basename="/price-list">
      <div className='app'>
        <GlobalBackground />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Main Menu - Redirect /menu to /menu/lumen by default */}
          <Route path="/menu" element={<Navigate to="/menu/lumen" replace />} />
          <Route path="/menu/:store" element={<MainMenu />} />
          
          {/* Sub Category List */}
          <Route path="/menu/:store/category/:categoryId" element={<SubCategoryMenu />} />
          
          {/* Service Detail */}
          <Route path="/menu/:store/category/:categoryId/service/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
