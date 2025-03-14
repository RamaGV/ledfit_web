import React from 'react';

interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <div className="border-l-4 border-primary-500 pl-4 py-2 mb-6">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <div className="text-gray-400">
        <p>{content}</p> 
      </div>
    </div>
  );
};

export default InfoCard;
