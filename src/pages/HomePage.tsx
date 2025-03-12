import { useState } from 'react';
import AboutSection from '../components/AboutSection';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import VistasSection from '../components/VistasSection';
import LEDSection from '../components/LEDSection';
import EntrenamientosSection from '../components/EntrenamientosSection';

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
      <div className="py-8">
        <HeroSection />
      </div>

      {/* Tablero LED Section - Izquierda */}
      <LEDSection />
      
      {/* Separador */}
      <div className="container mx-auto  border-b border-gray-700 opacity-50"></div>
      
      {/* Funciones Section - Centrado - Carrusel */}
      <div id="funciones" className="py-8">
        <VistasSection />
      </div>

      {/* Separador */}
      <div className="container mx-auto border-b border-gray-700 opacity-50"></div>

      {/* Entrenamientos Section - Derecha */}
      <div id="entrenamientos" className="py-4">
        <EntrenamientosSection />
      </div>

      {/* Acerca de y Contacto Section */}
      <div id="contact" className="py-4">
        <AboutSection />
      </div>
      
    </div>
  );
};
