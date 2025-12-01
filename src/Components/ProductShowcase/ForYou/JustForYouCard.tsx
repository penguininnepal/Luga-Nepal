
import type { JustforyouProduct } from '../../ProductShowcase/ForYou/Justforyoutype';

type JustForYouProductProps = JustforyouProduct & {
  onClick ? : () => void;
}

const JustForYouCard = ({ title, price, image, rating, onClick } : JustForYouProductProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer flex flex-col gap-2 p-4 border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-200">
        <div>
            <img src={image} alt={title} className="h-52 w-42 object-cover" />
        </div>
        <div>
            <h2 className="text-ls font-bold text-gray-800">{title}</h2>
            <p className="font-semibold text-red-500"> Rs {price}</p>
            <p className="text-sm text-gray-600">{rating}</p>
        </div>
        <span className='absolute inset-y-0 right-0 w-4 bg-gradient-to-b from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity'></span>
        <span className='absolute inset-y-0 left-0 w-4 bg-gradient-to-b from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity'></span>
    </div>
  )
}

export default JustForYouCard
