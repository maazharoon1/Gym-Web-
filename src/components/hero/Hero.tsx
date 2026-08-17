import React from 'react';
import { ChevronDown, ArrowRight, Sparkles, Shield, Users, Clock, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../../data/mockData';

interface HeroProps {
  onOpenBooking: (mode: 'free-pass' | 'membership' | 'class-booking') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pb-20 overflow-hidden bg-[#08080A]"
    >
      {/* Cinematic Background Image with Dark Vignette and Dynamic Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/morr_hero_gym_1787007820351.jpg"
          alt="MORR FIT Houston Athletic Training Ground"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125"
        />
        
        {/* Layered overlays for visual depth & legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-black/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#080808]/50 to-[#080808]" />
        
        {/* Subtle dynamic orange atmospheric ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF5500]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        {/* Houston Location & Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#FF5500]/40 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping" />
          <span className="text-[11px] sm:text-xs font-athletic font-bold uppercase tracking-widest text-neutral-200">
            2715 EMANCIPATION AVE • HOUSTON, TX 77004
          </span>
        </motion.div>

        {/* Massive Athletic Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl"
        >
          <h1 className="font-athletic text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight uppercase leading-[0.9] text-white">
            MORE THAN A GYM.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF6A1A] to-[#FFA066] mt-2 sm:mt-3">
              THIS IS MORR.
            </span>
          </h1>
        </motion.div>

        {/* Supporting Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl md:text-2xl text-neutral-300 font-medium max-w-2xl font-sans tracking-wide leading-relaxed"
        >
          Train hard. Get stronger. Find your people.
          <span className="block text-sm sm:text-base text-neutral-400 font-normal mt-1">
            Houston's premier urban community gym, 24/7 keycard access & high-energy group training.
          </span>
        </motion.p>

        {/* Primary and Secondary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => onOpenBooking('membership')}
            className="w-full sm:w-auto px-8 py-4 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold text-lg sm:text-xl tracking-wider rounded-xl transition-all shadow-xl shadow-orange-950/60 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            <span>JOIN MORR</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#classes"
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 text-white font-athletic font-bold text-lg sm:text-xl tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <span>EXPLORE CLASSES</span>
          </a>

          <button
            onClick={() => onOpenBooking('free-pass')}
            className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-neutral-900/50 border border-dashed border-[#FF5500]/70 text-[#FF6A1A] hover:text-white font-athletic font-bold text-base tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span>CLAIM FREE PASS</span>
          </button>
        </motion.div>

        {/* Social Proof & Metrics Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 sm:mt-18 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl pt-8 border-t border-neutral-800/80"
        >
          <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-1.5 text-[#FF5500] mb-1">
              <Users className="w-4 h-4" />
              <span className="font-athletic font-bold text-xl sm:text-2xl text-white">27K+</span>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium">Instagram Community</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-1.5 text-[#FF5500] mb-1">
              <Clock className="w-4 h-4" />
              <span className="font-athletic font-bold text-xl sm:text-2xl text-white">24/7</span>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium">Keycard Member Access</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-1.5 text-[#FF5500] mb-1">
              <Flame className="w-4 h-4" />
              <span className="font-athletic font-bold text-xl sm:text-2xl text-white">4.9 ★</span>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium">Top Rated Houston Gym</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-1.5 text-[#FF5500] mb-1">
              <Shield className="w-4 h-4" />
              <span className="font-athletic font-bold text-xl sm:text-2xl text-white">3RD WARD</span>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium">Emancipation Ave Culture</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 sm:mt-12 text-neutral-500 hover:text-white transition-colors"
        >
          <a href="#quick-actions" aria-label="Scroll to services">
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
