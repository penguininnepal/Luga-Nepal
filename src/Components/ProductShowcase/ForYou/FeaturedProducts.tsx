// src/Components/ProductShowcase/FeaturedProducts.tsx
import ProductCard from "./FeaturedProductCard";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../../data/products";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto bg-white">
        <div className="flex justify-between items-center border-b-2 py-2">
          <h2 className="text-2xl font-semibold text-orange-600 px-2">
            Featured Products
          </h2>
          <div className="flex gap-4 pr-4">
            <button className="p-2 bg-gray-200 hover:bg-gray-500 h-10 w-10 flex items-center justify-center rounded-md">
              <ChevronLeft />
            </button>
            <button className="p-2 bg-gray-200 hover:bg-gray-500 h-10 w-10 flex items-center justify-center rounded-md">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-4 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6  pb-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={() => navigate(`/productinformation/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
