import { useMemo, useState } from "react";
import ProductCardChild from "./ProductCardChild";
import ByPrice from "../Filter/ByPrice";

type Product = {
  image: string;
  title: string;
  price: number;
  rating: number;
  brand: string;
};

// ✅ Move products outside the component so it's stable
const PRODUCTS: Product[] = [
  { image: "https://chefsonwheel.com/wp-content/uploads/2024/01/Dish-rack-1-min.jpg",
     title: "Sample Product 1", price: 1500, rating: 0, brand: "brand 1" },
  { image: "", 
    title: "Sample Product 2", price: 50000, rating: 0, brand: "brand 4" },
  { image: "",
     title: "Sample Product 3", price: 560, rating: 0, brand: "brand 3" },
  { image: "",
     title: "Sample Product 4", price: 2500, rating: 0, brand: "brand 2" },
];

const ProductCardParent: React.FC = () => {
  const [priceRange, setPriceRange] = useState<{ min: number | null; max: number | null }>({
    min: null,
    max: null,
  });

  // ✅ Only depends on priceRange now
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const meetsMin = priceRange.min === null ? true : p.price >= priceRange.min;
      const meetsMax = priceRange.max === null ? true : p.price <= priceRange.max;
      return meetsMin && meetsMax;
    });
  }, [priceRange]);

  const handlePriceFilter = (min: number | null, max: number | null) => {
    setPriceRange({ min, max });
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Sidebar */}
      <aside className="col-span-12 md:col-span-3">
        <ByPrice onFilter={handlePriceFilter} />
      </aside>

      {/* Product grid */}
      <main className="col-span-12 md:col-span-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCardChild
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              brand={product.brand}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-gray-600 mt-4">No products found in this price range.</p>
        )} 
      </main>
    </div>
  );
};

export default ProductCardParent;