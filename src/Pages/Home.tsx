import HeroSection from '../Components/Home/HeroSection';
import JustForYou from '@/Components/ProductShowcase/ProductCards/JustForYou';
import MidBanner from '@/Components/Home/MidBanner';
import FeaturesSection from '@/Components/Home/FeaturesSection';
import CategoryRow from '@/Components/Home/CategoryRow';
import FeaturedProducts from '@/Components/ProductShowcase/ProductCards/FeaturedProducts';
import SpecialEdition from '@/Components/Home/SpecialEdition';

const Home = () => {
  return (
    <div className='bg-white'>
      {/* 1. Hero Section (Centered Clean) */}
      <HeroSection />

      {/* 2. Simple Category Row (4 Cols) */}
      <CategoryRow />

      {/* 3. Special Edition (2x2 Grid) */}
      <SpecialEdition />

      {/* 4. New Arrivals - using JustForYou grid */}
      <div className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black uppercase tracking-widest">New Arrivals</h2>
          <div className="w-12 h-1 bg-black mx-auto mt-4"></div>
        </div>
        <JustForYou />
      </div>

      {/* 5. Mid Banner */}
      <MidBanner />

      {/* 6. Trending / Best Sellers - using FeaturedProducts grid */}
      <div className="py-8">
        {/* FeaturedProducts has its own internal header */}
        <FeaturedProducts />
      </div>

      {/* 7. Features (Icons) */}
      <FeaturesSection />

    </div>
  );
};

export default Home;
