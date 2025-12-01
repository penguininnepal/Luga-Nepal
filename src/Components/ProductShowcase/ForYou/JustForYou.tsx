import JustForYouCard from "./JustForYouCard"
import { useState } from "react"
import { justforyouproducts } from "../../../data/justforyouproducts"
import { useNavigate } from "react-router-dom"

const JustForYou = () => {
    
    const [visiblecount, setvisiblecount] = useState(6*4);
    const handleloadmore = () => {
        setvisiblecount((prevCount) => prevCount + 6*2);
    };
    const navigate = useNavigate();
    
  return (
    <div className="py-8">
    <div className="max-w-7xl mx-auto">
      <div className='mb-2'>
        <h1 className="text-2xl font-semibold text-orange-600 px-2">Just For You</h1>
      </div>
      <div className="flex gap-3 space-y-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 flex-wrap items-center justify-center">
        {justforyouproducts.slice(0, visiblecount).map((product) =>(
            <JustForYouCard 
            key = {product.id}
            {...product}
            onClick={() => navigate (`/productinformation/${product.id}`)}
            />
        ))}
      </div>
      <div>
      {visiblecount<justforyouproducts.length && (
        <div className="flex justify-center">
        <button onClick={handleloadmore} className="border-2 border-green-400 hover:border-green-600 px-4 py-1 w-86 text-xl font-semibold rounded-md cursor-pointer">Load More</button>
      </div>
      
      )}
      </div>
      </div>
      </div>
      
  )
}

export default JustForYou

