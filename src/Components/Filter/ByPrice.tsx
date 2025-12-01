import { useState } from "react";

type ByPriceProps = {
  onFilter: (min: number | null, max: number | null) => void;
};

const ByPrice: React.FC<ByPriceProps> = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const handleApply = () => {
    const min = minPrice === "" ? null : Number(minPrice);
    const max = maxPrice === "" ? null : Number(maxPrice);
    onFilter(min, max);
  };

  return (
    <div className="bg-white shadow-md rounded-lg mb-6 p-4 w-90">
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
        Filter by Price
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="priceFrom" className="text-sm font-medium text-gray-600 mb-1">
            Price From
          </label>
          <input
            id="priceFrom"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="priceTo" className="text-sm font-medium text-gray-600 mb-1">
            Price To
          </label>
          <input
            id="priceTo"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleApply}
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default ByPrice;