import React from 'react';
import { Quote, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSFORMATION_STORIES } from '../../data/mockData';

interface ResultsSectionProps {
  onOpenBooking: (mode: 'free-pass' | 'pt-consultation' | 'membership') => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#08080A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
            MEMBER SPOTLIGHTS
          </span>
          <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-none">
            REAL PEOPLE. <br />
            <span className="text-[#FF5500]">REAL RESULTS.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Authentic transformations from everyday Houstonians who put in the sweat and embraced the MORR standard.
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRANSFORMATION_STORIES.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden bg-[#111114] border border-[#222227] hover:border-[#FF5500]/50 transition-all flex flex-col justify-between shadow-xl"
            >
              {/* Photo Showcase */}
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img
                  src={story.image}
                  alt={story.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/30" />

                {/* Member Badge */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-800 text-xs font-athletic font-bold text-white tracking-wider">
                  {story.name}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#FF5500] text-white font-athletic font-bold tracking-wider">
                    {story.result}
                  </span>
                  <span className="text-neutral-300 font-mono text-[11px] bg-black/60 px-2 py-0.5 rounded">
                    {story.timeframe}
                  </span>
                </div>
              </div>

              {/* Story Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-orange-400 font-semibold mb-2">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Goal: {story.goal}</span>
                  </div>

                  <div className="relative my-3 pl-4 border-l-2 border-[#FF5500]/60">
                    <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                      "{story.quote}"
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                  <span className="text-[11px]">Program:</span>
                  <span className="font-semibold text-white">{story.program}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenBooking('pt-consultation')}
            className="px-8 py-4 bg-[#18181D] hover:bg-[#FF5500] border border-neutral-700 hover:border-[#FF5500] text-white font-athletic font-bold text-base tracking-wider rounded-xl transition-all inline-flex items-center gap-2 shadow-lg"
          >
            <span>START YOUR OWN TRANSFORMATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
