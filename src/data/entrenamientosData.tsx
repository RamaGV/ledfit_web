
// Interfaces para datos de entrenamientos
export interface CategoriaData {
  id: string;
  nombre: string;
  color: string;
}

export interface NivelData {
  id: string;
  color: string;
  shadowColor: string;
}

export interface StatsData {
  totalWorkouts: number;
  totalCategorias: number;
  nuevosSemanales: number;
}

// Lista de categorías de entrenamiento
export const categorias: CategoriaData[] = [
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
export const niveles: NivelData[] = [
  { id: 'Principiante', color: 'bg-green-500 hover:bg-green-600', shadowColor: 'shadow-green-500/50' },
  { id: 'Intermedio', color: 'bg-yellow-500 hover:bg-yellow-600', shadowColor: 'shadow-yellow-500/50' },
  { id: 'Avanzado', color: 'bg-red-500 hover:bg-red-600', shadowColor: 'shadow-red-500/50' },
];

// Datos para las FeatureCards
export const defaultStatsData: StatsData = {
  totalWorkouts: 30, // Valor predeterminado
  totalCategorias: categorias.length - 1, // Restamos 'todos'
  nuevosSemanales: 4 // Valor predeterminado
};

// Configuración para la sección
export const sectionConfig = {
  title: 'Base de Datos de Entrenamientos',
  description: 'Accede a nuestra colección de entrenamientos personalizados para el tablero LED',
  featureCards: [
    {
      variant: 'value',
      title: 'Entrenamientos',
      description: 'Rutinas completas desarrolladas por entrenadores profesionales para todos los niveles de condición física',
      valueColor: 'text-primary-400',
      bgGradient: 'from-primary-800/20 to-primary-900/40'
    },
    {
      variant: 'value',
      title: 'Categorías',
      description: 'Especialidades como Cardio, Fuerza, Boxeo, Yoga, Pilates, Flexibilidad y entrenamientos combinados para objetivos específicos',
      valueColor: 'text-accent',
      bgGradient: 'from-accent/20 to-purple-900/40'
    },
    {
      variant: 'value',
      title: 'Nuevos por semana',
      description: 'Nuestra biblioteca de entrenamientos crece constantemente para ofrecerte siempre nuevos desafíos y mantener tu motivación',
      valueColor: 'text-primary-300',
      bgGradient: 'from-blue-800/20 to-blue-900/40'
    }
  ]
};
