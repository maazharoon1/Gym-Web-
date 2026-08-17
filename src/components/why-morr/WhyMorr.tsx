import React from 'react';
import { Users, TrendingUp, Zap, KeyRound, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyMorr: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: 'COMMUNITY',
      tagline: 'Train with people who push you.',
      description: 'No sterile corporate gym egos. On Emancipation Ave, every lifter, athlete, and beginner is embraced. We celebrate every PR together.',
      stat: '27K+ Strong',
      statLabel: 'Houston Movement'
    },
    {
      icon: TrendingUp,
      title: 'RESULTS',
      tagline: 'Real people. Real progress.',
      description: 'Science-backed progressive overload, intense metabolic conditioning, and structured coaching that yields permanent body recomposition.',
      stat: '2,500+',
      statLabel: 'Members Transformed'
    },
    {
      icon: Zap,
      title: 'ENERGY',
      tagline: 'A high-energy Houston fitness environment.',
      description: 'Curated hip-hop & high-BPM playlists, stadium sound, custom lighting, and an infectious work ethic that drives you past your limits.',
      stat: '100%',
      statLabel: 'Pure Houston Grit'
    },
    {
      icon: KeyRound,
      title: 'ACCESS',
      tagline: 'Flexible gym and class options.',
      description: '24/7 keycard convenience for late-night grinds, weekend drop-ins, and flexible class passes designed for real-world life schedules.',
      stat: '24/7/365',
      statLabel: 'Building Access'
    }
  ];

  return (
    <section className="py-24 bg-[#08080A] relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
              THE MORR CULTURE
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-[0.95]">
              MORE THAN A WORKOUT.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
            We built MORR FIT around culture, grit, and Houston athletic brotherhood. A space where you are held accountable and celebrated.
          </p>
        </div>

        {/* 4 Pillars Layout with Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Real Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#24242A] shadow-2xl bg-[#121215]">
              <img
                src="/src/assets/images/morr_community_1787007850135.jpg"
                alt="MORR FIT Houston Community Members"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[540px] object-cover filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-800 text-white">
                <div className="flex items-center gap-2 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>EMANCIPATION AVE PRIDE</span>
                </div>
                <p className="text-sm font-semibold text-neutral-200">
                  "When you walk in these doors, you're family. We train together, we grind together."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Interactive Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#111115] border border-[#222228] hover:border-[#FF5500]/60 transition-all duration-300 group shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-all">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-athletic font-bold text-white block leading-none">
                          {pillar.stat}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider">
                          {pillar.statLabel}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-athletic font-bold text-white tracking-wide group-hover:text-[#FF5500] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-300 mt-1">
                      {pillar.tagline}
                    </p>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-[#FF5500] font-bold font-athletic uppercase tracking-wider">
                    <span>THE MORR STANDARD</span>
                    <span className="w-1 h-1 rounded-full bg-[#FF5500]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
