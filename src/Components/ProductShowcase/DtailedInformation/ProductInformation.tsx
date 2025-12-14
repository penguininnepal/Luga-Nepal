
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products, justforyouproducts } from "../../../data/products";
import { Minus, Plus, Star } from "lucide-react";
import ImageZoom from "./PoductInfoImage/imageZoom";

const ProductInformation = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Get product
  const product =
    products.find((p) => p.id === Number(id)) ||
    justforyouproducts.find((p) => p.id === Number(id));

  // Huba-style Responsive UI - 2 Image Limit
  const images = product ? [
    product.image,
    // Secondary image (placeholder if duplicating product image)
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
  ] : [];

  // Determine category for sizing logic
  const category = (product as any)?.category || "Women"; // Default to Women if undefined

  const getSizeOptions = (cat: string) => {
    switch (cat) {
      case "Men":
        return ['S', 'M', 'L', 'XL', '2XL'];
      case "Women":
        return ['XS', 'S', 'M', 'L', 'XL'];
      case "Shoes":
        return ['36', '37', '38', '39', '40', '41', '42', '43', '44'];
      default:
        return ['S', 'M', 'L', 'XL'];
    }
  };

  const sizeOptions = getSizeOptions(category);

  // Initialize/Fallback
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [size, setSize] = useState("");
  // Determine available colors (mock) or use single color
  const productColors = (product?.color) ? [product.color] : ["Black", "Blue", "Beige", "White"];
  const [color, setColor] = useState((product?.color) || "Classic");
  const [addQuantity, setAddQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // description | shipping

  if (!product) return <div className="text-center pt-20">Product not found</div>;

  const handleSubtract = () => {
    if (addQuantity > 1) {
      setAddQuantity(addQuantity - 1);
    }
  };

  const handleaddtocart = () => {
    navigate(`/cart/${id}`, {
      state: { size, addQuantity, color },
    });
  };

  const handlebuynow = () => {
    navigate(`/checkoutinfo/${id}`, {
      state: { size, addQuantity, color },
    });
  };

  // Safe access to optional properties
  const badge = 'badge' in product ? product.badge : null;
  const stockStatus = 'stockStatus' in product ? product.stockStatus : "In Stock";
  const rating = 'rating' in product ? product.rating : null;

  return (
    <div className="bg-white min-h-screen pb-16 pt-8 font-sans text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center text-[10px] font-bold text-gray-400 mb-8 uppercase tracking-widest space-x-2">
          <span className="cursor-pointer hover:text-black transition-colors" onClick={() => navigate('/')}>Home</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-black transition-colors" onClick={() => navigate('/collections')}>Shop</span>
          <span>/</span>
          <span className="text-black truncate max-w-[150px]">{product.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* LEFT: Image Gallery */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            {/* Main Image */}
            <div className="w-full aspect-[4/5] bg-gray-50 overflow-hidden relative group cursor-crosshair">
              <ImageZoom src={selectedImage || product.image} alt="Selected Product" />
              {badge && (
                <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest z-10">
                  {badge}
                </div>
              )}
            </div>

            {/* Minimallist Thumbnails */}
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`cursor-pointer w-24 aspect-[4/5] overflow-hidden transition-all duration-300 ${selectedImage === img ? 'opacity-100 grayscale-0 border-b-2 border-black' : 'opacity-50 grayscale hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Details (Sticky) */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-24 h-fit">

            <div className="mb-8">
              <h1 className="text-4xl font-black text-black uppercase tracking-tighter leading-none mb-4">
                {product.title}
              </h1>

              <div className="flex justify-between items-baseline border-b border-black pb-4 mb-4">
                <p className="text-2xl font-light text-black">
                  Rs. {product.price}
                </p>
                {rating && (
                  <div className="flex items-center gap-1 text-xs font-bold">
                    <Star size={12} fill="black" className="text-black" />
                    <span>{rating} / 5.0</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <span className={`w-2 h-2 rounded-full ${stockStatus?.includes('Stock') ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {stockStatus}
              </div>
            </div>

            {/* Selectors - Ultra Minimal */}
            <div className="space-y-8 mb-10">
              {/* Size */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-black">Select Size</span>
                  <button className="text-[10px] text-gray-400 underline hover:text-black uppercase tracking-widest">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-4">
                  {sizeOptions.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`min-w-[40px] px-3 py-2 border text-sm font-bold uppercase transition-all duration-200 ${size === s ? 'text-white bg-black border-black' : 'text-black border-gray-200 hover:border-black'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-black mb-4 block">Select Color</span>
                <div className="flex gap-3">
                  {productColors.map((c: string) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200 ${color === c ? 'ring-2 ring-black ring-offset-2' : 'hover:scale-110'}`}
                      style={{ backgroundColor: c.toLowerCase() === 'beige' ? '#f5f5dc' : c.toLowerCase() }}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-black">Quantity</span>
                <div className="flex items-center gap-3">
                  <button onClick={handleSubtract} className="text-black hover:text-gray-500 transition-colors"><Minus size={14} /></button>
                  <span className="text-sm font-bold w-4 text-center">{addQuantity}</span>
                  <button onClick={() => setAddQuantity(addQuantity + 1)} className="text-black hover:text-gray-500 transition-colors"><Plus size={14} /></button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleaddtocart}
                className="w-full bg-black text-white font-bold uppercase tracking-widest py-4 text-xs hover:bg-gray-800 transition-colors duration-300"
              >
                Add to Cart
              </button>
              <button
                onClick={handlebuynow}
                className="w-full bg-transparent border border-gray-200 text-black font-bold uppercase tracking-widest py-4 text-xs hover:border-black transition-colors duration-300"
              >
                Buy it Now
              </button>
            </div>

            {/* Minimalist Information Tabs of Accordion */}
            <div className="mt-12 border-t border-gray-100 pt-6">
              <div className="flex gap-8 mb-4">
                <button onClick={() => setActiveTab('description')} className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'description' ? 'text-black' : 'text-gray-300'}`}>Description</button>
                <button onClick={() => setActiveTab('shipping')} className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === 'shipping' ? 'text-black' : 'text-gray-300'}`}>Shipping</button>
              </div>

              <div className="text-sm text-gray-500 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300">
                {activeTab === "description" && (
                  <p>
                    Designed for the modern individual who values simplicity and quality.
                    This {product.title.toLowerCase()} features premium materials and expert craftsmanship.
                    Perfect for everyday wear or special occasions.
                  </p>
                )}
                {activeTab === "shipping" && (
                  <div className="space-y-1">
                    <p>Free Delivery inside Ring Road.</p>
                    <p>Rs. 100 Delivery charge outside Ring Road.</p>
                    <p>Dispatch within 24 hours.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
