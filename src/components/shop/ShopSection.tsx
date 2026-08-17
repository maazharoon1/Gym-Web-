import React, { useState } from 'react';
import { ShoppingBag, Plus, Check, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOP_PRODUCTS } from '../../data/mockData';
import { ShopProduct } from '../../types';

interface ShopSectionProps {
  onAddToCart: (product: ShopProduct, size?: string) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'merch-1': 'L',
    'merch-2': 'L'
  });

  const categories = ['All', 'Apparel', 'Accessories', 'Gear'];

  const filteredProducts = SHOP_PRODUCTS.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section id="shop" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
              OFFICIAL MORR APPAREL & GEAR
            </span>
            <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-[0.95]">
              SHOP MORR.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            Heavyweight athletic streetwear, Houston trucker caps, and heavy-duty gym accessories. Available online and at 2715 Emancipation Ave.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-athletic font-bold tracking-wider shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-[#FF5500] text-white shadow-md'
                  : 'bg-[#141418] text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {cat === 'All' ? 'ALL PRODUCTS' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod, idx) => {
            const currentSize = selectedSizes[prod.id] || (prod.sizes ? prod.sizes[0] : undefined);

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-2xl overflow-hidden bg-[#111114] border border-[#24242A] hover:border-[#FF5500]/70 transition-all flex flex-col justify-between shadow-lg"
              >
                {/* Product Photo */}
                <div className="relative h-64 overflow-hidden bg-neutral-900">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/20" />

                  {/* Badge */}
                  {prod.badge && (
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded bg-[#FF5500] text-white text-[10px] font-athletic font-bold tracking-wider uppercase shadow-md">
                      {prod.badge}
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white font-athletic font-bold text-lg text-[#FF5500]">
                    ${prod.price}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-display">
                      {prod.category}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-wide mt-1 group-hover:text-[#FF6A1A] transition-colors leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Size Selector */}
                    {prod.sizes && prod.sizes.length > 1 && (
                      <div className="mt-4">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1.5 font-display">
                          SELECT SIZE:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {prod.sizes.map((sz) => (
                            <button
                              key={sz}
                              type="button"
                              onClick={() => handleSizeSelect(prod.id, sz)}
                              className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded border transition-all ${
                                currentSize === sz
                                  ? 'bg-[#FF5500] border-[#FF5500] text-white'
                                  : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-neutral-500'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Add to Cart CTA */}
                  <div className="mt-5 pt-3 border-t border-neutral-800">
                    <button
                      onClick={() => onAddToCart(prod, currentSize)}
                      className="w-full py-3 bg-[#18181D] hover:bg-[#FF5500] text-white font-athletic font-bold text-xs tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 border border-neutral-700 hover:border-[#FF5500] shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>ADD TO CART (${prod.price})</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Future Supplements Teaser */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#141419] via-[#101014] to-[#141419] border border-neutral-800 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMING SOON</span>
          </div>
          <h4 className="text-xl font-athletic font-bold text-white tracking-wide">
            MORR PERFORMANCE NUTRITION & SUPPLEMENTS
          </h4>
          <p className="text-xs text-neutral-400 max-w-lg mx-auto mt-1">
            Grass-fed whey isolate, micronized creatine, and clean pre-workout formulations dropping in the pro shop soon.
          </p>
        </div>
      </div>
    </section>
  );
};
