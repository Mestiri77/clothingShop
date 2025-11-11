import { motion } from 'motion/react';
import { useState } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from './ui/button';

const products = [
  {
    id: 1,
    name: "Elegant Summer Dress",
    price: 159,
    oldPrice: 199,
    badge: "SALE",
    image: "https://images.unsplash.com/photo-1557161622-5f50ca344787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZHJlc3MlMjBlbGVnYW5jZXxlbnwxfHx8fDE3NjI4MjY1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Classic White Shirt",
    price: 89,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1760287363699-a08d553fb8a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbG90aGluZyUyMHByb2R1Y3R8ZW58MXx8fHwxNzYyNzYwOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Streetwear Essential",
    price: 129,
    badge: "HOT",
    image: "https://images.unsplash.com/photo-1635650805015-2fa50682873a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFzaGlvbiUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzYyODI2NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Modern Chic Outfit",
    price: 199,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1735553817396-510cfe7066e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZhc2hpb24lMjBvdXRmaXR8ZW58MXx8fHwxNzYyNzU0MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    name: "Luxury Accessories Set",
    price: 249,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1658910452978-eb91cfee1609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5fGVufDF8fHx8MTc2Mjc3NTM2OXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    name: "Designer Collection",
    price: 179,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1700575306937-0855d570110d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbG9va2Jvb2slMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzYyNzI3MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

interface NewArrivalsProps {
  onProductClick: () => void;
}

export function NewArrivals({ onProductClick }: NewArrivalsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="new" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Subtle Luxury Texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #1A1A1A 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 border border-[#D97706]/20 px-6 py-3 mb-8"
          >
            <span className="w-2 h-2 bg-[#D97706] rounded-full"></span>
            <span className="text-[#D97706] text-sm tracking-[0.3em]">LATEST ARRIVALS</span>
          </motion.div>
          <h2 className="font-playfair text-6xl md:text-8xl text-[#1A1A1A] mb-6 tracking-tight">
            New In
          </h2>
          <p className="text-gray-500 text-lg tracking-wide max-w-2xl mx-auto">
            Curated pieces for the discerning modern wardrobe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-[#F5F5F5] aspect-[3/4] mb-6">
                {/* Luxury Badge */}
                <div className={`absolute top-6 left-6 z-20 px-4 py-2 text-[10px] tracking-[0.2em] backdrop-blur-sm ${
                  product.badge === 'SALE' ? 'bg-black/90 text-white' :
                  product.badge === 'HOT' ? 'bg-[#D97706]/90 text-white' :
                  product.badge === 'TRENDING' ? 'bg-white/90 text-black' :
                  'bg-white/90 text-black'
                }`}>
                  {product.badge}
                </div>

                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === product.id ? 1.08 : 1
                  }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredId === product.id ? 1 : 0
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 p-6"
                >
                  <Button 
                    onClick={onProductClick}
                    className="bg-white text-black hover:bg-[#D97706] hover:text-white flex-1 tracking-wider"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    VIEW
                  </Button>
                  <Button className="bg-white text-black hover:bg-[#D97706] hover:text-white">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
              
              <div className="space-y-3 text-center">
                <h3 className="text-base tracking-wider text-[#1A1A1A] uppercase">{product.name}</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-lg text-[#1A1A1A]">{product.price} TND</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.oldPrice} TND</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Luxury View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button 
            size="lg"
            variant="outline" 
            className="border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-16 py-7 text-sm tracking-[0.2em]"
          >
            VIEW ALL PRODUCTS
          </Button>
        </motion.div>
      </div>
    </section>
  );
}