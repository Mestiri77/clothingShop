import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Heart, Share2, Truck, Shield, RotateCcw, Star, Minus, Plus } from 'lucide-react';
import { Button } from './ui/button';

interface ProductDetailsProps {
  onClose: () => void;
}

const productImages = [
  "https://images.unsplash.com/photo-1557161622-5f50ca344787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZHJlc3MlMjBlbGVnYW5jZXxlbnwxfHx8fDE3NjI4MjY1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1657897031652-d7d10904e720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcHJvZHVjdCUyMGRldGFpbHxlbnwxfHx8fDE3NjI4MjcwODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1631856952902-261e177603ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGRldGFpbCUyMHRleHR1cmV8ZW58MXx8fHwxNzYyNzg3ODMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1728476078284-2ffb872a9781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb2RlbCUyMGZhc2hpb258ZW58MXx8fHwxNzYyNzM2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = [
  { name: 'Black', hex: '#000000' },
  { name: 'Navy', hex: '#1e3a8a' },
  { name: 'Cream', hex: '#fef3c7' },
  { name: 'Rose', hex: '#fb7185' }
];

export function ProductDetails({ onClose }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-7xl w-full overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Images */}
            <div className="bg-[#F5F5F5] p-8 lg:p-12">
              <div className="relative">
                <button
                  onClick={onClose}
                  className="absolute -top-4 -right-4 lg:hidden w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Main Image */}
                <motion.div 
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6"
                  layoutId="product-image"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={productImages[selectedImage]}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart className={`w-6 h-6 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                  </button>
                </motion.div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-[#D97706] scale-105' 
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="p-8 lg:p-12 relative">
              <button
                onClick={onClose}
                className="hidden lg:flex absolute top-8 right-8 w-12 h-12 bg-gray-100 rounded-full items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-w-xl">
                {/* Badge */}
                <div className="inline-block bg-[#D97706] text-white px-4 py-1 text-sm mb-4">
                  NEW ARRIVAL
                </div>

                {/* Title & Rating */}
                <h1 className="font-playfair text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
                  Elegant Summer Dress
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D97706] text-[#D97706]" />
                    ))}
                  </div>
                  <span className="text-gray-600">(128 reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl text-[#D97706]">159 TND</span>
                  <span className="text-2xl text-gray-400 line-through">199 TND</span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 text-sm">20% OFF</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  A stunning summer dress crafted from premium breathable fabric. Perfect for both casual outings and special occasions. Features an elegant silhouette that flatters every body type.
                </p>

                {/* Color Selection */}
                <div className="mb-8">
                  <label className="block mb-4">
                    Color: <span className="text-[#D97706]">{selectedColor.name}</span>
                  </label>
                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColor.name === color.name
                            ? 'border-[#D97706] scale-110'
                            : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        aria-label={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <label>Size: <span className="text-[#D97706]">{selectedSize}</span></label>
                    <button className="text-sm text-gray-600 hover:text-[#D97706] underline">
                      Size Guide
                    </button>
                  </div>
                  <div className="flex gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 border-2 rounded-lg transition-all ${
                          selectedSize === size
                            ? 'border-[#D97706] bg-[#D97706] text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <label className="block mb-4">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-[#D97706] transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-2xl w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-[#D97706] transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-8">
                  <Button className="flex-1 bg-[#D97706] hover:bg-[#D97706]/90 text-white py-7 text-lg">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-2 py-7 px-6">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-[#F5F5F5] rounded-2xl">
                  <div className="text-center">
                    <Truck className="w-6 h-6 mx-auto mb-2 text-[#D97706]" />
                    <p className="text-xs text-gray-600">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-[#D97706]" />
                    <p className="text-xs text-gray-600">Secure Payment</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="w-6 h-6 mx-auto mb-2 text-[#D97706]" />
                    <p className="text-xs text-gray-600">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
