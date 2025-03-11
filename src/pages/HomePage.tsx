import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeatureCarousel from '../components/FeatureCarousel';
import LEDSection from '../components/LEDSection';
import EntrenamientosSeccion from '../components/EntrenamientosSeccion';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  
  return (
    <div>
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-24 pb-16">
      {/* Inicio Section */}
      <HeroSection />

      {/* Funciones Section - Centrado - Carrusel */}
      <div id="funciones">
        <FeatureCarousel />
      </div>
      
      {/* Separador */}
      <div className="container mx-auto my-16 border-b border-gray-700 opacity-50"></div>
      
      {/* Tablero LED Section - Izquierda */}
      <LEDSection />

      {/* Separador */}
      <div className="container mx-auto my-16 border-b border-gray-700 opacity-50"></div>

      {/* Entrenamientos Section - Derecha */}
      <EntrenamientosSeccion />

      {/* Separador */}
      <div className="container mx-auto my-16 border-b border-gray-700 opacity-50"></div>

      {/* Acerca de Section - Centro */}
      <AboutSection />
      
      {/* Separador */}
      <div className="container mx-auto my-16 border-b border-gray-700 opacity-50"></div>
      
      {/* Contacto Section - Centro */}
      <ContactSection />
      </div>
    </div>
  );
};
