import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
            VERIFIED ATHLETES & MEMBERS
          </span>
          <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-[0.95]">
            DON'T TAKE OUR WORD FOR IT.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            See what Houston lifters and athletes have to say about the energy, equipment, and community on Emancipation Ave.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#111114] border border-[#24242A] hover:border-[#FF5500]/50 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#FF5500] mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Author & Source */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <h4 className="font-athletic font-bold text-base text-white tracking-wide">
                    {test.author}
                  </h4>
                  <p className="text-[11px] text-neutral-400">{test.role}</p>
                </div>

                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-black/60 border border-neutral-800 text-[#FF5500]">
                  {test.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
