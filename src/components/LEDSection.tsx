import { motion } from 'framer-motion';
import { tableroFeatures } from '../data/TableroData';

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
                {tableroFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-start gap-3">
                    <div className={`icon-container mt-1 flex-shrink-0 ${feature.id === 'integracion' ? 'text-blue-400' : ''}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
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
                    <div className="text-5xl font-bold text-white my-4 font-mono flex items-center gap-2 pb-4">
                      <span className="bg-primary-900/50 p-2 rounded border border-primary-800">0</span>
                      <span className="bg-primary-900/50 p-2 rounded border border-primary-800">1</span>:
                      <span className="bg-primary-900/50 p-2 rounded border border-primary-800">3</span>
                      <span className="bg-primary-900/50 p-2 rounded border border-primary-800">5</span>
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
