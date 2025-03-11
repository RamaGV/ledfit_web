import { Workout } from '../types/workout';

// URL base para las peticiones al backend
const API_URL = 'https://ledfit-back.vercel.app/api';

// Función para formatear el tiempo total de un entrenamiento
const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')} min.`;
};

// Obtiene todos los entrenamientos destacados del backend
export const fetchFeaturedWorkouts = async (): Promise<Workout[]> => {
  try {
    // En un entorno real, harías una llamada al endpoint específico para entrenamientos destacados
    // Por ahora, obtenemos todos los entrenamientos
    const response = await fetch(`${API_URL}/entrenamientos`);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data: Workout[] = await response.json();
    
    // Aplicamos formato a los datos para adaptarlos a nuestra UI
    return data.map(workout => ({
      ...workout,
      duration: formatDuration(workout.tiempoTotal)
    }));
  } catch (error) {
    console.error('Error al obtener entrenamientos destacados:', error);
    
    // Si hay un error, usamos datos de respaldo
    return getBackupWorkouts();
  }
};

// Función para obtener un entrenamiento por ID
export const getWorkoutById = async (id: string): Promise<Workout | null> => {
  try {
    const response = await fetch(`${API_URL}/entrenamientos/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const workout: Workout = await response.json();
    
    // Agregamos el campo duration para la UI
    return {
      ...workout,
      duration: formatDuration(workout.tiempoTotal)
    };
  } catch (error) {
    console.error(`Error al obtener el entrenamiento con ID ${id}:`, error);
    return null;
  }
};

// Datos de respaldo en caso de que el backend no esté disponible
const getBackupWorkouts = (): Workout[] => {
  return [
    {
      _id: '1',
      nombre: 'Rutina de Fuerza Total',
      nivel: 'Intermedio',
      imagen: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      descripcion: 'Entrenamiento enfocado en desarrollar fuerza muscular en todo el cuerpo.',
      grupo: 'Fuerza',
      ejercicios: [],
      tiempoTotal: 550,
      calorias: 65.4,
      duration: '9:10 min.'
    },
    {
      _id: '2',
      nombre: 'CrossFit Avanzado',
      nivel: 'Avanzado',
      imagen: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      descripcion: 'Entrenamiento de alta intensidad para deportistas avanzados.',
      grupo: 'Crossfit',
      ejercicios: [],
      tiempoTotal: 325,
      calorias: 57,
      duration: '5:25 min.'
    },
    {
      _id: '3',
      nombre: 'HIIT para Principiantes',
      nivel: 'Principiante',
      imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      descripcion: 'Entrenamiento de intervalos de alta intensidad para empezar cardio.',
      grupo: 'HIIT',
      ejercicios: [],
      tiempoTotal: 290,
      calorias: 47,
      duration: '4:50 min.'
    },
    {
      _id: '4',
      nombre: 'Yoga Intermedio',
      nivel: 'Intermedio',
      imagen: 'https://images.unsplash.com/photo-1571019613531-fbeaeb5b5a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      descripcion: 'Una sesión de yoga intermedio para mejorar la flexibilidad y el equilibrio.',
      grupo: 'Yoga',
      ejercicios: [],
      tiempoTotal: 115,
      calorias: 15.9,
      duration: '1:55 min.'
    },
    {
      _id: '5',
      nombre: 'Rutina de Flexibilidad',
      nivel: 'Principiante',
      imagen: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
      descripcion: 'Rutina ideal para mejorar la movilidad y reducir tensiones musculares.',
      grupo: 'Flexibilidad',
      ejercicios: [],
      tiempoTotal: 430,
      calorias: 20.8,
      duration: '7:10 min.'
    }
  ];
};
