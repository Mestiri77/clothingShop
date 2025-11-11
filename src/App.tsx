import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { HeroSection } from './components/HeroSection';
import { NewArrivals } from './components/NewArrivals';
import { Collections } from './components/Collections';
import { AboutSection } from './components/AboutSection';
import { LookbookSection } from './components/LookbookSection';
import { MarqueeTestimonials } from './components/MarqueeTestimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductDetails } from './components/ProductDetails';

export default function App() {
  const [showProductDetails, setShowProductDetails] = useState(false);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <NewArrivals onProductClick={() => setShowProductDetails(true)} />
      <Collections />
      <AboutSection />
      <LookbookSection />
      <MarqueeTestimonials />
      <Newsletter />
      <Footer />

      {/* Product Details Modal */}
      <AnimatePresence>
        {showProductDetails && (
          <ProductDetails onClose={() => setShowProductDetails(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
