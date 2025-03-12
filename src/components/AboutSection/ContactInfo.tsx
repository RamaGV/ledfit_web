import { motion } from 'framer-motion';
import { contactSectionData } from '../../data/aboutData';
import ContactItem from './ContactItem';
import { contactItems, socialLinks, techCards } from '../../data/contactData';
import TechCard from './TechCard';


// Componente para la información de contacto (columna derecha)
export default function ContactInfo() {
  return (
    <motion.div 
      className="md:pr-0"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6 border-b-2 border-gray-700 pb-3">{contactSectionData.title}</h3>
      <p className="text-gray-300 mb-8">
        {contactSectionData.description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-8">
        {/* Columna de redes sociales */}
        <div className="space-y-4">
          {socialLinks.map(link => (
            <ContactItem key={link.id} data={link} showText={true} />
          ))}
        </div>

        {/* Columna de contactos principales */}
        <div className="space-y-4">
          {contactItems.map(item => (
            <ContactItem key={item.id} data={item} showText={true} />
          ))}
        </div>
      </div>
      
      <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-3">{contactSectionData.techTitle}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {techCards.map(card => (
          <TechCard
            key={card.id}
            title={card.title}
            description={card.description}
            repoUrl={card.repoUrl}
            gradientColors={card.gradientColors}
            iconComponent={card.iconComponent}
          />
        ))}
      </div>
    </motion.div>
  );
};