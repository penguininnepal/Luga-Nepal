import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../../data/products";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Minimal Centered Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-black uppercase tracking-widest">Trending Products</h2>
          <div className="w-12 h-1 bg-black mx-auto mt-4"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} onClick={() => navigate(`/productinformation/${product.id}`)} className="group cursor-pointer">
              <div className="bg-gray-50 aspect-[3/4] overflow-hidden mb-6 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold uppercase tracking-wide text-black mb-2 group-hover:underline decoration-1 underline-offset-4">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-1">
                  {product.color}
                </p>
                <p className="text-base font-bold text-black">
                  Rs. {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
