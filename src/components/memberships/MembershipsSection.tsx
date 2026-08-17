import React, { useState } from 'react';
import { Check, ShieldCheck, Flame, Zap, Sparkles, ArrowRight, Clock, HelpCircle, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { MEMBERSHIP_PLANS, PASSES_DATA } from '../../data/mockData';
import { MembershipPlan } from '../../types';

interface MembershipsSectionProps {
  onSelectPlan: (plan: MembershipPlan) => void;
  onComparePlans: () => void;
}

export const MembershipsSection: React.FC<MembershipsSectionProps> = ({
  onSelectPlan,
  onComparePlans
}) => {
  const [activeCategory, setActiveCategory] = useState<'month-to-month' | '12-month'>('month-to-month');

  const monthToMonthPlans = MEMBERSHIP_PLANS.filter((p) => p.commitment === 'month-to-month');
  const lockInPlans = MEMBERSHIP_PLANS.filter((p) => p.commitment === '12-month');

  return (
    <section id="memberships" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-3 mb-4 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF6321]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80">
              TRAIN YOUR WAY • CHOOSE YOUR PLAN
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.9]">
            MEMBERSHIPS & <span className="text-[#FF6321]">ACCESS.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Transparent Houston pricing. From flexible no-contract month-to-month passes to 12-month VIP lock-in rates.
          </p>

          {/* Category Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-black/80 border border-white/10 rounded-xl">
            <button
              onClick={() => setActiveCategory('month-to-month')}
              className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeCategory === 'month-to-month'
                  ? 'bg-[#FF6321] text-black shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              ⚡️ NO CONTRACT (MONTH-TO-MONTH)
            </button>
            <button
              onClick={() => setActiveCategory('12-month')}
              className={`px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeCategory === '12-month'
                  ? 'bg-[#FF6321] text-black shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              🔒 12-MONTH COMMITMENT (SAVE BIG)
            </button>
          </div>
        </div>

        {/* --- 1. MONTH-TO-MONTH PLANS (NO CONTRACT) --- */}
        {activeCategory === 'month-to-month' && (
          <div className="space-y-6">
            <div className="p-4 bg-white/5 border-l-4 border-[#FF6321] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black uppercase text-white tracking-wide">
                  NO CONTRACT. NO EXCUSES. JUST RESULTS.
                </h3>
                <p className="text-xs text-white/60 mt-0.5">
                  Full flexibility. Cancel anytime with zero long-term commitments.
                </p>
              </div>
              <div className="px-4 py-1.5 bg-black/80 border border-white/15 text-[#FF6321] text-xs font-mono font-bold tracking-wider uppercase">
                DM "FIT" ON INSTAGRAM OR JOIN BELOW
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {monthToMonthPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`relative bg-white/5 p-8 flex flex-col justify-between border-y border-r transition-all ${
                    plan.popular
                      ? 'border-l-4 border-l-[#FF6321] border-[#FF6321]/50 bg-gradient-to-b from-white/[0.08] to-white/5 shadow-2xl'
                      : 'border-l-4 border-l-white/20 border-white/10 hover:border-l-[#FF6321]'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#FF6321] text-black text-[10px] font-black tracking-widest uppercase shadow-md">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                      {plan.name}
                    </h4>
                    <p className="text-xs text-white/50 mt-1 min-h-[30px]">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="my-6 py-4 border-y border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-black text-[#FF6321] tracking-tight">
                          {plan.priceDisplay}
                        </span>
                        <span className="text-xs text-white/60 uppercase font-bold tracking-wider">
                          / MONTH
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mt-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{plan.accessHours}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">
                        PLAN INCLUDES:
                      </span>
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/80">
                          <Check className="w-4 h-4 text-[#FF6321] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-4 bg-[#FF6321] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* --- 2. 12-MONTH COMMITMENT PLANS --- */}
        {activeCategory === '12-month' && (
          <div className="space-y-6">
            <div className="p-4 bg-white/5 border-l-4 border-[#FF6321] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black uppercase text-white tracking-wide">
                  READY TO LOCK IN? UPGRADE YOUR RESULTS.
                </h3>
                <p className="text-xs text-white/60 mt-0.5">
                  12-Month commitment required for these discounted rates.
                </p>
              </div>
              <div className="px-4 py-1.5 bg-[#FF6321] text-black text-xs font-black tracking-wider uppercase">
                LOCK IN & SAVE UP TO 50%
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lockInPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`relative bg-white/5 p-7 flex flex-col justify-between border-y border-r transition-all ${
                    plan.badge
                      ? 'border-l-4 border-l-[#FF6321] border-white/20 bg-gradient-to-b from-white/[0.08] to-white/5 shadow-2xl'
                      : 'border-l-4 border-l-white/20 border-white/10 hover:border-l-[#FF6321]'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#FF6321] text-black text-[10px] font-black tracking-widest uppercase shadow-md">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <h4 className="text-2xl font-black uppercase text-white tracking-tight">
                      {plan.name}
                    </h4>
                    <p className="text-xs text-white/50 mt-1 min-h-[32px]">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="my-6 py-4 border-y border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-black text-[#FF6321] tracking-tight">
                          {plan.priceDisplay}
                        </span>
                        {!plan.priceDisplay?.includes('for 2') && (
                          <span className="text-xs text-white/60 uppercase font-bold tracking-wider">
                            / MO
                          </span>
                        )}
                      </div>
                      {plan.signupFee && (
                        <span className="text-[11px] text-white/40 font-mono block mt-1">
                          {plan.signupFee}
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mt-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{plan.accessHours}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2.5 mb-8">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">
                        BENEFITS INCLUDED:
                      </span>
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/80">
                          <Check className="w-4 h-4 text-[#FF6321] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-3.5 bg-[#FF6321] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* --- 3. DAY PASSES & DROP-IN GRID (From Linktree) --- */}
        <div className="mt-14 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#FF6321] tracking-widest block font-display">
                FLEXIBLE VISITS & COMMUNITY
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                DAY PASSES & COMMUNITY SATURDAYS
              </h3>
            </div>
            <button
              onClick={onComparePlans}
              className="text-xs font-black uppercase tracking-widest text-white/70 hover:text-[#FF6321] flex items-center gap-1.5 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>COMPARE ALL PERKS & AMENITIES</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PASSES_DATA.map((pass) => (
              <div
                key={pass.id}
                className="bg-white/5 border border-white/10 p-5 flex flex-col justify-between hover:border-[#FF6321] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-black text-white text-base uppercase">
                      {pass.name}
                    </h4>
                    <span className="font-mono font-black text-lg text-[#FF6321]">
                      {pass.price === 0 ? 'FREE' : `$${pass.price}`}
                    </span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {pass.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <button
                    onClick={() => {
                      const pseudoPlan: MembershipPlan = {
                        id: pass.id,
                        name: pass.name,
                        tagline: pass.description,
                        priceMonthly: pass.price,
                        commitment: 'month-to-month',
                        accessHours: 'Single Session Pass',
                        features: [pass.description],
                        ctaText: `CLAIM ${pass.name.toUpperCase()}`
                      };
                      onSelectPlan(pseudoPlan);
                    }}
                    className="w-full py-2.5 bg-white/10 hover:bg-[#FF6321] hover:text-black text-white text-[11px] font-black uppercase tracking-widest transition-all"
                  >
                    {pass.price === 0 ? 'RESERVE FREE SATURDAY SPOT' : `GET ${pass.name.toUpperCase()}`}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
