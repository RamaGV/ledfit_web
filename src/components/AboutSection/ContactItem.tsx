import { ContactItemData } from "../../data/contactData";

// Componente reutilizable para los ítems de contacto
interface ContactItemProps {
  data: ContactItemData;
  showText?: boolean;
}

export default function ContactItem({ data, showText = true }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3">
      <a 
        href={data.href}
        target={data.isExternal ? "_blank" : ""} 
        rel={data.isExternal ? "noopener noreferrer" : ""}
        className={`p-2 shadow-lg shadow-gray-950 ${data.gradient} hover:${data.hoverGradient || data.gradient} hover:scale-105 transition-all duration-300 rounded-xl`}
      >
        {data.icon}
      </a>
      {showText && data.text && (
        <span className="text-gray-300">{data.text}</span>
      )}
    </div>
  );
};