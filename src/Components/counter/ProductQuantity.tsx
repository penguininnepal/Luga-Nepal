import { useState } from "react"
import { Minus, Plus } from "lucide-react"


const ProductQuantity = () => {

    const[addproduct, setAddproduct] = useState(0);
    const handleSubstract =() => {
        if (addproduct > 0) {
            setAddproduct(addproduct -1);
        }
    };

  return (
    <div>
        <div className=" flex gap-2">
            <button onClick={handleSubstract} className="border-gray-400 border-1  w-15 flex items-center justify-center cursor-pointer hover:bg-gray-100 "><Minus /></button>
            <p className="text-2xl border-gray-400 border-1 w-15 text-center hover:bg-gray-100 ">{addproduct}</p>
            <button onClick={() => setAddproduct(addproduct+1)} className="border-1 border-gray-400 w-15 flex items-center justify-center cursor-pointer hover:bg-gray-100"><Plus  className=""/></button>
        </div>
    
    </div>
  )
}

export default ProductQuantity
