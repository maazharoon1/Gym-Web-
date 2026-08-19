import React from 'react';
import { Heart, Users, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { COMMUNITY_EVENTS } from '../../data/mockData';

export const CommunitySection: React.FC = () => {
  const photos = [
    {
      title: 'Houston Block Party Lift & DJ Night',
      tag: 'CULTURE & MUSIC',
      image: '/src/assets/images/morr_community_1787007850135.jpg',
      span: 'md:col-span-2 md:row-span-2 h-[420px] md:h-[500px]'
    },
    {
      title: 'Back To School 3rd Ward Drive',
      tag: 'GIVING BACK',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-1 h-[240px]'
    },
    {
      title: 'Saturday Emancipation Ave Turf War',
      tag: 'OUTDOOR ATHLETICS',
      image: '/src/assets/images/FAPB.jpeg',
      span: 'md:col-span-1 h-[240px]'
    },
    {
      title: 'Sunday Recovery & Mobility Flow',
      tag: 'RESTORATION',
      image: '/src/assets/images/TGBG.jpeg',
      span: 'md:col-span-1 h-[240px]'
    },
    {
      title: 'Late Night Houston Iron Grind',
      tag: '24/7 DEDICATION',
      image: '/src/assets/images/WRNT.jpeg',
      span: 'md:col-span-2 h-[240px]'
    }
  ];

  return (
    <section id="community" className="py-24 bg-[#0A0A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF5500] uppercase font-display">
              THIRD WARD HOUSTON CULTURE
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-athletic font-bold text-white tracking-tight mt-2 uppercase leading-[0.95]">
              MORE THAN FITNESS. <br />
              <span className="text-[#FF5500]">WE BUILD COMMUNITY.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            MORR FIT lives at the intersection of Houston athletic grit, local neighborhood charity, and real human connection.
          </p>
        </div>

        {/* Editorial Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden bg-neutral-900 border border-[#24242A] hover:border-[#FF5500] transition-all duration-300 shadow-xl ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-80 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700 text-[#FF5500] text-[10px] font-athletic font-bold tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-athletic font-bold text-white tracking-wide leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-300 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>2715 Emancipation Ave, Houston TX</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-[#FF5500] group-hover:border-[#FF5500] transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
