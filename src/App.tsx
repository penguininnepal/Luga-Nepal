import Home from './Pages/Home' 
import {Routes, Route } from 'react-router-dom'; 
import ProductPage from './Pages/ProductPage'; 
import WishlistPage from './Pages/WishlistPage'; 
import Signin from './Pages/Signin'; 
import Account from './Pages/Account'; 
import Navbar from './Components/Home/Navbar'; 
import ProductInformation from './Components/ProductShowcase/DtailedInformation/ProductInformation'; 
import Cart from './Pages/Cart'; 
import Collections from './Pages/Collections'; 
import ScrollToTop from './ScrollToTop';
import Footer from './Pages/Footer';

function App() { 
return ( 
<> 

<Navbar /> <ScrollToTop /> 
<Routes> 
<Route path='/' element={ 
<> 
<Home /> 
</> } /> 

<Route path='/home' element={<Home />} /> 
<Route path='/productpage' element={<ProductPage />} /> 
<Route path='/wishlistpage' element={<WishlistPage />} /> 
<Route path='/signin' element={<Signin />} /> 
<Route path='/account' element={<Account />} /> 
<Route path='/productinformation/:id' element={<ProductInformation /> } /> 
<Route path='/addedtocart' element={<Cart />} /> 
<Route path='/collections' element={<Collections />} /> 
</Routes> 
<Footer />
</> 
) } 

export default App