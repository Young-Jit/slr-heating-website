'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CurrencyDollar,
  CheckCircle,
  ArrowCounterClockwise,
  Broom,
  ShieldCheck,
} from '@phosphor-icons/react';

const ease = [0.16, 1, 0.3, 1];

const guarantees = [
  {
    icon: CurrencyDollar,
    title: 'Flat-Rate Quotes',
    subtitle: 'No Guesswork Pricing',
    description:
      'When we say "This is how much it is" — that\'s how much it is. Period. No surprise charges after the job.',
  },
  {
    icon: CheckCircle,
    title: 'Results Guaranteed',
    subtitle: '"It Will Work" Promise',
    description:
      'No excuses — just results. If we say we can fix it, we fix it. Your comfort is our commitment.',
  },
  {
    icon: ArrowCounterClockwise,
    title: '100% Money-Back',
    subtitle: 'Full Refund Policy',
    description:
      'Not satisfied? We\'ll make it right or remove the system and return 100% of your money. Zero risk.',
  },
  {
    icon: Broom,
    title: 'Clean Job Sites',
    subtitle: 'We Respect Your Home',
    description:
      'If we dirty it, we clean it. If we damage it, we fix it. We leave your home exactly as we found it — or better.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted Professionals',
    subtitle: 'Safe & Secure Service',
    description:
      'Background-checked, licensed technicians in your home. Your safety and peace of mind are non-negotiable.',
  },
];

export default function Guarantees() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="guarantees" className="py-20 md:py-28 bg-warm-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14"
        >
          <span className="text-copper text-sm font-semibold tracking-widest uppercase">
            Our Guarantees
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3">
            We Back Every Job With{' '}
            <span className="font-[family-name:var(--font-serif)] italic text-copper">
              Our Word
            </span>
          </h2>
          <p className="text-navy/60 mt-4 max-w-2xl mx-auto text-lg">
            These aren&apos;t just policies — they&apos;re the principles we&apos;ve built our
            reputation on. Every technician, every job, every time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className={`group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300 ${
                i >= 3 ? 'lg:col-span-1 sm:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-4 group-hover:bg-copper/15 transition-colors">
                <g.icon size={24} weight="duotone" className="text-copper" />
              </div>
              <p className="text-copper text-xs font-semibold tracking-widest uppercase mb-1">
                {g.subtitle}
              </p>
              <h3 className="text-navy font-bold text-lg mb-2">{g.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                {g.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
