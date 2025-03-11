import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WorkoutCard from './WorkoutCard';
import FeatureCard from './FeatureCard';

export default function EntrenamientosSeccion() {
  return (
    <>
      {/* Base de Datos de Entrenamientos */}
      <section id="entrenamientos" className="py-12 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Base de Datos de Entrenamientos</h2>
              <Link to="/entrenamientos" className="text-primary-400 hover:text-primary-300 transition-colors">
                Ver todos
              </Link>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-300 mb-4">
                Accede a nuestra base de datos con más de 100 entrenamientos personalizados, 
                organizados por nivel, tipo de ejercicio y objetivos específicos. Diseñados con base en el feedback de nuestra comunidad.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <FeatureCard
                  variant="value"
                  valueText="100+"
                  title="Entrenamientos"
                  description="Rutinas completas para todos los niveles"
                  valueColor="text-primary-400"
                />
                
                <FeatureCard
                  variant="value"
                  valueText="8"
                  title="Categorías"
                  description="Cardio, Fuerza, Flexibilidad y más"
                  valueColor="text-accent"
                />
                
                <FeatureCard
                  variant="value"
                  valueText="4"
                  title="Nuevos por semana"
                  description="Entrenamientos basados en feedback de la comunidad"
                  valueColor="text-primary-300"
                />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Destacados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Workout Card 1 */}
              <WorkoutCard
                imageUrl="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Rutina de Fuerza Total"
                duration="9:10 min."
                level="Intermedio"
              />

              {/* Workout Card 2 */}
              <WorkoutCard
                imageUrl="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="CrossFit Intenso"
                duration="5:25 min."
                level="Avanzado"
              />
            </div>

            {/* Difficulty Levels */}
            <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
              <div className="level-badge level-beginner whitespace-nowrap">Principiante</div>
              <div className="level-badge level-intermediate whitespace-nowrap">Intermedio</div>
              <div className="level-badge level-advanced whitespace-nowrap">Avanzado</div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to="/entrenamientos" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent text-white font-medium hover:opacity-90 transition-all"
              >
                Explorar base de datos completa
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
