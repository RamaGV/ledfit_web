import { ReactNode } from 'react';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  valueText?: string;
  valueColor?: string;
  variant?: 'icon' | 'value';
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  className = "",
  valueText,
  valueColor = "text-primary-400",
  variant = "icon"
}: FeatureCardProps) {
  return (
    <div className={`bg-darkgray rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-800 ${className}`}>
      {variant === "icon" && icon && (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-900 text-primary-500 mb-4">
          {icon}
        </div>
      )}
      
      {variant === "value" && valueText && (
        <div className={`${valueColor} text-4xl font-bold mb-2`}>{valueText}</div>
      )}
      
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
