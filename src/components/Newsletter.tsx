import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, CheckCircle } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-[#F5F5F5] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D97706]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-[#1A1A1A] to-black rounded-3xl p-12 md:p-16 shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-[#D97706] rounded-full mb-8"
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="font-playfair text-4xl md:text-6xl text-white mb-4">
            Join the Modea Club
          </h2>
          
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Be the first to get updates on new drops and exclusive offers. Get <span className="text-[#D97706]">10% off</span> your first order when you subscribe!
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/20 border-2 border-green-500 text-white py-6 px-8 rounded-2xl inline-flex items-center gap-3"
            >
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Thanks for subscribing! Check your email for your discount code.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-7 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#D97706] focus:ring-[#D97706] rounded-xl backdrop-blur-sm"
              />
              <Button
                type="submit"
                className="bg-[#D97706] hover:bg-[#D97706]/90 text-white px-10 py-7 text-lg"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-white/40 text-sm mt-8">
            We respect your privacy. Unsubscribe at any time. 🔒
          </p>
        </motion.div>
      </div>
    </section>
  );
}