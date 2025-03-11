import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  color: string;
}

interface StatsSectionProps {
  title?: string;
  stats?: StatCardProps[];
}

// Componente para una tarjeta individual de estadística
const StatCard = ({ value, label, color }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );
};

// Componente principal de la sección de estadísticas
export default function StatsSection({ 
  title = "Tus estadísticas",
  stats = [
    { value: "87%", label: "Objetivos", color: "text-primary-500" },
    { value: "2843", label: "Calorías", color: "text-accent" },
    { value: "12", label: "Sesiones", color: "text-primary-300" }
  ]
}: StatsSectionProps) {
  return (
    <section className="py-6">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <StatCard 
                key={index} 
                value={stat.value} 
                label={stat.label} 
                color={stat.color} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
