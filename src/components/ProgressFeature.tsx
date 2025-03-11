import { motion } from 'framer-motion';
import progressCircularImg from '../assets/capturas/progressCircular.jpg';

export default function ProgressFeature() {
  return (
    <section className="py-16 bg-gray-900/50 border-t border-b border-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Información a la izquierda */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Progreso Circular</h2>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary-500"></span>
            </div>
            
            <p className="text-xl text-gray-300 mt-6">
              Visualiza tu progreso de forma intuitiva con nuestro indicador circular.
            </p>
            
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <div className="bg-primary-900/40 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Seguimiento en tiempo real de tu avance durante el ejercicio</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-900/40 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Indicador porcentual que muestra exactamente cuánto has completado</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-900/40 p-1 rounded-full mr-3 mt-1">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Sincronización directa con el tablero LED para mantener el ritmo correcto</span>
              </li>
            </ul>
            
            <div className="pt-4">
              <button className="bg-gradient-to-r from-primary-600 to-primary-400 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-500 hover:to-primary-300 transition duration-300 shadow-lg">
                Ver demostración
              </button>
            </div>
          </div>
          
          {/* Imagen a la derecha */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="absolute w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10"></div>
            <motion.div 
              initial={{ scale: 0.9, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700 max-w-sm">
                <img 
                  src={progressCircularImg} 
                  alt="Progreso circular en pantalla de smartphone" 
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium bg-primary-500/80 px-3 py-1 rounded-full">87% completado</span>
                    <span className="text-xs opacity-80">Mejora tu rendimiento</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
