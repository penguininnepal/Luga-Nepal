

const Subnavbar = () => {
  return (
    <div className="w-250 h-10">
      <div className="grid grid-cols-8 text-black font-semibold ">
        <button className="px-4 flex items-center justify-start hover:bg-orange-500 h-10 border-1 border-gray-400">OverView</button>
        <button className="px-4 flex items-center justify-start hover:bg-orange-500 h-10 border-1 border-gray-400">Specification</button>
        <button className="px-4 flex items-center justify-start hover:bg-orange-500 h-10 border-1 border-gray-400">Review</button>
        <button></button>
      </div>
      
    </div>
  )
}

export default Subnavbar
