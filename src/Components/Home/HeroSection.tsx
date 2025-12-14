import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroBanners } from '@/data/heroData';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroBanners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroBanners.length) % heroBanners.length);
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black text-white group">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image - Cinematic */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-out scale-105"
            style={{ backgroundImage: `url(${heroBanners[currentIndex].image})` }}
          >
            {/* Gradient Overlay for Text Readability (Bottom Up) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content - Center Alignment (Classic Minimalist / Huba Style) */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-none"
            >
              {heroBanners[currentIndex].title}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-2xl font-light mb-10 text-white tracking-wide max-w-2xl"
            >
              {heroBanners[currentIndex].subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4"
            >
              <button
                onClick={() => navigate(heroBanners[currentIndex].ctaLink)}
                className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-sm"
              >
                {heroBanners[currentIndex].cta}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Minimalist Navigation Arrows */}
      <div className="absolute bottom-16 right-4 md:right-12 flex gap-2 z-20">
        <button
          onClick={handlePrev}
          className="bg-white/10 hover:bg-white text-white hover:text-black p-4 backdrop-blur-md transition-all rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="bg-white/10 hover:bg-white text-white hover:text-black p-4 backdrop-blur-md transition-all rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Bar instead of dots */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full z-20">
        <motion.div
          key={currentIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-white"
        />
      </div>
    </section>
  );
};

export default HeroSection;
