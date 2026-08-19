import React from 'react';
import { Dumbbell, Flame, UserCheck, Smartphone, ShoppingBag, HeartPulse, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface QuickActionsProps {
  onOpenBooking: (mode: 'free-pass' | 'membership' | 'class-booking' | 'pt-consultation') => void;
  onOpenCart?: () => void;
  onNavigateClasses?: () => void;
  onNavigateTraining?: () => void;
  onNavigateStore?: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onOpenBooking,
  onNavigateClasses,
  onNavigateTraining,
  onNavigateStore
}) => {
  const cards = [
    {
      id: 'join-gym',
      title: 'JOIN THE GYM',
      subtitle: 'Memberships & 24/7 Access',
      description: 'Full keycard access, free weights up to 150 lbs, turf track, power racks, and private locker rooms on Emancipation Ave.',
      icon: Dumbbell,
      image: '/src/assets/images/AT1.jpeg',
      ctaText: 'EXPLORE PLANS',
      action: () => {
        const el = document.getElementById('memberships');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'group-classes',
      title: 'GROUP CLASSES',
      subtitle: 'HIIT, Bootcamp, Glutes & Strength',
      description: 'High-octane team workouts coached by Houston’s elite trainers. Master your lifts, sweat hard, and conquer daily workouts.',
      icon: Flame,
      image: '/src/assets/images/APBR.jpeg',
      ctaText: 'VIEW CLASS SCHEDULE',
      action: () => {
        if (onNavigateClasses) {
          onNavigateClasses();
        } else {
          const el = document.getElementById('classes');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'personal-training',
      title: 'PERSONAL TRAINING',
      subtitle: '1-on-1 Dedicated Coaching',
      description: 'Custom strength programming, body recomposition, movement analysis, and nutritional accountability built for your goals.',
      icon: UserCheck,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      ctaText: 'EXPLORE COACHING',
      action: () => {
        if (onNavigateTraining) {
          onNavigateTraining();
        } else {
          onOpenBooking('pt-consultation');
        }
      }
    },
    {
      id: 'train-online',
      title: 'TRAIN ONLINE',
      subtitle: 'Digital Workouts & Challenges',
      description: 'Access MORR programming from anywhere. Follow 30-day transformation challenges, video exercise tutorials, and weekly check-ins.',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      ctaText: 'EXPLORE DIGITAL',
      action: () => {
        if (onNavigateTraining) {
          onNavigateTraining();
        } else {
          const el = document.getElementById('online');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'shop-morr',
      title: 'SHOP MORR',
      subtitle: 'Apparel & Streetwear Gear',
      description: 'Heavyweight tees, drop-shoulder hoodies, foam trucker caps, insulated shakers, and heavy lifting accessories.',
      icon: ShoppingBag,
      image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/8213DBB3-3DAC-4E3B-A3E5-D8365C50912C.jpg?v=1759268104&width=1100',
      ctaText: 'SHOP MORR',
      action: () => {
        if (onNavigateStore) {
          onNavigateStore();
        } else {
          const el = document.getElementById('shop');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 'recover',
      title: 'RECOVER',
      subtitle: 'Yoga & Active Mobility',
      description: 'Athletic mobility flows, deep tissue release, breathwork, and restorative yoga designed to keep joints healthy and power high.',
      icon: HeartPulse,
      image: '/src/assets/images/morr_yoga_recovery_1787007863409.jpg',
      ctaText: 'EXPLORE RECOVERY',
      action: () => {
        if (onNavigateClasses) {
          onNavigateClasses();
        } else {
          const el = document.getElementById('recovery');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  ];

  return (
    <section id="quick-actions" className="py-20 bg-[#0A0A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF5500] uppercase font-display">
            CHOOSE YOUR DIRECTION
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-athletic font-bold text-white tracking-tight mt-2 uppercase">
            WHAT ARE YOU LOOKING FOR?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Whether you want 24/7 heavy lifting, high-intensity group classes, or dedicated 1-on-1 coaching—MORR FIT delivers.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={card.action}
                className="group relative rounded-2xl overflow-hidden bg-[#131317] border border-[#24242A] hover:border-[#FF5500] cursor-pointer transition-all duration-300 flex flex-col justify-between h-[360px] sm:h-[400px] shadow-lg hover:shadow-2xl hover:shadow-orange-950/20"
              >
                {/* Background Image Container with Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-40 contrast-110 group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D10] via-[#0D0D10]/80 to-black/40" />
                </div>

                {/* Top Badge & Icon */}
                <div className="relative z-10 p-6 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-black/60 border border-neutral-700/80 backdrop-blur-md flex items-center justify-center text-[#FF5500] group-hover:border-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white transition-all duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div className="w-9 h-9 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-[#FF5500] group-hover:border-[#FF5500] transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-6 pt-0">
                  <span className="text-[11px] font-bold tracking-widest text-[#FF5500] uppercase font-display">
                    {card.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-athletic font-bold text-white tracking-wide mt-1 group-hover:text-[#FF6A1A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-2 line-clamp-3 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-xs font-athletic font-bold tracking-wider text-white group-hover:text-[#FF5500] transition-colors">
                      {card.ctaText}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
