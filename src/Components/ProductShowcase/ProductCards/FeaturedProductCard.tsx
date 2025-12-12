// src/Components/ProductShowcase/FeaturedProductCard.tsx
import React from "react";
import type { Product } from "./types";

type ProductCardProps = Product & { onClick?: () => void };

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onClick }) => {



  return (
    <div
      onClick={onClick}
      className="flex flex-col bg-white group cursor-pointer"
    >
      <div className="overflow-hidden">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-3 text-center">
        <h2 className="text-sm font-medium text-black uppercase tracking-wide truncate px-1">{title}</h2>
        <div className="flex justify-center items-center mt-1 text-sm text-gray-900">
          <span>Rs {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
