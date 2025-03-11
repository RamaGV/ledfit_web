import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import FeatureCard from './FeatureCard';
import WorkoutCarousel from './WorkoutCarousel';
import WorkoutDetails from './WorkoutDetails';
import { fetchFeaturedWorkouts } from '../services/workoutService';
import { Workout } from '../types/workout';

// Lista de categorías de entrenamiento
const categorias = [
  { id: 'todos', nombre: 'Todos', color: 'from-gray-500 to-gray-700' },
  { id: 'cardio', nombre: 'Cardio', color: 'from-red-600 to-pink-600' },
  { id: 'fuerza', nombre: 'Fuerza', color: 'from-blue-600 to-indigo-600' },
  { id: 'boxeo', nombre: 'Boxeo', color: 'from-slate-600 to-gray-700' },
  { id: 'circuito', nombre: 'Circuito', color: 'from-cyan-600 to-blue-500' },
  { id: 'flexibilidad', nombre: 'Flexibilidad', color: 'from-teal-500 to-green-600' },
  { id: 'yoga', nombre: 'Yoga', color: 'from-purple-600 to-violet-700' },
  { id: 'pilates', nombre: 'Pilates', color: 'from-pink-500 to-rose-600' },
];

// Niveles de dificultad
const niveles = [
  { id: 'Principiante', color: 'bg-green-500 hover:bg-green-600', shadowColor: 'shadow-green-500/50' },
  { id: 'Intermedio', color: 'bg-yellow-500 hover:bg-yellow-600', shadowColor: 'shadow-yellow-500/50' },
  { id: 'Avanzado', color: 'bg-red-500 hover:bg-red-600', shadowColor: 'shadow-red-500/50' },
];

