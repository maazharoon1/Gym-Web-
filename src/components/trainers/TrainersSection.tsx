import React from 'react';
import { Instagram, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { TRAINERS_DATA } from '../../data/mockData';
import { Trainer } from '../../types';

interface TrainersSectionProps {
  onSelectTrainer: (trainer: Trainer) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onSelectTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-[#0A0A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
              ELITE HOUSTON COACHING
            </span>
            <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-[0.95]">
              MEET THE MORR TEAM.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            Certified coaches who lead with passion, technical mastery, and zero ego. We're in your corner every single rep.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS_DATA.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-[#111114] border border-[#222228] hover:border-[#FF5500] transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-neutral-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/30" />

                {/* Instagram Handle */}
                <a
                  href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-neutral-700 text-xs text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>{trainer.instagram}</span>
                </a>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic font-bold text-white tracking-wide group-hover:text-[#FF5500] transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#FF5500] mt-0.5">
                    {trainer.role}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-2 font-medium">
                    ⚡️ {trainer.specialty}
                  </p>

                  <p className="text-xs text-neutral-400 mt-3 line-clamp-3 leading-relaxed">
                    {trainer.bio}
                  </p>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {trainer.certifications.map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800">
                  <button
                    onClick={() => onSelectTrainer(trainer)}
                    className="w-full py-2.5 bg-neutral-900 hover:bg-[#FF5500] text-white font-athletic font-bold text-xs tracking-wider rounded-lg transition-all flex items-center justify-center gap-1.5 border border-neutral-800 hover:border-[#FF5500]"
                  >
                    <span>CONSULT WITH COACH</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
