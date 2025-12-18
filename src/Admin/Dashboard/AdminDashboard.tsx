
import { useState } from "react";
import LogoButton from "@/Components/Home/LogoButton";
import { LayoutDashboard, ShoppingBag, Package, BarChart3, Settings, LogOut } from "lucide-react";
import Orders from "./Orders";
import Inventory from "./Inventory";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here (clear auth tokens etc)
    navigate('/adminsignin');
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <div className="p-8 text-2xl font-bold text-gray-400">Dashboard Overview (Coming Soon)</div>;
      case "orders":
        return <Orders />;
      case "inventory":
        return <Inventory />;
      case "analytics":
        return <div className="p-8 text-2xl font-bold text-gray-400">Admin Analytics (Coming Soon)</div>;
      case "settings":
        return <div className="p-8 text-2xl font-bold text-gray-400">Settings (Coming Soon)</div>;
      default:
        return <Orders />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="h-20 flex items-center px-8 border-b border-gray-100">
             <LogoButton variant="dark" />
          </div>
          <nav className="mt-8 px-4 space-y-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors ${
                activeTab === "dashboard" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <LayoutDashboard size={18} className="mr-3" /> Dashboard
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors ${
                activeTab === "orders" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <ShoppingBag size={18} className="mr-3" /> Orders
            </button>
            <button
              onClick={() => setActiveTab("inventory")}
              className={`flex items-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors ${
                activeTab === "inventory" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <Package size={18} className="mr-3" /> Inventory
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors ${
                activeTab === "analytics" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <BarChart3 size={18} className="mr-3" /> Analytics
            </button>
             <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors ${
                activeTab === "settings" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <Settings size={18} className="mr-3" /> Settings
            </button>
          </nav>
        </div>
        <div className="p-4 border-t border-gray-100">
            <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <LogOut size={18} className="mr-3" /> Logout
            </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:hidden">
             <LogoButton variant="dark" />
             {/* Mobile menu button could go here */}
        </header>

        {/* Content Container */}
        <div className="flex-1 overflow-auto p-4 md:p-8">
           <div className="max-w-7xl mx-auto">
             <div className="mb-8 flex items-end justify-between">
                <div>
                     <h1 className="text-2xl font-black uppercase tracking-tighter text-black">
                        {activeTab}
                    </h1>
                     <p className="text-gray-500 text-sm">Manage your store efficiently.</p>
                </div>
                <div className="hidden sm:block">
                    <span className="text-xs font-bold bg-green-100 text-green-800 px-3 py-1 rounded-full uppercase tracking-widest">
                        Online Status: Active
                    </span>
                </div>
             </div>
             {renderContent()}
           </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
