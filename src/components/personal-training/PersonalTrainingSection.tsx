import React from 'react';
import { Target, UserCheck, Dumbbell, Activity, Utensils, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface PersonalTrainingSectionProps {
  onBookConsultation: () => void;
}

export const PersonalTrainingSection: React.FC<PersonalTrainingSectionProps> = ({ onBookConsultation }) => {
  const services = [
    {
      icon: Dumbbell,
      title: '1-ON-1 IN-PERSON TRAINING',
      description: 'Dedicated 60-minute private coaching sessions with customized barbell, dumbbell, and functional hypertrophy workouts.'
    },
    {
      icon: Target,
      title: 'CUSTOM FITNESS PROGRAMMING',
      description: 'Periodized lifting cycles tailored to your exact biomechanics, strength goals, and training age.'
    },
    {
      icon: Activity,
      title: 'ACCOUNTABILITY & BI-WEEKLY CHECK-INS',
      description: 'Progress metric tracking, body composition assessments, lift video analysis, and weekly coach adjustments.'
    },
    {
      icon: Utensils,
      title: 'GENERAL NUTRITION GUIDANCE',
      description: 'Caloric balance, macronutrient targets, and sustainable nutritional strategies to fuel high-intensity training.'
    }
  ];

  return (
    <section id="training" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Services */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
              TAILORED 1-ON-1 COACHING
            </span>
            <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-[0.95]">
              YOUR GOAL. <br />
              YOUR COACH. <br />
              <span className="text-[#FF5500]">YOUR PLAN.</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed">
              Stop guessing your sets, reps, and nutrition. Pair with a dedicated MORR coach to eliminate plateaus, refine your technique, and build sustainable strength.
            </p>

            {/* Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {services.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#121216] border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-black/60 border border-neutral-800 flex items-center justify-center text-[#FF5500] mb-2.5">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-athletic font-bold text-base text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookConsultation}
                className="px-8 py-4 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold text-base tracking-wider rounded-xl transition-all shadow-xl shadow-orange-950/50 flex items-center justify-center gap-2"
              >
                <span>BOOK A FREE CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-neutral-400 text-center sm:text-left">
                Includes InBody Scan & Movement Assessment
              </span>
            </div>
          </div>

          {/* Right Column: Coach in Action Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#26262D] shadow-2xl bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1000&q=80"
                alt="MORR FIT Personal Training Coach in Houston"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] sm:h-[540px] object-cover filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D] via-transparent to-black/30" />

              {/* Floating Coach Credibility Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-neutral-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-athletic font-bold text-[#FF5500] uppercase tracking-wider">
                    CERTIFIED CSCS & NASM COACHES
                  </span>
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-white">
                  "We don't just count reps. We teach you biomechanics so you own every single lift with supreme confidence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
