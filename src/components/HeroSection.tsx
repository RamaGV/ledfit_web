import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section id="inicio" className="py-16 border-b border-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">Entrena como nunca con Ledfit</h1>
            <p className="text-xl text-gray-300 mb-6">La aplicación fitness que sincroniza tu entrenamiento con un sistema de luces LED para maximizar tu rendimiento.</p>
            <div className="flex gap-4">
              <Link to="/download" className="download-btn rounded-full flex items-center gap-2 px-5 py-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar App
              </Link>
              <a href="#funciones" className="btn btn-outline rounded-full">
                Ver funciones
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Ledfit App"
              className="rounded-2xl border-2 border-gray-800 shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-darkgray p-4 rounded-xl border border-gray-800 shadow-lg">
              <div className="text-2xl font-bold text-primary-500">87%</div>
              <span className="text-sm text-gray-400">Mejora en resultados</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
