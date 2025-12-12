
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { justforyouproducts } from "@/data/products";
import JustForYouCard from "@/Components/ProductShowcase/ProductCards/JustForYouCard";

const FilteredCollections = () => {
  const navigate = useNavigate();
  // Simple category filter state (optional future expansion)
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Women", "Men", "Kids", "Shoes"];

  // Filter logic based on ID ranges from products.tsx reorganization
  const visibleProducts = justforyouproducts.filter(product => {
    if (activeCategory === "All") return true;
    const id = product.id;
    if (activeCategory === "Women") return (id >= 1 && id <= 10) || (id >= 21 && id <= 30) || (id >= 41 && id <= 50);
    if (activeCategory === "Men") return (id >= 11 && id <= 20); // Men's main + Accessories might share range? Let's check ranges. 
    // Actually in my reorg: 
    // Men: 11-20, plus I moved some accessories. Men is 11-20, plus 42, 43, 45, 46, 49.
    // Kids: 51-60.
    // Shoes: 31-40.
    // Women: 1-10, 21-30, 41, 44, 47, 48, 50.
    // Simplest approach is to use range blocks if they were contiguous, but they are slightly mixed.
    // For robust filtering without modifying data structure to add "category" field, I will explicitly map IDs or add 'category' field to data. 
    // Adding category field in data would be best, but user wants "clean format".
    // I will use a helper:

    if (activeCategory === "Men") return (id >= 11 && id <= 20) || [42, 43, 45, 46, 49].includes(id);
    if (activeCategory === "Kids") return (id >= 51 && id <= 60);
    if (activeCategory === "Shoes") return (id >= 31 && id <= 40);
    // Default fallback for Women (everything else essentially, or logic above)
    if (activeCategory === "Women") return (id >= 1 && id <= 10) || (id >= 21 && id <= 30) || [41, 44, 47, 48, 50].includes(id);

    return true;
  });

  const displayedProducts = visibleProducts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">

      {/* Header & Filters - */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 pb-4 border-b border-gray-100">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
            Collections
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            {displayedProducts.length} Products
          </p>
        </div>

        {/* Minimalist Top Filter */}
        <div className="flex gap-6 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${activeCategory === cat ? "text-black border-b-2 border-black" : "text-gray-400 hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid - Matches Home Page (6 cols on XL) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-x-4 gap-y-10">
        {displayedProducts.map((product) => (
          <JustForYouCard
            key={product.id}
            {...product}
            onClick={() => navigate(`/productinformation/${product.id}`)}
          />
        ))}
      </div>

      {/* Load More (Visual only for now) */}
      <div className="mt-16 text-center">
        <button className="px-10 py-3 border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
          Load More
        </button>
      </div>

    </div>
  );
};

export default FilteredCollections;
