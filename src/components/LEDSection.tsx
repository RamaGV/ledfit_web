import { motion } from 'framer-motion';
import { tableroFeatures } from '../data/tableroData';
import DataItem from '../components/LEDSection/DataItem';
import Tablero from './LEDSection/Tablero';

export default function LEDSection() {
  return (
    <section id="led" className="py-4 min-h-screen flex items-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col items-start text-left pb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
              Tablero LED 
              <span className="absolute -bottom-1 left-0 w-24 h-1 bg-blue-500"></span>
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Mejora tu rendimiento con entrenamientos personalizados y seguimiento en tiempo real
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 order-1 md:order-1">
            <div className="space-y-4 mb-6 pt-4 p-4">
              {tableroFeatures.map((feature) => (
                <DataItem key={feature.id} {...feature} />
              ))}
            </div>
            
            <a href="#led-details" className="btn btn-primary rounded-full inline-flex items-center gap-2">
              Más sobre el tablero LED
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          
          <div className="md:w-1/2 order-2 md:order-2">
            <Tablero />
          </div>
        </div>
      </div>
    </section>
  );
}
