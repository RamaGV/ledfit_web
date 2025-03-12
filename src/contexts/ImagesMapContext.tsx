import React, { createContext, useState, useEffect, useContext } from 'react';

// Importamos directamente las imágenes de entrenamientos
import yogaIntermedioImage from '/images/entrenamientos/yogaIntermedioImage.webp';
import flexibilidadPrincipianteImage from '/images/entrenamientos/flexibilidadPrincipianteImage.webp';
import hiitParaPrincipiantesImage from '/images/entrenamientos/hiitParaPrincipiantesImage.webp';
import fuerzaTotalIntermedioImage from '/images/entrenamientos/fuerzaTotalIntermedioImage.webp';
import crossfitAvanzadoImage from '/images/entrenamientos/crossfitAvanzadoImage.webp';

interface ImagesMap {
  [key: string]: string;
}

interface ImagesMapContextValue {
  imagesMap: ImagesMap;
  getImageForWorkout: (imageName: string) => string;
}

export const ImagesMapContext = createContext<ImagesMapContextValue>({
  imagesMap: {},
  getImageForWorkout: () => ''
});

export function ImagesMapProvider({ children }: { children: React.ReactNode }) {
  const [imagesMap, setImagesMap] = useState<ImagesMap>({});
  
  useEffect(() => {
    const images: ImagesMap = {
      // Entrenamientos
      yogaIntermedioImage,
      flexibilidadPrincipianteImage,
      hiitParaPrincipiantesImage,
      fuerzaTotalIntermedioImage,
      crossfitAvanzadoImage,
    };
    setImagesMap(images);
  }, []);

  // Función para obtener una imagen según el nombre del entrenamiento
  const getImageForWorkout = (imageName: string): string => {
    // Mapeamos ciertos nombres de entrenamientos a las imágenes correspondientes
    const imageNameMap: { [key: string]: string } = {
      'Yoga Intermedio': 'yogaIntermedioImage',
      'Flexibilidad para Principiantes': 'flexibilidadPrincipianteImage',
      'HIIT para Principiantes': 'hiitParaPrincipiantesImage',
      'Rutina de Fuerza Total': 'fuerzaTotalIntermedioImage',
      'CrossFit Avanzado': 'crossfitAvanzadoImage',
    };
    
    const imageKey = imageNameMap[imageName] || 'fuerzaTotalIntermedioImage'; // Imagen por defecto si no se encuentra
    return imagesMap[imageKey] || '';
  };

  return (
    <ImagesMapContext.Provider value={{ imagesMap, getImageForWorkout }}>
      {children}
    </ImagesMapContext.Provider>
  );
}

export const useImagesMap = () => {
  const context = useContext(ImagesMapContext);
  if (!context) {
    throw new Error("useImagesMap must be used within a ImagesMapProvider");
  }
  return context;
};

export default ImagesMapContext;
