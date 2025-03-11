import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import progressCircularImg from '../assets/capturas/progressCircular.jpg';
import logrosPersonalesImg from '../assets/capturas/logrosPersonales.jpg';
import detallesDeEjerciciosImg from '../assets/capturas/detallesDeEjercicios.jpg';

interface FeatureContent {
  title: string;
  description: string;
  bulletPoints: string[];
  image: string;
  percentage?: string;
}

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Empezamos con el índice 1 (centro)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Contenido para cada característica del carrusel
  const features: FeatureContent[] = [
    {
      title: "Progreso Circular",
      description: "Visualiza tu avance durante el ejercicio con nuestro indicador circular intuitivo.",
      bulletPoints: [
        "Seguimiento en tiempo real del progreso de tu entrenamiento",
        "Indicador porcentual claro y visible durante el ejercicio",
        "Sincronización con el tablero LED para un ritmo óptimo"
      ],
      image: progressCircularImg,
      percentage: "87%"
    },
    {
      title: "Logros Personales",
      description: "Mantén la motivación con un sistema de logros que registra tus hitos.",
      bulletPoints: [
        "Desbloquea medallas y premios virtuales al alcanzar objetivos",
        "Comparte tus logros con amigos y en redes sociales",
        "Visualiza tu histórico de éxitos para mantener la constancia"
      ],
      image: logrosPersonalesImg,
      percentage: "12"
    },
    {
      title: "Detalles de Ejercicios",
      description: "Accede a información detallada de cada ejercicio para una ejecución perfecta.",
      bulletPoints: [
        "Instrucciones paso a paso con imágenes para cada movimiento",
        "Vídeos demostrativos con entrenadores profesionales",
        "Consejos personalizados basados en tu historial de entrenamiento"
      ],
      image: detallesDeEjerciciosImg,
      percentage: "24"
    }
  ];
  
  // Autorotación del carrusel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 10000); // Rotación más lenta para que el usuario tenga tiempo de leer
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [features.length]);
  
  // Función para cambiar manualmente el índice activo
  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 10000);
  };
  
  // Obtener el orden correcto de las imágenes para el efecto coverflow
  const getImageOrder = () => {
    // Circular ordering para el carrusel
    const ordering = [];
    for (let i = 0; i < features.length; i++) {
      ordering.push((activeIndex + i) % features.length);
    }
    return ordering;
  }
  
  // Obtener posición del carrusel
  const getImagePosition = (index: number) => {
    if (index === activeIndex) return 'center';
    
    // Manejo circular para el efecto de carrusel
    const prevIndex = activeIndex === 0 ? features.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === features.length - 1 ? 0 : activeIndex + 1;
    
    if (index === prevIndex) return 'left';
    if (index === nextIndex) return 'right';
    
    // Ya no ocultamos ninguna imagen, solo las posicionamos fuera de la vista
    // para mantener la sensación de carrusel infinito
    return index < activeIndex ? 'far-left' : 'far-right';
  };
  
  return (
    <div className="overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-center mb-2"
            >
              Vistas de la Aplicación
            </motion.h2>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500"></span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Herramientas especializadas para entrenamiento eficiente con displays LED de 7 segmentos que te ayudan a seguir tu rutina.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Información detallada a la izquierda */}
          <div className="md:w-1/2 space-y-4 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: .5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="space-y-4"
              >
                {/* El título y el borde siempre están presentes, solo cambia el contenido */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold relative inline-block">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={activeIndex}
                        className="block"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                          hidden: { opacity: .5 },
                          visible: { 
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.0005, // Más rápido para el título
                            }
                          },
                          exit: {
                            opacity: 0,
                            transition: {
                              staggerChildren: 0.001,
                              staggerDirection: -1,
                            }
                          }
                        }}
                      >
                        {Array.from(features[activeIndex].title).map((char, i) => (
                          <motion.span
                            key={`title-${activeIndex}-${i}`}
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                              exit: { opacity: 0 }
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.span>
                    </AnimatePresence>
                  </h3>
                  {/* El borde siempre está presente */}
                  <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary-500"></span>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={activeIndex}
                    className="text-lg text-gray-300 min-h-[3rem]"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { 
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.02, // Un poco más rápido que el título
                        }
                      },
                      exit: {
                        opacity: 0,
                        transition: {
                          staggerChildren: 0.03,
                          staggerDirection: 0,
                        }
                      }
                    }}
                  >
                    {Array.from(features[activeIndex].description).map((char, i) => (
                      <motion.span
                        key={`${activeIndex}-${i}`}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                          exit: { opacity: 0 }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                </AnimatePresence>
                
                {/* Los bullet points aparecerán secuencialmente uno después de otro */}
                <motion.ul 
                  className="space-y-3 pt-2"
                  initial="initialUl"
                  animate="animateUl"
                  exit="exitUl"
                  variants={{
                    initialUl: {},
                    animateUl: {
                      transition: {
                        staggerChildren: 0.4, // Retraso entre cada elemento de la lista
                        delayChildren: 0.6,   // Retraso inicial desde la carga de la descripción
                      }
                    },
                    exitUl: {}
                  }}
                >
                  {/* Mantenemos una lista fija con 3 elementos, pero aparecen secuencialmente */}
                  {[0, 1, 2].map((i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      variants={{
                        initialUl: { opacity: 0, y: 10 },
                        animateUl: { opacity: 1, y: 0 },
                        exitUl: { opacity: 0 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* El chip siempre está presente pero aparece con el contenido */}
                      <div className="bg-primary-900/40 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      {features[activeIndex].bulletPoints[i] && (
                        <motion.div 
                          key={`bullet-${activeIndex}-${i}`}
                          className="text-gray-300"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { 
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.005,
                              }
                            },
                            exit: {
                              opacity: 0,
                              transition: {
                                staggerChildren: 0.008,
                                staggerDirection: -1,
                              }
                            }
                          }}
                        >
                          {Array.from(features[activeIndex].bulletPoints[i] || '').map((char, charIndex) => (
                            <motion.span
                              key={`${activeIndex}-${i}-${charIndex}`}
                              variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                                exit: { opacity: 0 }
                              }}
                            >
                              {char}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
                
                {/* Se eliminó el botón de Explorar característica */}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Carrusel de imágenes (estilo coverflow) a la derecha */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative h-[500px] md:h-[450px] py-8">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Efecto de brillo detrás de las imágenes */}
              <div className="absolute w-64 h-64 bg-primary-500/10 rounded-full blur-3xl transform translate-x-1/4"></div>
              
              {/* Mostrar todas las imágenes con diferentes posiciones y escalas */}
              {features.map((feature, index) => {
                const position = getImagePosition(index);
                const isActive = index === activeIndex;
                
                // Siempre mostrar las tres imágenes, incluso las que estarían ocultas
                // Ajustamos la configuración para garantizar que se vean las tres imágenes principales
                
                // Configuración de posición y estilo según la posición
                let positionClasses = '';
                let scale = 1;
                let zIndex = 10;
                let opacity = 1;
                let rotateY = 0;
                
                switch(position) {
                  case 'left':
                    positionClasses = 'left-[10%] md:left-[30%]';
                    scale = 0.8;
                    zIndex = 10;
                    opacity = 0.5;
                    rotateY = 15;
                    break;
                  case 'center':
                    positionClasses = 'left-1/2 transform -translate-x-1/2';
                    scale = 1;
                    zIndex = 20;
                    opacity = 1;
                    rotateY = 0;
                    break;
                  case 'right':
                    positionClasses = 'right-[10%] md:right-[-10%]';
                    scale = 0.8;
                    zIndex = 10;
                    opacity = 0.5;
                    rotateY = -15;
                    break;
                }
                
                return (
                  <motion.div
                    key={index}
                    className={`absolute ${positionClasses} cursor-pointer top-1/2 transform -translate-y-1/2`}
                    initial={false}
                    animate={{
                      scale,
                      opacity,
                      rotateY: `${rotateY}deg`,
                      filter: isActive ? 'brightness(1.05)' : 'brightness(0.9)',
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 30 
                    }}
                    onClick={() => handleImageClick(index)}
                    style={{ zIndex }}
                  >
                    <div className={`relative overflow-hidden rounded-xl shadow-2xl border ${isActive ? 'border-primary-500' : 'border-gray-700'} max-w-[250px]`}>
                      <img 
                        src={feature.image} 
                        alt={`${feature.title} captura de pantalla`} 
                        className="w-full h-auto"
                      />
                      
                      {feature.percentage && isActive && (
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium bg-primary-500/80 px-3 py-1 rounded-full">
                              {index === 0 ? 
                                `${feature.percentage} completado` : 
                                index === 1 ? 
                                `${feature.percentage} logros` : 
                                `${feature.percentage} ejercicios`}
                            </span>
                            <span className="text-xs opacity-80">LED Fit</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
