import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../../data/mockData';

interface FreeTrialSectionProps {
  onOpenFreePass: () => void;
}

export const FreeTrialSection: React.FC<FreeTrialSectionProps> = ({ onOpenFreePass }) => {
  return (
    <section className="py-16 bg-[#08080A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#18181D] via-[#121215] to-[#0A0A0D] border-2 border-[#FF5500]/40 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background Atmospheric Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5500]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                <span>FIRST VISIT ON US</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-athletic font-bold text-white tracking-tight uppercase leading-[0.95]">
                YOUR FIRST WORKOUT <br className="hidden sm:inline" />
                <span className="text-[#FF5500]">STARTS HERE.</span>
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg mt-4 max-w-xl font-medium leading-relaxed">
                Come experience the MORR FIT community for yourself. Tour the facility, test out the turf, and join a high-energy group class or open lift.
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Free full gym floor & turf pass</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Complimentary coach movement check</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Zero hard sales or contracts</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Instant mobile barcode access</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenFreePass}
                  className="px-8 py-4 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold text-lg tracking-wider rounded-xl transition-all shadow-xl shadow-orange-950/60 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>BOOK YOUR FIRST CLASS</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs text-neutral-400 justify-center sm:justify-start">
                  <MapPin className="w-4 h-4 text-[#FF5500]" />
                  <span>2715 Emancipation Ave, Houston TX</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-[#0D0D10]">
                <img
                  src="/src/assets/images/morr_group_class_1787007835845.jpg"
                  alt="Experience MORR FIT workout"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[380px] object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-800 text-xs text-neutral-200 flex items-center justify-between">
                  <div>
                    <span className="font-athletic font-bold text-[#FF5500] uppercase block">
                      Houston Community Welcome
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      All fitness backgrounds & fitness levels
                    </span>
                  </div>
                  <Users className="w-6 h-6 text-[#FF5500]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
