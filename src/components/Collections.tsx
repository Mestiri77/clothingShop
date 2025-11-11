import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: "Men",
    subtitle: "Modern Essentials",
    image: "https://images.unsplash.com/photo-1630797160982-553facf1c3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NjI4MjY1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    cta: "Shop Men"
  },
  {
    id: 2,
    title: "Women",
    subtitle: "Elegant Designs",
    image: "https://images.unsplash.com/photo-1728476078284-2ffb872a9781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb2RlbCUyMGZhc2hpb258ZW58MXx8fHwxNzYyNzM2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    cta: "Shop Women"
  },
  {
    id: 3,
    title: "Accessories",
    subtitle: "Complete Your Look",
    image: "https://images.unsplash.com/photo-1523754865311-b886113bb8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBmbGF0bGF5fGVufDF8fHx8MTc2Mjc0MDU5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    cta: "Shop Accessories"
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-24 px-6 md:px-12 bg-[#F5F5F5] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-[#1A1A1A] mb-6">
            Our Collections
          </h2>
          <p className="text-gray-600 text-lg">
            Curated styles for every occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-[600px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
              
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <p className="text-[#D97706] text-sm tracking-widest mb-2">{collection.subtitle}</p>
                  <h3 className="font-playfair text-5xl text-white mb-6">{collection.title}</h3>
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-3 text-white text-lg group-hover:text-[#D97706] transition-colors"
                  >
                    <span className="border-b-2 border-white group-hover:border-[#D97706]">
                      {collection.cta}
                    </span>
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Overlay on hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-[#D97706]/30 to-transparent origin-left z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}