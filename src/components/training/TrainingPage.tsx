import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Target, Award, Users, Check, ArrowRight, ShieldCheck, Zap, HeartPulse, Sparkles, MessageSquare } from 'lucide-react';
import { PersonalTrainingSection } from '../personal-training/PersonalTrainingSection';
import { TrainersSection } from '../trainers/TrainersSection';
import { ResultsSection } from '../results/ResultsSection';
import { OnlineMorrSection } from '../online/OnlineMorrSection';
import { Trainer } from '../../types';

interface TrainingPageProps {
  onSelectTrainer: (trainer: Trainer) => void;
  onOpenBooking: (mode: 'free-pass' | 'membership' | 'pt-consultation') => void;
  onSelectOnlineProduct: (name: string, price: string) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({
  onSelectTrainer,
  onOpenBooking,
  onSelectOnlineProduct
}) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('hypertrophy');
  const [sessionCount, setSessionCount] = useState<number>(3);

  const trainingOptions = [
    {
      title: '1-on-1 In-Person Elite Coaching',
      badge: 'FLAGSHIP',
      icon: Dumbbell,
      price: '$75 - $95',
      unit: 'per 60-min session',
      description: 'Direct undivided coaching with a certified Master Trainer on the Houston turf.',
      bullets: [
        'Full biomechanical movement screen & posture assessment',
        'Customized weekly progressive overload lifting regimen',
        'Macronutrient & hydration coaching tailored to your body',
        'InBody 570 body composition tracking every 4 weeks',
        '24/7 direct coach messaging access'
      ],
      popular: true
    },
    {
      title: 'Semi-Private (2-on-1) Training',
      badge: 'BUDDY TRAINING',
      icon: Users,
      price: '$50 - $65',
      unit: 'per person / session',
      description: 'Train with a friend or partner with personalized coaching at an accessible rate.',
      bullets: [
        'Shared energy, accountability, and competitive motivation',
        'Individualized weights and progression tracks',
        'Form correction and spotter support for heavy lifts',
        'Monthly fitness re-evaluations'
      ],
      popular: false
    },
    {
      title: 'Online Hybrid & Remote Coaching',
      badge: 'DIGITAL ACCESS',
      icon: Zap,
      price: '$120 - $199',
      unit: 'per month',
      description: 'Train anywhere with custom programming delivered via our digital workout app.',
      bullets: [
        'Custom video-guided daily workout calendar',
        'Weekly video form feedback & technique analysis',
        'Weekly 1-on-1 coach check-in call',
        'Access to MORR exclusive meal guides and community chats'
      ],
      popular: false
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
                <Target className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>PERSONALIZED COACHING PROTOCOLS</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-athletic font-black text-white tracking-tight uppercase leading-[0.95]">
                1-ON-1 PERSONAL TRAINING & COACHING
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Transform your body with Houston's elite strength & conditioning coaches. Customized hypertrophy, fat loss, Olympic lifting, and nutrition science built around your unique goals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking('pt-consultation')}
                className="px-6 py-3.5 bg-[#FF5500] hover:bg-white text-black font-athletic font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-950/40 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>BOOK FREE 1-ON-1 ASSESSMENT</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deep-dive Personal Training Overview */}
      <PersonalTrainingSection onBookConsultation={() => onOpenBooking('pt-consultation')} />

      {/* 3 Training Tiers */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>COACHING OPTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-athletic font-bold text-white uppercase">
            CHOOSE YOUR TRAINING TIER
          </h2>
          <p className="text-sm text-neutral-400">
            Tailored programs for rapid body recomposition, powerlifting, or athletic conditioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                  opt.popular
                    ? 'bg-gradient-to-b from-[#1E1E26] to-[#141418] border-2 border-[#FF5500] shadow-2xl shadow-orange-950/40 scale-105'
                    : 'bg-[#121216] border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {opt.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full text-[10px] font-athletic font-black tracking-widest uppercase ${
                      opt.popular ? 'bg-[#FF5500] text-black shadow-md' : 'bg-neutral-800 text-neutral-300'
                    }`}
                  >
                    {opt.badge}
                  </div>
                )}

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-athletic font-bold text-white uppercase">{opt.title}</h3>
                  <p className="text-xs text-neutral-400 mt-2 min-h-[36px]">{opt.description}</p>

                  <div className="my-6 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-athletic font-black text-white">{opt.price}</span>
                    <span className="text-xs text-neutral-400 font-medium">{opt.unit}</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-neutral-800/80">
                    {opt.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onOpenBooking('pt-consultation')}
                    className={`w-full py-3.5 rounded-xl font-athletic font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      opt.popular
                        ? 'bg-[#FF5500] hover:bg-white text-black shadow-lg shadow-orange-950/40 hover:scale-[1.02]'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700'
                    }`}
                  >
                    <span>REQUEST CONSULTATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Complete Coaches & Trainers Roster */}
      <TrainersSection onSelectTrainer={onSelectTrainer} />

      {/* Verified Transformations */}
      <ResultsSection onOpenBooking={onOpenBooking} />

      {/* Online Programs & Challenges */}
      <OnlineMorrSection onSelectProduct={onSelectOnlineProduct} />

      {/* Interactive Goal & Assessment Banner */}
      <section className="py-16 bg-gradient-to-r from-[#17171E] via-[#121216] to-[#17171E] border-t border-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>READY TO LEVEL UP?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-athletic font-black text-white uppercase leading-tight">
            CLAIM YOUR COMPLIMENTARY 45-MINUTE MOVEMENT ASSESSMENT
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Includes InBody body fat scan, postural analysis, injury screening, and a custom workout blueprint built by our head trainer.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking('pt-consultation')}
              className="px-8 py-4 bg-[#FF5500] hover:bg-white text-black font-athletic font-black text-base uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-orange-950/50 hover:scale-105 active:scale-95"
            >
              SCHEDULE YOUR FREE ASSESSMENT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
