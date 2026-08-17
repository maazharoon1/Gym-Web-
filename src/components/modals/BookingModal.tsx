import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, MapPin, Sparkles, Dumbbell, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO, CLASSES_DATA, MEMBERSHIP_PLANS } from '../../data/mockData';
import { ClassItem, MembershipPlan } from '../../types';

export type ModalMode = 'free-pass' | 'class-booking' | 'pt-consultation' | 'membership' | 'compare-plans' | null;

interface BookingModalProps {
  mode: ModalMode;
  selectedClass?: ClassItem | null;
  selectedPlan?: MembershipPlan | null;
  onClose: () => void;
  onSuccess: (message: { title: string; description: string }) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  mode,
  selectedClass,
  selectedPlan,
  onClose,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (6am - 10am)',
    goal: 'Build Strength & Muscle',
    selectedClassId: selectedClass?.id || CLASSES_DATA[0].id,
    selectedPlanId: selectedPlan?.id || 'morr-flex-24',
    experienceLevel: 'Intermediate Lifter',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  if (!mode) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      
      let title = 'Booking Confirmed!';
      let desc = `We sent details to ${formData.email || 'your email'}. See you at 2715 Emancipation Ave!`;
      
      if (mode === 'free-pass') {
        title = 'Free Day Pass Activated!';
        desc = 'Your VIP 1st Workout QR code was generated. Show it at the front desk!';
      } else if (mode === 'membership') {
        title = 'Membership Setup Initiated!';
        desc = 'Welcome to MORR FIT! Front desk 24/7 keycard activation link sent.';
      } else if (mode === 'pt-consultation') {
        title = '1-on-1 Consultation Requested!';
        desc = 'Coach Marcus or Brianna will contact you within 24 hours to review your goals.';
      }

