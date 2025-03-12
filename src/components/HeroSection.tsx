import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// Importamos las imágenes
import logrosImg from '/images/capturas/logrosPersonales.jpg';
import progressImg from '/images/capturas/progressCircular.jpg';
import detallesImg from '/images/capturas/detallesDeEjercicios.jpg';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  const leftImageVariants = {
    hidden: { scale: 0.7, opacity: 0, x: -20 },
    visible: {
      scale: 0.85,
      opacity: 0.9,
      x: 0,
      transition: { duration: 0.7, delay: 0.2, ease: "easeOut" }
    }
  };
  
  const rightImageVariants = {
    hidden: { scale: 0.7, opacity: 0, x: 20 },
    visible: {
      scale: 0.85,
      opacity: 0.9,
      x: 0,
      transition: { duration: 0.7, delay: 0.2, ease: "easeOut" }
    }
  };



  return (
    <section 
      id="inicio" 
      ref={sectionRef}
      className="py-14 md:py-16 border-b border-gray-800 relative overflow-hidden"
      aria-label="Sección principal de Ledfit"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-900/20 to-transparent z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-8"
        >
          <div className="lg:w-1/2 space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-primary-500 to-teal-400 leading-tight">
                Entrena como nunca con Ledfit
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-xl">
                La aplicación fitness que sincroniza tu entrenamiento con un sistema de luces LED para maximizar tu rendimiento y transformar tu experiencia de ejercicio.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-5 mt-6"
            >
              <Link 
                to="/download" 
                className="download-btn rounded-full flex items-center gap-2 px-6 py-3 font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/20"
                aria-label="Descargar aplicación Ledfit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar App
              </Link>
              <a 
                href="#funciones" 
                className="btn btn-outline rounded-full px-6 py-3 font-medium text-lg hover:bg-gray-800/50 transition-all duration-300 border-gray-600"
                aria-label="Ver funcionalidades de Ledfit"
              >
                Ver funciones
              </a>
            </motion.div>
            

          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 flex justify-center items-center">
              
              {/* Imagen izquierda */}
              <motion.div 
                variants={leftImageVariants}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[10%] z-10 max-w-[280px] w-full"
              >
                <div className="relative">
                  <img
                    src={logrosImg} 
                    alt="Logros en Ledfit"
                    className="rounded-2xl border-2 border-gray-800 shadow-xl w-full object-cover aspect-[9/16]"
                  />
                  <div className="absolute inset-0 rounded-2xl border-2 border-gray-700/30"></div>
                  <div className="absolute top-4 left-4 bg-darkgray/80 backdrop-blur-sm p-2 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-200">Logros</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Imagen central principal */}
              <motion.div
                className="relative z-20 mx-auto max-w-[350px] w-full"
                variants={imageVariants}
              >
                <div className="relative">
                  <img
                    src={progressImg} 
                    alt="Ledfit App en acción"
                    className="rounded-2xl border-2 border-gray-800 shadow-2xl w-full object-cover aspect-[9/16]"
                    loading="eager"
                  />
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-transparent rounded-2xl"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                  

                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="absolute -left-5 top-1/4 bg-darkgray p-3 rounded-lg border border-gray-700 shadow-lg backdrop-blur-sm bg-opacity-80"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-200">LED Sync</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Imagen derecha */}
              <motion.div 
                variants={rightImageVariants}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[10%] z-10 max-w-[280px] w-full"
              >
                <div className="relative">
                  <img
                    src={detallesImg} 
                    alt="Calorías quemadas en Ledfit"
                    className="rounded-2xl border-2 border-gray-800 shadow-xl w-full object-cover aspect-[9/16]"
                  />
                  <div className="absolute inset-0 rounded-2xl border-2 border-gray-700/30"></div>
                  <div className="absolute top-4 right-4 bg-darkgray/80 backdrop-blur-sm p-2 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-200">Calorías</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
