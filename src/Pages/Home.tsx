import HeroSection from '../Components/Home/HeroSection';
import JustForYou from '@/Components/ProductShowcase/ProductCards/JustForYou';
import MidBanner from '@/Components/Home/MidBanner';
import FeaturesSection from '@/Components/Home/FeaturesSection';
import CategoryRow from '@/Components/Home/CategoryRow';
import FeaturedProducts from '@/Components/ProductShowcase/ProductCards/FeaturedProducts';
import SpecialEdition from '@/Components/Home/SpecialEdition';

import ShoesShowcase from '@/Components/ProductShowcase/ShoesShowcase';
import { useState } from 'react';
import { justforyouproducts } from '@/data/products';

const Home = () => {
  const [activeTab, setActiveTab] = useState<'NEW_ARRIVALS' | 'TRENDING'>('NEW_ARRIVALS');

  // Tag-based filtering for flexible product assignment
  const newArrivals = justforyouproducts.filter(p => p.tags?.includes('new-arrival')).slice(0, 3);
  const trending = justforyouproducts.filter(p => p.tags?.includes('trending')).slice(0, 3);

  const displayedProducts = activeTab === 'NEW_ARRIVALS' ? newArrivals : trending;
  return (
    <div className='bg-white'>
      {/* 1. Hero Section*/}
      <HeroSection />

      {/* 2. Simple Category Row 4 cols*/}
      <CategoryRow />

      {/* 3. Special Edition 2 x 2 grid*/}
      <SpecialEdition />

      {/* 4. New Arrivals - using JustForYou grid */}
      <div className="py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-8 mb-4">
            <button
              onClick={() => setActiveTab('NEW_ARRIVALS')}
              className={`text-xl font-black uppercase tracking-widest transition-colors ${activeTab === 'NEW_ARRIVALS' ? 'text-black border-b-2 border-black' : 'text-gray-300 hover:text-black'}`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setActiveTab('TRENDING')}
              className={`text-xl font-black uppercase tracking-widest transition-colors ${activeTab === 'TRENDING' ? 'text-black border-b-2 border-black' : 'text-gray-300 hover:text-black'}`}
            >
              Trending
            </button>
          </div>
        </div>
        <JustForYou products={displayedProducts} />
      </div>

      {/* 5. Mid Banner */}
      <MidBanner />

      {/* 6. Trending / Best Sellers - using FeaturedProducts grid */}
      <div className="py-8">
        {/* FeaturedProducts has its own internal header "Our Icons" */}
        <FeaturedProducts />
      </div>

      <ShoesShowcase />

      {/* 7. Features (Icons) */}
      <FeaturesSection />

    </div>
  );
};

export default Home;
