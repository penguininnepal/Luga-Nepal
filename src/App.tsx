import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import WishlistPage from './Pages/WishlistPage';
import Signin from './Pages/Signin';
import Account from './Pages/Account';
import Navbar from './Components/Home/Navbar';
import ProductInformation from './Components/ProductShowcase/DtailedInformation/ProductInformation';
import Cart from './Pages/Cart/Cart';
import Collections from './Pages/Collections';
import ScrollToTop from './ScrollToTop';
import Footer from './Pages/Footer';
import CreateAccountForm from './Pages/CreateAccount';
import Checkout from './Pages/Cart/Checkout';
import Checkoutinfo from './Pages/Cart/Checkoutinfo';
import OrderSummary from './Pages/Cart/OrderSummary';
import About from './Pages/About';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Adminsignin from './Admin/Dashboard/Adminsignin';
import AdminSignup from './Admin/Dashboard/AdminSignup';
import AdminDashboard from './Admin/Dashboard/AdminDashboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always at top */}
      <Navbar />
      <ScrollToTop />

      {/* Main content grows to fill space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/wishlistpage" element={<WishlistPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/productinformation/:id" element={<ProductInformation />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/createAccount" element={<CreateAccountForm />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/checkoutinfo/:id" element={<Checkoutinfo />} />
          <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="/about" element={<About />} />

          <Route path="/adminsignin" element={<Adminsignin />} />
          <Route path='/adminsignup' element={<AdminSignup />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}

export default App;