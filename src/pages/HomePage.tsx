import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import LEDSection from '../components/LEDSection';
import EntrenamientosSeccion from '../components/EntrenamientosSeccion';
import StatsSection from '../components/StatsSection';

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

      {/* Funciones Section */}
      <FeaturesSection />
      
      {/* Tablero LED Section */}
      <LEDSection />

      {/* Entrenamientos Section */}
      <EntrenamientosSeccion />

      {/* Stats Section */}
      <StatsSection />

      {/* Acerca de Section */}
      <AboutSection />
      
      {/* Contacto Section */}
      <ContactSection />
      </div>
    </div>
  );
};
