import { motion } from 'framer-motion';
import { Workout } from '../types/workout';
import { useImagesMap } from '../contexts/ImagesMapContext';

// Función para formatear el tiempo total en minutos:segundos
const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')} min.`;
};

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({ workout }: WorkoutDetailsProps) {
  const { getImageForWorkout } = useImagesMap();
  const levelColorClass = 
    workout.nivel === 'Principiante' ? 'bg-green-500' :
    workout.nivel === 'Intermedio' ? 'bg-yellow-500' : 'bg-red-500';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/70 rounded-xl p-6 shadow-xl shadow-black/30"
    >
      <div className="flex flex-col gap-6">
        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img 
              src={workout.imagen.startsWith('http') ? workout.imagen : getImageForWorkout(workout.nombre)} 
              alt={workout.nombre} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div className="md:w-2/3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">{workout.nombre}</h3>
              <span className={`px-3 py-1 text-xs font-medium rounded-full text-gray-900 ${levelColorClass}`}>
                {workout.nivel}
              </span>
            </div>
            
            <p className="text-gray-300">
              {workout.descripcion || 'Este entrenamiento está diseñado para ayudarte a mejorar tu resistencia y fuerza. Sigue las indicaciones del tablero LED para maximizar tus resultados.'}
            </p>
          </div>
        </div>
        
        {/* Información en la parte inferior */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          <div className="bg-gray-700 rounded-lg p-4 text-center shadow-md border border-gray-600 hover:shadow-xl transition-all duration-300 hover:border-primary-500/30">
            <div className="text-2xl font-bold text-primary-400">{formatDuration(workout.tiempoTotal)}</div>
            <div className="text-sm text-gray-300">Duración</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4 text-center shadow-md border border-gray-600 hover:shadow-xl transition-all duration-300 hover:border-primary-500/30">
            <div className="text-2xl font-bold text-primary-400">{workout.ejercicios.length}</div>
            <div className="text-sm text-gray-300">Ejercicios</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4 text-center shadow-md border border-gray-600 hover:shadow-xl transition-all duration-300 hover:border-primary-500/30">
            <div className="text-2xl font-bold text-primary-400">{workout.calorias.toFixed(1)}</div>
            <div className="text-sm text-gray-300">Calorías</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4 text-center shadow-md border border-gray-600 hover:shadow-xl transition-all duration-300 hover:border-primary-500/30">
            <div className="text-2xl font-bold text-primary-400">{workout.grupo}</div>
            <div className="text-sm text-gray-300">Categoría</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
