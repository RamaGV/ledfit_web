// Define la interface de un ejercicio individual en un entrenamiento
export interface WorkoutExercise {
  ejercicioId: string;
  tiempo: number;
}

// Interface que refleja la estructura de Entrenamiento en el backend
export interface Workout {
  _id: string;
  nombre: string;
  ejercicios: WorkoutExercise[];
  imagen: string;
  tiempoTotal: number;
  grupo: string;
  descripcion: string;
  calorias: number;
  nivel: 'Principiante' | 'Intermedio' | 'Avanzado';
  
  // Propiedades adicionales para la UI (calculadas o mostradas diferente)
  duration?: string;
}
