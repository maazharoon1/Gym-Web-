import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, MapPin, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MorrLogo } from '../brand/MorrLogo';
import { BUSINESS_INFO } from '../../data/mockData';

interface NavbarProps {
  onOpenBooking: (mode: 'free-pass' | 'membership' | 'class-booking') => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenCart,
  cartCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'CLASSES', href: '#classes' },
    { label: 'MEMBERSHIPS', href: '#memberships' },
    { label: 'TRAINING', href: '#training' },
    { label: 'ONLINE', href: '#online' },
    { label: 'COMMUNITY', href: '#community' },
    { label: 'SHOP', href: '#shop' },
    { label: 'LOCATION', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#24242A] py-3 shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <MorrLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold font-athletic tracking-widest text-neutral-300 hover:text-[#FF5500] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5500] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-200 hover:text-[#FF5500] hover:border-neutral-700 transition-colors"
              aria-label="Open shop cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF5500] text-white text-[10px] font-bold rounded-full flex items-center justify-center font-mono animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Free Class Quick Button (desktop) */}
            <button
              onClick={() => onOpenBooking('free-pass')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold font-athletic tracking-wider text-neutral-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
              TRY FREE
            </button>

            {/* Primary JOIN MORR CTA */}
            <button
              onClick={() => onOpenBooking('membership')}
              className="px-5 py-2.5 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold text-sm tracking-wider rounded-xl transition-all shadow-md shadow-orange-950/40 hover:shadow-orange-700/20 active:scale-95"
            >
              JOIN MORR
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:text-[#FF5500] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#08080A] text-white flex flex-col p-6 overflow-y-auto"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
              <MorrLogo size="md" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 py-8 space-y-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-center justify-between py-2 text-2xl font-athletic font-bold tracking-wider text-neutral-200 hover:text-[#FF5500] border-b border-neutral-900 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-5 h-5 text-neutral-600" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Quick Contacts & Actions */}
            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <MapPin className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>{BUSINESS_INFO.address}, Houston, TX 77004</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking('free-pass');
                  }}
                  className="py-3 bg-neutral-900 border border-neutral-700 text-white font-athletic font-bold text-sm tracking-wider rounded-xl text-center"
                >
                  FREE PASS
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking('membership');
                  }}
                  className="py-3 bg-[#FF5500] text-white font-athletic font-bold text-sm tracking-wider rounded-xl text-center shadow-lg shadow-orange-950/40"
                >
                  JOIN MORR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
