import type { TableroFeatureData } from '../../data/tableroData'

function DataItem({ id, title, description, icon }: TableroFeatureData) {
  return (
    <div key={id} className="flex items-start gap-3">
      <div className={`icon-container mt-1 flex-shrink-0 ${id === 'integracion' ? 'text-blue-400' : ''}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default DataItem
