import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  ShoppingBag,
  ArrowLeft,
  Star,
  Check,
  Plus,
  Eye,
  Truck,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowRight,
  X,
  CreditCard,
  Percent
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SHOPIFY_ALL_PRODUCTS,
  SHOPIFY_CATEGORIES,
  SHOPIFY_STORE_INFO
} from '../../data/shopifyCatalog';
import { ShopProduct } from '../../types';
import { MorrLogo } from '../brand/MorrLogo';

interface ShopPageProps {
  onBackToHome: () => void;
  onAddToCart: (product: ShopProduct, size?: string) => void;
  onBuyNow: (product: ShopProduct, size?: string) => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onBackToHome,
  onAddToCart,
  onBuyNow,
  onOpenCart,
  cartCount
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [selectedProductForModal, setSelectedProductForModal] = useState<ShopProduct | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0);

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return SHOPIFY_ALL_PRODUCTS.filter((prod) => {
      const matchesCategory =
        activeCategory === 'All Products' ||
        prod.subcategory === activeCategory ||
        (activeCategory.includes('Shorts') && prod.category === 'Shorts') ||
        (activeCategory.includes('Sets') && prod.category === 'Sets');

      const matchesSearch =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (prod.subcategory && prod.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0; // featured default
    });
  }, [activeCategory, searchQuery, sortBy]);

  const handleSelectSize = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleSelectColor = (productId: string, color: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  const openQuickView = (product: ShopProduct) => {
    setSelectedProductForModal(product);
    setActiveGalleryIdx(0);
    if (product.sizes && product.sizes.length > 0 && !selectedSizes[product.id]) {
      setSelectedSizes((prev) => ({ ...prev, [product.id]: product.sizes![0] }));
    }
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-white flex flex-col selection:bg-[#FF6321] selection:text-black">
      {/* Top Announcement Bar */}
      <div className="bg-[#FF6321] text-black px-4 py-2 text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 shrink-0" />
        <span>{SHOPIFY_STORE_INFO.announcement}</span>
      </div>

      {/* Store Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0E]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#FF6321] transition-colors px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Gym & Classes</span>
            </button>

            <div className="hidden sm:block h-5 w-px bg-white/10" />

            <div className="hidden sm:flex items-center">
              <MorrLogo size="sm" variant="horizontal" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              <MapPin className="w-3.5 h-3.5 text-[#FF6321]" />
              <span>In-Gym Pickup: 2715 Emancipation Ave</span>
            </div>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2 bg-[#FF6321] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>CART</span>
              <span className="bg-black text-[#FF6321] text-[11px] font-mono px-2 py-0.5 rounded-full font-bold">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Store Banner */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111116] to-[#08080A] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-[#FF6321] uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF6321] animate-pulse" />
              <span>OFFICIAL SHOPIFY ONLINE STOREFRONT</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.9]">
              MORR FIT <span className="text-[#FF6321]">COLLECTIONS.</span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl">
              Authentic activewear, high-waisted scrunch butt sets, Black Trainer Shorts, heavyweight oversized tees, and heavy-duty gear from 2715 Emancipation Ave.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#FF6321]" />
                <span>Free USA Shipping on Orders $75+</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FF6321]" />
                <span>Free Same-Day Houston Gym Pickup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Percent className="w-4 h-4 text-[#FF6321]" />
                <span>Use Code <strong>MORR10</strong> at Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[61px] z-30 bg-[#0A0A0D]/95 backdrop-blur-md border-b border-white/10 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {SHOPIFY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider shrink-0 transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FF6321] text-black shadow-md'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="relative flex-1 md:w-60">
              <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search activewear, shorts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-black/60 border border-white/15 rounded-lg text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FF6321]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-black/60 border border-white/15 rounded-lg px-3 py-1.5 text-xs text-white/80 focus:outline-none focus:border-[#FF6321]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Main Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs text-white/50">
            Showing <span className="text-white font-bold">{filteredProducts.length}</span> items in{' '}
            <span className="text-[#FF6321] font-bold">{activeCategory}</span>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl p-8 max-w-lg mx-auto">
            <ShoppingBag className="w-12 h-12 text-white/30 mx-auto mb-3" />
            <h3 className="text-xl font-black uppercase text-white">No Products Found</h3>
            <p className="text-xs text-white/50 mt-1">
              Try adjusting your search query or reset the filter category.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All Products');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#FF6321] text-black font-black text-xs uppercase rounded-lg hover:bg-white transition-all"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const currentSize =
                selectedSizes[prod.id] || (prod.sizes && prod.sizes.length > 0 ? prod.sizes[0] : undefined);
              const currentColor =
                selectedColors[prod.id] || (prod.colors && prod.colors.length > 0 ? prod.colors[0] : undefined);

              return (
                <div
                  key={prod.id}
                  className="group bg-[#111116] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#FF6321]/80 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#FF6321]/5"
                >
                  {/* Photo Container */}
                  <div className="relative h-64 overflow-hidden bg-black/40">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-black/20" />

                    {/* Badge */}
                    {prod.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#FF6321] text-black text-[10px] font-black uppercase tracking-wider rounded shadow-md">
                        {prod.badge}
                      </div>
                    )}

                    {/* Quick View Button */}
                    <button
                      onClick={() => openQuickView(prod)}
                      className="absolute top-3 right-3 p-2 bg-black/70 hover:bg-[#FF6321] hover:text-black text-white rounded-lg backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 right-3 flex items-baseline gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                      <span className="text-lg font-black text-[#FF6321] font-mono">
                        ${prod.price}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-xs text-white/40 line-through font-mono">
                          ${prod.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating & Category */}
                      <div className="flex items-center justify-between text-[11px] text-white/50 mb-1">
                        <span className="uppercase font-bold tracking-wider">{prod.subcategory || prod.category}</span>
                        {prod.rating && (
                          <div className="flex items-center gap-1 text-amber-400 font-bold">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <span>{prod.rating}</span>
                            <span className="text-white/40 font-normal">({prod.reviewCount})</span>
                          </div>
                        )}
                      </div>

                      <h3
                        onClick={() => openQuickView(prod)}
                        className="text-base font-bold text-white leading-snug cursor-pointer hover:text-[#FF6321] transition-colors"
                      >
                        {prod.name}
                      </h3>

                      <p className="text-xs text-white/50 mt-1.5 line-clamp-2 leading-relaxed">
                        {prod.description}
                      </p>

                      {/* Color Options */}
                      {prod.colors && prod.colors.length > 0 && (
                        <div className="mt-3">
                          <span className="text-[10px] font-bold text-white/40 uppercase block mb-1">
                            Color: <span className="text-white/80">{currentColor}</span>
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {prod.colors.map((col) => (
                              <button
                                key={col}
                                onClick={() => handleSelectColor(prod.id, col)}
                                className={`px-2 py-0.5 text-[10px] rounded border transition-all ${
                                  currentColor === col
                                    ? 'bg-white/20 border-[#FF6321] text-white'
                                    : 'bg-black/40 border-white/10 text-white/60 hover:text-white'
                                }`}
                              >
                                {col}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Size Selector */}
                      {prod.sizes && prod.sizes.length > 1 && (
                        <div className="mt-3">
                          <span className="text-[10px] font-bold text-white/40 uppercase block mb-1">
                            Size: <span className="text-white/80">{currentSize}</span>
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {prod.sizes.map((sz) => (
                              <button
                                key={sz}
                                onClick={() => handleSelectSize(prod.id, sz)}
                                className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border transition-all ${
                                  currentSize === sz
                                    ? 'bg-[#FF6321] border-[#FF6321] text-black'
                                    : 'bg-black/40 border-white/10 text-white/60 hover:border-white/30'
                                }`}
                              >
                                {sz}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2">
                      <button
                        onClick={() => onAddToCart(prod, currentSize)}
                        className="flex-1 py-2.5 bg-white/10 hover:bg-white text-white hover:text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>

                      <button
                        onClick={() => onBuyNow(prod, currentSize)}
                        className="flex-1 py-2.5 bg-[#FF6321] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Quick View Product Modal */}
      <AnimatePresence>
        {selectedProductForModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111116] border border-white/15 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProductForModal(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-[#FF6321] hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Gallery Side */}
              <div className="md:w-1/2 bg-black/60 p-6 flex flex-col justify-between">
                <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden">
                  <img
                    src={
                      selectedProductForModal.galleryImages
                        ? selectedProductForModal.galleryImages[activeGalleryIdx] || selectedProductForModal.image
                        : selectedProductForModal.image
                    }
                    alt={selectedProductForModal.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {selectedProductForModal.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#FF6321] text-black text-[10px] font-black uppercase rounded">
                      {selectedProductForModal.badge}
                    </div>
                  )}
                </div>

                {/* Gallery Thumbnails */}
                {selectedProductForModal.galleryImages && selectedProductForModal.galleryImages.length > 1 && (
                  <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                    {selectedProductForModal.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIdx(idx)}
                        className={`w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                          activeGalleryIdx === idx ? 'border-[#FF6321]' : 'border-white/20 opacity-60'
                        }`}
                      >
                        <img src={img} alt="thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details Side */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#FF6321] uppercase tracking-widest">
                    {selectedProductForModal.subcategory || selectedProductForModal.category}
                  </span>
                  <h2 className="text-2xl font-black uppercase text-white mt-1 leading-tight">
                    {selectedProductForModal.name}
                  </h2>

                  <div className="flex items-center gap-3 my-3">
                    <span className="text-3xl font-black text-[#FF6321] font-mono">
                      ${selectedProductForModal.price}
                    </span>
                    {selectedProductForModal.originalPrice && (
                      <span className="text-sm text-white/40 line-through font-mono">
                        ${selectedProductForModal.originalPrice}
                      </span>
                    )}
                    {selectedProductForModal.rating && (
                      <div className="flex items-center gap-1 text-xs text-amber-400 font-bold ml-auto">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{selectedProductForModal.rating} ({selectedProductForModal.reviewCount} reviews)</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {selectedProductForModal.description}
                  </p>

                  {/* Size selection */}
                  {selectedProductForModal.sizes && selectedProductForModal.sizes.length > 0 && (
                    <div className="mt-4">
                      <span className="text-xs font-bold text-white/80 uppercase block mb-1.5">
                        Select Size:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProductForModal.sizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => handleSelectSize(selectedProductForModal.id, sz)}
                            className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg border transition-all ${
                              (selectedSizes[selectedProductForModal.id] || selectedProductForModal.sizes![0]) === sz
                                ? 'bg-[#FF6321] border-[#FF6321] text-black shadow-md'
                                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Houston Perks */}
                  <div className="mt-5 p-3 bg-white/5 rounded-xl border border-white/5 space-y-1 text-[11px] text-white/60">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                      <span>Ready for Pickup at 2715 Emancipation Ave</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#FF6321]" />
                      <span>Fast USPS Priority shipping across the US</span>
                    </div>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => {
                      const sz = selectedSizes[selectedProductForModal.id] || selectedProductForModal.sizes?.[0];
                      onAddToCart(selectedProductForModal, sz);
                      setSelectedProductForModal(null);
                    }}
                    className="flex-1 py-3 bg-white/10 hover:bg-white text-white hover:text-black font-black text-xs uppercase rounded-xl transition-all"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => {
                      const sz = selectedSizes[selectedProductForModal.id] || selectedProductForModal.sizes?.[0];
                      onBuyNow(selectedProductForModal, sz);
                      setSelectedProductForModal(null);
                    }}
                    className="flex-1 py-3 bg-[#FF6321] hover:bg-white text-black font-black text-xs uppercase rounded-xl transition-all shadow-lg"
                  >
                    Direct Checkout
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
