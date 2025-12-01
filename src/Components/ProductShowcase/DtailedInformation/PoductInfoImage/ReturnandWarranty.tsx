import { Info, PackageOpen, RotateCcw, ShieldOff } from "lucide-react"

const ReturnandWarranty = () => {
  return (
    <div className="w-110 h-50 bg-gray-100">
      <div className="pt-2 px-4">
        <div className="flex justify-between items-center">
            <h1 className="font-semibold text-gray-700 ">Return & Warranty</h1>
            <Info className="text-gray-600 cursor-pointer hover:text-blue-600 " />
        </div>
        <div className="grid grid-rows-3 mt-7 gap-7">
            <span className="flex gap-4 text-red-400 items-center"><PackageOpen /> 
            <p className="text-gray-500">Change of Mind not applicable</p></span>
        
           <span className="text-blue-500 flex gap-4 items-center "><RotateCcw />
           <p className="text-gray-500">14 days of return time</p></span>
       
            <span className="flex gap-4 text-green-600 items-center">
                <ShieldOff />
                <p className="text-gray-500">
                    Warranty not available
                </p>
            </span>
        </div>
        
         
      </div>
    </div>
  )
}

export default ReturnandWarranty
