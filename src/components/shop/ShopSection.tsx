import React, { useState } from 'react';
import { ShoppingBag, Plus, ArrowRight, Sparkles, Check, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { SHOP_PRODUCTS } from '../../data/mockData';
import { ShopProduct } from '../../types';

interface ShopSectionProps {
  onAddToCart: (product: ShopProduct, size?: string) => void;
  onNavigateStore?: () => void;
  onDirectCheckout?: (product: ShopProduct, size?: string) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  onAddToCart,
  onNavigateStore,
  onDirectCheckout
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'shopify-body-crop': 'M',
    'shopify-scrunch-shorts': 'M',
    'shopify-jacquard-leggings': 'S',
    'shopify-athletic-men-shorts': 'L',
    'shopify-men-hoodie': 'L',
    'shopify-body-suit': 'M',
    'shopify-sports-bra': 'S',
    'shopify-recovery-slides': 'US 9'
  });

  const categories = ['All', 'Apparel', 'Accessories', 'Gear'];

  const filteredProducts = SHOP_PRODUCTS.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  // In the homepage preview, show first 6 featured items, with clear CTA to explore the full store
  const displayProducts = filteredProducts.slice(0, 6);

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section id="shop" className="py-24 bg-[#08080A] relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 bg-[#FF5500]/15 border border-[#FF5500]/30 rounded-full px-3.5 py-1 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>SHOP MORR</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight uppercase leading-[0.95]">
              SHOP MORR.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-lg mt-3">
              Official athletic streetwear, high-waist scrunch sets, heavyweight hoodies, and performance lifting gear. Available in-gym and online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {onNavigateStore && (
              <button
                onClick={onNavigateStore}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FF5500] hover:bg-white text-black font-athletic font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-950/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>SHOP MORR (VIEW ALL {SHOP_PRODUCTS.length} ITEMS)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
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

        {/* Product Cards Grid (6 Curated Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((prod, idx) => {
            const currentSize = selectedSizes[prod.id] || (prod.sizes ? prod.sizes[0] : undefined);

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group rounded-2xl overflow-hidden bg-[#111114] border border-[#24242A] hover:border-[#FF5500]/70 transition-all flex flex-col justify-between shadow-lg"
              >
                {/* Product Photo */}
                <div className="relative h-72 overflow-hidden bg-neutral-900">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of external CDN image glitch
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/20" />

                  {/* Badge */}
                  {prod.badge && (
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded bg-[#FF5500] text-white text-[10px] font-athletic font-bold tracking-wider uppercase shadow-md">
                      {prod.badge}
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md text-[#FF5500] font-athletic font-bold text-lg border border-neutral-800">
                    ${prod.price.toFixed(2)}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-display">
                        {prod.category}
                      </span>
                      <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">
                        ● In Stock
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-wide mt-1.5 group-hover:text-[#FF6A1A] transition-colors leading-snug">
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
                          {prod.sizes.slice(0, 5).map((sz) => (
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
                  <div className="mt-5 pt-3 border-t border-neutral-800 flex gap-2">
                    <button
                      onClick={() => onAddToCart(prod, currentSize)}
                      className="flex-1 py-3 bg-[#18181D] hover:bg-[#FF5500] text-white font-athletic font-bold text-xs tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 border border-neutral-700 hover:border-[#FF5500] shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Interactive Store CTA Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#17171C] via-[#121216] to-[#17171C] border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 fill-[#FF5500]" />
              <span>OFFICIAL MORR STORE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-athletic font-bold text-white tracking-wide uppercase">
              LOOKING FOR ALL ITEMS & APPAREL DROPS?
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl">
              Explore the entire catalog with detailed size guides, reviews, colorways, in-gym pickup options at 2715 Emancipation Ave, and instant checkout.
            </p>
          </div>

          {onNavigateStore && (
            <button
              onClick={onNavigateStore}
              className="px-8 py-4 bg-[#FF5500] hover:bg-white text-black font-athletic font-black text-sm uppercase tracking-wider rounded-xl transition-all shrink-0 flex items-center gap-3 shadow-xl shadow-orange-950/50 hover:scale-105 active:scale-95"
            >
              <span>OPEN FULL MORR STORE PAGE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
