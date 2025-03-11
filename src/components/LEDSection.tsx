import { motion } from 'framer-motion';

export default function LEDSection() {
  return (
    <section id="led" className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
                Tablero LED sincronizado
                <span className="absolute -bottom-1 left-0 w-24 h-1 bg-blue-500"></span>
              </h2>
              
              <div className="space-y-4 mb-6 pt-4 p-4">
                <div className="flex items-start gap-3">
                  <div className="icon-container mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Displays de 7 segmentos</h4>
                    <p className="text-gray-400">Visualiza claramente el tiempo de tus ejercicios en grandes números LED, sin necesidad de consultar constantemente tu teléfono.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="icon-container mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Marcador de secuencias</h4>
                    <p className="text-gray-400">El tablero marca exactamente los tiempos de cada fase del entrenamiento que aparece en tu móvil, manteniendo perfecta sincronización.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="icon-container mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Fácil configuración</h4>
                    <p className="text-gray-400">Conecta fácilmente tu tablero LED al teléfono y comienza a entrenar sin complicadas configuraciones técnicas.</p>
                  </div>
                </div>

                <div className="flex items-start justify-center gap-3">
                  <div className="icon-container mt-1 flex-shrink-0 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Integración completa</h4>
                    <p className="text-gray-400">Desarrollado con un enfoque integral de hardware y software para uso en gimnasios, permitiendo entrenamientos en equipo como TABATA donde los participantes pueden ver en la aplicación el ejercicio mientras el tablero marca el tiempo con perfecta sincronización.</p>
                  </div>
                </div>
              </div>
              
              <a href="#led-details" className="btn btn-primary rounded-full inline-flex items-center gap-2">
                Más sobre el tablero LED
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="bg-darkgray border-2 border-gray-700 rounded-2xl p-6 shadow-xl relative z-10">
                  <div className="bg-[#111] rounded-xl p-4 flex flex-col items-center">
                    <div className="flex justify-between w-full mb-3">
                      <div className="text-primary-500 font-bold">LEDFIT</div>
                    </div>
                    <div className="text-5xl font-bold text-white my-4 font-mono flex items-center gap-2">
                      <span className="bg-primary-900/50 p-2 rounded border border-primary-800">0</span>
                      <span className="bg-primary-900/50 p-2 rounded border border-primary-800">1</span>:
                      <span className="bg-primary-900/50 p-2 rounded border border-primary-800">3</span>
                      <span className="bg-primary-900/50 p-2 rounded border border-primary-800">5</span>
                    </div>
                    <div className="flex gap-3 w-full justify-center">
                      <div className="h-2 w-12 rounded-full bg-primary-600"></div>
                      <div className="h-2 w-12 rounded-full bg-primary-600"></div>
                      <div className="h-2 w-12 rounded-full bg-gray-600"></div>
                      <div className="h-2 w-12 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-primary-900/30 w-full h-full rounded-2xl border border-primary-800/30 -z-10"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
