import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ShoppingBag, Search, User, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-black">
      {/* Luxury Hero Background with Split Design */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[120vh]"
      >
        {/* Main Hero Image */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1730385781149-a87ddc440d92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzYyODQ5MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Fashion"
            className="w-full h-full object-cover object-center"
          />
          {/* Sophisticated Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </div>

        {/* Secondary Image - Right Side Accent */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute right-0 top-1/4 w-1/3 h-1/2 hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1752950823536-2db75f37980d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjc4MDI5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fashion Detail"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>
      </motion.div>

      {/* Luxury Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between">
          {/* Luxury Logo */}
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white font-playfair tracking-[0.3em] relative group"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-2xl md:text-3xl">MODEA</span>
            <span className="block text-[10px] tracking-[0.4em] text-[#D97706] mt-1">TUNISIA</span>
            <motion.div 
              className="absolute -bottom-1 left-0 h-[1px] bg-[#D97706]"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Desktop Navigation - Luxury Spacing */}
          <div className="hidden lg:flex items-center gap-12 text-white text-sm tracking-wider">
            <button 
              onClick={() => scrollToSection('new')}
              className="relative group py-2"
            >
              <span className="group-hover:text-[#D97706] transition-colors duration-300">NEW IN</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-[#D97706] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('collections')}
              className="relative group py-2"
            >
              <span className="group-hover:text-[#D97706] transition-colors duration-300">COLLECTIONS</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-[#D97706] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('lookbook')}
              className="relative group py-2"
            >
              <span className="group-hover:text-[#D97706] transition-colors duration-300">LOOKBOOK</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-[#D97706] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="relative group py-2"
            >
              <span className="group-hover:text-[#D97706] transition-colors duration-300">OUR STORY</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-[#D97706] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Icons - Luxury Style */}
          <div className="flex items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-[#D97706] transition-colors p-2 hidden md:block"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-[#D97706] transition-colors p-2 hidden md:block"
            >
              <User className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-[#D97706] transition-colors p-2 relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#D97706] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </motion.button>
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Luxury Style */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-8 py-8 space-y-6 text-white">
              <button 
                onClick={() => scrollToSection('new')}
                className="block text-lg tracking-wider hover:text-[#D97706] transition-colors"
              >
                NEW IN
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="block text-lg tracking-wider hover:text-[#D97706] transition-colors"
              >
                COLLECTIONS
              </button>
              <button 
                onClick={() => scrollToSection('lookbook')}
                className="block text-lg tracking-wider hover:text-[#D97706] transition-colors"
              >
                LOOKBOOK
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-lg tracking-wider hover:text-[#D97706] transition-colors"
              >
                OUR STORY
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Luxury Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex flex-col items-start justify-center h-full px-8 md:px-12 max-w-[1400px] mx-auto"
      >
        <div className="max-w-4xl">
          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#D97706] rounded-full animate-pulse"></span>
              <span className="text-white text-sm tracking-[0.3em]">SPRING SUMMER 2025</span>
            </div>
          </motion.div>

          {/* Luxury Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-playfair text-white text-6xl md:text-8xl lg:text-[10rem] mb-8 leading-[0.9] tracking-tight"
          >
            <span className="block">REDEFINE</span>
            <span className="block text-[#D97706] italic">Elegance</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-xl mb-12"
          >
            <p className="text-white/80 text-lg md:text-xl tracking-wide leading-relaxed border-l-2 border-[#D97706] pl-6">
              Where Tunisian craftsmanship meets contemporary luxury. 
              <br />
              <span className="text-white/60 text-base">Discover pieces that transcend fashion.</span>
            </p>
          </motion.div>
          
          {/* Luxury CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button 
              onClick={() => scrollToSection('new')}
              size="lg" 
              className="bg-white text-black hover:bg-[#D97706] hover:text-white px-12 py-8 text-base tracking-wider transition-all duration-300 group"
            >
              EXPLORE COLLECTION
              <motion.span
                className="ml-3 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                →
              </motion.span>
            </Button>
            <Button 
              onClick={() => scrollToSection('lookbook')}
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-8 text-base tracking-wider backdrop-blur-sm transition-all duration-300"
            >
              VIEW LOOKBOOK
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Luxury Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-white/40 text-xs tracking-[0.3em] rotate-90 origin-center -mb-6">SCROLL</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent"
        />
        <ChevronDown className="w-5 h-5 text-white/40" />
      </motion.div>

      {/* Luxury Side Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block"
      >
        <p className="text-white/30 text-sm tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
          TIMELESS DESIGN
        </p>
      </motion.div>

      {/* Subtle Luxury Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D97706]/10 blur-[150px] rounded-full z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full z-10 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
