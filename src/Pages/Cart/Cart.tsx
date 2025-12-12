import { useNavigate, useParams } from "react-router-dom"
import { products, justforyouproducts } from "@/data/products";
import { useLocation } from "react-router-dom";
import { Trash } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || justforyouproducts.find((p) => p.id === Number(id))

  const location = useLocation();
  const {
    size,
    addQuantity,
    color
  } = location.state || {};

  const handlecheckout = () => {
    navigate(`/checkoutinfo/${id}`, {
      state:
      {
        size,
        addQuantity,
        color
      },

    });
  }

  if (!product) return (<p className="text-red-600">No Product Added to cart</p>)

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
                  <tr>
                    <td className="py-6 px-6">
                      <div className="flex gap-6 items-center">
                        <div className="h-24 w-20 bg-gray-100 flex-shrink-0 overflow-hidden">
                          <img src={product.image} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h2 className="text-sm font-medium text-black uppercase tracking-wide">{product.title}</h2>
                          <div className="flex gap-4 mt-2 text-xs text-gray-500 uppercase tracking-wide">
                            <span>Size: {size || "N/A"}</span>
                            <span className="border-l border-gray-300 pl-4">Color: {color || "Standard"}</span>
                            <span className="border-l border-gray-300 pl-4">Qty: {addQuantity ?? 1}</span>
                            <span><Trash size={15} strokeWidth={1.5} className="cursor-pointer hover:text-red-600 transition-colors" /></span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-sm font-medium text-black">
                      Rs {product.price}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <button onClick={() => navigate('/home')} className="text-sm text-gray-500 hover:text-black transition-colors flex items-center gap-2 uppercase tracking-widest font-medium">
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
                  <span className="font-medium text-black">Rs {(Number(product.price) * (addQuantity || 1)).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-black">Rs 150.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <span className="text-base font-semibold text-black uppercase">Total</span>
                <span className="text-xl font-bold text-black">Rs {(Number(product.price) * (addQuantity || 1) + 150).toFixed(2)}</span>
              </div>

              <button
                onClick={handlecheckout}
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
