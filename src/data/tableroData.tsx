import React from 'react';
import { 
  MdLightbulb,
  MdDevices,
  MdFitnessCenter
} from 'react-icons/md';
import { 
  IoFitnessSharp, 
  IoTimeOutline 
} from 'react-icons/io5';
import { 
  FaStopwatch, 
  FaShieldAlt, 
  FaBolt, 
  FaCode,
  FaSync,
  FaMobileAlt,
  FaConnectdevelop 
} from 'react-icons/fa';

// Interface para las características del tablero
export interface TableroFeatureData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Interface para las especificaciones técnicas del tablero
export interface TableroSpecData {
  id: string;
  name: string;
  value: string;
}

// Características del tablero LED
export const tableroFeatures: TableroFeatureData[] = [
  {
    id: 'displays',
    title: 'Displays de 7 segmentos',
    description: 'Visualiza claramente el tiempo de tus ejercicios en grandes números LED, sin necesidad de consultar constantemente tu teléfono.',
    icon: <FaStopwatch className="h-6 w-6" />
  },
  {
    id: 'secuencias',
    title: 'Marcador de secuencias',
    description: 'El tablero marca exactamente los tiempos de cada fase del entrenamiento que aparece en tu móvil, manteniendo perfecta sincronización.',
    icon: <FaShieldAlt className="h-6 w-6" />
  },
  {
    id: 'configuracion',
    title: 'Fácil configuración',
    description: 'Conecta fácilmente tu tablero LED al teléfono y comienza a entrenar sin complicadas configuraciones técnicas.',
    icon: <FaBolt className="h-6 w-6" />
  },
  {
    id: 'integracion',
    title: 'Integración completa',
    description: 'Desarrollado con un enfoque integral de hardware y software para uso en gimnasios, permitiendo entrenamientos en equipo como TABATA donde los participantes pueden ver en la aplicación el ejercicio mientras el tablero marca el tiempo con perfecta sincronización.',
    icon: <FaCode className="h-6 w-6 text-blue-400" />
  }
];

// Especificaciones técnicas del tablero
export const tableroSpecs: TableroSpecData[] = [
  {
    id: 'dimensions',
    name: 'Dimensiones',
    value: '60 x 30 cm'
  },
  {
    id: 'connection',
    name: 'Conexión',
    value: 'Bluetooth 5.0'
  },
  {
    id: 'battery',
    name: 'Batería',
    value: 'Recargable Li-ion 5000mAh'
  },
  {
    id: 'display',
    name: 'Pantalla',
    value: 'LED de 7 segmentos de alta visibilidad'
  },
  {
    id: 'compatibility',
    name: 'Compatibilidad',
    value: 'iOS 12+ / Android 8.0+'
  }
];

// Ejercicios típicos para tablero LED
export interface ExerciseData {
  id: string;
  name: string;
  duration: string;
  icon: React.ReactNode;
}

export const ledExercises: ExerciseData[] = [
  {
    id: 'tabata',
    name: 'TABATA',
    duration: '04:00',
    icon: <IoFitnessSharp className="h-5 w-5" />
  },
  {
    id: 'hiit',
    name: 'HIIT',
    duration: '20:00',
    icon: <MdFitnessCenter className="h-5 w-5" />
  },
  {
    id: 'amrap',
    name: 'AMRAP',
    duration: '15:00',
    icon: <FaSync className="h-5 w-5" />
  },
  {
    id: 'emom',
    name: 'EMOM',
    duration: '10:00',
    icon: <IoTimeOutline className="h-5 w-5" />
  }
];

// Componentes del sistema LED
export interface SystemComponentData {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export const systemComponents: SystemComponentData[] = [
  {
    id: 'hardware',
    name: 'Tablero LED',
    description: 'Hardware con displays de 7 segmentos y controlador integrado',
    icon: <MdLightbulb className="h-6 w-6" />
  },
  {
    id: 'app',
    name: 'Aplicación Móvil',
    description: 'Control remoto y sincronización para entrenamientos',
    icon: <FaMobileAlt className="h-6 w-6" />
  },
  {
    id: 'connection',
    name: 'Sistema de Conexión',
    description: 'Protocolo Bluetooth para comunicación en tiempo real',
    icon: <FaConnectdevelop className="h-6 w-6" />
  },
  {
    id: 'interface',
    name: 'Interfaz de Usuario',
    description: 'Panel de control simplificado para entrenadores y atletas',
    icon: <MdDevices className="h-6 w-6" />
  }
];
