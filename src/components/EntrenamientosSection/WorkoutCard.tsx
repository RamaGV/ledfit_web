import { useImagesMap } from '../../contexts/ImagesMapContext';

interface WorkoutCardProps {
  imageUrl: string;
  title: string;
  duration: string;
  level: string;
  className?: string;
  grupo?: string;
}

export default function WorkoutCard({ 
  imageUrl, 
  title, 
  duration, 
  level,
  grupo,
  className = "" 
}: WorkoutCardProps) {
  const { getImageForWorkout } = useImagesMap();
  
  // Determinar si es un entrenamiento combinado
  const isCombinado = title.includes('&');
  
  // Extraer las categorías del título si es un entrenamiento combinado
  const extractedCategories = isCombinado 
    ? title.split('&').map(part => part.trim())
    : [];
  
  // Usar el grupo como categoría adicional si existe y no es parte del título
  const showGrupo = grupo && !isCombinado;
  
  return (
    <div className={`bg-darkgray rounded-2xl overflow-hidden border border-gray-800 relative group ${className}`}>
      <img 
        src={imageUrl.startsWith('http') ? imageUrl : getImageForWorkout(title)}
        alt={title} 
        className="w-full h-48 object-cover"
      />
      
      {/* Etiqueta combinado si aplica */}
      {isCombinado && (
        <div className="absolute overflow-hidden top-2 right-2 px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-medium rounded-md">
          Combinado
        </div>
      )}
      
      {/* Etiqueta de grupo si no es combinado */}
      {showGrupo && (
        <div className="absolute top-2 right-2 px-2 py-1 bg-gray-800/80 text-white text-xs font-medium rounded-md">
          {grupo}
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="flex items-center text-sm text-gray-300">
          <span>{duration} | {level}</span>
        </div>
        
        {/* Mostrar grupos para entrenamientos combinados */}
        {isCombinado && extractedCategories.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {extractedCategories.map((category, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-0.5 rounded-full bg-white/10"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
