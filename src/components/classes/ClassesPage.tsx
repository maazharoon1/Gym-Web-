import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Flame, Users, Sparkles, Check, ArrowRight, ShieldCheck, MapPin, Zap, Dumbbell, Award, HelpCircle } from 'lucide-react';
import { ClassesSchedule } from './ClassesSchedule';
import { YogaRecoverySection } from '../yoga/YogaRecoverySection';
import { ClassItem } from '../../types';
import { BUSINESS_INFO } from '../../data/mockData';

interface ClassesPageProps {
  onBookClass: (classItem: ClassItem) => void;
  onOpenBooking: (mode: 'free-pass' | 'membership' | 'class-booking') => void;
  onNavigateHome: () => void;
}

export const ClassesPage: React.FC<ClassesPageProps> = ({
  onBookClass,
  onOpenBooking,
  onNavigateHome
}) => {
  const classPasses = [
    {
      id: 'drop-in',
      name: 'Single Class Drop-In',
      price: '$25',
      period: 'per class',
      badge: 'FLEXIBLE',
      description: 'Ideal for visitors, travelers, or testing any high-energy MORR group session.',
      features: [
        'Access to any scheduled class',
        'Complimentary towel & shower access',
        'Turf & barbell zone warmup access',
        'Valid for 30 days from purchase'
      ],
      ctaText: 'BUY SINGLE PASS',
      popular: false
    },
    {
      id: '10-pack',
      name: '10-Class Punch Card',
      price: '$199',
      period: '$19.90 / class',
      badge: 'MOST POPULAR',
      description: 'Save over $50. Perfect for consistent weekly group training with total flexibility.',
      features: [
        '10 class credits across all disciplines',
        'Priority spot reservations',
        'Valid for 6 months',
        'Shareable with 1 workout buddy',
        '15% off official MORR apparel'
      ],
      ctaText: 'GET 10-CLASS PACK',
      popular: true
    },
    {
      id: 'unlimited-classes',
      name: 'Unlimited Classes Membership',
      price: '$149',
      period: '/month',
      badge: 'BEST VALUE',
      description: 'Full 24/7 facility access PLUS unlimited HIIT, Strength, Glutes & Yoga classes.',
      features: [
        'Unlimited access to all group classes',
        '24/7 keycard gym access included',
        'Free guest pass every month',
        'Online workout tracking portal',
        'No long-term contracts'
      ],
      ctaText: 'JOIN UNLIMITED',
      popular: false
    }
  ];

  const classFormats = [
    {
      title: 'MORR HIIT & Conditioning',
      icon: Zap,
      burn: '600-900 kcal',
      level: 'All Levels (Scalable)',
      description: 'High-octane interval circuits combining SkiErgs, assault bikes, kettlebells, and bodyweight plyometrics for maximum cardiovascular endurance.'
    },
    {
      title: 'Heavy Strength & Barbell',
      icon: Dumbbell,
      burn: '450-700 kcal',
      level: 'Intermediate - Advanced',
      description: 'Structured Olympic lifting, squat progressions, deadlifts, and bench work designed to build dense functional power and bulletproof posture.'
    },
    {
      title: 'Glutes & Lower Body Sculpt',
      icon: Flame,
      burn: '500-800 kcal',
      level: 'All Levels',
      description: 'Targeted glute hypertrophy, hip thrust variations, banded work, and hamstring mechanics for shape, strength, and lower chain power.'
    },
    {
      title: 'Vinyasa Flow & Recovery Yoga',
      icon: Sparkles,
      burn: '250-400 kcal',
      level: 'All Levels',
      description: 'Decompress tight joints, increase hip and thoracic mobility, and down-regulate the nervous system after intense training days.'
    }
  ];

  const faqs = [
    {
      q: 'What should I bring to my first class?',
      a: 'Bring comfortable workout clothes, athletic training shoes, a water bottle, and a valid photo ID. We provide sweat towels, filtered water fill stations, and full shower facilities.'
    },
    {
      q: 'Can beginners attend MORR FIT classes?',
      a: 'Yes, absolutely! Every movement is demonstrated with beginner, intermediate, and advanced progressions. Our coaches actively adjust weights and tempo to your current fitness level.'
    },
    {
      q: 'How early should I arrive?',
      a: 'Please arrive 10-15 minutes prior to class time to check in at the front desk, meet your coach, and complete your dynamic warmup on the turf.'
    },
    {
      q: 'Where do I park at MORR FIT Houston?',
      a: 'We have free on-site parking directly in front of the facility at 2715 Emancipation Ave, plus street parking throughout the Emancipation corridor.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#0A0A0C]">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-20 border-b border-neutral-900 overflow-hidden bg-gradient-to-b from-[#14141A] via-[#0A0A0C] to-[#0A0A0C]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FF5500_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-[#FF5500]" />
                <span>DAILY COACH-LED GROUP FITNESS</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-athletic font-black text-white tracking-tight uppercase leading-[0.95]">
                HOUSTON CLASS SCHEDULE & FITNESS
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Experience the highest-energy group workouts in Third Ward Houston. From intense early morning HIIT to heavy strength barbell circuits and restorative evening yoga.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking('free-pass')}
                className="px-6 py-3.5 bg-[#FF5500] hover:bg-white text-black font-athletic font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-950/40 hover:scale-105 active:scale-95"
              >
                CLAIM FREE 1ST CLASS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Weekly Interactive Classes Schedule Component */}
      <div className="py-12">
        <ClassesSchedule onBookClass={onBookClass} />
      </div>

      {/* Class Formats Breakdown */}
      <section className="py-16 bg-[#0E0E12] border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-athletic font-bold text-[#FF5500] uppercase tracking-wider">
              WHAT TO EXPECT
            </span>
            <h2 className="text-3xl sm:text-4xl font-athletic font-bold text-white uppercase">
              OUR 4 SIGNATURE CLASS FORMATS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classFormats.map((fmt) => {
              const Icon = fmt.icon;
              return (
                <div
                  key={fmt.title}
                  className="p-6 rounded-2xl bg-[#14141A] border border-neutral-800 hover:border-[#FF5500]/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-athletic font-bold text-white uppercase tracking-wide">
                      {fmt.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {fmt.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Est. Burn:</span>
                      <span className="text-[#FF5500] font-mono font-bold">{fmt.burn}</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Difficulty:</span>
                      <span className="text-white font-medium">{fmt.level}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Class Passes & Drop-in Pricing */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>DROP-IN & CLASS PACKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-athletic font-bold text-white uppercase">
            FLEXIBLE CLASS PRICING
          </h2>
          <p className="text-sm text-neutral-400">
            No commitments required. Drop in for a single session or lock in a discounted 10-pack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classPasses.map((pass) => (
            <div
              key={pass.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                pass.popular
                  ? 'bg-gradient-to-b from-[#1E1E26] to-[#141418] border-2 border-[#FF5500] shadow-2xl shadow-orange-950/40 scale-105'
                  : 'bg-[#121216] border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {pass.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full text-[10px] font-athletic font-black tracking-widest uppercase ${
                    pass.popular ? 'bg-[#FF5500] text-black shadow-md' : 'bg-neutral-800 text-neutral-300'
                  }`}
                >
                  {pass.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-athletic font-bold text-white uppercase">{pass.name}</h3>
                <p className="text-xs text-neutral-400 mt-2 min-h-[36px]">{pass.description}</p>

                <div className="my-6 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-athletic font-black text-white">{pass.price}</span>
                  <span className="text-xs text-neutral-400 font-medium">{pass.period}</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-800/80">
                  {pass.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => onOpenBooking('membership')}
                  className={`w-full py-3.5 rounded-xl font-athletic font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    pass.popular
                      ? 'bg-[#FF5500] hover:bg-white text-black shadow-lg shadow-orange-950/40 hover:scale-[1.02]'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700'
                  }`}
                >
                  <span>{pass.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Yoga & Active Recovery Section */}
      <YogaRecoverySection onBookYoga={() => onOpenBooking('class-booking')} />

      {/* Class FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLASS FAQS</span>
          </div>
          <h2 className="text-3xl font-athletic font-bold text-white uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#121216] border border-neutral-800">
              <h4 className="text-base font-bold text-white flex items-center gap-3">
                <span className="text-[#FF5500] font-mono">Q.</span>
                {faq.q}
              </h4>
              <p className="text-sm text-neutral-400 mt-2.5 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
