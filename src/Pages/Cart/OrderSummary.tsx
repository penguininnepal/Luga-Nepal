import { useLocation, useNavigate } from 'react-router-dom';
import { products, justforyouproducts } from '@/data/products';
import { saveOrder } from '@/utils/orderStorage';
import type { Order } from '@/utils/orderStorage';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

const OrderSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { firstname, lastname, phonenumber, address, city, size, color, addQuantity, productId } = location.state || {};

    const product = products.find((p) => p.id === Number(productId)) || justforyouproducts.find((p) => p.id === Number(productId));
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    if (!location.state) {
         return <div className="text-center py-20 text-red-500">No Order Details Found. Please restart checkout.</div>;
    }

    const handleConfirmOrder = () => {
        if (!product) return;

        const newOrder: Order = {
            productID: `PROD-${product.id}`,
            productName: product.title,
            invoiceNumber: `INV-${Date.now()}`,
            quantity: addQuantity || 1,
            dropLocation: `${address}, ${city}`,
            paymentMethod: "COD", 
            status: "Pending",
            customerName: `${firstname} ${lastname}`,
            orderDate: new Date().toISOString().split('T')[0],
            price: Number(product.price),
            size: size || 'N/A',
            color: color || 'N/A'
        };

        saveOrder(newOrder);
        setIsOrderPlaced(true);
        
        // redirect after a delay
        setTimeout(() => {
             navigate('/');
        }, 3000);
    };

    if (isOrderPlaced) {
        return (
            <div className="min-h-screen bg-white flex flex-col justify-center items-center">
                <CheckCircle size={80} className="text-green-500 mb-6 animate-bounce" />
                <h1 className="text-3xl font-light uppercase tracking-widest text-black mb-4">Order Confirmed!</h1>
                <p className="text-gray-500">Thank you for your purchase, {firstname}.</p>
                <p className="text-gray-400 text-sm mt-2">Redirecting to home...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-sm">
                 <h1 className="text-2xl font-light text-black mb-8 border-b pb-4 uppercase tracking-wide">Final Review</h1>
                 
                 <div className="flex gap-8 mb-8">
                     <div className="w-32 h-40 bg-gray-100 shrink-0">
                        {product && <img src={product.image} alt={product.title} className="w-full h-full object-cover" />}
                     </div>
                     <div>
                         <h2 className="text-xl font-medium mb-1">{product?.title}</h2>
                         <p className="text-gray-500 text-sm mb-2">Quantity: {addQuantity || 1} | Size: {size} | Color: {color}</p>
                         <p className="text-lg font-bold">Rs {((product?.price ? Number(product.price) : 0) * (addQuantity || 1)).toFixed(2)}</p>
                     </div>
                 </div>

                 <div className="grid grid-cols-2 gap-8 mb-8">
                     <div>
                         <h3 className="text-sm font-bold uppercase text-gray-400 mb-2 tracking-widest">Shipping Address</h3>
                         <p className="text-black">{firstname} {lastname}</p>
                         <p className="text-gray-600">{address}</p>
                         <p className="text-gray-600">{city}</p>
                         <p className="text-gray-600">{phonenumber}</p>
                     </div>
                      <div>
                         <h3 className="text-sm font-bold uppercase text-gray-400 mb-2 tracking-widest">Payment Method</h3>
                         <p className="text-black font-medium">Cash On Delivery (COD)</p>
                     </div>
                 </div>

                 <div className="border-t pt-8 flex justify-end">
                      <button 
                        onClick={handleConfirmOrder}
                        className="bg-black text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-gray-800 transition-colors"
                      >
                          Confirm & Place Order
                      </button>
                 </div>
            </div>
        </div>
    );
};

export default OrderSummary;