      onSuccess({ title, description: desc });
    }, 900);
  };

  const getModalTitle = () => {
    switch (mode) {
      case 'free-pass':
        return 'CLAIM YOUR FREE FIRST WORKOUT';
      case 'class-booking':
        return 'RESERVE YOUR CLASS SPOT';
      case 'pt-consultation':
        return 'BOOK YOUR 1-ON-1 COACHING CONSULTATION';
      case 'membership':
        return 'JOIN MORR FIT HOUSTON';
      case 'compare-plans':
        return 'COMPARE MEMBERSHIP TIERS';
      default:
        return 'MORR FIT HOUSTON';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#111114] border border-[#27272A] rounded-2xl p-6 sm:p-8 text-white shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Header Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent rounded-t-2xl" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-900 border border-neutral-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Compare Table Mode */}
          {mode === 'compare-plans' ? (
            <div className="mt-2">
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest text-[#FF5500] uppercase font-display">
                  Houston Gym Pricing
                </span>
                <h3 className="text-2xl sm:text-3xl font-athletic font-bold text-white tracking-wide mt-1">
                  COMPARE MEMBERSHIP TIERS
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  No hidden sign-up penalties, transparent Houston local fitness pricing.
                </p>
              </div>

              <div className="space-y-4">
                {MEMBERSHIP_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`p-5 rounded-xl border ${
                      plan.popular ? 'border-[#FF5500] bg-[#18181C]' : 'border-neutral-800 bg-[#131316]'
                    } transition-all`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-athletic text-xl text-white font-bold">{plan.name}</h4>
                          {plan.badge && (
                            <span className="px-2 py-0.5 text-[10px] font-bold bg-[#FF5500] text-white rounded">
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-400 mt-0.5">{plan.tagline}</p>
                        <p className="text-xs text-orange-400 font-medium mt-1">
                          ⏰ {plan.accessHours}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <div className="flex items-baseline sm:justify-end gap-1">
                          <span className="text-2xl sm:text-3xl font-athletic font-extrabold text-[#FF5500]">
                            {plan.priceDisplay || `$${plan.priceMonthly}`}
                          </span>
                          {!plan.priceDisplay?.includes('for 2') && (
                            <span className="text-xs text-neutral-400">/ month</span>
                          )}
                        </div>
                        {plan.signupFee && (
                          <span className="text-[10px] text-neutral-500 block">{plan.signupFee}</span>
                        )}
                        <span className="text-[10px] uppercase font-bold text-neutral-400 block mt-0.5">
                          {plan.commitment === '12-month' ? '12-Mo Lock In' : 'No Contract (Cancel Anytime)'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-800/80">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#FF5500] hover:bg-[#E04B00] text-white text-sm font-bold rounded-lg transition-colors font-athletic tracking-wider"
                >
                  GOT IT / CLOSE
                </button>
              </div>
            </div>
          ) : submittedSuccess ? (
            /* Success confirmation screen */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#FF5500]/20 border border-[#FF5500] text-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-athletic font-bold text-white tracking-wide">
                YOU'RE IN THE SYSTEM!
              </h3>
              <p className="text-neutral-300 text-sm max-w-md mx-auto mt-2">
                We've locked in your reservation. A confirmation email and SMS pass have been sent to{' '}
                <span className="text-[#FF5500] font-semibold">{formData.email || 'your email'}</span>.
              </p>

              <div className="my-6 p-4 rounded-xl bg-[#161619] border border-neutral-800 text-left max-w-md mx-auto space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF5500]" />
                  <span>2715 Emancipation Ave, Houston, TX 77004</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF5500]" />
                  <span>Bring clean training shoes, gym towel, and photo ID</span>
                </div>
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-[#FF5500]" />
                  <span>Free parking available on site & Emancipation Ave</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold tracking-wider rounded-xl transition-all"
              >
                RETURN TO MORR FIT
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {mode === 'free-pass' ? 'Limited Houston Guest Pass' : 'Instant Confirmation'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-athletic font-bold text-white tracking-wide">
                  {getModalTitle()}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Experience the energy and community at 2715 Emancipation Ave, Houston TX.
                </p>
              </div>

              <div className="space-y-4">
                {/* Specific context selector based on mode */}
                {mode === 'class-booking' && (
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Select Class
                    </label>
                    <select
                      value={formData.selectedClassId}
                      onChange={(e) => setFormData({ ...formData, selectedClassId: e.target.value })}
                      className="w-full bg-[#18181B] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5500]"
                    >
                      {CLASSES_DATA.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.duration} • {c.time} • Coach: {c.trainer})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {mode === 'membership' && (
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Selected Plan
                    </label>
                    <select
                      value={formData.selectedPlanId}
                      onChange={(e) => setFormData({ ...formData, selectedPlanId: e.target.value })}
                      className="w-full bg-[#18181B] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5500]"
                    >
                      {MEMBERSHIP_PLANS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} - ${p.priceMonthly}/mo ({p.accessHours})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {mode === 'pt-consultation' && (
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Primary Fitness Goal
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-[#18181B] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5500]"
                    >
                      <option value="Fat Loss & Conditioning">Fat Loss & Conditioning</option>
                      <option value="Powerlifting & Heavy Strength">Powerlifting & Heavy Strength</option>
                      <option value="Glute Hypertrophy & Recomposition">Glute Hypertrophy & Lower Body Focus</option>
                      <option value="Athletic Speed & Agility">Athletic Speed & Agility</option>
                      <option value="Post-Injury Mobility & Rehabilitation">Mobility & Injury Prevention</option>
                    </select>
                  </div>
                )}

                {/* Personal Information Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Johnson"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#18181B] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(832) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#18181B] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#18181B] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#18181B] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#18181B] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF5500]"
                    >
                      <option value="Early Morning (5am - 8am)">Early Morning (5am - 8am)</option>
                      <option value="Midday (11am - 2pm)">Midday (11am - 2pm)</option>
                      <option value="Evening (5pm - 8pm)">Evening (5pm - 8pm)</option>
                      <option value="Late Night / Weekend">Late Night / Weekend</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>No commitment required. 100% Houston community pride.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold text-lg tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-950/40 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        PROCESSING SECURE PASS...
                      </span>
                    ) : (
                      <>
                        {mode === 'free-pass' && 'CONFIRM & GET MY FREE PASS'}
                        {mode === 'class-booking' && 'LOCK IN MY SPOT'}
                        {mode === 'pt-consultation' && 'SCHEDULE COACHING CALL'}
                        {mode === 'membership' && 'CONTINUE TO REGISTRATION'}
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
