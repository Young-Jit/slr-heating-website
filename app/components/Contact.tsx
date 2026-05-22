'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  CreditCard,
} from '@phosphor-icons/react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-copper text-sm font-semibold tracking-widest uppercase">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
              Get Your Free Estimate{' '}
              <span className="font-[family-name:var(--font-serif)] italic text-copper">
                Today
              </span>
            </h2>
            <p className="text-slate-light text-lg mb-8 leading-relaxed">
              Fill out the form and we&apos;ll contact you within 60 minutes during
              business hours. For emergencies, call us directly — we&apos;re
              available 24/7.
            </p>

            <div className="space-y-5">
              <a
                href="tel:8188234006"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center group-hover:bg-copper/15 transition-colors">
                  <Phone size={22} weight="fill" className="text-copper" />
                </div>
                <div>
                  <p className="text-navy font-semibold text-lg">(818) 823-4006</p>
                  <p className="text-slate-light text-sm">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </a>

              <a
                href="mailto:Ilanohaion85@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center group-hover:bg-copper/15 transition-colors">
                  <EnvelopeSimple size={22} weight="fill" className="text-copper" />
                </div>
                <div>
                  <p className="text-navy font-semibold">Ilanohaion85@gmail.com</p>
                  <p className="text-slate-light text-sm">Email us anytime</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                  <MapPin size={22} weight="fill" className="text-copper" />
                </div>
                <div>
                  <p className="text-navy font-semibold">Valley Village, CA 91607</p>
                  <p className="text-slate-light text-sm">
                    Serving Hollywood, LA, Burbank, Glendale & more
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                  <Clock size={22} weight="fill" className="text-copper" />
                </div>
                <div>
                  <p className="text-navy font-semibold">Mon–Sat: 7am – 8pm</p>
                  <p className="text-slate-light text-sm">
                    Emergency service available 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                  <CreditCard size={22} weight="fill" className="text-copper" />
                </div>
                <div>
                  <p className="text-navy font-semibold">Flexible Payment</p>
                  <p className="text-slate-light text-sm">
                    Credit cards, Zelle & Venmo accepted
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: ShieldCheck, label: 'Licensed & Insured' },
                { icon: ShieldCheck, label: 'Background Checked' },
                { icon: Star, label: '5-Star Rated' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-slate text-xs font-medium"
                >
                  <badge.icon size={14} weight="fill" className="text-copper" />
                  {badge.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div className="bg-navy border border-navy-light rounded-2xl p-6 md:p-8 shadow-xl shadow-navy/10">
              <h3 className="text-xl font-bold text-white mb-1">
                Request Your Free Estimate
              </h3>
              <p className="text-cream-dark/60 text-sm mb-6">
                We respond within 60 minutes · No obligation · 100% free
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-cream-dark/40 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper/50 transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-cream-dark/40 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper/50 transition-all"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-cream-dark/40 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper/50 transition-all"
                />

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

                <textarea
                  name="message"
                  placeholder="Describe the issue (optional)"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-cream-dark/40 focus:outline-none focus:ring-2 focus:ring-copper/50 focus:border-copper/50 transition-all resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-copper hover:bg-copper-light text-white font-bold rounded-full transition-all active:scale-[0.98] text-lg"
                >
                  Send My Free Estimate Request
                </button>

                <p className="text-xs text-cream-dark/40 text-center">
                  By submitting, you agree to be contacted by SLR Heating &
                  Cooling. We never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
