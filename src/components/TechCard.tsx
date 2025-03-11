import React from 'react';

interface TechCardProps {
  title: string;
  description: string;
  repoUrl: string;
  gradientColors: string;
  iconComponent?: React.ReactNode;
}

const TechCard: React.FC<TechCardProps> = ({ 
  title, 
  description, 
  repoUrl, 
  gradientColors,
  iconComponent
}) => {
  return (
    <a 
      href={repoUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-transparent rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-all group"
    >
      <div className={`h-28 relative overflow-hidden flex items-center justify-center ${gradientColors}`}>
        <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity text-5xl">
          {iconComponent || (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )}
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </a>
  );
};

export default TechCard;
