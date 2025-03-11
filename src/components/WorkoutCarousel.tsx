import { useState, useRef, useEffect } from 'react';
import { Workout } from '../types/workout';
import { motion } from 'framer-motion';
import WorkoutCard from './WorkoutCard';

// Función para formatear el tiempo total en minutos:segundos
const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')} min.`;
};

interface WorkoutCarouselProps {
  workouts: Workout[];
  onSelectWorkout: (workout: Workout) => void;
  selectedWorkoutId: string | null;
}

export default function WorkoutCarousel({ workouts, onSelectWorkout, selectedWorkoutId }: WorkoutCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollAmount = 300;

  useEffect(() => {
    checkScrollPosition();
  }, [workouts]);

  const checkScrollPosition = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const handleScroll = () => {
    checkScrollPosition();
  };

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Left Control */}
      {showLeftArrow && (
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-80 rounded-full p-2 hover:bg-gray-700 transition-all"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Carousel */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar" 
        onScroll={handleScroll}
      >
        {workouts.map(workout => (
          <motion.div 
            key={workout._id}
            className={`flex-shrink-0 w-[280px] cursor-pointer ${selectedWorkoutId === workout._id ? 'shadow-xl shadow-accent/20 scale-[1.03] z-10' : 'opacity-90'}`}
            animate={selectedWorkoutId === workout._id ? { y: -8 } : { y: 0 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onSelectWorkout(workout)}
          >
            <WorkoutCard
              imageUrl={workout.imagen}
              title={workout.nombre}
              duration={workout.duration || formatDuration(workout.tiempoTotal)}
              level={workout.nivel}
            />
          </motion.div>
        ))}
      </div>

      {/* Right Control */}
      {showRightArrow && (
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-80 rounded-full p-2 hover:bg-gray-700 transition-all"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
