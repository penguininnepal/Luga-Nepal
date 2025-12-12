
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, User, MapPin, Heart, LogOut } from "lucide-react";

const Account = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("orders");
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
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

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-100 pb-4">My Orders</h3>
            <div className="space-y-4">
              {/* Empty State */}
              <div className="text-center py-12 border border-dashed border-gray-200">
                <Package className="mx-auto h-12 w-12 text-gray-300 mb-3" strokeWidth={1} />
                <p className="text-gray-500 font-light">You haven't placed any orders yet.</p>
                <button onClick={() => navigate('/collections')} className="mt-4 text-sm font-bold uppercase tracking-widest text-black underline hover:text-gray-600">Start Shopping</button>
              </div>
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
