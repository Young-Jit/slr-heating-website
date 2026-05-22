'use client';

import { motion } from 'framer-motion';
import { Phone, Star, ShieldCheck, Clock, ArrowRight } from '@phosphor-icons/react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-white to-orange-50/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,115,75,0.06),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
                Same-Day Service
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-full text-copper text-sm font-medium">
                <Star size={14} weight="fill" />
                5.0 Stars · 90 Reviews
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] mb-6">
              AC Down in the{' '}
              <span className="font-[family-name:var(--font-serif)] italic text-copper">
                LA Heat?
              </span>
              <br />
              We&apos;ll Be There{' '}
              <span className="font-[family-name:var(--font-serif)] italic text-copper">
                Today.
              </span>
            </h1>

            <p className="text-lg text-slate-light max-w-lg mb-8 leading-relaxed">
              Certified technicians dispatched fast — same-day service, upfront
              pricing, and a 100% money-back guarantee. Serving Hollywood &
              Greater LA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-copper hover:bg-copper-light text-white font-semibold rounded-full transition-all active:scale-[0.98] text-lg shadow-lg shadow-copper/20"
              >
                Get Free Estimate
                <ArrowRight size={20} weight="bold" />
              </a>
              <a
                href="tel:8188234006"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-navy/15 hover:border-navy/30 text-navy font-semibold rounded-full transition-all"
              >
                <Phone size={20} weight="fill" className="text-copper" />
                (818) 823-4006
              </a>
            </div>

            <p className="text-sm text-slate-light/60">
              Most calls answered within 60 seconds · Technicians on-call now
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="bg-navy border border-navy-light rounded-2xl p-6 md:p-8 shadow-xl shadow-navy/10"
          >
            <h2 className="text-xl font-bold text-white mb-1">
              Request Your Free Estimate
            </h2>
            <p className="text-cream-dark/60 text-sm mb-6">
              We respond within 60 minutes · No obligation
            </p>

            <form
              action="https://formsubmit.co/Ilanohaion85@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Website Lead — SLR Heating & Cooling"
              />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://slrheatingncooling.com?submitted=true" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-cream-dark/40 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-cream-dark/40 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper/50 transition-all"
                />
              </div>
              <div>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-cream-dark/40 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper/50 transition-all [&:has(option:checked:not([value='']])]:text-white"
                >
                  <option value="" disabled>
                    Service Needed *
                  </option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="furnace-repair">Furnace / Heater Repair</option>
                  <option value="installation">New HVAC Installation</option>
                  <option value="maintenance">AC Maintenance / Tune-Up</option>
                  <option value="duct-cleaning">Duct Cleaning</option>
                  <option value="fireplace">Fireplace Cleaning</option>
                  <option value="dryer-vent">Dryer Vent Cleaning</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Describe the issue (optional)"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-cream-dark/40 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-copper hover:bg-copper-light text-white font-bold rounded-full transition-all active:scale-[0.98] text-lg"
              >
                Send My Free Estimate Request
              </button>
              <p className="text-xs text-cream-dark/40 text-center">
                By submitting, you agree to be contacted by SLR Heating & Cooling.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease }}
        className="relative border-t border-stone-200 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Star, label: '5.0 Google Rating', sub: '90+ verified reviews' },
              { icon: ShieldCheck, label: 'Licensed & Insured', sub: 'Background-checked techs' },
              { icon: Clock, label: '24/7 Emergency', sub: 'Same-day dispatch' },
              { icon: Phone, label: '100% Money-Back', sub: 'Satisfaction guaranteed' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} weight="fill" className="text-copper" />
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm">{item.label}</p>
                  <p className="text-slate-light/60 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
