import { Banknote, MapPinHouse, MapPinPen, Package } from "lucide-react"


const DeliveryOptions = () => {
  return (
    <div className="w-110 h-50 bg-gray-100">
      <div className="pt-2 px-4 grid grid-rows-3 gap-1 ">
        <h1 className="font-semibold text-gray-700 ">Delivery Options</h1>
        <div className="flex items-center">
            <span className="text-red-700 flex gap-4"><MapPinHouse />
            <p className="text-black">Madhyabindu- 03, Nawalpur, Gandaki, Nepal</p>
            </span>
            <p className="flex flex-col items-center text-blue-600 cursor-pointer hover:underline"><MapPinPen/> Change</p>
        </div>

        <div className="flex justify-between items-start mt-1">
            <div>
            <span className="text-green-700 flex gap-4"><Package />
            <p className="text-black">
                Standard Delivery
                </p></span>
                <p className="text-sm text-gray-400 px-10">Guranted by 3 days of order placement</p>
            </div>
            <p className="flex items-center justify-end">Rs 100</p>   
        </div>
        <div>
            <span className="flex gap-4 text-blue-700 mt-1 items-center"><Banknote /><p className="text-black">Cash On Delivery</p></span>
        </div>
      </div>      
    </div>
  )
}

export default DeliveryOptions
