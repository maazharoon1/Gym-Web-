import React from 'react';
import { ArrowRight, Calendar, Dumbbell, ShoppingBag, Flame, Sparkles } from 'lucide-react';
import { Hero } from '../hero/Hero';
import { QuickActions } from '../quick-actions/QuickActions';
import { WhyMorr } from '../why-morr/WhyMorr';
import { FreeTrialSection } from '../free-trial/FreeTrialSection';
import { MembershipsSection } from '../memberships/MembershipsSection';
import { ClassesSchedule } from '../classes/ClassesSchedule';
import { ResultsSection } from '../results/ResultsSection';
import { CommunitySection } from '../community/CommunitySection';
import { PersonalTrainingSection } from '../personal-training/PersonalTrainingSection';
import { ShopSection } from '../shop/ShopSection';
import { TestimonialsSection } from '../testimonials/TestimonialsSection';
import { EventsSection } from '../events/EventsSection';
import { InstagramSection } from '../instagram/InstagramSection';
import { LeadMagnetSection } from '../lead-magnet/LeadMagnetSection';
import { LocationSection } from '../location/LocationSection';
import { FinalCta } from '../cta/FinalCta';
import { ClassItem, MembershipPlan, ShopProduct } from '../../types';

interface HomePageProps {
  onOpenBooking: (mode: 'free-pass' | 'membership' | 'class-booking' | 'pt-consultation') => void;
  onBookClass: (classItem: ClassItem) => void;
  onSelectPlan: (plan: MembershipPlan) => void;
  onComparePlans: () => void;
  onAddToCart: (product: ShopProduct, size?: string) => void;
  onNavigateClasses: () => void;
  onNavigateTraining: () => void;
  onNavigateStore: () => void;
  onRSVPEvent: (title: string) => void;
  onLeadMagnetSuccess: (toast: { title: string; description: string; type?: 'success' | 'info' | 'error' }) => void;
  onLocationSendMessage: (toast: { title: string; description: string; type?: 'success' | 'info' | 'error' }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onBookClass,
  onSelectPlan,
  onComparePlans,
  onAddToCart,
  onNavigateClasses,
  onNavigateTraining,
  onNavigateStore,
  onRSVPEvent,
  onLeadMagnetSuccess,
  onLocationSendMessage
}) => {
  return (
    <div className="flex-grow">
      {/* 1. Cinematic Hero */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Quick Action Gateway Cards */}
      <QuickActions
        onOpenBooking={onOpenBooking}
        onNavigateClasses={onNavigateClasses}
        onNavigateTraining={onNavigateTraining}
        onNavigateStore={onNavigateStore}
        onOpenCart={onNavigateStore}
      />

      {/* 3. Why MORR FIT - 4 Pillars */}
      <WhyMorr />

      {/* 4. Free First Workout Pass Banner */}
      <FreeTrialSection onOpenFreePass={() => onOpenBooking('free-pass')} />

      {/* 5. Memberships & Verified Pricing */}
      <MembershipsSection
        onSelectPlan={onSelectPlan}
        onComparePlans={onComparePlans}
      />

      {/* 6. Classes Preview with Direct View-All Classes CTA */}
      <div className="relative">
        <ClassesSchedule onBookClass={onBookClass} />

        {/* Classes Dedicated Page Direct Banner CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="p-6 rounded-2xl bg-[#14141A] border border-[#24242A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FF5500]/15 flex items-center justify-center text-[#FF5500] shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-athletic font-bold text-white uppercase text-base">
                  WANT TO VIEW ALL CLASS FORMATS & PASS OPTIONS?
                </h4>
                <p className="text-xs text-neutral-400">
                  Explore drop-in rates, 10-class punch packs, instructor profiles, and yoga recovery.
                </p>
              </div>
            </div>
            <button
              onClick={onNavigateClasses}
              className="px-6 py-3 bg-[#FF5500] hover:bg-white text-black font-athletic font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shrink-0 shadow-md shadow-orange-950/30"
            >
              <span>OPEN FULL CLASSES PAGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 7. Real Results & Verified Body Transformations */}

      {/* 8. Community & Houston Culture */}
      <CommunitySection />

      {/* 9. 1-on-1 Personal Training Preview */}
      <div className="relative">
        <PersonalTrainingSection onBookConsultation={() => onOpenBooking('pt-consultation')} />

        {/* Training Dedicated Page Direct Banner CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="p-6 rounded-2xl bg-[#14141A] border border-[#24242A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FF5500]/15 flex items-center justify-center text-[#FF5500] shrink-0">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-athletic font-bold text-white uppercase text-base">
                  MEET OUR FULL COACHES ROSTER & TIERED PLANS
                </h4>
                <p className="text-xs text-neutral-400">
                  Browse trainer specialties, certifications, semi-private buddy rates, and free movement assessments.
                </p>
              </div>
            </div>
            <button
              onClick={onNavigateTraining}
              className="px-6 py-3 bg-[#FF5500] hover:bg-white text-black font-athletic font-black text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shrink-0 shadow-md shadow-orange-950/30"
            >
              <span>OPEN TRAINING PAGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>






      {/* 15. Houston Facility Location, Map & Contact Form */}
      <LocationSection onSendMessage={onLocationSendMessage} />

      {/* 16. Final Conversion Section */}
      <FinalCta onOpenBooking={onOpenBooking} />
    </div>
  );
};
