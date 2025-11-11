import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Award, Globe, Heart } from 'lucide-react';

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-12 bg-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D97706]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-[#D97706]/10 text-[#D97706] px-6 py-2 rounded-full mb-6"
            >
              OUR STORY
            </motion.div>
            
            <h2 className="font-playfair text-5xl md:text-6xl text-[#1A1A1A] mb-8 leading-tight">
              Designed in Tunisia.<br />
              <span className="text-[#D97706]">Worn Everywhere.</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Modea blends Tunisian creativity with international fashion trends. Every piece is crafted with comfort, confidence, and authenticity in mind.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              From the bustling streets of Tunis to the global fashion scene, we bring you styles that resonate with modern elegance and cultural richness.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D97706]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-[#D97706]" />
                </div>
                <p className="text-3xl text-[#1A1A1A] mb-1">5+</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D97706]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-8 h-8 text-[#D97706]" />
                </div>
                <p className="text-3xl text-[#1A1A1A] mb-1">15K+</p>
                <p className="text-sm text-gray-600">Customers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D97706]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-[#D97706]" />
                </div>
                <p className="text-3xl text-[#1A1A1A] mb-1">98%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ x }}
            className="relative h-[700px] rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/30 via-transparent to-purple-600/20 z-10" />
            <img
              src="https://images.unsplash.com/photo-1658580636329-dc39c4eb7913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5pc2lhJTIwbWVkaW5hJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MjgyNjUyMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tunisia Lifestyle"
              className="w-full h-full object-cover"
            />
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl"
            >
              <p className="text-gray-700 italic">"Fashion is about dressing according to what's fashionable. Style is more about being yourself."</p>
              <p className="text-sm text-[#D97706] mt-2">— Modea Philosophy</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}