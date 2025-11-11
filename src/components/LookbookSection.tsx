import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const lookbookImages = [
  "https://images.unsplash.com/photo-1700575306937-0855d570110d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbG9va2Jvb2slMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzYyNzI3MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1643387848945-da63360662f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsfGVufDF8fHx8MTc2Mjc0MjA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1728476078284-2ffb872a9781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb2RlbCUyMGZhc2hpb258ZW58MXx8fHwxNzYyNzM2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1635650805015-2fa50682873a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFzaGlvbiUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzYyODI2NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1664891419647-5dfe3d310226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI3NTc0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

export function LookbookSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section id="lookbook" ref={containerRef} className="py-24 bg-gradient-to-b from-[#1A1A1A] to-black overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D97706]/10 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-[#D97706]/20 text-[#D97706] px-6 py-2 rounded-full mb-6"
          >
            LOOKBOOK 2025
          </motion.div>
          
          <h2 className="font-playfair text-5xl md:text-7xl text-white mb-6">
            Fashion Stories
          </h2>
          
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Get inspired by our latest fashion stories — streetwear, summer vibes, and classy minimalism.
          </p>
          
          <Button className="bg-[#D97706] hover:bg-[#D97706]/90 text-white group px-8 py-6 text-lg">
            Explore Full Lookbook
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Sliding Image Gallery with better spacing */}
      <div className="space-y-8 relative z-10">
        <motion.div
          style={{ x: x1 }}
          className="flex gap-8 pl-6"
        >
          {lookbookImages.map((image, index) => (
            <motion.div
              key={`row1-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative min-w-[450px] h-[600px] rounded-3xl overflow-hidden group flex-shrink-0"
            >
              <img
                src={image}
                alt={`Lookbook ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
              >
                <p className="text-sm tracking-wider text-[#D97706] mb-2">COLLECTION 2025</p>
                <h3 className="font-playfair text-2xl">View Details</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{ x: x2 }}
          className="flex gap-8 pr-6"
        >
          {[...lookbookImages].reverse().map((image, index) => (
            <motion.div
              key={`row2-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative min-w-[450px] h-[600px] rounded-3xl overflow-hidden group flex-shrink-0"
            >
              <img
                src={image}
                alt={`Lookbook ${index + 6}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-8 text-white"
              >
                <p className="text-sm tracking-wider text-[#D97706] mb-2">COLLECTION 2025</p>
                <h3 className="font-playfair text-2xl">View Details</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}