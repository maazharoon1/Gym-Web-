import React from 'react';
import { HeartPulse, Wind, Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface YogaRecoverySectionProps {
  onBookYoga: () => void;
}

export const YogaRecoverySection: React.FC<YogaRecoverySectionProps> = ({ onBookYoga }) => {
  return (
    <section id="recovery" className="py-24 bg-[#0A0A0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Image with Glow */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
              <img
                src="/src/assets/images/morr_yoga_recovery_1787007863409.jpg"
                alt="MORR FIT Athletic Yoga and Recovery"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[520px] object-cover filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Bottom Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-xs text-neutral-200">
                <div>
                  <span className="font-athletic font-bold text-[#FF5500] uppercase block">
                    Wednesday 6:30 PM & Sunday 9:00 AM
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Lead by Coach Elena Vasquez (RYT-500)
                  </span>
                </div>
                <Wind className="w-5 h-5 text-[#FF5500]" />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
              ACTIVE RESTORATION
            </span>
            <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-[0.95]">
              MOVE. <br />
              BREATHE. <br />
              <span className="text-[#FF5500]">RECOVER.</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed">
              Lifting heavy requires equal dedication to joint longevity and nervous system downregulation. Our athletic yoga sequences are designed for lifters—focusing on hip opening, hamstring lengthening, and thoracic spine freedom.
            </p>

            {/* Feature List */}
            <div className="space-y-3.5 my-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Athletic Fascial Stretch & Mobility</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Unlock tight hip flexors, calves, and lats after heavy squats and deadlifts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Diaphragmatic Breathwork</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Reduce cortisol, calm inflammation, and prime muscles for accelerated overnight recovery.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Injury Prevention & Longevity</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Build bulletproof rotator cuffs, knees, and ankles for lifelong athletic performance.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookYoga}
                className="px-8 py-4 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold text-base tracking-wider rounded-xl transition-all shadow-lg shadow-orange-950/40 flex items-center justify-center gap-2"
              >
                <span>BOOK YOGA CLASS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#online"
                className="px-6 py-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-athletic font-bold text-sm tracking-wider rounded-xl transition-all text-center"
              >
                ONLINE RECOVERY ACCESS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
