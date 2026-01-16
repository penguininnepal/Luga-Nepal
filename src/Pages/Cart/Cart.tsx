import { useNavigate } from "react-router-dom"
import { Trash, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { getCart, removeFromCart, updateQuantity } from "@/utils/cartStorage";
import type { CartItem } from "@/utils/cartStorage";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const refreshCart = () => {
    setCartItems(getCart());
  };

  useEffect(() => {
    refreshCart();
    
    const handleStorageChange = () => {
      refreshCart();
    };

    window.addEventListener('cartUpdated', handleStorageChange);
    window.addEventListener('storage', handleStorageChange); // To sync across tabs

    return () => {
      window.removeEventListener('cartUpdated', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const handleUpdateQty = (id: number, newQty: number) => {
    updateQuantity(id, newQty);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 150; // Flat rate
  const total = subtotal + shipping;

  const handleCheckout = () => {
    // Navigate to checkout with cart items in state, or indicate source is cart
    // We use a dummy ID '0' or 'cart' if the route requires an ID
    navigate(`/checkoutinfo/0`, {
      state: {
        source: 'cart',
        cartItems: cartItems
      },
    });
  }

  if (cartItems.length === 0) {
    return (
        <div className="min-h-screen bg-white py-20 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-light uppercase tracking-wide mb-4">Your Cart is Empty</h2>
            <button onClick={() => navigate('/collections')} className="bg-black text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors">
                Start Shopping
            </button>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-light text-black mb-10 tracking-wide text-center uppercase">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Table */}
          <div className="flex-1">
            <div className="border border-gray-200 rounded-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-600">Product</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-600">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                        <td className="py-6 px-6">
                        <div className="flex gap-6 items-center">
                            <div className="h-24 w-20 bg-gray-100 flex-shrink-0 overflow-hidden">
                            <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                            </div>
                            <div>
                            <h2 className="text-sm font-medium text-black uppercase tracking-wide">{item.title}</h2>
                            <div className="flex flex-col gap-1 mt-2 text-xs text-gray-500 uppercase tracking-wide">
                                <span>Size: {item.size}</span>
                                <span>Color: {item.color}</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <button onClick={() => handleUpdateQty(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-100"><Minus size={12}/></button>
                                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                                    <button onClick={() => handleUpdateQty(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-100"><Plus size={12}/></button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </td>
                        <td className="py-6 px-6 align-top">
                            <div className="flex justify-between items-start h-full">
                                <span className="text-sm font-medium text-black">Rs {item.price}</span>
                                <button onClick={() => handleRemove(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                    <Trash size={16} strokeWidth={1.5} />
                                </button>
                            </div>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <button onClick={() => navigate('/collections')} className="text-sm text-gray-500 hover:text-black transition-colors flex items-center gap-2 uppercase tracking-widest font-medium">
                ← Continue Shopping
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h2 className="text-lg font-medium text-black uppercase tracking-wide mb-6">Order Summary</h2>

              <div className="space-y-4 text-sm text-gray-600 border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-black">Rs {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-black">Rs {shipping.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <span className="text-base font-semibold text-black uppercase">Total</span>
                <span className="text-xl font-bold text-black">Rs {total.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-4 mt-4 font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300 text-sm"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
