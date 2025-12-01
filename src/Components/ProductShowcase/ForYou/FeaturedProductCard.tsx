// src/Components/ProductShowcase/FeaturedProductCard.tsx
import React from "react";
import type { Product } from "../../ProductShowcase/ForYou/types";

type ProductCardProps = Product & { onClick?: () => void };

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="max-w-xs flex flex-col bg-white shadow-sm hover:shadow-lg overflow-hidden p-3
      transition-transform transform duration-300 cursor-pointer "
    >      
      <img
        src={image || "https://via.placeholder.com/300"}
        alt={title}
        className="w-42 h-54 object-cover"
      />
      <div className="p-2">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <div className="flex justify-between items-center mt-1 text-sm text-red-600 font-semibold">
          <span>Rs {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
