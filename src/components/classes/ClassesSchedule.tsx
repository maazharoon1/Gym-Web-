import React, { useState } from 'react';
import { Clock, User, Flame, Calendar, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLASSES_DATA } from '../../data/mockData';
import { ClassItem } from '../../types';

interface ClassesScheduleProps {
  onBookClass: (classItem: ClassItem) => void;
}

export const ClassesSchedule: React.FC<ClassesScheduleProps> = ({ onBookClass }) => {
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const days = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const categories = ['All', 'HIIT', 'Glutes', 'Bootcamp', 'Strength', 'Yoga', 'Conditioning'];

  const filteredClasses = CLASSES_DATA.filter((item) => {
    const matchesDay = selectedDay === 'All' || item.days.includes(selectedDay as any);
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesDay && matchesCat;
  });

  return (
    <section id="classes" className="py-24 bg-[#0A0A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
              HIGH-ENERGY GROUP TRAINING
            </span>
            <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-tight">
              FIND YOUR CLASS.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            All classes are led by certified head coaches. Scalable for all fitness levels from beginners to competitive athletes.
          </p>
        </div>

        {/* Day Filters */}
        <div className="mb-6">
          <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mr-2 font-display shrink-0 hidden sm:inline">
              DAY:
            </span>
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-xl text-xs font-athletic font-bold tracking-wider shrink-0 transition-all ${
                  selectedDay === day
                    ? 'bg-[#FF5500] text-white shadow-md'
                    : 'bg-[#141418] text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {day === 'All' ? 'ALL DAYS' : day}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mr-2 font-display shrink-0 hidden sm:inline">
              TYPE:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide shrink-0 transition-all ${
                  selectedCategory === cat
                    ? 'bg-neutral-200 text-black font-bold'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-[#121216] border border-[#222227] hover:border-[#FF5500]/60 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[#FF5500] text-[10px] font-athletic font-bold uppercase tracking-wider border border-orange-500/30">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white text-[10px] font-mono">
                      {item.duration}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                      {item.spotsLeft} SPOTS LEFT
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-athletic font-bold text-white tracking-wide group-hover:text-[#FF5500] transition-colors">
                      {item.name}
                    </h3>

                    {/* Schedule Metadata */}
                    <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-neutral-300">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#FF5500]" />
                        <span>{item.trainer}</span>
                      </div>
                    </div>

                    {/* Day Schedule Pills */}
                    <div className="flex items-center gap-1 mt-3">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => {
                        const isActive = item.days.includes(d as any);
                        return (
                          <span
                            key={d}
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              isActive
                                ? 'bg-[#FF5500]/20 text-[#FF5500] border border-orange-500/30'
                                : 'text-neutral-600 bg-neutral-900'
                            }`}
                          >
                            {d[0]}
                          </span>
                        );
                      })}
                    </div>

                    <p className="text-xs text-neutral-400 mt-3 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="mt-6 pt-4 border-t border-neutral-800/80">
                    <button
                      onClick={() => onBookClass(item)}
                      className="w-full py-3 bg-[#1A1A20] hover:bg-[#FF5500] text-white hover:text-white font-athletic font-bold text-xs tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 border border-neutral-700 hover:border-[#FF5500] shadow-sm"
                    >
                      <span>BOOK THIS CLASS</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
