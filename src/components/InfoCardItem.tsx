
interface InfoCardItemProps {
  value: string;
  title: string;
  description: string;
  valueColor?: string;
}

export default function InfoCardItem({ 
  value, 
  title, 
  description, 
  valueColor = "text-primary-400" 
}: InfoCardItemProps) {
  return (
    <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
      <div className={`${valueColor} text-4xl font-bold mb-2`}>{value}</div>
      <div className="text-white font-medium">{title}</div>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
    </div>
  );
}
