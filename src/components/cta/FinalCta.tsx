import React from 'react';
import { ArrowRight, Sparkles, MapPin, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../../data/mockData';

interface FinalCtaProps {
  onOpenBooking: (mode: 'free-pass' | 'membership') => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Radial glow background from theme */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF6321]/25 via-transparent to-transparent pointer-events-none" />

      {/* Atmospheric Background Image with High Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/morr_hero_gym_1787007820351.jpg"
          alt="MORR FIT Houston Training Arena"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-20 contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Status Pill */}
        <div className="inline-flex items-center space-x-3 mb-6 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#FF6321] animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80">
            2715 EMANCIPATION AVE • HOUSTON, TX 77004
          </span>
        </div>

        {/* Huge Main Headline */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.88]">
          READY TO <br />
          <span className="text-[#FF6321]">GET MORR?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-white/70 font-medium max-w-xl mx-auto mt-6 leading-relaxed italic">
          Your strongest chapter starts here.
          <span className="block text-sm text-white/50 not-italic font-normal mt-2">
            Join the 27,000+ strong Houston fitness movement. Real people, high energy, no excuses.
          </span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking('membership')}
            className="w-full sm:w-auto px-10 py-5 bg-[#FF6321] text-black text-sm font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-2 group"
          >
            <span>JOIN MORR NOW</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => onOpenBooking('free-pass')}
            className="w-full sm:w-auto px-10 py-5 bg-white text-black text-sm font-black uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
          >
            <span>TRY A FREE CLASS</span>
          </button>
        </div>

        {/* Quick Trust Badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/50 pt-8 border-t border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6321]" />
            <span>24/7 Unlimited Keycard Access</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6321]" />
            <span>Top-Tier Houston Barbell & Turf Zones</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6321]" />
            <span>Zero Long-Term Cancellation Penalties</span>
          </div>
        </div>
      </div>
    </section>
  );
};
