
import type { JustforyouProduct } from '@/data/products';

type JustForYouProductProps = JustforyouProduct & {
  onClick?: () => void;
}

const JustForYouCard = ({ title, price, image, onClick }: JustForYouProductProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col bg-white group cursor-pointer"
    >
      <div className="overflow-hidden mb-4 bg-gray-50 aspect-[3/4] relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-center pb-6">
          <button className="text-white bg-black/30 backdrop-blur-md border border-white/50 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:border-black transition-colors">
            Preview
          </button>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-bold text-black uppercase tracking-wide truncate px-1 group-hover:underline underline-offset-4 decoration-1">{title}</h2>
        <div className="flex flex-col mt-1 items-center">
          <span className="text-base font-bold text-black">Rs {price}</span>
        </div>
      </div>
    </div>
  )
}

export default JustForYouCard
