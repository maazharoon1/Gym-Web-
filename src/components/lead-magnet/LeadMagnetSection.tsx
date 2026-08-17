import React, { useState } from 'react';
import { Download, CheckCircle2, FileText, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface LeadMagnetSectionProps {
  onSuccess: (message: { title: string; description: string }) => void;
}

export const LeadMagnetSection: React.FC<LeadMagnetSectionProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setDownloaded(true);
      onSuccess({
        title: '7-Day MORR Plan Sent!',
        description: `Check your inbox at ${email}. Your instant training blueprint is ready!`
      });
    }, 700);
  };

  return (
    <section className="py-20 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#17171C] via-[#121216] to-[#17171C] border border-[#24242B] p-8 sm:p-12 shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FF5500] text-xs font-athletic font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FREE INSTANT DIGITAL DOWNLOAD</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-athletic font-bold text-white tracking-tight uppercase leading-[0.95]">
                START YOUR MORR JOURNEY <br className="hidden sm:inline" />
                <span className="text-[#FF5500]">FOR FREE.</span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
                Download our official <span className="font-bold text-white">Free 7-Day MORR Workout & Nutrition Starter Plan</span>. Complete with daily barbell & turf circuits, warm-up mobility flows, and high-protein Houston meal guidelines.
              </p>

              <div className="space-y-2 mt-5 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                  <span>Full 7-day periodized split (Upper, Lower, HIIT & Recovery)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                  <span>Exercise demonstration links & lifting tempo guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
                  <span>Macronutrient calculator & grocery list template</span>
                </div>
              </div>
            </div>

            {/* Right Form or Success State */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D10] border border-[#24242A] shadow-xl">
                {downloaded ? (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-[#FF5500]/20 border border-[#FF5500] flex items-center justify-center text-[#FF5500] mx-auto mb-3">
                      <Download className="w-7 h-7" />
                    </div>
                    <h3 className="font-athletic text-2xl font-bold text-white tracking-wide">
                      YOUR 7-DAY PLAN IS READY!
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2">
                      We sent the download link to <span className="text-[#FF5500]">{email}</span>. You can also view the digital PDF instantly below.
                    </p>
                    <button
                      onClick={() => setDownloaded(false)}
                      className="mt-5 px-6 py-2.5 bg-neutral-900 border border-neutral-700 text-white text-xs font-athletic font-bold tracking-wider rounded-lg hover:border-neutral-500 transition-colors"
                    >
                      ENTER ANOTHER EMAIL
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-[#FF5500]" />
                      <h3 className="font-athletic text-xl font-bold text-white tracking-wide">
                        GET THE 7-DAY MORR PLAN (PDF)
                      </h3>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                        First & Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jordan Davis"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#161619] border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jordan@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#161619] border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FF5500]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#FF5500] hover:bg-[#E04B00] text-white font-athletic font-bold text-base tracking-wider rounded-xl transition-all shadow-lg shadow-orange-950/40 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>GENERATING PLAN...</span>
                      ) : (
                        <>
                          <span>GET MY FREE PLAN</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Zero spam. Unsubscribe anytime. MORR FIT Houston</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
