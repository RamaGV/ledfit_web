import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ImagesMapProvider } from './contexts/ImagesMapContext'

// Futuros componentes a crear
import Navbar from './components/NavBar'
import Footer from './components/Footer'

// Páginas
import HomePage from './pages/HomePage'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Detectar preferencia de modo oscuro del sistema
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ImagesMapProvider>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </Router>
      </div>
    </ImagesMapProvider>
  )
}

export default App
