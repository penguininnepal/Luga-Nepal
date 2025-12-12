
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoButton from './LogoButton';
import { Search, ShoppingCart, UserRound, Menu, X, ChevronRight } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Split Navigation Links
  const leftLinks = [
    { name: "SHOP", path: "/collections" },
    { name: "NEW", path: "/collections" },
  ];

  const rightLinks = [
    { name: "ABOUT", path: "/about" }, // Assuming an About page or placeholder
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 flex flex-col font-sans">

      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-xs font-bold text-center py-2 uppercase tracking-widest px-4">
        <span>Free Shipping on Orders Over Rs. 5000</span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* 1. Mobile & Desktop: Left Section */}
          <div className="flex-1 flex items-center justify-start">
            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -ml-2 hover:text-gray-600 transition">
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Desktop Left Nav */}
            <div className="hidden lg:flex gap-8">
              {leftLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="text-sm font-bold uppercase tracking-widest text-black hover:text-gray-500 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Center: Logo */}
          <div className="flex-0 flex justify-center">
            <LogoButton />
          </div>

          {/* 3. Right Section */}
          <div className="flex-1 flex items-center justify-end gap-6">

            {/* Desktop Right Nav (About) */}
            <div className="hidden lg:flex gap-8 mr-2">
              {rightLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="text-sm font-bold uppercase tracking-widest text-black hover:text-gray-500 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Icons */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-gray-600 transition-colors"
              aria-label="Toggle Search"
            >
              <Search size={22} strokeWidth={1.5} />
            </button>

            <button onClick={() => navigate('/signin')} className="hover:text-gray-600 transition-colors hidden sm:block">
              <UserRound size={22} strokeWidth={1.5} />
            </button>

            <button onClick={() => navigate('/cart/0')} className="relative hover:text-gray-600 transition-colors">
              <ShoppingCart size={22} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-black text-[8px] text-white">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Search Overlay (Dropdown) */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'max-h-40 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
            }`}
        >
          <div className="max-w-3xl mx-auto px-4 relative">
            <input
              type="text"
              placeholder="SEARCH FOR ITEMS..."
              className="w-full text-2xl font-light uppercase border-b-2 border-black/10 focus:border-black py-2 outline-none bg-transparent placeholder-gray-300 transition-colors"
              autoFocus={isSearchOpen}
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors">
              <Search size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-xl flex flex-col p-6 animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold uppercase tracking-widest">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {[...leftLinks, ...rightLinks].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    navigate(link.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between text-lg font-bold uppercase tracking-widest text-black border-b border-gray-100 pb-2"
                >
                  {link.name}
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              ))}
              <div className="pt-4 space-y-4">
                <button onClick={() => { navigate('/signin'); setIsMobileMenuOpen(false); }} className="block text-sm font-medium uppercase text-gray-500">Account</button>
                <button className="block text-sm font-medium uppercase text-gray-500">Help</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;