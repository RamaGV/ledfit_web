
import { motion } from 'framer-motion';

interface PhonePreviewProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

export default function PhonePreview({ imageUrl, alt, className = '' }: PhonePreviewProps) {
  return (
    <motion.div 
      className={`relative max-w-[210px] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Teléfono mockup */}
      <div className="relative w-full pb-[200%] rounded-[28px] bg-black shadow-2xl overflow-hidden border-4 border-gray-800">
        {/* Notch / Cámara */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-10 flex justify-center items-end pb-1">
          <div className="w-4 h-4 rounded-full bg-gray-700"></div>
        </div>
        
        {/* Botones laterales */}
        <div className="absolute top-24 -right-8 w-2 h-12 bg-gray-700 rounded-r-lg"></div>
        <div className="absolute top-48 -right-8 w-2 h-12 bg-gray-700 rounded-r-lg"></div>
        <div className="absolute top-32 -left-8 w-2 h-16 bg-gray-700 rounded-l-lg"></div>
        
        {/* Pantalla */}
        <div className="absolute inset-0 flex flex-col justify-start items-center bg-gray-900">
          <img 
            src={imageUrl} 
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Barra inferior */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-full"></div>
      </div>

    </motion.div>
  );
}
