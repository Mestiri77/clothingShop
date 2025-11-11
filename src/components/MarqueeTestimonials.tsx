import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rania J.",
    location: "Tunis",
    text: "Finally, a Tunisian fashion brand that feels truly international! The quality is exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1664891419647-5dfe3d310226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI3NTc0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Khalil M.",
    location: "Sousse",
    text: "Excellent quality and fast delivery. I've ordered three times already and each time I'm impressed!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1630797160982-553facf1c3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NjI4MjY1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Amira B.",
    location: "Sfax",
    text: "Modea has become my go-to for fashion. The pieces are unique, comfortable, and always on trend.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1728476078284-2ffb872a9781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb2RlbCUyMGZhc2hpb258ZW58MXx8fHwxNzYyNzM2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Youssef K.",
    location: "Monastir",
    text: "The attention to detail is incredible. Every piece feels luxurious and well-crafted.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1635650805015-2fa50682873a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFzaGlvbiUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzYyODI2NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    name: "Salma H.",
    location: "Hammamet",
    text: "Best online shopping experience I've had. The website is beautiful and delivery was super fast!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1735553817396-510cfe7066e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZhc2hpb24lMjBvdXRmaXR8ZW58MXx8fHwxNzYyNzU0MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    name: "Omar T.",
    location: "Djerba",
    text: "Love the modern designs with a touch of Tunisian culture. Proud to wear Modea!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1643387848945-da63360662f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsfGVufDF8fHx8MTc2Mjc0MjA4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mx-4">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-lg text-[#1A1A1A]">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.location}</p>
      </div>
    </div>
    
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
      ))}
    </div>
    
    <p className="text-gray-600 leading-relaxed">"{testimonial.text}"</p>
  </div>
);

export function MarqueeTestimonials() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-playfair text-4xl md:text-6xl text-[#1A1A1A] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Join thousands of satisfied customers across Tunisia
          </p>
        </motion.div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-6">
        <motion.div
          animate={{
            x: [0, -2400]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
          className="flex"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <motion.div
          animate={{
            x: [-2400, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
          className="flex"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
}
