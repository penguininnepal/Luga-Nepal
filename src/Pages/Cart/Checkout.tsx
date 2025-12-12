
import { useNavigate, useParams } from 'react-router-dom'
import { products, justforyouproducts } from '@/data/products';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const Checkout = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || justforyouproducts.find((p) => p.id === Number(id));

  const [addQuantity, setAddQuantity] = useState(0);
  const handleSubtract = () => {
    if (addQuantity > 0) {
      setAddQuantity(addQuantity - 1);
    }
  };

  const navigate = useNavigate();

  const [size, setSize] = useState("");
  const [color, setColor] = useState((product as any)?.color || "");

  const handleplaceorder = () => {
    navigate(`/cart/${id}`, {
      state: {
        size,
        addQuantity,
        color
      },
    }
    );
  };


  if (!product) return <p className='text-red-600'>Product not Found</p>

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-light text-black mb-12 tracking-wide text-center uppercase">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Product Preview */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 p-8 h-full flex flex-col items-center justify-center text-center">
              <div className="w-full max-w-sm aspect-[3/4] overflow-hidden mb-8">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-light text-black mb-2">{product.title}</h2>
              <p className="text-xl font-medium text-black">Rs {product.price}</p>
            </div>
          </div>

          {/* Customization Form */}
          <div className="w-full lg:w-1/2 py-8">
            <h2 className="text-lg font-medium text-black uppercase tracking-wide mb-8">Order Details</h2>
            <div className="space-y-8">

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Size</label>
                <div className="grid grid-cols-4 gap-4">
                  {['S', 'M', 'L', 'XL'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-3 border text-sm transition-all ${size === s ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black text-black'
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Color: {color || 'Select'}</label>
                <div className="flex gap-4">
                  {['black', 'navy', 'beige', 'white' ].map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`w-10 h-10 rounded-full border border-gray-200 transition-all ${color === c ? 'ring-1 ring-black ring-offset-2' : ''}`}
                      style={{ backgroundColor: c === 'beige' ? '#f5f5dc' : c }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Quantity</label>
                <div className="flex items-center border border-gray-200 w-max">
                  <button onClick={handleSubtract} className="p-3 hover:bg-gray-50 transition-colors"><Minus size={16} /></button>
                  <span className="w-12 text-center text-sm font-medium">{addQuantity}</span>
                  <button onClick={() => setAddQuantity(addQuantity + 1)} className="p-3 hover:bg-gray-50 transition-colors"><Plus size={16} /></button>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <button
                  onClick={handleplaceorder}
                  className="w-full bg-black text-white py-4 font-medium uppercase tracking-widest hover:bg-gray-900 transition-all duration-300 text-sm shadow-none rounded-none"
                >
                  Confirm Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
