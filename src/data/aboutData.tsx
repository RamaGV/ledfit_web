// Interfaces para los datos de la sección About
export interface InfoCardData {
  id: string;
  title: string;
  content: string;
}

export interface AboutSectionData {
  title: string;
  description: string;
  infoCards: InfoCardData[];
}

export interface ContactSectionData {
  title: string;
  description: string;
  techTitle: string;
}

// Datos de la sección About
export const aboutSectionData: AboutSectionData = {
  title: "Acerca de Ledfit",
  description: "Ledfit es un innovador sistema de entrenamiento que combina un tablero LED interactivo que se sincroniza con una aplicación móvil, ofreciendo entrenamientos diseñados por entrenadores físicos profesionales.",
  infoCards: [
    {
      id: "concepto",
      title: "Concepto",
      content: "Un tablero LED interactivo que se conecta a una aplicación móvil, permitiendo a los usuarios seguir rutinas de entrenamiento visuales y dinámicas, eliminando distracciones y maximizando la eficiencia de cada sesión."
    },
    {
      id: "tecnologia",
      title: "Tecnología",
      content: "Integración completa entre hardware especializado (tablero LED) y software avanzado (aplicación móvil y backend), permitiendo una sincronización en tiempo real y una experiencia de usuario fluida."
    },
    {
      id: "entrenamientos",
      title: "Entrenamientos",
      content: "Rutinas diseñadas por entrenadores físicos profesionales que aprovechan al máximo las capacidades del tablero LED, optimizando cada movimiento y adaptándose a diferentes niveles de condición física."
    },
    {
      id: "soporte",
      title: "Soporte",
      content: "Ofrecemos asistencia técnica para todos los usuarios de Ledfit. Si tienes algún problema con tu tablero LED o la aplicación, no dudes en contactarnos. También atendemos reclamos y sugerencias para mejorar tu experiencia con nuestros productos y servicios."
    }
  ]
};

// Datos de la sección de contacto
export const contactSectionData: ContactSectionData = {
  title: "Contacto con el desarrollador",
  description: "Desarrollador full-stack especializado en la integración de hardware y software. Si te interesa mi trabajo o quieres colaborar en algún proyecto, no dudes en contactarme.",
  techTitle: "Tecnologías aplicadas"
};
