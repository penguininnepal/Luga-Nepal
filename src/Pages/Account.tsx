
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, User, MapPin, Heart, LogOut } from "lucide-react";
import { getOrders } from "@/utils/orderStorage";
import type { Order } from "@/utils/orderStorage";

const Account = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("orders");
  const [userData, setUserData] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setOrders(getOrders());
    } else {
      // Redirect if not logged in
      navigate('/signin');
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    navigate('/signin');
  };

  if (!userData) return null; // or a loading spinner

  const tabs = [
    { id: "orders", label: "My Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "profile", label: "Profile Details", icon: User },
  ];

  const itemsTotal = (order: any) => {
      // Legacy support helper
      return (order.price || 0) * (order.quantity || 1);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div className="space-y-8">
             <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                 <h3 className="text-2xl font-black uppercase tracking-tight">Orders History</h3>
                 <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">{orders.length} Orders</span>
             </div>
            
             <div className="space-y-8">
              {orders.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 bg-gray-50/50 rounded-lg border border-dashed border-gray-200">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                        <Package className="h-8 w-8 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-900 font-medium mb-1">No orders yet</p>
                    <p className="text-gray-500 font-light text-sm mb-6">When you place an order, it will appear here.</p>
                    <button onClick={() => navigate('/collections')} className="text-xs font-bold uppercase tracking-widest bg-black text-white px-8 py-3 hover:bg-gray-800 transition-all">Start Shopping</button>
                  </div>
              ) : (
                  orders.map((order) => (
                      <div key={order.orderID || order.invoiceNumber} className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                          {/* Order Header */}
                          <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                              <div className="flex items-center gap-4">
                                  <div className="flex flex-col">
                                      <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Order Placed</span>
                                      <span className="text-sm font-medium text-gray-900">{order.orderDate}</span>
                                  </div>
                                  <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
                                  <div className="flex flex-col">
                                      <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Order ID</span>
                                      <span className="text-sm font-mono text-gray-900">#{order.orderID?.replace('ORD-', '') || order.invoiceNumber}</span>
                                  </div>
                              </div>
                              <div className="flex items-center gap-3">
                                   <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                                       order.status === 'Delivered' ? 'bg-green-50 text-green-700 border-green-100' : 
                                       order.status === 'Cancelled' ? 'bg-red-50 text-red-700 border-red-100' :
                                       'bg-yellow-50 text-yellow-700 border-yellow-100'
                                   }`}>
                                       {order.status}
                                   </div>
                               </div>
                          </div>
                          
                          {/* Order Items */}
                          <div className="p-6">
                             <div className="space-y-6">
                                 {/* Handle both new items array and legacy single item structure */}
                                 {order.items && order.items.length > 0 ? (
                                     order.items.map((item, idx) => (
                                         <div key={idx} className="flex gap-6 items-start">
                                             <div className="w-20 h-24 bg-gray-100 rounded-md overflow-hidden shrink-0 border border-gray-200">
                                                 <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title}/>
                                             </div>
                                             <div className="flex-1 min-w-0">
                                                 <h4 className="text-base font-bold text-gray-900 mb-1 truncate">{item.title}</h4>
                                                 <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-2">
                                                     <span className="bg-gray-50 px-2 py-1 rounded-md">Size: {item.size}</span>
                                                     <span className="bg-gray-50 px-2 py-1 rounded-md">Color: {item.color}</span>
                                                     <span className="bg-gray-50 px-2 py-1 rounded-md">Qty: {item.quantity}</span>
                                                 </div>
                                                 <p className="text-sm font-bold text-black">Rs {item.price}</p>
                                             </div>
                                         </div>
                                     ))
                                 ) : (
                                     // Legacy Fallback
                                     <div className="flex gap-6 items-start">
                                         <div className="flex-1">
                                             <h4 className="text-base font-bold text-gray-900 mb-1">{(order as any).productName}</h4>
                                             <div className="flex gap-4 text-xs text-gray-500 mb-2">
                                                <span>Qty: {(order as any).quantity}</span>
                                             </div>
                                             <p className="text-sm font-bold text-black">Rs {(order as any).price}</p>
                                         </div>
                                     </div>
                                 )}
                             </div>
                          </div>

                          {/* Footer / Actions */}
                          <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
                               <div className="flex items-center gap-2">
                                   <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">Total Amount</span>
                                   <span className="text-lg font-black text-black">Rs {order.totalAmount || (itemsTotal(order))}</span>
                               </div>
                               <button className="text-xs font-bold uppercase tracking-widest text-black underline hover:text-gray-600 transition-colors">
                                   View Invoice
                               </button>
                          </div>
                      </div>
                  ))
              )}
            </div>
          </div>
        );
      case "wishlist":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-100 pb-4">My Wishlist</h3>
            <div className="text-center py-12 border border-dashed border-gray-200">
              <Heart className="mx-auto h-12 w-12 text-gray-300 mb-3" strokeWidth={1} />
              <p className="text-gray-500 font-light">Your wishlist is empty.</p>
            </div>
          </div>
        );
      case "addresses":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-100 pb-4">Saved Addresses</h3>
            <div className="p-6 border border-gray-100 bg-gray-50/50">
              <p className="font-bold uppercase tracking-wide text-sm mb-2">Default Shipping</p>
              <p className="text-gray-600 font-medium">{userData.firstname} {userData.surname}</p>
              <p className="text-gray-600">Sample Street</p>
              <p className="text-gray-600">Kathmandu, Nepal</p>
              <button className="text-xs font-bold uppercase mt-4 underline text-gray-400 hover:text-black">Edit</button>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-100 pb-4">Profile Details</h3>
            <form className="max-w-md space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">First Name</label>
                <input type="text" value={userData.firstname} disabled className="w-full border-b border-gray-200 py-2 bg-transparent text-black font-medium focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Surname</label>
                <input type="text" value={userData.surname || ''} disabled className="w-full border-b border-gray-200 py-2 bg-transparent text-black font-medium focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</label>
                <input type="email" value={userData.email} disabled className="w-full border-b border-gray-200 py-2 bg-transparent text-black font-medium focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Gender</label>
                <input type="text" value={userData.gender} disabled className="w-full border-b border-gray-200 py-2 bg-transparent text-black font-medium focus:outline-none" />
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl font-black uppercase tracking-tight mb-2">My Account</h1>
          <p className="text-gray-500 font-light">Welcome back, {userData.firstname}.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">

          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 flex-shrink-0">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === tab.id
                    ? "bg-black text-white"
                    : "text-gray-500 hover:bg-gray-50 hover:text-black"
                    }`}
                >
                  <tab.icon size={18} strokeWidth={1.5} />
                  {tab.label}
                </button>
              ))}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest text-red-500 hover:bg-gray-50 transition-colors mt-8 border-t border-gray-100 pt-6"
              >
                <LogOut size={18} strokeWidth={1.5} />
                Sign Out
              </button>
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 min-h-[500px]">
            {renderContent()}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Account
