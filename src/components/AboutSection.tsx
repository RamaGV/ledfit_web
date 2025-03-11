import { motion } from 'framer-motion';
import InfoCard from './InfoCard';
import TechCard from './TechCard';
import { 
  contactItems, 
  socialLinks, 
  techCards, 
  type ContactItemData, 
  type SocialLinkData, 
  type TechCardData 
} from '../data/contactData';

// Componente para la información sobre Ledfit (columna izquierda)
const AboutInfo = () => {
  return (
    <div className="md:pl-0">
      <h3 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-3">Acerca de Ledfit</h3>
      <p className="text-gray-300 mb-8">
        Ledfit es un innovador sistema de entrenamiento que combina un tablero LED interactivo 
        que se sincroniza con una aplicación móvil, ofreciendo entrenamientos diseñados por 
        entrenadores físicos profesionales.
      </p>
      
      <div className="space-y-6">
        <InfoCard title="Concepto">
          <p>
            Un tablero LED interactivo que se conecta a una aplicación móvil, permitiendo a los 
            usuarios seguir rutinas de entrenamiento visuales y dinámicas, eliminando distracciones 
            y maximizando la eficiencia de cada sesión.
          </p>
        </InfoCard>
        
        <InfoCard title="Tecnología">
          <p>
            Integración completa entre hardware especializado (tablero LED) y software avanzado 
            (aplicación móvil y backend), permitiendo una sincronización en tiempo real y una 
            experiencia de usuario fluida.
          </p>
        </InfoCard>
        
        <InfoCard title="Entrenamientos">
          <p>
            Rutinas diseñadas por entrenadores físicos profesionales que aprovechan al máximo 
            las capacidades del tablero LED, optimizando cada movimiento y adaptándose a diferentes 
            niveles de condición física.
          </p>
        </InfoCard>

        <InfoCard title="Soporte">
          <p>
            Ofrecemos asistencia técnica para todos los usuarios de Ledfit. Si tienes algún problema 
            con tu tablero LED o la aplicación, no dudes en contactarnos. También atendemos reclamos 
            y sugerencias para mejorar tu experiencia con nuestros productos y servicios.
          </p>
        </InfoCard>
      </div>
    </div>
  );
};

// Componente reutilizable para los ítems de contacto
interface ContactItemProps {
  data: ContactItemData;
}

const ContactItem = ({ data }: ContactItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`p-2 ${data.gradient} rounded-xl`}>
        {data.icon}
      </div>
      <span className="text-gray-300">{data.text}</span>
    </div>
  );
};

// Componente reutilizable para los enlaces sociales
interface SocialLinkProps {
  data: SocialLinkData;
}

const SocialLink = ({ data }: SocialLinkProps) => {
  return (
    <a 
      href={data.href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`p-3 bg-gradient-to-r ${data.gradient} hover:${data.hoverGradient} transition-colors rounded-xl`}
    >
      {data.icon}
    </a>
  );
};

// Componente para la información de contacto (columna derecha)
const ContactInfo = () => {
  return (
    <div className="md:pr-0">
      <h3 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-3">Contacto con el desarrollador</h3>
      <p className="text-gray-300 mb-8">
        Desarrollador full-stack especializado en la integración de hardware y software. 
        Si te interesa mi trabajo o quieres colaborar en algún proyecto, no dudes en contactarme.
      </p>
      
      <div className="space-y-4 mb-8">
        {contactItems.map(item => (
          <ContactItem key={item.id} data={item} />
        ))}
      </div>
      
      <div className="flex gap-4 mb-8">
        {socialLinks.map(link => (
          <SocialLink key={link.id} data={link} />
        ))}
      </div>
      
      <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-3">Tecnologías aplicadas</h4>
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
    </div>
  );
};

// Componente principal que combina las dos columnas
const AboutSection = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
