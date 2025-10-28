import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MHeader from './components/MHeader'
import MBottomNav from './components/MBottomNav'
import MHome from './pages/MHome'
import MServicesGallery from './pages/MServicesGallery'
import MSchedule from './pages/MSchedule'
import './styles/mobile.css'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return null
}

const AppMobile = () => {
  return (
    <div className="m-app">
      <ScrollToTop />
      <MHeader />
      <main className="m-main">
        <Routes>
          <Route path="/" element={<MHome />} />
          <Route path="/servicos" element={<MServicesGallery />} />
          <Route path="/agendar" element={<MSchedule />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <MBottomNav />
      
      {/* Créditos Globais */}
      <footer className="m-global-footer">
        <a href="https://linkedin.com/in/hugods" target="_blank" rel="noopener noreferrer" className="m-credits-link">
          Desenvolvido por Hugo Dalmasio
        </a>
      </footer>
    </div>
  )
}

export default AppMobile


