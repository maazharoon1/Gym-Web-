import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const subtotal = items.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const freeShippingThreshold = 75;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-[#111114] border-l border-[#27272A] text-white flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#FF5500]" />
                <h3 className="font-athletic text-xl font-bold tracking-wide">
                  SHOP MORR CART ({items.reduce((a, b) => a + b.quantity, 0)})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free shipping progress bar */}
            <div className="px-5 py-3 bg-[#17171B] border-b border-neutral-800">
              <div className="flex items-center justify-between text-xs text-neutral-300 mb-1.5">
                <span className="flex items-center gap-1.5 font-medium">
                  <Truck className="w-3.5 h-3.5 text-[#FF5500]" />
                  {subtotal >= freeShippingThreshold
                    ? '🎉 You unlocked FREE Houston Delivery / Pickup!'
                    : `Add $${(freeShippingThreshold - subtotal).toFixed(0)} more for Free Shipping`}
                </span>
                <span className="text-neutral-400 font-mono text-[11px]">
                  ${subtotal} / ${freeShippingThreshold}
                </span>
              </div>
              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF5500] transition-all duration-300 rounded-full"
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </div>

            {/* Items list */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-3 text-neutral-500">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <h4 className="font-athletic text-lg text-neutral-300 tracking-wider">
                    YOUR CART IS EMPTY
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                    Check out our official heavyweight tees, streetwear hoodies, and heavy lifting gear.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="p-3.5 bg-[#17171B] border border-neutral-800 rounded-xl flex gap-3.5 items-center"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-18 h-18 object-cover rounded-lg bg-neutral-900 shrink-0 border border-neutral-800"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-white truncate">
                        {item.product.name}
                      </h4>
                      {item.selectedSize && (
                        <p className="text-xs text-orange-400 font-medium mt-0.5">
                          Size: {item.selectedSize}
                        </p>
                      )}
                      <p className="text-sm font-bold text-[#FF5500] mt-1">
                        ${item.product.price}
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-neutral-700 bg-neutral-900 rounded-md">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 text-neutral-400 hover:text-white"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono text-white">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 text-neutral-400 hover:text-white"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-neutral-500 hover:text-red-400 p-1 transition-colors ml-auto"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-5 bg-[#141417] border-t border-neutral-800 space-y-3">
                <div className="space-y-1.5 text-xs text-neutral-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Houston In-Gym Pickup</span>
                    <span className="text-emerald-400 font-semibold">FREE (2715 Emancipation)</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-neutral-800">
                    <span>Total</span>
                    <span className="text-[#FF5500] text-lg font-athletic tracking-wide">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full py-3.5 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold text-base tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-950/40"
                >
                  PROCEED TO SECURE CHECKOUT
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Secure SSL 256-bit encryption • MORR FIT Houston Guarantee</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
