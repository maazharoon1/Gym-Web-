import React, { useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  MapPin,
  Check,
  CreditCard,
  Lock,
  Tag,
  AlertCircle,
  Sparkles,
  ShoppingBag,
  Clock,
  Printer,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, OrderDetails } from '../../types';
import { PROMO_CODES, SHOPIFY_STORE_INFO } from '../../data/shopifyCatalog';
import { MorrLogo } from '../brand/MorrLogo';

interface CheckoutPageProps {
  items: CartItem[];
  onBackToStore: () => void;
  onOrderCompleted: (order: OrderDetails) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  items,
  onBackToStore,
  onOrderCompleted,
  onUpdateQuantity
}) => {
  // Form State
  const [formData, setFormData] = useState({
    email: 'lifter@morrfithouston.com',
    phone: '(832) 570-9699',
    firstName: 'Marcus',
    lastName: 'Vance',
    address: '2715 Emancipation Ave',
    apartment: 'Apt 4B',
    city: 'Houston',
    state: 'TX',
    zip: '77004',
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '08/28',
    cardCvc: '832',
    saveInfo: true
  });

  const [shippingMethod, setShippingMethod] = useState<'pickup' | 'standard' | 'express'>('pickup');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'shoppay' | 'applepay' | 'cash_in_gym'>('card');
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent: number; freeShipping?: boolean } | null>(null);
  const [promoError, setPromoError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  // Financial Calculations
  const subtotal = items.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);

  let shippingCost = 0;
  if (shippingMethod === 'standard') {
    shippingCost = subtotal >= 75 || appliedPromo?.freeShipping ? 0 : 4.99;
  } else if (shippingMethod === 'express') {
    shippingCost = 9.99;
  } else {
    shippingCost = 0; // In-gym pickup free
  }

  const discountAmount = appliedPromo
    ? (subtotal * appliedPromo.discountPercent) / 100
    : 0;

  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.0825; // 8.25% Texas State & Houston Sales Tax
  const total = taxableAmount + shippingCost + tax;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const found = PROMO_CODES.find((p) => p.code.toUpperCase() === promoInput.trim().toUpperCase());
    if (found) {
      setAppliedPromo(found);
      setPromoInput('');
    } else {
      setPromoError('Invalid promo code. Try "MORR10" or "EMANCIPATION"');
    }
  };

  const handleAutoFillHouston = () => {
    setFormData({
      email: 'houston.member@morrfit.com',
      phone: '(832) 570-9699',
      firstName: 'Jordan',
      lastName: 'Miller',
      address: '2715 Emancipation Ave',
      apartment: 'Suite 200',
      city: 'Houston',
      state: 'TX',
      zip: '77004',
      cardNumber: '4242 •••• •••• 4242',
      cardExpiry: '12/29',
      cardCvc: '713',
      saveInfo: true
    });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsProcessing(true);

    setTimeout(() => {
      const orderId = `MF-${Math.floor(100000 + Math.random() * 900000)}`;
      const order: OrderDetails = {
        orderId,
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip
        },
        items: [...items],
        shippingMethod,
        shippingCost,
        discountCode: appliedPromo?.code,
        discountAmount,
        subtotal,
        tax,
        total,
        paymentMethod,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        estimatedDelivery:
          shippingMethod === 'pickup'
            ? 'Ready for pickup today at 2715 Emancipation Ave'
            : 'Estimated 2-3 business days delivery'
      };

      setCompletedOrder(order);
      setIsProcessing(false);
      onOrderCompleted(order);
    }, 1200);
  };

  // ORDER SUCCESS SCREEN
  if (completedOrder) {
    return (
      <div className="min-h-screen bg-[#08080A] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header Branding */}
          <div className="text-center mb-8">
            <MorrLogo size="md" variant="horizontal" className="justify-center mb-4" />
            <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <Check className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6321] block">
              ORDER CONFIRMED & READY
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-1">
              THANK YOU, {completedOrder.customer.firstName.toUpperCase()}!
            </h1>
            <p className="text-white/60 text-sm mt-2">
              Confirmation receipt sent to <span className="text-white font-semibold">{completedOrder.customer.email}</span>
            </p>
          </div>

          {/* Receipt Card */}
          <div className="bg-[#111116] border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
              <div>
                <span className="text-xs text-white/50 uppercase font-bold block">ORDER NUMBER</span>
                <span className="text-xl sm:text-2xl font-black text-[#FF6321] font-mono">
                  #{completedOrder.orderId}
                </span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-white/50 uppercase font-bold block">DATE</span>
                <span className="text-xs font-semibold text-white/80">{completedOrder.createdAt}</span>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#FF6321] flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {completedOrder.shippingMethod === 'pickup' ? 'PICKUP LOCATION' : 'SHIPPING ADDRESS'}
                </span>
                {completedOrder.shippingMethod === 'pickup' ? (
                  <div className="text-xs text-white/80 space-y-0.5">
                    <p className="font-bold text-white">MORR FIT Houston</p>
                    <p>2715 Emancipation Ave</p>
                    <p>Houston, TX 77004</p>
                    <p className="text-emerald-400 font-semibold mt-1">★ Front Desk Pickup (Show Order ID)</p>
                  </div>
                ) : (
                  <div className="text-xs text-white/80 space-y-0.5">
                    <p className="font-bold text-white">{completedOrder.customer.firstName} {completedOrder.customer.lastName}</p>
                    <p>{completedOrder.customer.address}</p>
                    <p>{completedOrder.customer.city}, {completedOrder.customer.state} {completedOrder.customer.zip}</p>
                  </div>
                )}
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase text-[#FF6321] flex items-center gap-1.5 mb-1">
                  <Truck className="w-3.5 h-3.5" />
                  STATUS & ESTIMATE
                </span>
                <p className="text-xs text-white/90 font-medium">{completedOrder.estimatedDelivery}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase">
                  <Check className="w-3 h-3" />
                  <span>Payment Confirmed Demo</span>
                </div>
              </div>
            </div>

            {/* Purchased Items List */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                PURCHASED ITEMS ({completedOrder.items.length})
              </h3>
              <div className="space-y-3">
                {completedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 text-xs py-2 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 object-cover rounded-lg bg-black shrink-0 border border-white/10"
                      />
                      <div>
                        <p className="font-bold text-white">{item.product.name}</p>
                        {item.selectedSize && (
                          <p className="text-[11px] text-[#FF6321]">Size: {item.selectedSize}</p>
                        )}
                        <p className="text-white/50">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-white">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary breakdown */}
            <div className="space-y-1.5 text-xs text-white/60 pt-4 border-t border-white/10">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-white">${completedOrder.subtotal.toFixed(2)}</span>
              </div>
              {completedOrder.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Discount ({completedOrder.discountCode})</span>
                  <span className="font-mono">-${completedOrder.discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping ({completedOrder.shippingMethod.toUpperCase()})</span>
                <span className="font-mono text-white">
                  {completedOrder.shippingCost === 0 ? 'FREE' : `$${completedOrder.shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Sales Tax (8.25% TX)</span>
                <span className="font-mono text-white">${completedOrder.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                <span>Total Paid</span>
                <span className="text-xl text-[#FF6321] font-mono">${completedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onBackToStore}
                className="flex-1 py-3.5 bg-[#FF6321] hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all text-center shadow-lg"
              >
                Continue Shopping Store
              </button>
              <button
                onClick={() => window.print()}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Receipt</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08080A] text-white flex flex-col selection:bg-[#FF6321] selection:text-black">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-[#0A0A0E] px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToStore}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#FF6321] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Store</span>
            </button>
            <div className="h-4 w-px bg-white/15 hidden sm:block" />
            <MorrLogo size="sm" variant="horizontal" />
          </div>

          <div className="flex items-center gap-2 text-xs text-white/50">
            <Lock className="w-3.5 h-3.5 text-[#FF6321]" />
            <span className="hidden sm:inline">256-Bit SSL Demo Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Checkout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {items.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl p-8 max-w-lg mx-auto">
            <ShoppingBag className="w-12 h-12 text-white/30 mx-auto mb-3" />
            <h2 className="text-2xl font-black uppercase text-white">Your Cart is Empty</h2>
            <p className="text-xs text-white/50 mt-1">
              Add some official MORR FIT activewear or accessories before checking out.
            </p>
            <button
              onClick={onBackToStore}
              className="mt-6 px-6 py-3 bg-[#FF6321] text-black font-black text-xs uppercase rounded-xl hover:bg-white transition-all shadow-md"
            >
              Browse Shopify Store
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 Columns: Checkout Form */}
            <div className="lg:col-span-7 space-y-8">
              {/* Express Checkout Bar */}
              <div className="bg-[#111116] border border-white/10 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                    EXPRESS CHECKOUT
                  </span>
                  <button
                    type="button"
                    onClick={handleAutoFillHouston}
                    className="text-[10px] uppercase font-bold text-[#FF6321] hover:underline flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>✨ Auto-Fill Demo Houston Info</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('shoppay')}
                    className={`py-3 rounded-xl font-bold text-xs flex items-center justify-center transition-all ${
                      paymentMethod === 'shoppay'
                        ? 'bg-[#5A31F4] text-white ring-2 ring-[#FF6321]'
                        : 'bg-[#5A31F4]/80 text-white hover:bg-[#5A31F4]'
                    }`}
                  >
                    <span className="font-extrabold tracking-tight">Shop Pay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-3 rounded-xl font-bold text-xs flex items-center justify-center transition-all ${
                      paymentMethod === 'applepay'
                        ? 'bg-white text-black ring-2 ring-[#FF6321]'
                        : 'bg-white/90 text-black hover:bg-white'
                    }`}
                  >
                    <span> Apple Pay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 rounded-xl font-bold text-xs flex items-center justify-center transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-[#FF6321] text-black ring-2 ring-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <span>Credit Card</span>
                  </button>
                </div>

                <div className="relative flex py-4 items-center">
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink mx-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    OR PAY WITH DETAILS BELOW
                  </span>
                  <div className="flex-grow border-t border-white/10"></div>
                </div>
              </div>

              <form onSubmit={handleSubmitOrder} className="space-y-6">
                {/* 1. Contact Information */}
                <div className="bg-[#111116] border border-white/10 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black uppercase text-white tracking-wider">
                      1. CONTACT INFORMATION
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6321]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                        Phone Number (For Order Updates)
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6321]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Delivery Options */}
                <div className="bg-[#111116] border border-white/10 rounded-2xl p-5 space-y-4">
                  <h3 className="text-sm font-black uppercase text-white tracking-wider">
                    2. DELIVERY METHOD
                  </h3>

                  <div className="space-y-2">
                    {/* In-Gym Pickup */}
                    <label
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        shippingMethod === 'pickup'
                          ? 'bg-[#FF6321]/10 border-[#FF6321]'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === 'pickup'}
                          onChange={() => setShippingMethod('pickup')}
                          className="accent-[#FF6321]"
                        />
                        <div>
                          <p className="text-xs font-bold text-white flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#FF6321]" />
                            Free In-Gym Pickup at MORR FIT Houston
                          </p>
                          <p className="text-[11px] text-white/50 mt-0.5">
                            2715 Emancipation Ave, Houston TX (Ready Same-Day)
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-black text-emerald-400 font-mono">FREE</span>
                    </label>

                    {/* Standard Shipping */}
                    <label
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        shippingMethod === 'standard'
                          ? 'bg-[#FF6321]/10 border-[#FF6321]'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === 'standard'}
                          onChange={() => setShippingMethod('standard')}
                          className="accent-[#FF6321]"
                        />
                        <div>
                          <p className="text-xs font-bold text-white flex items-center gap-1.5">
                            <Truck className="w-3.5 h-3.5 text-[#FF6321]" />
                            Standard USPS Priority Shipping (2-4 Days)
                          </p>
                          <p className="text-[11px] text-white/50 mt-0.5">
                            Tracked domestic package across the USA
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-black text-white font-mono">
                        {subtotal >= 75 || appliedPromo?.freeShipping ? 'FREE' : '$4.99'}
                      </span>
                    </label>

                    {/* Express Houston Courier */}
                    <label
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        shippingMethod === 'express'
                          ? 'bg-[#FF6321]/10 border-[#FF6321]'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === 'express'}
                          onChange={() => setShippingMethod('express')}
                          className="accent-[#FF6321]"
                        />
                        <div>
                          <p className="text-xs font-bold text-white flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#FF6321]" />
                            Same-Day Houston Metro Priority Delivery
                          </p>
                          <p className="text-[11px] text-white/50 mt-0.5">
                            Delivered directly within Greater Houston Area
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-black text-white font-mono">$9.99</span>
                    </label>
                  </div>
                </div>

                {/* 3. Shipping / Customer Address */}
                <div className="bg-[#111116] border border-white/10 rounded-2xl p-5 space-y-3">
                  <h3 className="text-sm font-black uppercase text-white tracking-wider">
                    3. {shippingMethod === 'pickup' ? 'PICKUP CONTACT DETAILS' : 'SHIPPING ADDRESS'}
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6321]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6321]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6321]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6321]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6321]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF6321]"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Payment Simulation */}
                <div className="bg-[#111116] border border-white/10 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black uppercase text-white tracking-wider flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#FF6321]" />
                      <span>4. PAYMENT (DEMO ENVIRONMENT)</span>
                    </h3>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                      TEST MODE
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#FF6321]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                          Expiration (MM/YY)
                        </label>
                        <input
                          type="text"
                          value={formData.cardExpiry}
                          onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                          className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#FF6321]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase text-white/50 block mb-1">
                          Security CVC
                        </label>
                        <input
                          type="text"
                          value={formData.cardCvc}
                          onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                          className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#FF6321]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-[#FF6321] hover:bg-white text-black font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>AUTHORIZING DEMO PAYMENT...</span>
                    </div>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>COMPLETE ORDER • ${total.toFixed(2)}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right 5 Columns: Sticky Order Summary & Promo */}
            <div className="lg:col-span-5">
              <div className="bg-[#111116] border border-white/10 rounded-2xl p-6 sticky top-24 space-y-6 shadow-xl">
                <h3 className="text-sm font-black uppercase text-white tracking-wider flex items-center justify-between">
                  <span>ORDER SUMMARY</span>
                  <span className="text-[#FF6321] font-mono">({items.reduce((a, b) => a + b.quantity, 0)} Items)</span>
                </h3>

                {/* Items List */}
                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}`}
                      className="flex items-center gap-3 py-2 border-b border-white/5"
                    >
                      <div className="relative">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 object-cover rounded-lg bg-black border border-white/10"
                        />
                        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#FF6321] text-black text-[10px] font-black rounded-full flex items-center justify-center font-mono">
                          {item.quantity}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">{item.product.name}</h4>
                        {item.selectedSize && (
                          <p className="text-[11px] text-white/50">Size: {item.selectedSize}</p>
                        )}
                        <p className="text-xs font-mono font-bold text-[#FF6321] mt-0.5">
                          ${item.product.price}
                        </p>
                      </div>

                      <span className="text-xs font-mono font-bold text-white">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Discount code (e.g. MORR10)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-black/60 border border-white/15 rounded-lg text-xs text-white placeholder-white/40 uppercase font-mono focus:outline-none focus:border-[#FF6321]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white/10 hover:bg-[#FF6321] hover:text-black text-white text-xs font-bold uppercase rounded-lg transition-all"
                    >
                      Apply
                    </button>
                  </div>

                  {promoError && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{promoError}</span>
                    </p>
                  )}

                  {appliedPromo && (
                    <div className="flex items-center justify-between text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1.5 rounded-lg">
                      <span className="font-bold">Code "{appliedPromo.code}" Applied!</span>
                      <button
                        type="button"
                        onClick={() => setAppliedPromo(null)}
                        className="text-white/60 hover:text-white"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </form>

                {/* Calculations */}
                <div className="space-y-2 text-xs text-white/60 pt-4 border-t border-white/10">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">${subtotal.toFixed(2)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Promo Discount</span>
                      <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-mono text-white">
                      {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Estimated Sales Tax (8.25% TX)</span>
                    <span className="font-mono text-white">${tax.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-base font-black text-white pt-3 border-t border-white/10">
                    <span>Total Due</span>
                    <span className="text-2xl text-[#FF6321] font-mono">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-2 text-[11px] text-white/50 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Official MORR FIT Houston Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF6321] shrink-0" />
                    <span>Free Pickup at 2715 Emancipation Ave Front Desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
