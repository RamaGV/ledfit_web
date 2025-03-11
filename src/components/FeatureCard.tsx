import { ReactNode } from 'react';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  valueText?: string;
  valueColor?: string;
  variant?: 'icon' | 'value';
  bgGradient?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  className = "",
  valueText,
  valueColor = "text-primary-400",
  variant = "icon",
  bgGradient = "from-gray-800 to-gray-900"
}: FeatureCardProps) {
  return (
    <div className={`bg-gradient-to-br ${bgGradient} rounded-xl p-8 transition-all duration-300 
      hover:-translate-y-1 border border-gray-700 shadow-xl shadow-black/30 h-full flex flex-col ${className}`}>
      {variant === "icon" && icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-900 text-primary-500 mb-5">
          {icon}
        </div>
      )}
      
      {variant === "value" && valueText && (
        <div className={`${valueColor} text-5xl font-bold mb-4 flex-none`}>{valueText}</div>
      )}
      
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-300 flex-grow">{description}</p>
    </div>
  );
}
