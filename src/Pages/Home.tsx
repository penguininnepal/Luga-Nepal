import Category from '@/Components/ProductShowcase/Category/ProductCategory';
import HeroSection from '../Components/Home/HeroSection'
import FeaturedProducts from '../Components/ProductShowcase/ForYou/FeaturedProducts'
import JustForYou from '@/Components/ProductShowcase/ForYou/JustForYou';

const Home = () => { 
  return (
    <div className='bg-gray-100'>
        
        <HeroSection />
        <Category/>
        <FeaturedProducts />
        <JustForYou />
        

    </div>
  )

  }


export default Home
