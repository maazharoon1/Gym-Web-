import React from 'react';
import { Instagram, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { INSTAGRAM_POSTS, BUSINESS_INFO } from '../../data/mockData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>27,000+ HOUSTONIANS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-athletic font-bold text-white tracking-tight uppercase leading-[0.95]">
              FOLLOW THE MOVEMENT.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold text-sm tracking-wider rounded-xl transition-all shadow-md shadow-orange-950/40 flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW @MORRFITHOUSTON</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Editorial Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#FF5500] transition-all block"
            >
              <img
                src={post.image}
                alt="MORR FIT Instagram Post"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3" />

              {/* Hover Stats */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="flex items-center gap-1.5 text-xs font-bold font-athletic tracking-wide text-white">
                  <Heart className="w-4 h-4 text-[#FF5500] fill-current" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold font-athletic tracking-wide text-white">
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
