const ByBrands = () => {
  const brands = ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5', 'Brand 6'];

  return (
    <div className="bg-white shadow-md rounded-lg mb-6 p-4 w-90">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
        Filter by Brands
      </h2>

      {/* Brand checkboxes */}
      <div className="flex flex-col gap-3">
        {brands.map((brand, index) => (
          <label key={index} className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-green-500 rounded focus:ring-green-400"
            />
            <span className="text-gray-700">{brand}</span>
          </label>
        ))}
      </div>

      {/* Action button */}
      <div className="mt-6">
        <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition-colors">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default ByBrands;