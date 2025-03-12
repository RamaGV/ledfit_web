import { motion } from 'framer-motion';
import InfoCard from './AboutSection/InfoCard';
import {
  aboutSectionData,
  type InfoCardData
} from '../data/aboutData';
import ContactInfo from './AboutSection/ContactInfo';

// Componente para la información sobre Ledfit (columna izquierda)
const AboutInfo = () => {
  return (
    <motion.div 
      className="md:pl-0"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 border-b-2 border-gray-700 pb-3">{aboutSectionData.title}</h3>
        <p className="text-gray-300 mb-8">
          {aboutSectionData.description}
        </p>
      </div>
      
      <div className="space-y-6">
        {aboutSectionData.infoCards.map((card: InfoCardData) => (
          <InfoCard
            key={card.id}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Componente principal que combina las dos columnas
const AboutSection = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              {/* Línea divisoria vertical */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 border-l border-gray-700 transform -translate-x-1/2"></div>
              {/* Columna izquierda - About Ledfit */}
              <AboutInfo />
              
              {/* Columna derecha - Contacto con el desarrollador */}
              <ContactInfo />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
