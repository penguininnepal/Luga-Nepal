import JustForYouCard from "./JustForYouCard"
import { justforyouproducts } from "@/data/products"
import { useNavigate } from "react-router-dom"

const JustForYou = ({ products = justforyouproducts }: { products?: typeof justforyouproducts }) => {
  const navigate = useNavigate();

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header removed to allow parent control */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center pb-4">
          {products.slice(0, 3).map((product) => (
            <JustForYouCard
              key={product.id}
              {...product}
              onClick={() => navigate(`/productinformation/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JustForYou

