import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Acerca de Ledfit</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Creando una nueva experiencia de fitness para todos los niveles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-darkgray p-5 rounded-xl border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2">Nuestra misión</h4>
                  <p className="text-gray-400">Transformar la manera en que las personas se ejercitan mediante tecnología intuitiva que motive y optimice cada sesión de entrenamiento.</p>
                </div>
                
                <div className="bg-darkgray p-5 rounded-xl border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2">Historia</h4>
                  <p className="text-gray-400">Ledfit nació de la necesidad de crear una herramienta de entrenamiento que eliminara distracciones y maximizara la eficiencia en cada sesión. La combinación de nuestra app con el sistema LED ha revolucionado la experiencia fitness.</p>
                </div>
                
                <div className="bg-darkgray p-5 rounded-xl border border-gray-800">
                  <h4 className="text-xl font-semibold mb-2">Nuestros valores</h4>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm">Innovación</span>
                    <span className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm">Simplicidad</span>
                    <span className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm">Accesibilidad</span>
                    <span className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm">Comunidad</span>
                    <span className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm">Resultados</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Equipo Ledfit" 
                  className="rounded-2xl shadow-lg border border-gray-800"
                />
                
                <div className="absolute bottom-6 right-6 bg-darkgray p-4 rounded-xl border border-gray-800 shadow-lg max-w-xs">
                  <div className="flex gap-3 items-center mb-2">
                    <div className="p-1 rounded-full bg-primary-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <span className="font-medium">Innovación constante</span>
                  </div>
                  <p className="text-sm text-gray-400">Actualizamos regularmente nuestras funciones basándonos en el feedback de los usuarios para mejorar su experiencia.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
