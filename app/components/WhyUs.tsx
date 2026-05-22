'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Lightning,
  CurrencyDollar,
  ShieldCheck,
  SmileyWink,
  Wrench,
  Broom,
} from '@phosphor-icons/react';

const ease = [0.16, 1, 0.3, 1];

const reasons = [
  {
    icon: Lightning,
    title: 'Same-Day Service',
    description:
      'HVAC emergencies can\'t wait. Our technicians are dispatched fast — most calls get same-day service.',
  },
  {
    icon: CurrencyDollar,
    title: 'Upfront Flat-Rate Pricing',
    description:
      'No surprises, no hidden fees. We quote the full price before any work begins — and we stick to it.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Fully Insured',
    description:
      'Every technician is certified, background-checked, and fully insured. Your home is in safe hands.',
  },
  {
    icon: SmileyWink,
    title: '100% Satisfaction Guarantee',
    description:
      'Not completely satisfied? We\'ll make it right or refund 100% of your money. No questions asked.',
  },
  {
    icon: Wrench,
    title: 'Expert Diagnostics',
    description:
      'We fix it right the first time. Our technicians carry advanced diagnostic tools and stock parts on every truck.',
  },
  {
    icon: Broom,
    title: 'Respectful & Clean',
    description:
      'We treat your home like our own. We clean up after every job and communicate every step of the way.',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-warm-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14"
        >
          <span className="text-copper text-sm font-semibold tracking-widest uppercase">
            Why Choose SLR
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3">
            We Don&apos;t Just Fix Systems —{' '}
            <br className="hidden md:block" />
            We{' '}
            <span className="font-[family-name:var(--font-serif)] italic text-copper">
              Earn Your Trust
            </span>
          </h2>
          <p className="text-navy/60 mt-4 max-w-2xl mx-auto text-lg">
            Hollywood homeowners choose SLR because we show up on time, charge
            fair prices, and stand behind every job.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4 group-hover:bg-copper/15 transition-colors">
                <reason.icon size={24} weight="duotone" className="text-copper" />
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">{reason.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
