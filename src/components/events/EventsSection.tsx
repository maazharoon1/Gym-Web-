import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { COMMUNITY_EVENTS } from '../../data/mockData';

interface EventsSectionProps {
  onRSVP: (eventTitle: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRSVP }) => {
  return (
    <section id="events" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
              HOUSTON COMMUNITY CALENDAR
            </span>
            <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-[0.95]">
              WHAT'S HAPPENING AT MORR?
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            From our outdoor Saturday DJ lifts and 3rd Ward school supply drives to lifting workshops—stay connected with the movement.
          </p>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITY_EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-[#111114] border border-[#24242A] hover:border-[#FF5500] transition-all flex flex-col justify-between shadow-xl"
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden bg-neutral-900">
                <img
                  src={event.image}
                  alt={event.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-black/30" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-[#FF5500] text-[10px] font-athletic font-bold tracking-wider uppercase border border-orange-500/30">
                    {event.category}
                  </span>
                  {event.freeEntry && (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                      FREE ENTRY
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic font-bold text-white tracking-wide group-hover:text-[#FF5500] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 my-3 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800">
                  <button
                    onClick={() => onRSVP(event.title)}
                    className="w-full py-2.5 bg-neutral-900 hover:bg-[#FF5500] text-white font-athletic font-bold text-xs tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 border border-neutral-800 hover:border-[#FF5500]"
                  >
                    <span>RSVP / SAVE SPOT</span>
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
