import { useState } from 'react';
import AboutSection from '../components/AboutSection';
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
      
      {/* Inicio Section */}
      <div className="py-16">
        <HeroSection />
      </div>

      {/* Tablero LED Section - Izquierda */}
      <div id="led" className="py-4">
        <LEDSection />
      </div>
      
      {/* Separador */}
      <div className="container mx-auto my-24 border-b border-gray-700 opacity-50"></div>
      
      {/* Funciones Section - Centrado - Carrusel */}
      <div id="funciones" className="py-20">
        <FeatureCarousel />
      </div>

      {/* Separador */}
      <div className="container mx-auto my-24 border-b border-gray-700 opacity-50"></div>

      {/* Entrenamientos Section - Derecha */}
      <div id="entrenamientos" className="py-4">
        <EntrenamientosSeccion />
      </div>

      {/* Acerca de y Contacto Section */}
      <div id="contact" className="py-4">
        <AboutSection />
      </div>
      
    </div>
  );
};
