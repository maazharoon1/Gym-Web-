import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { MorrLogo } from '../brand/MorrLogo';
import { BUSINESS_INFO } from '../../data/mockData';

interface FooterProps {
  onOpenBooking: (mode: 'free-pass' | 'membership') => void;
  onNavigateStore?: () => void;
  onNavigateHome?: () => void;
  onNavigateClasses?: () => void;
  onNavigateTraining?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onNavigateStore,
  onNavigateHome,
  onNavigateClasses,
  onNavigateTraining
}) => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => {
                if (onNavigateHome) onNavigateHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left"
            >
              <MorrLogo size="lg" />
            </button>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed mt-4">
              More than a gym. We are a high-energy community fitness movement in Houston's historic Third Ward. 24/7 keycard access, elite barbell equipment, dynamic group HIIT, and 1-on-1 coaching.
            </p>

            <div className="pt-2 space-y-2 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6321]" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6321]" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-mono">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6321]" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF6321] hover:text-black hover:border-[#FF6321] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF6321] hover:text-black hover:border-[#FF6321] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              {onNavigateStore ? (
                <button
                  onClick={onNavigateStore}
                  className="px-3.5 h-10 rounded bg-white/5 border border-white/10 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#FF6321] hover:text-black hover:border-[#FF6321] transition-all"
                >
                  <span>SHOP MORR</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              ) : (
                <a
                  href={BUSINESS_INFO.shopifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 h-10 rounded bg-white/5 border border-white/10 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#FF6321] hover:text-black hover:border-[#FF6321] transition-all"
                >
                  <span>SHOP MORR</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FF6321] block font-display">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs uppercase font-bold tracking-wider text-white/60">
              <li>
                <button onClick={() => { if (onNavigateHome) onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FF6321] transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => { if (onNavigateClasses) onNavigateClasses(); else if (onNavigateHome) onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FF6321] transition-colors">Class Schedule</button>
              </li>
              <li>
                <button onClick={() => { if (onNavigateHome) onNavigateHome(); setTimeout(() => document.querySelector('#memberships')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#FF6321] transition-colors">Memberships</button>
              </li>
              <li>
                <button onClick={() => { if (onNavigateTraining) onNavigateTraining(); else if (onNavigateHome) onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FF6321] transition-colors">Personal Training</button>
              </li>
              <li>
                <button onClick={() => { if (onNavigateTraining) onNavigateTraining(); else if (onNavigateHome) onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FF6321] transition-colors">Our Coaches</button>
              </li>
              <li>
                <button onClick={() => { if (onNavigateClasses) onNavigateClasses(); else if (onNavigateHome) onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FF6321] transition-colors">Yoga & Recovery</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Digital (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FF6321] block font-display">
              DIGITAL & MERCH
            </span>
            <ul className="space-y-2 text-xs uppercase font-bold tracking-wider text-white/60">
              <li>
                {onNavigateStore ? (
                  <button onClick={onNavigateStore} className="text-[#FF6321] hover:underline font-black">
                    ★ Shop Morr Store
                  </button>
                ) : (
                  <a href="#shop" className="hover:text-[#FF6321] transition-colors">Shop Morr</a>
                )}
              </li>
              <li>
                <button onClick={() => { if (onNavigateTraining) onNavigateTraining(); else if (onNavigateHome) onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FF6321] transition-colors">30-Day Challenge</button>
              </li>
              <li>
                <button onClick={() => { if (onNavigateHome) onNavigateHome(); setTimeout(() => document.querySelector('#community')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#FF6321] transition-colors">Community Events</button>
              </li>
              <li>
                <button onClick={() => { if (onNavigateHome) onNavigateHome(); setTimeout(() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-[#FF6321] transition-colors">Houston Facility</button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action & Pass (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white/5 border-l-4 border-[#FF6321] p-5">
              <span className="text-[10px] uppercase font-bold text-[#FF6321] tracking-widest mb-1 block">
                FIRST TIME VISITING?
              </span>
              <h4 className="font-black text-sm uppercase text-white tracking-wide">
                EXPERIENCE MORR FIT TODAY
              </h4>
              <p className="text-xs text-white/60 mt-1 leading-relaxed">
                Claim a complimentary 1-day pass or drop in during staffed hours.
              </p>
              <button
                onClick={() => onOpenBooking('free-pass')}
                className="mt-4 w-full py-2.5 bg-[#FF6321] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all text-center"
              >
                CLAIM FREE 1ST WORKOUT
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Theme Aesthetics */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase font-bold tracking-widest text-white/40">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} MORR FIT HOUSTON. ALL RIGHTS RESERVED.</span>
            <span>2715 EMANCIPATION AVE, HOUSTON, TX</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-[#FF6321] transition-colors">PRIVACY POLICY</a>
            <a href="#hero" className="hover:text-[#FF6321] transition-colors">TERMS OF SERVICE</a>
            <span className="text-[#FF6321] font-black">27K+ FOLLOWED MOVEMENT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
