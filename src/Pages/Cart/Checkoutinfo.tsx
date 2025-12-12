import { useState } from 'react';
import { products, justforyouproducts } from '@/data/products';
import { useNavigate, useParams } from 'react-router-dom';
import { Percent } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Checkoutinfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id)) || justforyouproducts.find((p) => p.id === Number(id))

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const handlecontinue = () => {
        navigate('/ordersummary', {
            state: {
                firstname,
                lastname,
                email,
                phonenumber,
                address,
                city
            },
        }
        );
    };

    const location = useLocation();
    const { size, color, addQuantity } = location.state || {};


    if (!product) return <p className='text-red-600'>Product Info not Found</p>;

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h1 className="text-3xl font-light text-black mb-12 tracking-wide text-center uppercase">Shipping Details</h1>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Form */}
                    <div className="flex-1">
                        <div className="bg-gray-50 p-8 space-y-8">

                            {/* Customer Details */}
                            <div>
                                <h2 className="text-lg font-medium text-black uppercase tracking-wide mb-6 border-b border-gray-200 pb-2">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                        <input
                                            type='email'
                                            placeholder='your@email.com'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='border-b border-gray-300 py-2 bg-transparent focus:border-black focus:outline-none w-full transition-colors'
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                                            <input
                                                type='text'
                                                placeholder='First Name'
                                                value={firstname}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className='border-b border-gray-300 py-2 bg-transparent focus:border-black focus:outline-none w-full transition-colors'
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                                            <input
                                                type='text'
                                                placeholder='Last Name'
                                                value={lastname}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className='border-b border-gray-300 py-2 bg-transparent focus:border-black focus:outline-none w-full transition-colors'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                                        <input
                                            type='text'
                                            placeholder='+977 98...'
                                            value={phonenumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            className='border-b border-gray-300 py-2 bg-transparent focus:border-black focus:outline-none w-full transition-colors'
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Delivery Details */}
                            <div>
                                <h2 className="text-lg font-medium text-black uppercase tracking-wide mb-6 border-b border-gray-200 pb-2">Delivery Address</h2>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Address</label>
                                        <input
                                            type='text'
                                            placeholder='Street Address'
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className='border-b border-gray-300 py-2 bg-transparent focus:border-black focus:outline-none w-full transition-colors'
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">City</label>
                                        <input
                                            type='text'
                                            placeholder='City'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            className='border-b border-gray-300 py-2 bg-transparent focus:border-black focus:outline-none w-full transition-colors'
                                        />
                                    </div>
                                </div>
                            </div>

                            <button onClick={handlecontinue} className='w-full bg-black text-white py-4 mt-4 font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300 shadow-none'>
                                Continue to Payment
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className='w-full lg:w-96'>
                        <div className='bg-gray-50 p-8 h-auto sticky top-24 border border-gray-100'>
                            <div className='flex justify-between mb-6 items-center border-b border-gray-200 pb-4'>
                                <h2 className='text-lg font-medium text-black uppercase tracking-wide'>Order Summary</h2>
                                <button onClick={() => navigate(`/cart/${id}`)} className='text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors' >Edit</button>
                            </div>

                            <div className='flex gap-4 mb-6'>
                                <div className='w-20 h-24 bg-white flex-shrink-0 border border-gray-100 overflow-hidden'>
                                    <img src={product.image} className='w-full h-full object-cover' alt={product.title} />
                                </div>
                                <div>
                                    <h3 className='text-sm font-medium text-black uppercase tracking-wide'>{product.title}</h3>
                                    <div className='text-xs text-gray-500 mt-1 space-y-1'>
                                        <p>Qty: {addQuantity}</p>
                                        <p>Size: {size}</p>
                                        <p>Color: {color}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-3 text-sm text-gray-600 border-t border-gray-200 pt-4'>
                                <div className='flex justify-between'>
                                    <span>Subtotal</span>
                                    <span className='font-medium text-black'>Rs {(Number(product.price) * (addQuantity || 1)).toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='flex items-center gap-1'>Tax <Percent size={12} /></span>
                                    <span className='font-medium text-black'>Rs 0.00</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Delivery</span>
                                    <span className='text-black font-medium'>Free</span>
                                </div>
                            </div>

                            <div className='flex justify-between items-center py-4 border-t border-gray-200 mt-4'>
                                <span className='text-base font-semibold text-black uppercase'>Total</span>
                                <span className='text-xl font-bold text-black'>Rs {(Number(product.price) * (addQuantity || 1)).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkoutinfo;