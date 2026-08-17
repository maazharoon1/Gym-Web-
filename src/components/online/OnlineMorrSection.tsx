import React from 'react';
import { Smartphone, Check, Zap, Sparkles, ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface OnlineMorrSectionProps {
  onSelectProduct: (productName: string, price: string) => void;
}

export const OnlineMorrSection: React.FC<OnlineMorrSectionProps> = ({ onSelectProduct }) => {
  const onlineProducts = [
    {
      id: 'online-30day',
      title: 'MORR 30-DAY CHALLENGE',
      tagline: 'High-Impact Body Recomposition Program',
      price: '$29',
      billing: 'one-time access',
      badge: 'POPULAR CHALLENGE',
      features: [
        '30 Daily Structured Gym & Home Workouts',
        'Video Form Demos & Cue Breakdowns',
        'Macronutrient & Meal Prep Blueprint',
        'Private Challenge Group Accountability',
        'Lifetime Access to Program Materials'
      ],
      ctaText: 'START 30-DAY CHALLENGE'
    },
    {
      id: 'online-digital',
      title: 'MORR DIGITAL MEMBERSHIP',
      tagline: 'Unlimited On-Demand Fitness App Portal',
      price: '$19',
      billing: '/ month',
      popular: true,
      badge: 'MOST FLEXIBLE',
      features: [
        'Full Video Workout Library (100+ Sessions)',
        'Glute Lab, HIIT & Strength Split Programs',
        'Follow-Along Yoga & Recovery Flows',
        'Monthly Live Q&A with Head Coaches',
        'New Workout Drops Every Single Week'
      ],
      ctaText: 'JOIN MORR DIGITAL'
    },
    {
      id: 'online-coaching',
      title: 'MORR 1-ON-1 ONLINE COACHING',
      tagline: 'Elite Virtual Personal Coaching & Direct Access',
      price: '$149',
      billing: '/ month',
      badge: 'PREMIUM VIRTUAL',
      features: [
        '100% Customized Biomechanical Training Plan',
        'Weekly Video Lift Form & Technique Analysis',
        'Direct 24/7 Trainer Messaging & Adjustments',
        'Personalized Macro Targets & Meal Feedback',
        'Bi-Weekly 1-on-1 Video Strategy Call'
      ],
      ctaText: 'APPLY FOR COACHING'
    }
  ];

  return (
    <section id="online" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>DIGITAL REVENUE PLATFORM</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight uppercase leading-none">
            MORR FIT. <br />
            <span className="text-[#FF5500]">ANYWHERE.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Train with the MORR standard whether you're traveling, lifting at home, or located outside of Houston.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {onlineProducts.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                prod.popular
                  ? 'bg-[#15151A] border-2 border-[#FF5500] shadow-2xl shadow-orange-950/40 lg:-translate-y-2'
                  : 'bg-[#111114] border border-[#24242A] hover:border-neutral-700'
              }`}
            >
              {/* Badge */}
              {prod.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FF5500] text-white text-[11px] font-athletic font-bold tracking-wider rounded-full uppercase shadow-md">
                  {prod.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-athletic font-bold text-white tracking-wide mt-2">
                  {prod.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 min-h-[32px]">
                  {prod.tagline}
                </p>

                {/* Price Display */}
                <div className="my-5 p-4 rounded-xl bg-[#0B0B0E] border border-neutral-800">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-athletic font-extrabold text-[#FF5500]">
                      {prod.price}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {prod.billing}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase font-display block">
                    PROGRAM HIGHLIGHTS:
                  </span>
                  <ul className="space-y-2.5">
                    {prod.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300 leading-snug">
                        <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onSelectProduct(prod.title, prod.price)}
                  className={`w-full py-3.5 rounded-xl font-athletic font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-2 ${
                    prod.popular
                      ? 'bg-[#FF5500] hover:bg-[#E04B00] text-white shadow-lg shadow-orange-950/40 hover:scale-[1.02]'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                  }`}
                >
                  <span>{prod.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
