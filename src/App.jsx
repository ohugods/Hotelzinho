import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AppMobile from './mobile/AppMobile'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import MobileHome from './pages/MobileHome'
import MobileContact from './pages/MobileContact'

// Função para detectar dispositivo móvel
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;

  // Verificar user agent
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const mobileRegex = /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

  // Verificar largura da tela
  const screenWidth = window.innerWidth;

  return mobileRegex.test(userAgent.toLowerCase()) || screenWidth < 768;
};

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(isMobileDevice());
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Se for mobile, usar nova app mobile minimalista
  if (isMobile) {
    return (
      <Router>
        <div className="App mobile-app">
          <AppMobile />
        </div>
      </Router>
    )
  }

  // Desktop - usar componentes originais
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

