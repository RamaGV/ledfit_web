import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  return (
    <section id="funciones" className="py-16 border-b border-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades principales</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Optimiza tu entrenamiento con herramientas diseñadas para mejorar tu rendimiento y experiencia fitness.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              }
              title="Entrenamientos personalizados"
              description="Rutinas adaptadas a tu nivel y objetivos específicos, con seguimiento de progreso en tiempo real."
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Ejercicios guiados"
              description="Videos detallados de cada ejercicio con instrucciones claras sobre la técnica correcta."
            />
            
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Estadísticas avanzadas"
              description="Analiza tu rendimiento con métricas detalladas y visualización de datos personalizada."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
