import { useImagesMap } from '../contexts/ImagesMapContext';

interface WorkoutCardProps {
  imageUrl: string;
  title: string;
  duration: string;
  level: string;
  className?: string;
}

export default function WorkoutCard({ 
  imageUrl, 
  title, 
  duration, 
  level,
  className = "" 
}: WorkoutCardProps) {
  const { getImageForWorkout } = useImagesMap();
  return (
    <div className={`bg-darkgray rounded-2xl overflow-hidden border border-gray-800 relative group ${className}`}>
      <img 
        src={imageUrl.startsWith('http') ? imageUrl : getImageForWorkout(title)}
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="flex items-center text-sm text-gray-300">
          <span>{duration} | {level}</span>
          <div className="ml-auto bg-white/10 p-1 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
