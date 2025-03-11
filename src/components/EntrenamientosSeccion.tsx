import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import WorkoutCarousel from './WorkoutCarousel';
import WorkoutDetails from './WorkoutDetails';
import { fetchFeaturedWorkouts } from '../services/workoutService';
import { Workout } from '../types/workout';

export default function EntrenamientosSeccion() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        setLoading(true);
        const data = await fetchFeaturedWorkouts();
        setWorkouts(data);
        // Selecciona el primer entrenamiento por defecto
        if (data.length > 0) {
          setSelectedWorkout(data[0]);
        }
      } catch (err) {
        setError('Error al cargar los entrenamientos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  const handleSelectWorkout = (workout: Workout) => {
    setSelectedWorkout(workout);
  };

  return (
    <>
      {/* Base de Datos de Entrenamientos */}
      <section id="entrenamientos" className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex flex-col items-end mb-10 text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative">
                Base de Datos de Entrenamientos
                <span className="absolute -bottom-2 right-0 w-24 h-1 bg-accent"></span>
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Accede a nuestra colección de entrenamientos personalizados para el tablero LED
              </p>
            </div>
            
            <div className="mb-8">
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
                  description="Compatibles con el tablero LED de 7 segmentos"
                  valueColor="text-primary-300"
                />
              </div>
            </div>
            
            <div className="mb-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Destacados</h3>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  <div className="px-3 py-1 text-xs font-medium rounded-full text-gray-900 bg-green-500 whitespace-nowrap">Principiante</div>
                  <div className="px-3 py-1 text-xs font-medium rounded-full text-gray-900 bg-yellow-500 whitespace-nowrap">Intermedio</div>
                  <div className="px-3 py-1 text-xs font-medium rounded-full text-gray-900 bg-red-500 whitespace-nowrap">Avanzado</div>
                </div>
              </div>
              
              {loading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-500"></div>
                </div>
              ) : error ? (
                <div className="text-center py-10 text-red-500">{error}</div>
              ) : (
                <>
                  <WorkoutCarousel 
                    workouts={workouts} 
                    onSelectWorkout={handleSelectWorkout} 
                    selectedWorkoutId={selectedWorkout?._id || null} 
                  />
                  
                  {selectedWorkout && (
                    <div className="mt-8">
                      <WorkoutDetails workout={selectedWorkout} />
                    </div>
                  )}
                </>
              )}
            </div>
            

          </motion.div>
        </div>
      </section>
    </>
  );
}