export default function EntrenamientosSeccion() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [selectedCategoria, setSelectedCategoria] = useState<string | null>(null);
  const [selectedNivel, setSelectedNivel] = useState<string | null>(null);

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

  // Filtrado de workouts por categoría y nivel
  const filteredWorkouts = useMemo(() => {
    return workouts.filter(workout => {
      // Filtro por categoría
      const pasaCategoriaFiltro = !selectedCategoria || selectedCategoria === 'todos' || 
        (workout.grupo && workout.grupo.toLowerCase() === selectedCategoria.toLowerCase()) ||
        // Para entrenamientos combinados, verificamos si contiene la categoría en el nombre
        (workout.nombre && workout.nombre.includes('&') && 
          categorias.some(cat => 
            cat.id !== 'todos' && 
            cat.id === selectedCategoria && 
            workout.nombre.toLowerCase().includes(cat.nombre.toLowerCase())
          )
        );
      
      // Filtro por nivel
      const pasaNivelFiltro = !selectedNivel || 
        (workout.nivel && workout.nivel === selectedNivel);
      
      // El entrenamiento debe pasar ambos filtros
      return pasaCategoriaFiltro && pasaNivelFiltro;
    });
  }, [workouts, selectedCategoria, selectedNivel]);

  // Maneja el clic en una categoría
  const handleCategoriaClick = (categoriaId: string) => {
    setSelectedCategoria(categoriaId === 'todos' ? null : categoriaId);
  };

  // Maneja el clic en un nivel
  const handleNivelClick = (nivelId: string) => {
    setSelectedNivel(prevNivel => prevNivel === nivelId ? null : nivelId);
  };

  // Contadores para las FeatureCards
  const statsData = useMemo(() => {
    // Calcular la cantidad real de categorías únicas
    const categoriasUnicas = new Set(workouts.map(w => w.grupo?.toLowerCase()));
    
    return {
      totalWorkouts: workouts.length,
      totalCategorias: categoriasUnicas.size || categorias.length - 1, // Restamos 'todos'
      nuevosSemanales: 4 // Valor fijo o podría calcularse si tienes datos de fecha de creación
    };
  }, [workouts]);

  return (
    <>
      {/* Base de Datos de Entrenamientos */}
      <section id="entrenamientos" className="py-16 bg-gray-900 border-b border-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex flex-col items-end mb-12 text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative">
                Base de Datos de Entrenamientos
                <span className="absolute -bottom-2 right-0 w-24 h-1 bg-accent"></span>
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Accede a nuestra colección de entrenamientos personalizados para el tablero LED
              </p>
            </div>
            
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <FeatureCard
                  variant="value"
                  valueText={`${statsData.totalWorkouts}+`}
                  title="Entrenamientos"
                  description="Rutinas completas desarrolladas por entrenadores profesionales para todos los niveles de condición física"
                  valueColor="text-primary-400"
                  bgGradient="from-primary-800/20 to-primary-900/40"
                />
                
                <FeatureCard
                  variant="value"
                  valueText={`${statsData.totalCategorias}`}
                  title="Categorías"
                  description="Especialidades como Cardio, Fuerza, Boxeo, Yoga, Pilates, Flexibilidad y entrenamientos combinados para objetivos específicos"
                  valueColor="text-accent"
                  bgGradient="from-accent/20 to-purple-900/40"
                />
                
                <FeatureCard
                  variant="value"
                  valueText={`${statsData.nuevosSemanales}`}
                  title="Nuevos por semana"
                  description="Nuestra biblioteca de entrenamientos crece constantemente para ofrecerte siempre nuevos desafíos y mantener tu motivación"
                  valueColor="text-primary-300"
                  bgGradient="from-blue-800/20 to-blue-900/40"
                />
              </div>
            </div>
            
            <div className="mb-12">
              {/* Sección de filtros */}
              <div className="mb-8 bg-gray-800/70 rounded-xl p-4 shadow-xl shadow-black/30">
                <h3 className="text-xl font-bold mb-6 text-center text-white">Filtrar Entrenamientos</h3>
                
                <div className="space-y-6">
                  {/* Filtro de categorías */}
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-wrap justify-center gap-3">
                      {categorias.map((categoria) => (
                        <button
                          key={categoria.id}
                          onClick={() => handleCategoriaClick(categoria.id)}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                            (selectedCategoria === categoria.id || (!selectedCategoria && categoria.id === 'todos'))
                              ? `bg-gradient-to-r ${categoria.color} text-white shadow-lg shadow-black/30 transform -translate-y-0.5` 
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {categoria.nombre}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Filtro de niveles */}
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-center gap-4">
                      {niveles.map((nivel) => (
                        <button
                          key={nivel.id}
                          onClick={() => handleNivelClick(nivel.id)}
                          className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                            selectedNivel === nivel.id
                              ? `${nivel.color} text-white font-bold shadow-lg ${nivel.shadowColor} transform -translate-y-0.5` 
                              : `${nivel.color.replace('hover:', '')} opacity-80 text-white hover:opacity-100`
                          }`}
                        >
                          {nivel.id}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="flex justify-center py-16">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
                </div>
              ) : error ? (
                <div className="text-center py-16 text-red-500">{error}</div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-6">
                      {selectedCategoria && selectedCategoria !== 'todos'
                        ? `${categorias.find(c => c.id === selectedCategoria)?.nombre || ''}`
                        : 'Todos los entrenamientos'} 
                      {selectedNivel && ` - ${selectedNivel}`}
                    </h3>
                    
                    {filteredWorkouts.length === 0 ? (
                      <div className="bg-gray-800 rounded-xl p-10 text-center shadow-xl shadow-black/30 border border-gray-700">
                        <p className="text-gray-300">No hay entrenamientos disponibles con los filtros seleccionados.</p>
                      </div>
                    ) : (
                      <WorkoutCarousel 
                        workouts={filteredWorkouts} 
                        onSelectWorkout={handleSelectWorkout} 
                        selectedWorkoutId={selectedWorkout?._id || null} 
                      />
                    )}
                  </div>
                  
                  {selectedWorkout && (
                    <div className="mt-10">
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
