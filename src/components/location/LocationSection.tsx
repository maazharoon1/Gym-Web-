import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, Car } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../../data/mockData';

interface LocationSectionProps {
  onSendMessage: (msg: { title: string; description: string }) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onSendMessage }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Membership & 24/7 Access',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      onSendMessage({
        title: 'Message Received!',
        description: 'The MORR FIT front desk team on Emancipation Ave will get back to you shortly.'
      });
    }, 600);
  };

  return (
    <section id="location" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-3 mb-3 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF6321]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80">
                THIRD WARD • HOUSTON, TX
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-1 leading-[0.9]">
              FIND <span className="text-[#FF6321]">MORR.</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm sm:text-base max-w-md">
            Located on historic Emancipation Ave. State-of-the-art training facility with convenient parking and 24/7 member keycard entry.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Information & Map Preview */}
          <div className="lg:col-span-6 space-y-6">
            {/* Info Card */}
            <div className="bg-white/5 border-l-4 border-[#FF6321] border-y border-r border-white/10 p-6 sm:p-8">
              <span className="text-[10px] uppercase font-bold text-[#FF6321] tracking-widest mb-1 block">
                HEADQUARTERS & GYM
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                {BUSINESS_INFO.name}
              </h3>

              <div className="space-y-4 mt-6 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6321] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">{BUSINESS_INFO.address}</strong>
                    <span className="text-white/60">{BUSINESS_INFO.cityStateZip}</span>
                    <span className="block text-xs text-[#FF6321] font-medium mt-0.5">
                      Historic Third Ward / Emancipation Ave District
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FF6321] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Direct Phone</strong>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-white/70 hover:text-[#FF6321] font-mono transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FF6321] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Email Inquiries</strong>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-white/70 hover:text-[#FF6321] transition-colors"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <Clock className="w-5 h-5 text-[#FF6321] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Facility Operating Hours</strong>
                    <p className="text-xs text-white/70 mt-0.5">
                      <span className="text-[#FF6321] font-bold">Members:</span> 24/7/365 Keycard Access
                    </p>
                    <p className="text-xs text-white/50 mt-0.5">
                      <span className="text-white font-semibold">Staffed Front Desk:</span> {BUSINESS_INFO.hours.staffed}
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FF6321] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all inline-flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS (GOOGLE MAPS)</span>
                </a>

                <div className="flex items-center gap-1.5 text-xs text-white/50">
                  <Car className="w-4 h-4 text-[#FF6321]" />
                  <span>Free On-Site & Street Parking</span>
                </div>
              </div>
            </div>

            {/* Embedded Visual Interactive Map Card */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 h-60 bg-neutral-900 group">
              <iframe
                title="MORR FIT Houston Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.0883832103444!2d-95.36402482381283!3d29.73663673322129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf5e2b4f9a03%3A0x897a87e5eb1d2797!2s2715%20Emancipation%20Ave%2C%20Houston%2C%20TX%2077004!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#FF6321]" />
                <span>2715 EMANCIPATION AVE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact & Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8">
              <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1 block">
                DIRECT INQUIRY
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                SEND US A MESSAGE
              </h3>
              <p className="text-xs text-white/60 mb-6">
                Have questions about corporate memberships, trainer availability, or visiting Houston? Reach out directly.
              </p>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-[#FF6321]/20 border border-[#FF6321] text-[#FF6321] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-black uppercase text-white tracking-tight">
                    MESSAGE RECEIVED!
                  </h4>
                  <p className="text-xs text-white/60 mt-1 max-w-sm mx-auto">
                    Thanks for contacting MORR FIT. A team member will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-5 px-6 py-2 bg-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-white/70 tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6321] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase font-bold text-white/70 tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6321] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-bold text-white/70 tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(832) 000-0000"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6321] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-white/70 tracking-wider mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={contactForm.inquiryType}
                      onChange={(e) => setContactForm({ ...contactForm, inquiryType: e.target.value })}
                      className="w-full bg-black/80 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6321] transition-colors"
                    >
                      <option value="Membership & 24/7 Access">Membership & 24/7 Keycard Access</option>
                      <option value="Group Classes & Schedule">Group Classes (HIIT, Glutes, Bootcamp)</option>
                      <option value="1-on-1 Personal Training">1-on-1 Personal Training Consultation</option>
                      <option value="Event Space & Community">Community Events & Collaborations</option>
                      <option value="General Question">General Question / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-white/70 tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us what you're looking for or your current fitness goals..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6321] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 bg-[#FF6321] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>SENDING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY TO MORR FIT</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
