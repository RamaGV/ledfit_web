
function Tablero() {
  return (
    <div className="relative">
      <div className="bg-darkgray border-2 border-gray-700 rounded-2xl p-6 shadow-xl relative z-10">
        <div className="bg-[#111] rounded-xl p-4 flex flex-col items-center">
          <div className="flex justify-between w-full mb-3">
            <div className="text-primary-500 font-bold">LEDFIT</div>
          </div>
          <div className="text-5xl font-bold text-white my-4 font-mono flex items-center gap-2 pb-4">
            <span className="bg-primary-900/50 p-2 rounded border border-primary-800">0</span>
            <span className="bg-primary-900/50 p-2 rounded border border-primary-800">1</span>:
            <span className="bg-primary-900/50 p-2 rounded border border-primary-800">3</span>
            <span className="bg-primary-900/50 p-2 rounded border border-primary-800">5</span>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-4 -left-4 bg-primary-900/30 w-full h-full rounded-2xl border border-primary-800/30 -z-10"></div>
    </div>
  )
}

export default Tablero